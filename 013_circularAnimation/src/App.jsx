import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import "./style.css";

function App() {
  return (
    <Canvas camera={{ fov: 35 }}>
      <OrbitControls />
      <ambientLight />
      <Cyl />
    </Canvas>
  );
}

export default App;
