import { Suspense } from "react";
import "./styles.css";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Background from "./components/Background";
import TextSection from "./components/TextSection";

import Box from "./components/Box";
import AnimatedSphere from "./components/AnimatedSphere";
import Iphone from "./components/Iphone";

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas clasName="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
  }
`;
