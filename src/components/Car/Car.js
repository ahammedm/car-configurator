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
				<OrbitControls enableZoom={false} />
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
				<Suspense fallback={null}>
					<ModelDraco bodyColor={config.color} />
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
