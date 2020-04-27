<template>
    <a-scene fog loading-screen="dotsColor: white; backgroundColor: black">
      <a-assets>
        <img id="ground" :src="`${publicPath}textures/square.jpg`">
      </a-assets>
      <component
        :is="sceneObject"
        :position="position"
        :rotation="rotation"
        :color="color">
      </component>

      <a-entity 
        :position="position3D"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 100000">
      <model3D
        :texture="texture"
        id="monkey-model"
        :color="color" />
      </a-entity>

      <a-sky color="#576a80"></a-sky>
      <a-light type="hemisphere" colo="#ff00ff" intensity="1"></a-light> 
      <a-light type="spot" intensity="1" color="#fcef8d" position="0 10 0" rotation="-90 0 0"></a-light>
      <a-light type="spot" intensity="1" color="blue" position="0 3 1" rotation="0 0 -90"></a-light>
      <a-light type="point" intensity="3" color="#ffffff" position="2 0 0" rotation="0 -90 0"></a-light>
      <a-light type="point" color="yellow" intensity="0.2" position="2 1 -2"></a-light>
      <a-plane height="30" width="100" color="gray" src="#ground" rotation="-90 0 0"></a-plane>
    </a-scene>
</template>

<script>
import Cube from './solids/cube'
import model3D from './3d/model3d'

  export default {
    name: 'Stage',
    components: {
      Cube,
      model3D,
    },
    props: ['color', 'rotation', 'position', 'texture' ],
    data() {
      return {
        textureRefresh: 0,
        sceneObject: Cube,
        position3D: '0 1.8 -5',
      }
    },
    computed: {
      colorUpdate() {
        return this.color;
      },
    },
    watch: {
      texture: function(newValue) {
        this.applyTexture(newValue);
      }
    },
    methods: {
      applyTexture(isToRefresh) {
          if (isToRefresh) {
            const obj = document.getElementById('monkey-model');
            obj.click();
          }
      },
    },
}
</script>

<style>
#stage {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: auto;
  border: 1px solid #000;
}
</style>