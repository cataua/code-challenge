<template>
    <a-scene fog loading-screen="dotsColor: white; backgroundColor: black">
      <a-assets>
        <img id="ground" :src="`${publicPath}textures/square.jpg`">
      </a-assets>
      <component
        v-if="isElementVisible"
        :is="sceneObject"
        :position="position"
        :rotation="rotation"
        :color="color">
      </component>
      <model3D
        v-if="isElementVisible"
        :color="color" />

      <a-sky color="#0099ff"></a-sky>
      <a-light type="hemisphere" colo="#ff00ff" intensity="0.8"></a-light> 
      <a-light type="spot" intensity="1" color="white" :position="position"></a-light>
      <a-light type="spot" intensity="0.6" color="red" position="1 3 -3"></a-light>
      <a-light type="point" intensity="0.8" color="blue" position="4 0 2"></a-light>
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
    props: ['color', 'rotation', 'position', 'visibleElements' ],
    computed: {
      colorUpdate() {
        return this.color;
      },
    },
    data() {
      return {
        dados: null,
        sceneObject: Cube,
      }
    },
    methods: {
      isElementVisible(el) {
        const elements = this.visibleElements;
        console.log(this.visibleElements);
        return el.sceneObject.name.toLowerCase.includes(elements);
      },
    },
    mounted() {
    },
    created() {
}
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