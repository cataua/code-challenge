<template>
    <a-scene fog loading-screen="dotsColor: white; backgroundColor: black">
      <component
        :is="sceneObject"
        :position="position"
        :rotation="rotation"
        :color="color">
      </component>
      <model3D :color="color" />

      <a-sky color="#b7bbc5"></a-sky>
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
    props: ['color', 'rotation', 'position' ],
    computed: {
      colorUpdate: function() {
        return this.color;
      } 
    },
    watch: {
      // color: function() {
      //   this.colorUpdate();
      // }
    },
    data() {
      return {
        dados: null,
        sceneObject: Cube,
      }
    },
    methods: {
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