import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from 'react-three-fiber'
import './styles.css'

function Thing() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.z += .02
    ))
  return (
    <mesh
      ref={ref}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}>
      <planeBufferGeometry attach="geometry" args={[1.8, 1]} />
      <meshBasicMaterial attach="material" color="red" opacity={1.0} transparent />
    </mesh>
  )
}

function Thing2() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.z += .12
    ))
  return (
    <mesh
      ref={ref}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}>
      <planeBufferGeometry attach="geometry" args={[3.0, 1]} />
      <meshBasicMaterial attach="material" color="yellow" opacity={1.0} transparent />
    </mesh>
  )
}

ReactDOM.render(
  <Canvas>
    <Thing />
    <Thing2 />
  </Canvas>,
  document.getElementById('root')
)
