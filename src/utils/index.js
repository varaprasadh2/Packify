import * as BinPacking from 'bp3d';

export const isNumeric = (digit) => !isNaN(digit);

export const packBins = ({ items,containers }) => {
    const Item = BinPacking.Item;
    const Bin = BinPacking.Bin;
    const Packer = BinPacking.Packer;

    // init optimizer
    let packer = new Packer();

    // prepare overall bins and items unwrapping quantity with in each container/item;
    const packerContext = {
        bins: [],
        items: [],
    }

    containers.forEach(container => {
        for (let i=0;i<container.quantity; i++) {
            const bin = new Bin(container.id, parseInt(container.width), parseInt(container.height), parseInt(container.depth), parseInt(container.maxWeight));
            packerContext.bins.push(bin);
            packer.addBin(bin);
        }
    });
    // now 
    items.forEach(item => {
        for(let i=0; i<item.quantity; i++) {
            const packerItem = new Item(item.id, parseInt(item.width), parseInt(item.height), parseInt(item.depth), parseInt(item.weight));
            packerContext.items.push(packerItem);
            packer.addItem(packerItem);
        }
    });

    packer.pack();

    const itemsPacked = packer.bins.reduce((count, bin) => count + bin.items.length, 0);
    const itemsNotPacked = packerContext.items.length - itemsPacked;
    const totalVolume = packerContext.bins.reduce((sum, bin) => sum + (bin.width * bin.height * bin.depth), 0);
    const usedVolume = packer.bins
                        .reduce((items, bin) => [...items, ...bin.items], [])
                        .reduce((vol, item) => vol + (item.width * item.height * item.depth), 0);
    const weight = packer.bins
        .reduce((items, bin) => [...items, ...bin.items], [])
        .reduce((w, i) => w + i.weight, 0);
    const containerWeight = packer.bins.reduce((sum, bin) => {
        const id = bin.name;
        const container = containers.find(c => c.id === id);
        return sum +  parseInt(container.weight);
    }, 0);
    const packedItemIds = new Set();
    const packedItems = packer.bins
        .reduce((items, bin) => [...items, ...bin.items], []).map(item => {
            const id = item.name;
            return items.find(i => i.id ==id);
        }).reduce((group, item) => {
            packedItemIds.add(item.id);
            if (!group[item.id]) {
                group[item.id] = {...item, count: 0 };
            }
            group[item.id].count +=1;
            return group
        }, {});
       const itemsNotPackedList = items.map(item => {
            const usedCount = packedItems[item.id].count | 0;
            const res = {
                ...item,
                count: item.quantity - usedCount
            }
            return res;
       }).filter(i => i.count > 1);

        const result = {
            overallSummery: {
                itemsPacked: itemsPacked,
                itemsNotPacked: itemsNotPacked,
                totalVolume: totalVolume,
                usedVolume: usedVolume,
                weight: containerWeight + weight,
                netWeight: weight,
            },
            itemsPacked: Object.values(packedItems),
            itemsNotPacked: itemsNotPackedList,
            containers: [],
            packer,
        };
    return result;

}