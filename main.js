// Basic 3 Components

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Creating a 3D object with material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// Adding it to the scene
scene.add(cube);

// Positionning the camera
camera.position.z = 5;

// Rendering 
function animate() {
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
