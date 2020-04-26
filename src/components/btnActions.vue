<template>
  <div class="d-flex justify-content-around">
    <b-button-group size="sm">
      <b-button
        variant="success" 
        class="border-white"
        @click="emitGlobalChangeColor('color', colors.success)">
          Color 1
      </b-button>
      <b-button
        variant="warning"
        class="border-white"
        @click="emitGlobalChangeColor('color', colors.warning)">
          Color 2
      </b-button>
      <b-button
        variant="info"
        class="border-white"
        @click="emitGlobalChangeColor('color', colors.info)">
          Color 3
      </b-button>
      <b-button
        variant="outline-secondary"
        class="text-white border-white"
        @click="emitGlobalChangeColor('color', 'random')">
          Color random
      </b-button>
      <b-button
        variant="outline-primary"
        class="text-white border-white"
        @click="emitGlobalChangeTexture(true)">
        Apply texture
      </b-button>
    </b-button-group>
    <b-button-group size="sm">
      <b-button
        variant="outline-primary"
        @click="emitGlobalChangeSolid('cube')">
          Solid
      </b-button>
      <b-button
      variant="outline-primary"
      @click="emitGlobalChangeSolid('model3d')">
        Model
      </b-button>
    </b-button-group>
  </div>
</template>
<script>
import { EventBus } from '../eventBus/event-bus';

export default {
  props: {
    colors: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      btnValue: null,
      btnColor: null,
    }
  },
  methods: {
    emitGlobalChangeColor(elementAttribute, attributeValue) {
      EventBus.$emit('update-attributes', { elementAttribute, attributeValue });
    }
  }
}
</script>