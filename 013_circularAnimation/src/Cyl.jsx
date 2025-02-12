import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

function Cyl() {
  const tex = useTexture("./assets/image.jpg"); // Ensure the path is correct

  return (
    <mesh>
      <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
      <meshStandardMaterial tex transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

export default Cyl;
