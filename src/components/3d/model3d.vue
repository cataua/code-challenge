<template>
  <a-entity
    :gltf-model="`url(${publicPath}models/3d/monkey.glb)`"
    :position="position3D"
    scale="0.8 0.8 0.8"
    modify-materials
    material="shader: flat; color: green;"
    rotation="0 -45 0">
  </a-entity>
</template>
<script>

export default {
  name: 'Model3D',
  props: ['color'],
  computed: {
    colorModified() {
      this.setColor(this.color);
      return true;
    }
  },
  data() {
    return {
      position3D: '0 1.8 -5',
    }
  },
  methods: {
    setColor(color = 'brown') {
      console.log(color);
    },
  },
  beforeMounted() {
    this.init(this.color);
  }
}
</script>