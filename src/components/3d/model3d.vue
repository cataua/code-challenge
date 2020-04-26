<template>
  <a-entity
    :gltf-model="`url(${publicPath}models/3d/dino.glb)`"
    position="2 0 -1"
    scale="3 3 3"
    modify-materials
    material="shader: flat; color: green;"
    rotation="0 -15 0">
  </a-entity>
</template>
<script>

export default {
  name: 'Model3D',
  props: ['color'],
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  methods: {
    init() {
      return true;
    }
  },
  mounted() {
    this.init();
  }
}
</script>