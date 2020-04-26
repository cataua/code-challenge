<template>
    <!-- <a-box :position="position" :rotation="rotation" :color="color">
    </a-box> -->
    <a-entity
      id="box"
      :position="position"
      :rotation="rotation"
      geometry="primitive: box"
      :material="`color: ${color}`">
    </a-entity>
</template>
<script>
export default {
  name: 'Cube',
  props: {
    position: {
      required: false,
      default: () => {'-1 0.5 -3'}
    },
    rotation: {
      required: false,
      default: () => {'0 15 5'}
    },
    color: {
      required: false,
      default: () => {'gray'}
    }
  },
}
</script>