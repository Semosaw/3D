import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, model;

init();
animate();

function init() {
  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1.5, 3);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5).normalize();
  scene.add(light);

  // Load Model
  const loader = new GLTFLoader();
  loader.load('/path/to/宇宙服ライト.glb', function (gltf) {
    model = gltf.scene;
    model.position.set(-135.399, 622.419, -26.867);
    model.rotation.set(-0.238, -0.012, 0.002);
    model.scale.set(0.497, 0.9, 0.139);
    scene.add(model);

    const mesh2 = new THREE.Mesh(
      gltf.scene.children[0].geometry,
      gltf.scene.children[0].material
    );
    mesh2.position.set(-135.446, 622.537, -26.57);
    mesh2.rotation.set(-0.224, 0, 0);
    mesh2.scale.set(-0.784, -1.184, -0.611);
    scene.add(mesh2);
  });

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
