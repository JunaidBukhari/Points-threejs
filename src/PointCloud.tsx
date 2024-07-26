import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

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
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
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
