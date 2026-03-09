"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { MeshDistortMaterial, Sphere, Icosahedron } from "@react-three/drei";

export const CoreEngine3D = () => {
    const groupRef = useRef<THREE.Group>(null);
    const ring1Ref = useRef<THREE.Mesh>(null);
    const ring2Ref = useRef<THREE.Mesh>(null);
    const ring3Ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (groupRef.current) {
            groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
        }

        if (ring1Ref.current) {
            ring1Ref.current.rotation.x = time * 0.2;
            ring1Ref.current.rotation.y = time * 0.3;
        }

        if (ring2Ref.current) {
            ring2Ref.current.rotation.x = time * -0.15;
            ring2Ref.current.rotation.y = time * 0.4;
        }

        if (ring3Ref.current) {
            ring3Ref.current.rotation.z = time * 0.5;
            ring3Ref.current.rotation.y = time * -0.2;
        }
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 10, 5]} intensity={3} color="#06b6d4" />
            <directionalLight position={[-5, -10, -5]} intensity={2} color="#10b981" />
            <pointLight position={[0, 0, 0]} intensity={5} color="#ffffff" distance={10} />

            {/* Central Distorted Core */}
            <Sphere args={[1, 64, 64]} scale={1.2}>
                <MeshDistortMaterial
                    color="#0891b2" // cyan-600
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={0.8}
                    roughness={0.1}
                    distort={0.4}
                    speed={2}
                    transparent
                    opacity={0.8}
                />
            </Sphere>

            {/* Inner Geometry Structure */}
            <Icosahedron args={[0.9, 0]}>
                <meshPhysicalMaterial
                    color="#06b6d4" // cyan-500
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </Icosahedron>

            {/* Orbiting Rings */}
            <mesh ref={ring1Ref}>
                <torusGeometry args={[2.2, 0.02, 16, 100]} />
                <meshStandardMaterial color="#34d399" transparent opacity={0.6} />
            </mesh>

            <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0, 0]}>
                <torusGeometry args={[2.8, 0.01, 16, 100]} />
                <meshStandardMaterial color="#94a3b8" transparent opacity={0.4} />
            </mesh>

            <mesh ref={ring3Ref} rotation={[0, Math.PI / 3, 0]}>
                <torusGeometry args={[3.5, 0.04, 16, 100]} />
                <meshStandardMaterial color="#0ea5e9" transparent opacity={0.2} />
            </mesh>

            {/* Outer dotted/dashed rings can be represented by points or wireframe torus */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[4, 0.01, 16, 64]} />
                <meshBasicMaterial color="#cbd5e1" wireframe transparent opacity={0.3} />
            </mesh>
        </group>
    );
};
