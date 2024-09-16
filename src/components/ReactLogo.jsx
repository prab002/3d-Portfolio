import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/react.glb");
  return (
    <Float floatIntensity={1}>
      <group {...props} scale={0.01}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[1, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[4.39, 4.39, 4.5]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react.glb");
export default ReactLogo;
