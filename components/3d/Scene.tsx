"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial
                    color="#C3F234"
                    roughness={0.1}
                    metalness={0.8}
                    envMapIntensity={2}
                />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <FloatingShape />

                <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
