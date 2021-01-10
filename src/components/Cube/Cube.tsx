import React,  { useRef, useState} from 'react'
import './Cube.css'
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from "three";

const GeoShape = (props:any) => {

  const mesh = useRef<THREE.Mesh>();

  const [hovered, setHover] = useState<boolean>(false);
  const [active, setActive]= useState<boolean>(false)

  useFrame(() => {
    if (mesh.current !== undefined) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    }
  })

  return(
    <mesh 
      castShadow
      {...props}
      ref={mesh} 

      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
        <boxBufferGeometry 
          attach='geometry' 
          args={[2,.5,2]}/>
        <meshStandardMaterial 
        attach='material' 
        color={hovered ? 'hotpink' : 'orange'}
        roughness={0.1}
        metalness={0.1}
        />
    </mesh>
  )
}

function Scene(){
  return(
    <>
      <ambientLight/>
      <pointLight intensity={1} position={[-1, -2, 1]} castShadow/>
      <GeoShape   
        rotation={[10, 10, 0]} 
        position={[0 ,0 ,0]} 
        color='#ddb801'
        
        />

      <GeoShape  
       rotation={[10, 10, 0]} 
        position={[0 ,1 , 0]} 
        color='pink'/>

      <GeoShape  
       rotation={[10, 10, 0]} 
        position={[0 ,2 ,0]} 
        color='aquamarine'/>
    </>
  )
}

export const Cube = () => {
  return (
    <div className='loading'>
      <Canvas >
        <Scene />
      </Canvas>
    </div>
  )
}
