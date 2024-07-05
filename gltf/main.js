

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/宇宙服ライト.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体047.geometry}
        material={materials['マテリアル.111']}
        position={[-135.399, 622.419, -26.867]}
        rotation={[-0.238, -0.012, 0.002]}
        scale={[0.497, 0.9, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体053.geometry}
        material={nodes.立方体053.material}
        position={[-135.446, 622.537, -26.57]}
        rotation={[-0.224, 0, 0]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体054.geometry}
        material={materials['マテリアル.113']}
        position={[-135.426, 622.322, -26.822]}
        rotation={[-0.224, 0, 0]}
        scale={[0.588, 1.066, 0.165]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体058.geometry}
        material={nodes.立方体058.material}
        position={[-133.179, 624.052, -20.15]}
        rotation={[-0.224, 1.571, 0]}
        scale={[0.759, 0.884, 3.153]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体059.geometry}
        material={nodes.立方体059.material}
        position={[-135.446, 622.537, -26.57]}
        rotation={[-0.224, 0, 0]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体060.geometry}
        material={nodes.立方体060.material}
        position={[-129.622, 582.012, 29.216]}
        rotation={[0.472, 0.178, -0.299]}
        scale={12.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体061.geometry}
        material={nodes.立方体061.material}
        position={[-81.459, 583.619, 27.886]}
        scale={12.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体062.geometry}
        material={materials['マテリアル.114']}
        position={[-103.316, 593.235, 12.664]}
        rotation={[-0.412, 0.07, 3.114]}
        scale={[-12.571, -16.277, -4.646]}
      />
      <group
        position={[-104.929, 625.016, -16.61]}
        rotation={[-0.061, 0.015, -0.025]}
        scale={[-31.95, -31.483, -30.267]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体068_1.geometry}
          material={materials['マテリアル.115']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体068_2.geometry}
          material={materials['マテリアル.113']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体064.geometry}
        material={materials['マテリアル.116']}
        position={[-105.381, 625.209, -16.406]}
        rotation={[-0.061, 0.015, -0.025]}
        scale={[-31.95, -31.483, -30.267]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体067.geometry}
        material={materials['マテリアル.119']}
        position={[-135.414, 625.276, -20.974]}
        rotation={[-0.224, 0, 0]}
        scale={[2.32, 3.545, 6.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球070.geometry}
        material={materials['マテリアル.120']}
        position={[-136.887, 626.366, -27.465]}
        rotation={[1.367, 0.008, 0.004]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球071.geometry}
        material={nodes.球071.material}
        position={[-125.27, 597.67, -6.955]}
        rotation={[1.633, -0.128, -0.155]}
        scale={[10.689, 15.432, 12.796]}
      />
      <group
        position={[-80.98, 596.717, -8.817]}
        rotation={[1.815, 0.064, -0.256]}
        scale={[10.689, 15.432, 12.796]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球076_1.geometry}
          material={materials['マテリアル.121']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球076_2.geometry}
          material={materials['マテリアル.122']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球075.geometry}
        material={nodes.球075.material}
        position={[-104.927, 581.979, -5.415]}
        rotation={[-0.303, -0.043, -0.041]}
        scale={[22.554, 18.043, 18.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球077.geometry}
        material={nodes.球077.material}
        position={[-90.988, 568.369, 2.041]}
        rotation={[-0.803, -0.037, -0.075]}
        scale={[13.533, 20.137, 16.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球078.geometry}
        material={nodes.球078.material}
        position={[-120.889, 573.131, 1.049]}
        rotation={[-0.697, -0.223, 0.097]}
        scale={[13.533, 20.137, 16.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球083.geometry}
        material={materials['マテリアル.132']}
        position={[-135.499, 625.252, -27.037]}
        rotation={[1.367, 0.008, 0.004]}
        scale={1.228}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面016.geometry}
        material={nodes.平面016.material}
        position={[-135.81, 628.082, -20.988]}
        rotation={[-0.224, 0, 0]}
        scale={[1.183, 2.296, 3.954]}
      />
      <group
        position={[-122.581, 557.591, 34.201]}
        rotation={[-3.094, -1.517, -1.509]}
        scale={[15.222, 8.138, 8.138]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.平面021.geometry}
          material={materials['マテリアル.145']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.平面021_1.geometry}
          material={materials['マテリアル.090']}
        />
      </group>
      <group
        position={[-94.386, 542.248, 24.455]}
        rotation={[-2.65, -1.53, -1.572]}
        scale={[15.222, 8.138, 8.138]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.平面022.geometry}
          material={materials['マテリアル.143']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.平面022_1.geometry}
          material={materials['マテリアル.090']}
        />
      </group>
      <group
        position={[-136.865, 626.369, -27.476]}
        rotation={[1.346, -Math.PI / 2, 0]}
        scale={[-0.261, -0.153, -0.298]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱081.geometry}
          material={materials['マテリアル.134']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱081_1.geometry}
          material={materials['マテリアル.134']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱086.geometry}
        material={materials['マテリアル.136']}
        position={[-137.757, 624.402, -19.777]}
        rotation={[-0.508, 0, -Math.PI / 2]}
        scale={[-1.455, -0.35, -1.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱087.geometry}
        material={materials['マテリアル.113']}
        position={[-137.601, 624.429, -19.833]}
        rotation={[-0.508, 0, -Math.PI / 2]}
        scale={[-1.663, -0.4, -1.604]}
      />
      <group
        position={[-135.384, 625.262, -27.091]}
        rotation={[1.346, -Math.PI / 2, 0]}
        scale={[-1.327, -0.78, -1.517]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱087_1.geometry}
          material={materials['マテリアル.137']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱087_2.geometry}
          material={materials['マテリアル.137']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱089.geometry}
        material={nodes.円柱089.material}
        position={[-143.607, 596.027, -11.335]}
        rotation={[-0.487, 1.327, 2.539]}
        scale={[7.829, 17.206, 7.818]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱090.geometry}
        material={nodes.円柱090.material}
        position={[-97.79, 587.984, -14.146]}
        rotation={[-1.139, 1.107, 3.081]}
        scale={[7.829, 17.206, 7.818]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱091.geometry}
        material={nodes.円柱091.material}
        position={[-132.64, 582.896, 0.636]}
        rotation={[1.89, 0.758, 0.09]}
        scale={[7.016, 16.206, 7.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱092.geometry}
        material={nodes.円柱092.material}
        position={[-108.003, 584.163, 4.893]}
        rotation={[2.274, 0.764, 0.063]}
        scale={[7.818, 18.057, 7.817]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱093.geometry}
        material={materials['マテリアル.113']}
        position={[-80.718, 624.134, -19.633]}
        rotation={[-0.401, 0.11, -1.576]}
        scale={[-6.197, -1.491, -5.978]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱094.geometry}
        material={materials['マテリアル.138']}
        position={[-80.17, 623.92, -19.848]}
        rotation={[-0.401, 0.11, -1.576]}
        scale={[-5.423, -1.304, -5.231]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱095.geometry}
        material={materials['マテリアル.139']}
        position={[-130.371, 624.903, -19.015]}
        rotation={[-2.861, 0.011, 1.607]}
        scale={[-5.423, -1.304, -5.231]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱096.geometry}
        material={nodes.円柱096.material}
        position={[-129.79, 625.047, -19.196]}
        rotation={[-2.861, 0.011, 1.607]}
        scale={[-6.197, -1.491, -5.978]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱097.geometry}
        material={materials['マテリアル.113']}
        position={[-129.79, 625.047, -19.196]}
        rotation={[-2.861, 0.011, 1.607]}
        scale={[-6.197, -1.491, -5.978]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱098.geometry}
        material={materials['マテリアル.140']}
        position={[-131.155, 625.136, -19.162]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-4.711, -1.133, -4.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱099.geometry}
        material={materials['マテリアル.141']}
        position={[-80.17, 623.92, -19.848]}
        rotation={[-0.401, 0.11, -1.576]}
        scale={[-5.423, -1.304, -5.231]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱100.geometry}
        material={nodes.円柱100.material}
        position={[-80.718, 624.134, -19.633]}
        rotation={[-0.401, 0.11, -1.576]}
        scale={[-6.197, -1.491, -5.978]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TwistedTorus001.geometry}
        material={nodes.TwistedTorus001.material}
        position={[-105.048, 615.153, -11.897]}
        rotation={[-0.546, 0, 0]}
        scale={[16.974, 8.785, 16.974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体051.geometry}
        material={materials['マテリアル.147']}
        position={[-135.414, 625.276, -20.974]}
        rotation={[-0.224, 0, 0]}
        scale={[2.32, 3.545, 6.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体052.geometry}
        material={nodes.立方体052.material}
        position={[-135.446, 622.537, -26.57]}
        rotation={[-0.224, 0, 0]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体055.geometry}
        material={nodes.立方体055.material}
        position={[-133.179, 624.052, -20.15]}
        rotation={[-0.224, 1.571, 0]}
        scale={[0.759, 0.884, 3.153]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体056.geometry}
        material={materials['マテリアル.148']}
        position={[-135.426, 622.322, -26.822]}
        rotation={[-0.224, 0, 0]}
        scale={[0.588, 1.066, 0.165]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体057.geometry}
        material={nodes.立方体057.material}
        position={[-135.446, 622.537, -26.57]}
        rotation={[-0.224, 0, 0]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体065.geometry}
        material={materials['マテリアル.149']}
        position={[-135.399, 622.419, -26.867]}
        rotation={[-0.238, -0.012, 0.002]}
        scale={[0.497, 0.9, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球079.geometry}
        material={materials['マテリアル.150']}
        position={[-135.499, 625.252, -27.037]}
        rotation={[1.367, 0.008, 0.004]}
        scale={1.228}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球080.geometry}
        material={materials['マテリアル.151']}
        position={[-136.887, 626.366, -27.465]}
        rotation={[1.367, 0.008, 0.004]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面015.geometry}
        material={nodes.平面015.material}
        position={[-135.81, 628.082, -20.988]}
        rotation={[-0.224, 0, 0]}
        scale={[1.183, 2.296, 3.954]}
      />
      <group
        position={[-135.384, 625.262, -27.091]}
        rotation={[1.346, -Math.PI / 2, 0]}
        scale={[-1.327, -0.78, -1.517]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱102_1.geometry}
          material={materials['マテリアル.152']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱102_2.geometry}
          material={materials['マテリアル.152']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱084.geometry}
        material={materials['マテリアル.148']}
        position={[-137.601, 624.429, -19.833]}
        rotation={[-0.508, 0, -Math.PI / 2]}
        scale={[-1.663, -0.4, -1.604]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱085.geometry}
        material={materials['マテリアル.153']}
        position={[-137.757, 624.402, -19.777]}
        rotation={[-0.508, 0, -Math.PI / 2]}
        scale={[-1.455, -0.35, -1.404]}
      />
      <group
        position={[-136.865, 626.369, -27.476]}
        rotation={[1.346, -Math.PI / 2, 0]}
        scale={[-0.261, -0.153, -0.298]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱105_1.geometry}
          material={materials['マテリアル.154']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱105_2.geometry}
          material={materials['マテリアル.154']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体066.geometry}
        material={materials['マテリアル.155']}
        position={[-135.399, 622.419, -26.867]}
        rotation={[-0.238, -0.012, 0.002]}
        scale={[0.497, 0.9, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体068.geometry}
        material={nodes.立方体068.material}
        position={[-135.446, 622.537, -26.57]}
        rotation={[-0.224, 0, 0]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体069.geometry}
        material={materials['マテリアル.156']}
        position={[-135.426, 622.322, -26.822]}
        rotation={[-0.224, 0, 0]}
        scale={[0.588, 1.066, 0.165]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体070.geometry}
        material={nodes.立方体070.material}
        position={[-133.179, 624.052, -20.15]}
        rotation={[-0.224, 1.571, 0]}
        scale={[0.759, 0.884, 3.153]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体071.geometry}
        material={nodes.立方体071.material}
        position={[-135.446, 622.537, -26.57]}
        rotation={[-0.224, 0, 0]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体072.geometry}
        material={materials['マテリアル.157']}
        position={[-135.414, 625.276, -20.974]}
        rotation={[-0.224, 0, 0]}
        scale={[2.32, 3.545, 6.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球081.geometry}
        material={materials['マテリアル.158']}
        position={[-136.887, 626.366, -27.465]}
        rotation={[1.367, 0.008, 0.004]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球082.geometry}
        material={materials['マテリアル.159']}
        position={[-135.499, 625.252, -27.037]}
        rotation={[1.367, 0.008, 0.004]}
        scale={1.228}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面019.geometry}
        material={nodes.平面019.material}
        position={[-135.81, 628.082, -20.988]}
        rotation={[-0.224, 0, 0]}
        scale={[1.183, 2.296, 3.954]}
      />
      <group
        position={[-136.865, 626.369, -27.476]}
        rotation={[1.346, -Math.PI / 2, 0]}
        scale={[-0.261, -0.153, -0.298]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱106_1.geometry}
          material={materials['マテリアル.160']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱106_2.geometry}
          material={materials['マテリアル.160']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱103.geometry}
        material={materials['マテリアル.161']}
        position={[-137.757, 624.402, -19.777]}
        rotation={[-0.508, 0, -Math.PI / 2]}
        scale={[-1.455, -0.35, -1.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱104.geometry}
        material={materials['マテリアル.156']}
        position={[-137.601, 624.429, -19.833]}
        rotation={[-0.508, 0, -Math.PI / 2]}
        scale={[-1.663, -0.4, -1.604]}
      />
      <group
        position={[-135.384, 625.262, -27.091]}
        rotation={[1.346, -Math.PI / 2, 0]}
        scale={[-1.327, -0.78, -1.517]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱109_1.geometry}
          material={materials['マテリアル.162']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱109_2.geometry}
          material={materials['マテリアル.162']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体073.geometry}
        material={materials['マテリアル.163']}
        position={[-75.729, 622.224, -25.399]}
        rotation={[-0.28, 0.052, 0.02]}
        scale={[0.497, 0.9, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体074.geometry}
        material={nodes.立方体074.material}
        position={[-75.756, 622.354, -25.104]}
        rotation={[-0.266, 0.064, 0.018]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体075.geometry}
        material={materials['マテリアル.164']}
        position={[-75.753, 622.129, -25.348]}
        rotation={[-0.266, 0.064, 0.018]}
        scale={[0.588, 1.066, 0.165]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体076.geometry}
        material={nodes.立方体076.material}
        position={[-78.067, 623.103, -21.023]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.759, 0.884, 2.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体077.geometry}
        material={nodes.立方体077.material}
        position={[-75.756, 622.354, -25.104]}
        rotation={[-0.266, 0.064, 0.018]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体078.geometry}
        material={materials['マテリアル.165']}
        position={[-75.36, 625.323, -19.641]}
        rotation={[-0.266, 0.064, 0.018]}
        scale={[2.32, 3.545, 6.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球084.geometry}
        material={materials['マテリアル.166']}
        position={[-77.082, 626.808, -25.542]}
        rotation={[1.592, 0.008, 0.004]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球085.geometry}
        material={materials['マテリアル.167']}
        position={[-75.848, 625.048, -25.679]}
        rotation={[1.327, 0.025, -0.061]}
        scale={1.228}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面020.geometry}
        material={nodes.平面020.material}
        position={[-75.763, 628.126, -19.744]}
        rotation={[-0.266, 0.064, 0.018]}
        scale={[1.183, 2.296, 3.954]}
      />
      <group
        position={[-77.059, 626.812, -25.552]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[-0.261, -0.153, -0.298]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱110.geometry}
          material={materials['マテリアル.168']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱110_1.geometry}
          material={materials['マテリアル.168']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱107.geometry}
        material={materials['マテリアル.169']}
        position={[-72.496, 623.767, -21.083]}
        rotation={[-3.124, -0.073, 1.574]}
        scale={[-1.455, -0.35, -1.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱108.geometry}
        material={materials['マテリアル.164']}
        position={[-72.649, 623.818, -21.035]}
        rotation={[-3.124, -0.073, 1.574]}
        scale={[-1.663, -0.4, -1.604]}
      />
      <group
        position={[-75.736, 625.056, -25.74]}
        rotation={[0, -1.504, -1.305]}
        scale={[-1.327, -0.78, -1.517]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱113.geometry}
          material={materials['マテリアル.170']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱113_1.geometry}
          material={materials['マテリアル.170']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体108.geometry}
        material={materials['マテリアル.220']}
        position={[-75.36, 625.323, -19.641]}
        rotation={[-0.266, 0.064, 0.018]}
        scale={[2.32, 3.545, 6.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体109.geometry}
        material={nodes.立方体109.material}
        position={[-75.756, 622.354, -25.104]}
        rotation={[-0.266, 0.064, 0.018]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体110.geometry}
        material={nodes.立方体110.material}
        position={[-78.067, 623.103, -21.023]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.759, 0.884, 2.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体111.geometry}
        material={materials['マテリアル.221']}
        position={[-75.753, 622.129, -25.348]}
        rotation={[-0.266, 0.064, 0.018]}
        scale={[0.588, 1.066, 0.165]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体112.geometry}
        material={nodes.立方体112.material}
        position={[-75.756, 622.354, -25.104]}
        rotation={[-0.266, 0.064, 0.018]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体113.geometry}
        material={materials['マテリアル.222']}
        position={[-75.729, 622.224, -25.399]}
        rotation={[-0.28, 0.052, 0.02]}
        scale={[0.497, 0.9, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体114.geometry}
        material={materials['マテリアル.223']}
        position={[-135.414, 625.276, -20.974]}
        rotation={[-0.224, 0, 0]}
        scale={[2.32, 3.545, 6.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体115.geometry}
        material={nodes.立方体115.material}
        position={[-135.446, 622.537, -26.57]}
        rotation={[-0.224, 0, 0]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体116.geometry}
        material={nodes.立方体116.material}
        position={[-133.179, 624.052, -20.15]}
        rotation={[-0.224, 1.571, 0]}
        scale={[0.759, 0.884, 3.153]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体117.geometry}
        material={materials['マテリアル.224']}
        position={[-135.426, 622.322, -26.822]}
        rotation={[-0.224, 0, 0]}
        scale={[0.588, 1.066, 0.165]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体118.geometry}
        material={nodes.立方体118.material}
        position={[-135.446, 622.537, -26.57]}
        rotation={[-0.224, 0, 0]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体119.geometry}
        material={materials['マテリアル.225']}
        position={[-135.414, 625.276, -20.974]}
        rotation={[-0.224, 0, 0]}
        scale={[2.32, 3.545, 6.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体120.geometry}
        material={materials['マテリアル.226']}
        position={[-135.399, 622.419, -26.867]}
        rotation={[-0.238, -0.012, 0.002]}
        scale={[0.497, 0.9, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体121.geometry}
        material={materials['マテリアル.227']}
        position={[-135.399, 622.419, -26.867]}
        rotation={[-0.238, -0.012, 0.002]}
        scale={[0.497, 0.9, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体122.geometry}
        material={materials['マテリアル.228']}
        position={[-105.381, 625.209, -16.406]}
        rotation={[-0.061, 0.015, -0.025]}
        scale={[-31.95, -31.483, -30.267]}
      />
      <group
        position={[-104.929, 625.016, -16.61]}
        rotation={[-0.061, 0.015, -0.025]}
        scale={[-31.95, -31.483, -30.267]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体135_1.geometry}
          material={materials['マテリアル.229']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体135_2.geometry}
          material={materials['マテリアル.230']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体124.geometry}
        material={materials['マテリアル.231']}
        position={[-103.316, 593.235, 12.664]}
        rotation={[-0.412, 0.07, 3.114]}
        scale={[-12.571, -16.277, -4.646]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体125.geometry}
        material={nodes.立方体125.material}
        position={[-81.459, 583.619, 27.886]}
        scale={12.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体126.geometry}
        material={nodes.立方体126.material}
        position={[-129.622, 582.012, 29.216]}
        rotation={[0.472, 0.178, -0.299]}
        scale={12.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体127.geometry}
        material={nodes.立方体127.material}
        position={[-135.446, 622.537, -26.57]}
        rotation={[-0.224, 0, 0]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体128.geometry}
        material={nodes.立方体128.material}
        position={[-133.179, 624.052, -20.15]}
        rotation={[-0.224, 1.571, 0]}
        scale={[0.759, 0.884, 3.153]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体129.geometry}
        material={nodes.立方体129.material}
        position={[-135.446, 622.537, -26.57]}
        rotation={[-0.224, 0, 0]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体130.geometry}
        material={materials['マテリアル.232']}
        position={[-135.426, 622.322, -26.822]}
        rotation={[-0.224, 0, 0]}
        scale={[0.588, 1.066, 0.165]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体131.geometry}
        material={nodes.立方体131.material}
        position={[-133.179, 624.052, -20.15]}
        rotation={[-0.224, 1.571, 0]}
        scale={[0.759, 0.884, 3.153]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体132.geometry}
        material={materials['マテリアル.230']}
        position={[-135.426, 622.322, -26.822]}
        rotation={[-0.224, 0, 0]}
        scale={[0.588, 1.066, 0.165]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体133.geometry}
        material={nodes.立方体133.material}
        position={[-135.446, 622.537, -26.57]}
        rotation={[-0.224, 0, 0]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体134.geometry}
        material={nodes.立方体134.material}
        position={[-135.446, 622.537, -26.57]}
        rotation={[-0.224, 0, 0]}
        scale={[-0.784, -1.184, -0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体135.geometry}
        material={materials['マテリアル.233']}
        position={[-135.414, 625.276, -20.974]}
        rotation={[-0.224, 0, 0]}
        scale={[2.32, 3.545, 6.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体136.geometry}
        material={materials['マテリアル.234']}
        position={[-135.399, 622.419, -26.867]}
        rotation={[-0.238, -0.012, 0.002]}
        scale={[0.497, 0.9, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球102.geometry}
        material={materials['マテリアル.235']}
        position={[-75.848, 625.048, -25.679]}
        rotation={[1.327, 0.025, -0.061]}
        scale={1.228}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球103.geometry}
        material={materials['マテリアル.236']}
        position={[-77.082, 626.808, -25.542]}
        rotation={[1.592, 0.008, 0.004]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球104.geometry}
        material={materials['マテリアル.237']}
        position={[-135.499, 625.252, -27.037]}
        rotation={[1.367, 0.008, 0.004]}
        scale={1.228}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球105.geometry}
        material={materials['マテリアル.238']}
        position={[-135.499, 625.252, -27.037]}
        rotation={[1.367, 0.008, 0.004]}
        scale={1.228}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球106.geometry}
        material={materials['マテリアル.239']}
        position={[-135.499, 625.252, -27.037]}
        rotation={[1.367, 0.008, 0.004]}
        scale={1.228}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球107.geometry}
        material={nodes.球107.material}
        position={[-120.889, 573.131, 1.049]}
        rotation={[-0.697, -0.223, 0.097]}
        scale={[13.533, 20.137, 16.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球108.geometry}
        material={nodes.球108.material}
        position={[-90.988, 568.369, 2.041]}
        rotation={[-0.803, -0.037, -0.075]}
        scale={[13.533, 20.137, 16.537]}
      />
      <group
        position={[-105.348, 600.691, -11.078]}
        rotation={[-0.196, -0.028, -0.012]}
        scale={18.043}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球117.geometry}
          material={materials['マテリアル.240']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球117_1.geometry}
          material={materials['マテリアル.230']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球110.geometry}
        material={nodes.球110.material}
        position={[-104.927, 581.979, -5.415]}
        rotation={[-0.303, -0.043, -0.041]}
        scale={[22.554, 18.043, 18.043]}
      />
      <group
        position={[-80.98, 596.717, -8.817]}
        rotation={[1.815, 0.064, -0.256]}
        scale={[10.689, 15.432, 12.796]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球120.geometry}
          material={materials['マテリアル.242']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球120_1.geometry}
          material={materials['マテリアル.243']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球113.geometry}
        material={nodes.球113.material}
        position={[-125.27, 597.67, -6.955]}
        rotation={[1.633, -0.128, -0.155]}
        scale={[10.689, 15.432, 12.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面029.geometry}
        material={nodes.平面029.material}
        position={[-75.763, 628.126, -19.744]}
        rotation={[-0.266, 0.064, 0.018]}
        scale={[1.183, 2.296, 3.954]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面030.geometry}
        material={nodes.平面030.material}
        position={[-135.81, 628.082, -20.988]}
        rotation={[-0.224, 0, 0]}
        scale={[1.183, 2.296, 3.954]}
      />
      <group
        position={[-94.386, 542.248, 24.455]}
        rotation={[-2.65, -1.53, -1.572]}
        scale={[15.222, 8.138, 8.138]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.平面036.geometry}
          material={materials['マテリアル.244']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.平面036_1.geometry}
          material={materials['マテリアル.245']}
        />
      </group>
      <group
        position={[-122.581, 557.591, 34.201]}
        rotation={[-3.094, -1.517, -1.509]}
        scale={[15.222, 8.138, 8.138]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.平面037.geometry}
          material={materials['マテリアル.246']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.平面037_1.geometry}
          material={materials['マテリアル.245']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面033.geometry}
        material={nodes.平面033.material}
        position={[-135.81, 628.082, -20.988]}
        rotation={[-0.224, 0, 0]}
        scale={[1.183, 2.296, 3.954]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面034.geometry}
        material={nodes.平面034.material}
        position={[-135.81, 628.082, -20.988]}
        rotation={[-0.224, 0, 0]}
        scale={[1.183, 2.296, 3.954]}
      />
      <group
        position={[-75.736, 625.056, -25.74]}
        rotation={[0, -1.504, -1.305]}
        scale={[-1.327, -0.78, -1.517]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱142_1.geometry}
          material={materials['マテリアル.248']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱142_2.geometry}
          material={materials['マテリアル.248']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱139.geometry}
        material={materials['マテリアル.221']}
        position={[-72.649, 623.818, -21.035]}
        rotation={[-3.124, -0.073, 1.574]}
        scale={[-1.663, -0.4, -1.604]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱140.geometry}
        material={materials['マテリアル.249']}
        position={[-72.496, 623.767, -21.083]}
        rotation={[-3.124, -0.073, 1.574]}
        scale={[-1.455, -0.35, -1.404]}
      />
      <group
        position={[-77.059, 626.812, -25.552]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[-0.261, -0.153, -0.298]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱145_1.geometry}
          material={materials['マテリアル.250']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱145_2.geometry}
          material={materials['マテリアル.250']}
        />
      </group>
      <group
        position={[-135.384, 625.262, -27.091]}
        rotation={[1.346, -Math.PI / 2, 0]}
        scale={[-1.327, -0.78, -1.517]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱146_1.geometry}
          material={materials['マテリアル.251']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱146_2.geometry}
          material={materials['マテリアル.251']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱143.geometry}
        material={materials['マテリアル.224']}
        position={[-137.601, 624.429, -19.833]}
        rotation={[-0.508, 0, -Math.PI / 2]}
        scale={[-1.663, -0.4, -1.604]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱144.geometry}
        material={materials['マテリアル.252']}
        position={[-137.757, 624.402, -19.777]}
        rotation={[-0.508, 0, -Math.PI / 2]}
        scale={[-1.455, -0.35, -1.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱145.geometry}
        material={nodes.円柱145.material}
        position={[-80.718, 624.134, -19.633]}
        rotation={[-0.401, 0.11, -1.576]}
        scale={[-6.197, -1.491, -5.978]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱146.geometry}
        material={materials['マテリアル.253']}
        position={[-80.17, 623.92, -19.848]}
        rotation={[-0.401, 0.11, -1.576]}
        scale={[-5.423, -1.304, -5.231]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱147.geometry}
        material={materials['マテリアル.254']}
        position={[-131.155, 625.136, -19.162]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-4.711, -1.133, -4.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱148.geometry}
        material={materials['マテリアル.230']}
        position={[-129.79, 625.047, -19.196]}
        rotation={[-2.861, 0.011, 1.607]}
        scale={[-6.197, -1.491, -5.978]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱149.geometry}
        material={nodes.円柱149.material}
        position={[-129.79, 625.047, -19.196]}
        rotation={[-2.861, 0.011, 1.607]}
        scale={[-6.197, -1.491, -5.978]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱150.geometry}
        material={materials['マテリアル.255']}
        position={[-130.371, 624.903, -19.015]}
        rotation={[-2.861, 0.011, 1.607]}
        scale={[-5.423, -1.304, -5.231]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱151.geometry}
        material={materials['マテリアル.256']}
        position={[-80.17, 623.92, -19.848]}
        rotation={[-0.401, 0.11, -1.576]}
        scale={[-5.423, -1.304, -5.231]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱152.geometry}
        material={materials['マテリアル.230']}
        position={[-80.718, 624.134, -19.633]}
        rotation={[-0.401, 0.11, -1.576]}
        scale={[-6.197, -1.491, -5.978]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱153.geometry}
        material={nodes.円柱153.material}
        position={[-108.003, 584.163, 4.893]}
        rotation={[2.274, 0.764, 0.063]}
        scale={[7.818, 18.057, 7.817]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱154.geometry}
        material={nodes.円柱154.material}
        position={[-132.64, 582.896, 0.636]}
        rotation={[1.89, 0.758, 0.09]}
        scale={[7.016, 16.206, 7.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱155.geometry}
        material={nodes.円柱155.material}
        position={[-97.79, 587.984, -14.146]}
        rotation={[-1.139, 1.107, 3.081]}
        scale={[7.829, 17.206, 7.818]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱156.geometry}
        material={nodes.円柱156.material}
        position={[-143.607, 596.027, -11.335]}
        rotation={[-0.487, 1.327, 2.539]}
        scale={[7.829, 17.206, 7.818]}
      />
      <group
        position={[-135.384, 625.262, -27.091]}
        rotation={[1.346, -Math.PI / 2, 0]}
        scale={[-1.327, -0.78, -1.517]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱161_1.geometry}
          material={materials['マテリアル.257']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱161_2.geometry}
          material={materials['マテリアル.257']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱158.geometry}
        material={materials['マテリアル.230']}
        position={[-137.601, 624.429, -19.833]}
        rotation={[-0.508, 0, -Math.PI / 2]}
        scale={[-1.663, -0.4, -1.604]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱159.geometry}
        material={materials['マテリアル.258']}
        position={[-137.757, 624.402, -19.777]}
        rotation={[-0.508, 0, -Math.PI / 2]}
        scale={[-1.455, -0.35, -1.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱160.geometry}
        material={materials['マテリアル.259']}
        position={[-137.757, 624.402, -19.777]}
        rotation={[-0.508, 0, -Math.PI / 2]}
        scale={[-1.455, -0.35, -1.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.円柱161.geometry}
        material={materials['マテリアル.232']}
        position={[-137.601, 624.429, -19.833]}
        rotation={[-0.508, 0, -Math.PI / 2]}
        scale={[-1.663, -0.4, -1.604]}
      />
      <group
        position={[-135.384, 625.262, -27.091]}
        rotation={[1.346, -Math.PI / 2, 0]}
        scale={[-1.327, -0.78, -1.517]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱166.geometry}
          material={materials['マテリアル.260']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.円柱166_1.geometry}
          material={materials['マテリアル.260']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TwistedTorus003.geometry}
        material={nodes.TwistedTorus003.material}
        position={[-105.048, 615.153, -11.897]}
        rotation={[-0.546, 0, 0]}
        scale={[16.974, 8.785, 16.974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球074.geometry}
        material={materials['マテリアル.002']}
        position={[-105.849, 600.801, -11.719]}
        rotation={[-0.211, -0.024, -0.019]}
        scale={18.335}
      />
      <group
        position={[-116.126, 604.56, -7.599]}
        rotation={[-0.193, -0.031, 0.002]}
        scale={16.673}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球129.geometry}
          material={materials['マテリアル.142']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球129_1.geometry}
          material={materials['マテリアル.146']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/宇宙服ライト.glb')


rembrandt

city
