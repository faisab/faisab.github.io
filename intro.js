// intro.js

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("animation-container").appendChild(renderer.domElement);

// Create particle geometry and material
const particleGeometry = new THREE.Geometry();
const particleMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.02,
  map: new THREE.TextureLoader().load("particle.png"), // Replace "particle.png" with your own particle texture path
  blending: THREE.AdditiveBlending,
  transparent: true,
});

// Create particles and add them to the geometry
for (let i = 0; i < 1000; i++) {
  const particle = new THREE.Vector3(
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10
  );
  particleGeometry.vertices.push(particle);
}

// Create particle system
const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleSystem);

// Position the camera
camera.position.z = 5;

// Animate function
function animate() {
  requestAnimationFrame(animate);

  // Rotate the particle system
  particleSystem.rotation.x += 0.001;
  particleSystem.rotation.y += 0.001;

  // Render the scene
  renderer.render(scene, camera);
}

// Start the animation
animate();
