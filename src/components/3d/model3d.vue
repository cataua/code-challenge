<template>
    <a-entity
      :gltf-model="`url(${publicPath}models/3d/monkey.glb)`"
      src="#monkey-texture"
      scale="0.8 0.8 0.8"
      modify-monkey
      :color="color"
      rotation="0 -45 0">
    </a-entity>
</template>
<script>

export default {
  name: 'Model3D',
  props: ['position3D', 'texture', 'color'],
  data() {
    return {
      refreshThis: 0,
    }
  },
  watch: {
    texture: function() {
      this.refreshThis++;
    }
  }
}
</script>