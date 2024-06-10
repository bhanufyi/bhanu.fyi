// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// import Perlin from "../helpers/perlin";

// function Background() {
//   return (
//     <Canvas
//       camera={{
//         position: [(-15 * Math.PI) / 180, -1000, 100],
//         far: 1000,
//       }}
//       style={{
//         position: "fixed",
//         width: "100vw",
//         height: "100vh",
//         top: 0,
//         left: 0,
//       }}
//     >
//       <ambientLight position={[0, 0, 0]} color={0xffffff} intensity={1.3} />
//       <primitive object={new THREE.AxesHelper(10)} />
//       <Mesh />
//     </Canvas>
//   );
// }
// const Mesh = () => {
//   useFrame((_state, _delta) => {
//     if (plain.current) {
//       plain.current.rotation.z += 0.001;
//     }
//   }, 0);
//   useEffect(() => {
//     refreshVertices();
//   }, []);

//   function refreshVertices() {
//     if (!plain.current) return;
//     const perlin = new Perlin();
//     plain.current.userData.smooth = 500;
//     plain.current.userData.peak = 60;
//     const vertices = plain.current.geometry.attributes.position.array;
//     for (let i = 0; i <= vertices.length; i += 3) {
//       vertices[i + 2] =
//         plain.current.userData.peak *
//         perlin.noise(
//           (plain.current.position.x + vertices[i]) /
//             plain.current.userData.smooth,
//           (plain.current.position.z + vertices[i + 1]) /
//             plain.current.userData.smooth,
//         );
//     }
//     plain.current.geometry.attributes.position.needsUpdate = true;
//     plain.current.geometry.computeVertexNormals();
//   }
//   const plain =
//     useRef<
//       THREE.Mesh<
//         THREE.BufferGeometry<THREE.NormalBufferAttributes>,
//         THREE.Material | THREE.Material[],
//         THREE.Object3DEventMap
//       >
//     >(null);

//   return (
//     <mesh ref={plain} position={[0, 0, -100]}>
//       <planeBufferGeometry attach="geometry" args={[3000, 3000, 256, 256]} />
//       <meshLambertMaterial
//         transparent
//         opacity={0.1}
//         color={0xe9ebf0}
//         wireframe={true}
//       />
//     </mesh>
//   );
// };

// export default Background;
