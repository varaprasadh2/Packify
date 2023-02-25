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

    console.log("DEBUG PACKER", {packer});

}