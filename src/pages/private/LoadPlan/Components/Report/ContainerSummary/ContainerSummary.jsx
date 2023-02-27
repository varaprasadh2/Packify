import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Grid, Plane } from '@react-three/drei';

import "./ContainerSummary.css";

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (mesh.current.rotation.x += delta))
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >
            <boxGeometry args={props.size} />
            <meshStandardMaterial color={hovered ? 'white' : props.color}/>
        </mesh>
    )
}

const renderItem = (item) => {
    const [x, y, z] = item.position;
    return (
        <Box
            position={[x + item.width / 2, y + item.height / 2, z + item.depth / 2]}
            size={[item.width, item.height, item.depth]}
            color={item.data.color}
        />
    );
}

export default function ContainerSummary({ data }){
    const { bin, totalContainers, currentContainerIndex } = data;

    return (
        <div style={{marginTop: '1rem'}}>
            {/* <div style={{ marginBottom: '20px' }}>Container {currentContainerIndex} of {totalContainers}</div> */}
            <div style={{height: '500px',background:'#004baf'}}>
                <Canvas>
                    <PerspectiveCamera makeDefault position={[50, 50,50]}/>
                    <OrbitControls />
                    <ambientLight intensity={0.5} />
                    <mesh position={[bin.width / 2, bin.height / 2, bin.depth / 2]}>
                        <boxGeometry args={[bin.width, bin.height, bin.depth]} />
                        <meshStandardMaterial color={'orange'} transparent opacity={0.2} />
                    </mesh>
                    <pointLight position={[50, 50, 0]} args={['red', 1, 100]} />
                    {
                        bin.items.map(renderItem)
                    }
                    <axesHelper />
                    <Grid infiniteGrid />
                </Canvas>
            </div>
            <div style={{display:'flex',flexDirection:'row',marginTop:'25px'}}>
                <div className='stat'>
                    <div className='statLable'>Dimensions</div>
                    <div className='statValue'>{`${data.width}x${data.height}x${data.depth}[cm]`}</div>
                </div>
                <div className='stat'>
                    <div className='statLable'>Container Volume</div>
                    <div className='statValue'>{data.volume} cm<sup>3</sup> </div>
                </div>
                <div className='stat'>
                    <div className='statLable'>Used Volume</div>
                    <div className='statValue'>{data.usedVolume} cm<sup>3</sup> </div>
                </div>
                <div className='stat'>
                    <div className='statLable'>Weight</div>
                    <div className='statValue'>{data.itemsWeight} kg</div>
                </div>
                <div className='stat'>
                    <div className='statLable'>Net Weight</div>
                    <div className='statValue'>{data.netWeight} kg</div>
                </div>
            </div>
        </div>
    )
}