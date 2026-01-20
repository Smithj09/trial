
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

const SunSphere = () => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      <Sphere ref={ref} args={[2.5, 64, 64]}>
        <MeshDistortMaterial
          color="#FFCC00"
          emissive="#FFD700"
          emissiveIntensity={0.5}
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <pointLight position={[0, 0, 0]} intensity={2} color="#FFD700" />
    </group>
  );
};

const OrbitingPanel = ({ radius, speed, offset }: { radius: number, speed: number, offset: number }) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime() * speed + offset;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 0.5) * 2;
      ref.current.rotation.y = -t;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[1, 0.05, 1.5]} />
        <meshStandardMaterial color="#002D5B" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Grid pattern on panel */}
      <mesh position={[0, 0.03, 0]}>
        <planeGeometry args={[0.9, 1.4]} />
        <meshBasicMaterial color="#4A90E2" wireframe />
      </mesh>
    </group>
  );
}

export const SolarScene: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 5, 12], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <SunSphere />
        </Float>
        
        <OrbitingPanel radius={6} speed={0.5} offset={0} />
        <OrbitingPanel radius={7} speed={0.4} offset={Math.PI * 0.6} />
        <OrbitingPanel radius={6.5} speed={0.6} offset={Math.PI * 1.3} />

        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};
