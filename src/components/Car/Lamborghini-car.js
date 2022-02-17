import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ bodyColor, wheels, wheelColor, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Lamborghini-car.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={5}>
        <mesh
          geometry={nodes.Obj_Badge_Hood.geometry}
          material={nodes.Obj_Badge_Hood.material}
          position={[-2.72, 0.59, 0]}
          rotation={[Math.PI / 2, 0.01, 0]}
          scale={1.07}
        />
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_Boot.geometry} material={nodes.Mesh_Boot.material} material-color={bodyColor} />
          <mesh geometry={nodes.Mesh_Boot_1.geometry} material={nodes.Mesh_Boot_1.material} />
        </group>
        <mesh
          geometry={nodes.Obj_Boot_Lid.geometry}
          material={nodes.Obj_Boot_Lid.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_Bumper_Front.geometry} material={nodes.Mesh_Bumper_Front.material} />
          <mesh geometry={nodes.Mesh_Bumper_Front_1.geometry} material={nodes.Mesh_Bumper_Front_1.material} material-color={bodyColor} />
          <mesh geometry={nodes.Mesh_Bumper_Front_2.geometry} material={nodes.Mesh_Bumper_Front_2.material} />
        </group>
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_Bumper_Rear.geometry} material={nodes.Mesh_Bumper_Rear.material} material-color={bodyColor} />
          <mesh geometry={nodes.Mesh_Bumper_Rear_1.geometry} material={nodes.Mesh_Bumper_Rear_1.material} />
        </group>
        <mesh
          geometry={nodes.Obj_Cluster_Backplate.geometry}
          material={nodes.Obj_Cluster_Backplate.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Dash_Plastic.geometry}
          material={nodes.Obj_Dash_Plastic.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_Door_Upper_Frame.geometry} material={nodes.Mesh_Door_Upper_Frame.material} />
          <mesh geometry={nodes.Mesh_Door_Upper_Frame_1.geometry} material={nodes.Mesh_Door_Upper_Frame_1.material} />
        </group>
        <mesh
          geometry={nodes.Obj_Emblem_Rear.geometry}
          material={nodes.Obj_Emblem_Rear.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_Engine_Cover.geometry} material={nodes.Mesh_Engine_Cover.material} />
          <mesh geometry={nodes.Mesh_Engine_Cover_1.geometry} material={nodes.Mesh_Engine_Cover_1.material} />
        </group>
        <group position={[0, -0.04, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_Engine_Pipes.geometry} material={nodes.Mesh_Engine_Pipes.material} />
          <mesh geometry={nodes.Mesh_Engine_Pipes_1.geometry} material={nodes.Mesh_Engine_Pipes_1.material} />
          <mesh geometry={nodes.Mesh_Engine_Pipes_2.geometry} material={nodes.Mesh_Engine_Pipes_2.material} />
        </group>
        <mesh
          geometry={nodes.Obj_Engine_Roll_Cage.geometry}
          material={nodes.Obj_Engine_Roll_Cage.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Engine_Room_Wedge.geometry}
          material={nodes.Obj_Engine_Room_Wedge.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Engine_Seating.geometry}
          material={nodes.Obj_Engine_Seating.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_Exhaust.geometry} material={nodes.Mesh_Exhaust.material} />
          <mesh geometry={nodes.Mesh_Exhaust_1.geometry} material={nodes.Mesh_Exhaust_1.material} />
        </group>
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_Gruppe_Main.geometry} material={nodes.Mesh_Gruppe_Main.material} />
          <mesh geometry={nodes.Mesh_Gruppe_Main_1.geometry} material={nodes.Mesh_Gruppe_Main_1.material} />
        </group>
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_HeadLight.geometry} material={materials.Mt_Light_Emissive} />
          <mesh geometry={nodes.Mesh_HeadLight_1.geometry} material={nodes.Mesh_HeadLight_1.material} />
          <mesh geometry={nodes.Mesh_HeadLight_2.geometry} material={nodes.Mesh_HeadLight_2.material} />
          <mesh geometry={nodes.Mesh_HeadLight_3.geometry} material={nodes.Mesh_HeadLight_3.material} />
        </group>
        <mesh
          geometry={nodes.Obj_Headlight_Glass.geometry}
          material={nodes.Obj_Headlight_Glass.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_Hood.geometry} material={nodes.Mesh_Hood.material} material-color={bodyColor} />
          <mesh geometry={nodes.Mesh_Hood_1.geometry} material={nodes.Mesh_Hood_1.material} />
        </group>
        <mesh
          geometry={nodes.Obj_Interior_Buttons.geometry}
          material={nodes.Obj_Interior_Buttons.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interior_Dash_DoorPads.geometry}
          material={nodes.Obj_Interior_Dash_DoorPads.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interior_FootMesh.geometry}
          material={nodes.Obj_Interior_FootMesh.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interior_Headliner.geometry}
          material={nodes.Obj_Interior_Headliner.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interior_Knobs.geometry}
          material={nodes.Obj_Interior_Knobs.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interior_Metal.geometry}
          material={nodes.Obj_Interior_Metal.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interior_Pillar.geometry}
          material={nodes.Obj_Interior_Pillar.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interior_Plastics.geometry}
          material={nodes.Obj_Interior_Plastics.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interior_Rear_View_Mirror.geometry}
          material={nodes.Obj_Interior_Rear_View_Mirror.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interior_RollCage.geometry}
          material={nodes.Obj_Interior_RollCage.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interior_SolidInner.geometry}
          material={nodes.Obj_Interior_SolidInner.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interior_Steering_Btns.geometry}
          material={nodes.Obj_Interior_Steering_Btns.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interior_Steering_Emblem.geometry}
          material={nodes.Obj_Interior_Steering_Emblem.material}
          position={[-0.55, 0.87, 0.43]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Interrior_Glass.geometry}
          material={nodes.Obj_Interrior_Glass.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Oil_Cap_Shroud.geometry}
          material={nodes.Obj_Oil_Cap_Shroud.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_ORVM.geometry} material={materials.Mt_MirrorCover} material-color={bodyColor} />
          <mesh geometry={nodes.Mesh_ORVM_1.geometry} material={nodes.Mesh_ORVM_1.material} />
          <mesh geometry={nodes.Mesh_ORVM_2.geometry} material={nodes.Mesh_ORVM_2.material} />
        </group>
        <mesh
          geometry={nodes.Obj_ORVM_Shield_Glass.geometry}
          material={nodes.Obj_ORVM_Shield_Glass.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Rear_WindShield.geometry}
          material={nodes.Obj_Rear_WindShield.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_RoofFrame.geometry}
          material={nodes.Obj_RoofFrame.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material-color={bodyColor}
        />
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_Running_Board.geometry} material={nodes.Mesh_Running_Board.material} material-color={bodyColor} />
          <mesh geometry={nodes.Mesh_Running_Board_1.geometry} material={nodes.Mesh_Running_Board_1.material} />
        </group>
        <mesh
          geometry={nodes.Obj_Seat_Plastics.geometry}
          material={nodes.Obj_Seat_Plastics.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_SeatBelt_Metal.geometry}
          material={nodes.Obj_SeatBelt_Metal.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_SeatBelts.geometry}
          material={nodes.Obj_SeatBelts.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.leather_seatL_leather_013.geometry}
            material={nodes.leather_seatL_leather_013.material}
          />
          <mesh
            geometry={nodes.leather_seatL_leather_013_1.geometry}
            material={nodes.leather_seatL_leather_013_1.material}
          />
        </group>
        <mesh geometry={nodes.Obj_Shadow_Plane.geometry} material={materials.Mt_Shadow_Plane} scale={0.2} />
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_Door_LH.geometry} material={nodes.Mesh_Door_LH.material} />
          <mesh geometry={nodes.Mesh_Door_LH_1.geometry} material={nodes.Mesh_Door_LH_1.material} material-color={bodyColor} />
          <mesh geometry={nodes.Mesh_Door_LH_2.geometry} material={nodes.Mesh_Door_LH_2.material} />
        </group>
        <mesh
          geometry={nodes.Obj_Steering_Leather.geometry}
          material={nodes.Obj_Steering_Leather.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Steering_Stitching.geometry}
          material={nodes.Obj_Steering_Stitching.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_SteeringCover.geometry}
          material={nodes.Obj_SteeringCover.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_SteeringWheel_Metals.geometry}
          material={nodes.Obj_SteeringWheel_Metals.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_SteeringWheel_Plastics.geometry}
          material={nodes.Obj_SteeringWheel_Plastics.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Tail_Led_Glass.geometry}
          material={nodes.Obj_Tail_Led_Glass.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Tail_Led_Plate.geometry}
          material={nodes.Obj_Tail_Led_Plate.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_Tail_Light.geometry} material={nodes.Mesh_Tail_Light.material} />
          <mesh geometry={nodes.Mesh_Tail_Light_1.geometry} material={materials.Mt_Reflector_TL} />
          <mesh geometry={nodes.Mesh_Tail_Light_2.geometry} material={nodes.Mesh_Tail_Light_2.material} />
          <mesh geometry={nodes.Mesh_Tail_Light_3.geometry} material={materials.Mt_Reflector_RL} />
        </group>
        <mesh
          geometry={nodes.Obj_Tail_Light_Glass.geometry}
          material={nodes.Obj_Tail_Light_Glass.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_UnderBody.geometry}
          material={nodes.Obj_UnderBody.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Upper_Fender.geometry}
          material={nodes.Obj_Upper_Fender.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material-color={bodyColor}
        />
        <mesh
          geometry={nodes.Obj_Upper_Fender_Frame.geometry}
          material={nodes.Obj_Upper_Fender_Frame.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Upper_Fender_Inner.geometry}
          material={nodes.Obj_Upper_Fender_Inner.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Upper_Fender_Near_Glass.geometry}
          material={nodes.Obj_Upper_Fender_Near_Glass.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_WheelHub_FL.geometry}
          material={nodes.Obj_WheelHub_FL.material}
          position={[-1.55, 0.39, 0.98]}>
          <group position={[0, 0, 0.05]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh geometry={nodes.Mesh_Caliper_FL.geometry} material={nodes.Mesh_Caliper_FL.material} />
            <mesh geometry={nodes.Mesh_Caliper_FL_1.geometry} material={nodes.Mesh_Caliper_FL_1.material} />
          </group>
          <mesh
            geometry={nodes.Obj_DiscRotor_FL.geometry}
            material={nodes.Obj_DiscRotor_FL.material}
            position={[0, 0, 0.05]}
            rotation={[0, -0.02, 0]}>
            {wheels === 'Obj_Rim_T0A' ? (
              <group position={[0, 0, -0.05]} rotation={[Math.PI, -0.02, Math.PI]}>
                <mesh geometry={nodes.Mesh_Rim_T0A_FL.geometry} material={nodes.Mesh_Rim_T0A_FL.material} material-color={wheelColor} />
                <mesh geometry={nodes.Mesh_Rim_T0A_FL_1.geometry} material={nodes.Mesh_Rim_T0A_FL_1.material} />
                <mesh geometry={nodes.Mesh_Rim_T0A_FL_2.geometry} material={nodes.Mesh_Rim_T0A_FL_2.material} />
                <mesh geometry={nodes.Mesh_Rim_T0A_FL_3.geometry} material={nodes.Mesh_Rim_T0A_FL_3.material} />
              </group>
            ) : (
              <group position={[0, 0, -0.04]} rotation={[0, 0.02, 0]}>
                <mesh geometry={nodes.Mesh_Rim_T0B_FL.geometry} material={nodes.Mesh_Rim_T0B_FL.material} material-color={wheelColor} />
                <mesh geometry={nodes.Mesh_Rim_T0B_FL_1.geometry} material={nodes.Mesh_Rim_T0B_FL_1.material} />
                <mesh geometry={nodes.Mesh_Rim_T0B_FL_2.geometry} material={nodes.Mesh_Rim_T0B_FL_2.material} />
                <mesh geometry={nodes.Mesh_Rim_T0B_FL_3.geometry} material={nodes.Mesh_Rim_T0B_FL_3.material} />
              </group>
            )}
            <mesh
              geometry={nodes.Obj_Tyre_FL.geometry}
              material={nodes.Obj_Tyre_FL.material}
              position={[0, 0, -0.05]}
              rotation={[0, 0.02, 0]}
            />
          </mesh>
        </mesh>
        <mesh
          geometry={nodes.Obj_WheelHub_FR.geometry}
          material={nodes.Obj_WheelHub_FR.material}
          position={[-1.55, 0.39, -0.98]}
          rotation={[-Math.PI, 0, -Math.PI]}>
          <group position={[0, 0, 0.05]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh geometry={nodes.Mesh_Caliper_FR.geometry} material={nodes.Mesh_Caliper_FR.material} />
            <mesh geometry={nodes.Mesh_Caliper_FR_1.geometry} material={nodes.Mesh_Caliper_FR_1.material} />
          </group>
          <mesh
            geometry={nodes.Obj_DiscRotor_FR.geometry}
            material={nodes.Obj_DiscRotor_FR.material}
            position={[0, 0, 0.05]}
            rotation={[0, -0.02, 0]}>
            {wheels === 'Obj_Rim_T0A' ? (
              <group position={[0, 0, -0.05]} rotation={[Math.PI, -0.02, Math.PI]}>
                <mesh geometry={nodes.Mesh_Rim_T0A_FR.geometry} material={nodes.Mesh_Rim_T0A_FR.material} material-color={wheelColor} />
                <mesh geometry={nodes.Mesh_Rim_T0A_FR_1.geometry} material={nodes.Mesh_Rim_T0A_FR_1.material} />
                <mesh geometry={nodes.Mesh_Rim_T0A_FR_2.geometry} material={nodes.Mesh_Rim_T0A_FR_2.material} />
                <mesh geometry={nodes.Mesh_Rim_T0A_FR_3.geometry} material={nodes.Mesh_Rim_T0A_FR_3.material} />
              </group>
            ) : (
              <group position={[0, 0, -0.04]} rotation={[0, 0.02, 0]}>
                <mesh geometry={nodes.Mesh_Rim_T0B_FR.geometry} material={nodes.Mesh_Rim_T0B_FR.material} material-color={wheelColor} />
                <mesh geometry={nodes.Mesh_Rim_T0B_FR_1.geometry} material={nodes.Mesh_Rim_T0B_FR_1.material} />
                <mesh geometry={nodes.Mesh_Rim_T0B_FR_2.geometry} material={nodes.Mesh_Rim_T0B_FR_2.material} />
                <mesh geometry={nodes.Mesh_Rim_T0B_FR_3.geometry} material={nodes.Mesh_Rim_T0B_FR_3.material} />
              </group>
            )}
            <mesh
              geometry={nodes.Obj_Tyre_FR.geometry}
              material={nodes.Obj_Tyre_FR.material}
              position={[0, 0, -0.05]}
              rotation={[0, 0.02, 0]}
            />
          </mesh>
        </mesh>
        <mesh
          geometry={nodes.Obj_WheelHub_RL.geometry}
          material={nodes.Obj_WheelHub_RL.material}
          position={[1.53, 0.39, 0.95]}>
          <group position={[0, 0, 0.05]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh geometry={nodes.Mesh_Caliper_RL.geometry} material={nodes.Mesh_Caliper_RL.material} />
            <mesh geometry={nodes.Mesh_Caliper_RL_1.geometry} material={nodes.Mesh_Caliper_RL_1.material} />
          </group>
          <mesh
            geometry={nodes.Obj_DiscRotor_RL.geometry}
            material={nodes.Obj_DiscRotor_RL.material}
            position={[0, 0, 0.05]}
            rotation={[0, -0.02, 0]}>
            {wheels === 'Obj_Rim_T0A' ? (
              <group position={[0, 0, -0.05]} rotation={[Math.PI, -0.02, Math.PI]}>
                <mesh geometry={nodes.Mesh_Rim_T0A_RL.geometry} material={nodes.Mesh_Rim_T0A_RL.material} material-color={wheelColor} />
                <mesh geometry={nodes.Mesh_Rim_T0A_RL_1.geometry} material={nodes.Mesh_Rim_T0A_RL_1.material} />
                <mesh geometry={nodes.Mesh_Rim_T0A_RL_2.geometry} material={nodes.Mesh_Rim_T0A_RL_2.material} />
                <mesh geometry={nodes.Mesh_Rim_T0A_RL_3.geometry} material={nodes.Mesh_Rim_T0A_RL_3.material} />
              </group>
            ) : (
              <group position={[0, 0, -0.04]} rotation={[0, 0.02, 0]}>
                <mesh geometry={nodes.Mesh_Rim_T0B_RL.geometry} material={nodes.Mesh_Rim_T0B_RL.material} material-color={wheelColor} />
                <mesh geometry={nodes.Mesh_Rim_T0B_RL_1.geometry} material={nodes.Mesh_Rim_T0B_RL_1.material} />
                <mesh geometry={nodes.Mesh_Rim_T0B_RL_2.geometry} material={nodes.Mesh_Rim_T0B_RL_2.material} />
                <mesh geometry={nodes.Mesh_Rim_T0B_RL_3.geometry} material={nodes.Mesh_Rim_T0B_RL_3.material} />
              </group>
            )}
            <mesh
              geometry={nodes.Obj_Tyre_RL.geometry}
              material={nodes.Obj_Tyre_RL.material}
              position={[0, 0, -0.05]}
              rotation={[0, 0.02, 0]}
            />
          </mesh>
        </mesh>
        <mesh
          geometry={nodes.Obj_WheelHub_RR.geometry}
          material={nodes.Obj_WheelHub_RR.material}
          position={[1.53, 0.39, -0.95]}
          rotation={[-Math.PI, 0, -Math.PI]}>
          <group position={[0, 0, 0.05]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh geometry={nodes.Mesh_Caliper_RR.geometry} material={nodes.Mesh_Caliper_RR.material} />
            <mesh geometry={nodes.Mesh_Caliper_RR_1.geometry} material={nodes.Mesh_Caliper_RR_1.material} />
          </group>
          <mesh
            geometry={nodes.Obj_DiscRotor_RR.geometry}
            material={nodes.Obj_DiscRotor_RR.material}
            position={[0, 0, 0.05]}
            rotation={[0, -0.02, 0]}>
            {wheels === 'Obj_Rim_T0A' ? (
              <group position={[0, 0, -0.05]} rotation={[Math.PI, -0.02, Math.PI]}>
                <mesh geometry={nodes.Mesh_Rim_T0A_RR.geometry} material={nodes.Mesh_Rim_T0A_RR.material} material-color={wheelColor} />
                <mesh geometry={nodes.Mesh_Rim_T0A_RR_1.geometry} material={nodes.Mesh_Rim_T0A_RR_1.material} />
                <mesh geometry={nodes.Mesh_Rim_T0A_RR_2.geometry} material={nodes.Mesh_Rim_T0A_RR_2.material} />
                <mesh geometry={nodes.Mesh_Rim_T0A_RR_3.geometry} material={nodes.Mesh_Rim_T0A_RR_3.material} />
              </group>
            ) : (
              <group position={[0, 0, -0.04]} rotation={[0, 0.02, 0]}>
                <mesh geometry={nodes.Mesh_Rim_T0B_RR.geometry} material={nodes.Mesh_Rim_T0B_RR.material} material-color={wheelColor} />
                <mesh geometry={nodes.Mesh_Rim_T0B_RR_1.geometry} material={nodes.Mesh_Rim_T0B_RR_1.material} />
                <mesh geometry={nodes.Mesh_Rim_T0B_RR_2.geometry} material={nodes.Mesh_Rim_T0B_RR_2.material} />
                <mesh geometry={nodes.Mesh_Rim_T0B_RR_3.geometry} material={nodes.Mesh_Rim_T0B_RR_3.material} />
              </group>
            )}
            <mesh
              geometry={nodes.Obj_Tyre_RR.geometry}
              material={nodes.Obj_Tyre_RR.material}
              position={[0, 0, -0.05]}
              rotation={[0, 0.02, 0]}
            />
          </mesh>
        </mesh>
        <mesh
          geometry={nodes.Obj_WindScreen.geometry}
          material={nodes.Obj_WindScreen.material}
          position={[0, -0.04, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Wiper_LH.geometry}
          material={nodes.Obj_Wiper_LH.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Obj_Wiper_RH.geometry}
          material={nodes.Obj_Wiper_RH.material}
          position={[0, -0.04, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Lamborghini-car.gltf')
