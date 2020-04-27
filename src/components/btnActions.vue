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
        @click="emitGlobalApplyTexture(texturized)">
        Apply texture
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
    },
    texturized: {
      type: Boolean,
      required: true,
      default: () => false,
    }
  },
  data() {
    return {
      btnValue: null,
      btnColor: null,
      cubeShow: true,
      modelShow: true,
    }
  },
  methods: {
    emitGlobalChangeColor(elementAttribute, attributeValue) {
      EventBus.$emit('update-attributes', { elementAttribute, attributeValue });
    },
    emitGlobalApplyTexture(isToApplyTexture) {
      EventBus.$emit('apply-texture', isToApplyTexture);
    }
  }
}
</script>