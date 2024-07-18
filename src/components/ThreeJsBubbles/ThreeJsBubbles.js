import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './threejsbubbles.css';

function ThreeBubbles({ image, minZoom = 2, maxZoom = 10 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    console.log('Mount ref:', mount); // Debug log

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mount.appendChild(renderer.domElement);

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping (inertia)
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = minZoom; // Minimum zoom level
    controls.maxDistance = maxZoom; // Maximum zoom level

    console.log('Renderer:', renderer); // Debug log

    // Add light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 3); // brighter white light    
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, 0).normalize(); // Light from above
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1, 100);
    pointLight1.position.set(0, 10, 0); // Light from directly above
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.8, 100);
    pointLight2.position.set(5, 10, 5); // Additional light from above at an angle
    scene.add(pointLight2);

    // Check for valid image
    if (!image || !image.src) {
      console.warn('No valid image provided.');
      return;
    }

    console.log('Loading image:', image.src); // Debug log for image loading

    const texture = new THREE.TextureLoader().load(image.src, (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(4, 4); // Adjust the number of repetitions
    });

    const geometry = new THREE.SphereGeometry(1, 32, 32); // Radius set to 1

    const material = new THREE.MeshStandardMaterial({ 
      map: texture, 
      transparent: false, 
      opacity: 1, // Make the image fully opaque
      side: THREE.DoubleSide, // Render both sides of the sphere
      roughness: 0.7, // Make the material less shiny
      metalness: 0.5, // Add some metallic effect
    });

    const bubble = new THREE.Mesh(geometry, material);
    scene.add(bubble);

    console.log('Bubble:', bubble); // Debug log for bubble

    // Camera position
    camera.position.z = 5;

    let lastTime = 0;
    const rotationSpeed = 0.0001; // Adjust this value to control the rotation speed

    // Animation loop
    const animate = (time) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      requestAnimationFrame(animate);
      bubble.rotation.x += rotationSpeed * deltaTime;
      bubble.rotation.y -= rotationSpeed * deltaTime;
      controls.update(); // Update the controls
      renderer.render(scene, camera);
    };
    animate(0);

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
      controls.dispose();
    };
  }, [image, minZoom, maxZoom]);

  return (
    <div
      className="three-bubbles-container"
      ref={mountRef}
    />
  );
}

export default ThreeBubbles;
