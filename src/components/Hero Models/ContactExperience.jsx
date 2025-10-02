import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      {/* Neutral soft ambient light */}
      <ambientLight intensity={0.6} color="#f5f5f5" />

      {/* Main sunlight / ceiling light */}
      <directionalLight
        position={[5, 8, 5]}
        castShadow
        intensity={2.5}
        color="#fff8e7"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Screen glow */}
      <pointLight position={[0, 1.5, -1.5]} intensity={1.2} color="#60a5fa" />

      {/* Fill light to soften shadows */}
      <pointLight position={[-3, 2, 2]} intensity={0.8} color="#e5e7eb" />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Floor (light gray so shadows are visible) */}
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>

      {/* Optional back wall */}
      <mesh position={[0, 1, -10]} receiveShadow>
        <planeGeometry args={[30, 15]} />
        <meshStandardMaterial color="#f9fafb" />
      </mesh>

      {/* Computer model */}
      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
