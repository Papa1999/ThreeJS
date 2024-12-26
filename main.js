import * as THREE from "three";

console.log(THREE);
// Initialize the SCENE
const scene = new THREE.Scene();

// Creating and adding object to the scene
const cube = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const cubeMesh = new THREE.Mesh(cube, material);
scene.add(cubeMesh);

// Initialize and position the CAMERA
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 5;

// Initialize the RENDERER
const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({ canvas });

// instatiate the controls
const controls = new THREE.OrbitControls(camera, canvas);
renderer.setSize(window.innerWidth, window.innerHeight);

const renderLoop = () => {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(renderLoop);
};

renderLoop();
