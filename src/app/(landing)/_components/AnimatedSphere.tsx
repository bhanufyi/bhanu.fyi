"use client";

import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import React, { useRef, Suspense } from "react";
import type * as THREE from "three";

function SphereBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2} ref={meshRef}>
      <MeshDistortMaterial
        color="#ff7b00"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
}

export const AnimatedSphere = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-4xl font-bold"
      >
        Explore My World
      </motion.h2>
      <div className="h-[400px] w-full">
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <SphereBlob />
          </Suspense>
        </Canvas>
      </div>
    </div>
  </section>
);
