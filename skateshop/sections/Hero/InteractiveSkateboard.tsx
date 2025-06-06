import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { a, useSpring } from "@react-spring/three";
import { Skateboard } from "@/components/Skateboard";

export default function Experience({
  deckTextureURL,
  wheelTextureURL,
  truckColor,
  boltColor,
}: Props) {
  const group = useRef<any>(null);
  const { position } = useSpring({
    position: [0, 0, 0],
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!group.current) return;
      group.current.rotation.y = (event.clientX / window.innerWidth) * Math.PI;
      group.current.rotation.x =
        ((event.clientY - window.innerHeight / 2) / window.innerHeight) * Math.PI;
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
      <a.group ref={group} position={position}>
        <Skateboard
          wheelTextureURLs={[wheelTextureURL]}
          wheelTextureURL={wheelTextureURL}
          deckTextureURLs={[deckTextureURL]}
          deckTextureURL={deckTextureURL}
          truckColor={truckColor}
          boltColor={boltColor}
          constantWheelSpin
        />
      </a.group>
    </Canvas>
  );
}