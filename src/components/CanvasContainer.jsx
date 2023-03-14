import { useState, useEffect } from 'react';
import BallCanvas from './canvas/Ball';
import ComputersCanvas from './canvas/Computers';
import EarthCanvas from './canvas/Earth';
import StarsCanvas from './canvas/Stars';

const CanvasContainer = () => {
  const [computerLoaded, setComputerLoaded] = useState(false);
  const [earthLoaded, setEarthLoaded] = useState(false);
  const [ballLoaded, setBallLoaded] = useState(false);
  const [starsLoaded, setStarsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      import('./canvas/Computers'),
      import('./canvas/Earth'),
      import('./canvas/Ball'),
      import('./canvas/Stars'),
    ]).then(([ComputersCanvas, EarthCanvas, BallCanvas, StarsCanvas]) => {
      setComputerLoaded(true);
      setEarthLoaded(true);
      setBallLoaded(true);
      setStarsLoaded(true);
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-50">
      {computerLoaded && <ComputersCanvas />}
      {earthLoaded && <EarthCanvas />}
      {ballLoaded && <BallCanvas />}
      {starsLoaded && <StarsCanvas />}
    </div>
  );
};

export default CanvasContainer;
