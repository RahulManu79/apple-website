import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import IPhone from './iPhone'
import * as THREE from 'three'


function ModelView({ index, groupRef, gsapType,
    contolRef, setRotationState, item, size, }) {



    return (
        <View
            index={index}
            id={gsapType}
            className={` w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''} `}
        >
            {/* Ambiant Light */}
            <ambientLight intensity={0.3} />

            <PerspectiveCamera makeDefault position={[0, 0, 4]} />

            <Lights />

            <OrbitControls
                makeDefault
                ref={contolRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRotationState(contolRef.current.getAzimuthalAngle())}
            />

            <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0, 0, 0]}>
                <Suspense fallback={<Html><div>Loading</div></Html>}>
                    <IPhone
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>
    )
}

export default ModelView