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
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={props.size} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

const renderItem = (item) => {
    const [x, y, z] = item.position;
    console.log("rendering", item);
    return (
        <Box position={[x + item.width / 2, y + item.height / 2, z + item.depth / 2]} size={[item.width, item.height, item.depth]} />
    );
}

export default function ContainerSummary({}){
    const bin = {
        "name": "1677328376929",
        "width": 10,
        "height": 10,
        "depth": 30,
        "maxWeight": 100,
        "items": [
            {
                "name": "1677328376929",
                "width": 2,
                "height": 2,
                "depth": 2,
                "weight": 5,
                "rotationType": 0,
                "position": [
                    0,
                    0,
                    0
                ]
            },
            {
                "name": "1677328376929",
                "width": 2,
                "height": 2,
                "depth": 2,
                "weight": 5,
                "rotationType": 0,
                "position": [
                    2,
                    0,
                    0
                ]
            },
            {
                "name": "1677328376929",
                "width": 2,
                "height": 2,
                "depth": 2,
                "weight": 5,
                "rotationType": 0,
                "position": [
                    4,
                    0,
                    0
                ]
            },
            {
                "name": "1677328376929",
                "width": 2,
                "height": 2,
                "depth": 2,
                "weight": 5,
                "rotationType": 0,
                "position": [
                    6,
                    0,
                    0
                ]
            },
            {
                "name": "1677328596333",
                "width": 5,
                "height": 5,
                "depth": 5,
                "weight": 5,
                "rotationType": 0,
                "position": [
                    0,
                    2,
                    0
                ]
            },
            {
                "name": "1677328616319",
                "width": 2,
                "height": 2,
                "depth": 4,
                "weight": 5,
                "rotationType": 0,
                "position": [
                    8,
                    0,
                    0
                ]
            }
        ]
    }

    return (
        <div>
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <mesh position={[bin.width / 2, bin.height / 2, bin.depth / 2]}>
                    <boxGeometry args={[bin.width, bin.height, bin.depth]} />
                    <meshStandardMaterial color={'orange'} transparent opacity={0.2} />
                </mesh>
                <pointLight position={[2, 2, 2]} args={['red', 1, 100]} />
                {
                    bin.items.map(renderItem)
                }
                <axesHelper />
                <Grid infiniteGrid />
            </Canvas>
        </div>
    )
}