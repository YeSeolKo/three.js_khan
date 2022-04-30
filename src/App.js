import { useEffect, useState, useRef } from "react";
import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";

export default function App() {
  function Box(props) {
    const ref = useRef();

    const [hovered, sethover] = useState(false);

    useEffect(() => {
      console.log(hovered);
    }, [hovered]);

    useFrame(() => {
      ref.current.rotation.x += 0.01;
    });

    return (
      <mesh
        onPointerOver={(e) => sethover(true)}
        onPointerOut={(e) => sethover(false)}
        ref={ref}
        {...props}
        scale={hovered ? 2 : 1.5}
      >
        <boxGeometry args={[1, 1, 3]} />
        <meshStandardMaterial color={hovered ? "orange" : "red"} />
      </mesh>
    );
  }

  return (
    <div className="App">
      <Canvas style={{ height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}
