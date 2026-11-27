import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const FirstFrameNotifier = ({ onFirstFrame }) => {
  const hasNotified = useRef(false);

  useFrame(() => {
    if (hasNotified.current) return;
    hasNotified.current = true;
    window.requestAnimationFrame(onFirstFrame);
  });

  return null;
};

const ComputersCanvas = ({ onFirstFrame }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 400px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      className='sm:flex sm:pl-12 hidden'
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      resize={{ polyfill: ResizeObserver }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <FirstFrameNotifier onFirstFrame={onFirstFrame} />
      </Suspense>
    </Canvas>
  )
}

export default ComputersCanvas
