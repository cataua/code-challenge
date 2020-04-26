<template>
  <div id="stage">
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>0
    </a-scene>
  </div>
</template>

<script>
import AFrame from 'aframe';

  export default {
    name: 'Stage',
    components: {

    },
    props: {
      stageProps: {
        type: Object,
        required: false,
        default: () => {},
      },
    },
    data() {
      return {
        dados: null,
        sceneObject: undefined,
      }
    },
    methods: {
      init() {
        const stageScene = document.querySelector('#stage');
        AFrame.registerComponent('stage-scene', {
          init: function() {
            console.log('Scene', stageScene);
            // this.entities = stageScene;
          }
        })
      }
    },
    mounted() {
      this.init()
    },
    created() {
      this.sceneObject = () => {`<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>0`};
    }
  }
</script>

<style>
#stage {
  position: relative;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  height: 80vh;
  width: 80vw;
  overflow: auto;
  border: 1px solid #000;
}
</style>