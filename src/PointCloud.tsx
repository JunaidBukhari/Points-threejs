import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

interface PointCloudProps {
  points: number[];
}

const PointCloud: React.FC<PointCloudProps> = ({ points }) => {
  const positions = useMemo(() => {
    const positionArray = new Float32Array(points);
    return new THREE.BufferAttribute(positionArray, 3);
  }, [points]);
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.count}
            array={positions.array}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="blue" />
      </points>
    </Canvas>
  );
};

export default PointCloud;
