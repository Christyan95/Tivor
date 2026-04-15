"use client";

import { Canvas } from "@react-three/fiber";
import { CoreEngine3D } from "./CoreEngine3D";

export default function TechCanvas() {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{ alpha: true, antialias: true }}
            dpr={[1, 2]}
        >
            <CoreEngine3D />
        </Canvas>
    );
}
