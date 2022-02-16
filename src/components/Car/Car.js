import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import "./Car.css";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import ModelDraco from './ModelDraco';

const Car = ({ config }) => {

	return (
		<div className="App">
			<Canvas className="canvas" camera={{ position: [-13, 8, 15] }}>
				<OrbitControls
					enablePan={false}
					enableZoom={false}
					enableDamping={true}
					minPolarAngle={0.75}
					maxPolarAngle={1.6}
					dampingFactor={0.07}
					rotateSpeed={0.30}
					autoRotate={true}
					autoRotateSpeed={0.57}
				/>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
				<Suspense fallback={null}>
					<ModelDraco
						bodyColor={config.color}
						wheels={config.wheels}
						wheelColor={config.wheelColor}
					/>
					<Environment files="/royal_esplanade_1k.hdr" />
				</Suspense>
			</Canvas>
		</div>
	)
}

Car.propTypes = {
	config: PropTypes.object,
}

export default Car;
