import { useRef } from "react";
import "./styles.css";
import { Canvas } from "@react-three/fiber";

export default function App() {
  function Box(props) {
    const ref = useRef();

    return (
      <mesh {...props}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    );
  }

  return (
    <div className="App">
      <h1> hello </h1>
      <Canvas style={{ width: "400px" }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[4.2, 0, 0]} />
        <Box position={[-4.2, 0, 0]} />
        <Box position={[4.2, 0, 0]} />
      </Canvas>
    </div>
  );
}
