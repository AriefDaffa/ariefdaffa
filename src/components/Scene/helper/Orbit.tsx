import React, {useRef, type FC} from 'react'
import {  OrbitControls } from '@react-three/drei'
    
interface OrbitProps {
    isClicked: boolean;
}
    
const Orbit: FC<OrbitProps> = ({isClicked}) => {
    const controlsRef = useRef<any>(null)

  return (
    <OrbitControls
      ref={controlsRef}
      autoRotateSpeed={-0.1}
      zoomSpeed={0.25}
      minZoom={40}
      maxZoom={140}
      enablePan={false}
      dampingFactor={0.05}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={ -Math.PI / 4}
      maxAzimuthAngle={ Math.PI / 4}
    />
  )
};
    
export default Orbit;