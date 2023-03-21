const container = document.getElementById("threejs-container");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = Math.PI / 2;
floor.position.y = -0.5;
scene.add(floor);

camera.position.y = 1.5;

const controls = new THREE.PointerLockControls(camera, renderer.domElement);

const onKeyDown = (event) => {
  switch (event.code) {
    case 'ArrowUp':
    case 'KeyW':
      controls.moveForward(0.1);
      break;
    case 'ArrowDown':
    case 'KeyS':
      controls.moveForward(-0.1);
      break;
    case 'ArrowLeft':
    case 'KeyA':
      controls.moveRight(-0.1);
      break;
    case 'ArrowRight':
    case 'KeyD':
      controls.moveRight(0.1);
      break;
  }
};

document.addEventListener('keydown', onKeyDown, false);

const animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
