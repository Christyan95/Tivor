"use client";

import { Canvas } from "@react-three/fiber";
import { ThreeDBackground } from "./ThreeDBackground";

export default function HeroCanvas() {
    return (
        <Canvas
            camera={{ position: [0, 0, 15], fov: 75 }}
            gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            dpr={[1, 2]}
        >
            <ThreeDBackground />
        </Canvas>
    );
}
