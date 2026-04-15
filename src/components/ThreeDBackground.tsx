"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export const ThreeDBackground = () => {
    const count = 1000;
    const mesh = useRef<THREE.InstancedMesh>(null);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            // distribute them in a wider cylinder or plane
            const r = 20 + Math.random() * 20;
            const theta = Math.random() * Math.PI * 2;
            const x = r * Math.cos(theta);
            const y = (Math.random() - 0.5) * 40;
            const z = r * Math.sin(theta) - 10;

            const speed = Math.random() * 0.05 + 0.01;
            const offset = Math.random() * Math.PI * 2;
            temp.push({ x, y, z, speed, offset });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        if (!mesh.current) return;

        const time = state.clock.getElapsedTime();

        particles.forEach((particle, i) => {
            let { x, y, z, speed, offset } = particle;

            // Gentle floating motion
            dummy.position.set(
                x + Math.sin(time * speed + offset) * 3,
                y + Math.cos(time * speed * 0.5 + offset) * 3,
                z
            );

            const scale = (Math.sin(time * speed * 2 + offset) + 1.5) * 0.5;
            dummy.scale.set(scale, scale, scale);

            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });

        mesh.current.instanceMatrix.needsUpdate = true;

        // Slow rotation of the whole group
        mesh.current.rotation.y = time * 0.02;
    });

    return (
        <>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 5]} intensity={3} color="#10b981" />
            <directionalLight position={[-10, -10, -5]} intensity={3} color="#06b6d4" />

            <instancedMesh ref={mesh} args={[undefined, undefined, count]} position={[0, 0, -15]}>
                <sphereGeometry args={[0.06, 8, 8]} />
                <meshPhysicalMaterial
                    color="#94a3b8"
                    transparent
                    opacity={0.6}
                    roughness={0.1}
                    metalness={0.5}
                />
            </instancedMesh>
        </>
    );
};
