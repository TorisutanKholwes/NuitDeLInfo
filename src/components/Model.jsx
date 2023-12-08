import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import earth from '../assets/resources/earth2.glb';

import { useRef, useState } from 'react'

import { useFrame } from "@react-three/fiber";
import { Physics, useSphere } from "@react-three/cannon";
import { EffectComposer, N8AO, SMAA, Bloom, ChromaticAberration } from "@react-three/postprocessing";

import { BlurPass, Resizer, KernelSize, Resolution, BlendFunction } from 'postprocessing'

import "../assets/css/model.scss"


const cameraSettings = {
  position: [0, 0, 500],
  fov: 35,
};

const spotLightSettings = {
  intensity: 1,
  angle: 0.2,
  penumbra: 1,
  position: [30, 30, 30],
  castShadow: true,
  shadowMapSize: [512, 512],
};

const N8AOSettings = {
  color: "black",
  aoRadius: 2,
  intensity: 1,
  aoSamples: 6,
  denoiseSamples: 4,
};

function Earth() {
  const gltf = useLoader(GLTFLoader, earth)
  const ref = useRef()


  let speed = Math.random() * 15

  useFrame((state, delta) => (ref.current.rotation.y += 20 * delta))

  return (
    <primitive object={gltf.scene} ref={ref} position={[0, 0, 0]} children-0-castShadow={true} />
  )
}

export default function Model() {

  return (
    <div id='earth'>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} camera={cameraSettings}>
        <directionalLight position={[3.3, 1.0, 4.4]} castShadow={true} intensity={Math.PI} />
        <spotLight {...spotLightSettings} />
        <EffectComposer disableNormalPass multisampling={0}>
          <Earth />
        </EffectComposer>
          {/* <OrbitControls target={[0, 1, 0]} /> */}
        {/* <Stats /> */}
      </Canvas>
    </div>
  )
}