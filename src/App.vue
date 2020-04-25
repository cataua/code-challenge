<template>
  <div id="stage"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'App',
  data() {
    return {
      cube: null,
      camera: null,
      renderer: null,
      scene: null,
    }
  },
  components: {
  },
  methods: {
    init() {
      const stage = document.querySelector('#stage');

      const fov = 75;
      const aspect = 2;  // the canvas default
      const near = 0.1;
      const far = 5;
      this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      this.camera.position.z = 2;

      this.scene = new THREE.Scene();
    
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      this.scene.add(light);
      
      const boxWidth = 1;
      const boxHeight = 1;
      const boxDepth = 1;
      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

      const material = new THREE.MeshPhongMaterial({color: 0xffaa22});  // greenish blue

      this.cube = new THREE.Mesh(geometry, material);
      this.scene.add(this.cube);

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(stage.clientWidth, stage.clientHeight);
      stage.appendChild(this.renderer.domElement);
  },
  render(time) {
    time *= 0.001;  // convert time to seconds

    this.cube.rotation.x = time;
    this.cube.rotation.y = time;
    this.cube.rotation.z = time;

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.render);
  },
  },
  mounted() {
    this.init();
    requestAnimationFrame(this.render);
  }
}
</script>

<style>
#stage {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  display: block;
  height: 100vh;
  border: 1px solid #000;
}
</style>
