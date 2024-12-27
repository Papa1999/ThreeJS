import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

/* 
    Initialize the SCENE
*/
const scene = new THREE.Scene();

// Creating and adding object to the scene
const cube = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const cubeMesh = new THREE.Mesh(cube, material);
scene.add(cubeMesh);

/* 
    Initialize and position the CAMERA
*/
const aspectRatio = window.innerWidth / window.innerHeight;
// const camera = new THREE.PerspectiveCamera(
//   75,
//   aspectRatio,
//   0.1,
//   100
// );

const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1 ,
  -1,
  0.1,
  200
);
camera.position.z = 5;

/* 
    Initialize the RENDERER
*/
const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

/* 
    instatiate the ORBITCONTROLS
*/
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

// Displaying in the browser
const renderLoop = () => {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(renderLoop);
};
renderLoop();
