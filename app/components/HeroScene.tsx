"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";

function FloatingHeart() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#ff4fd8"
          emissive="#ff4fd8"
          emissiveIntensity={2}
        />
      </mesh>
    </Float>
  );
}

const HeroScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.5} />

        <directionalLight position={[2, 2, 2]} intensity={2} />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <FloatingHeart />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
