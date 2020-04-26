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
        :active="cubeShow"
        :class="`text-white border-white ${cubeShow ? 'active' : ''}`"
        variant="outline-warning"
        @click="emitGlobalChangeSolid('cube', toggleShow('cubeShow', cubeShow))">
          Solid
      </b-button>
      <b-button
        :active="modelShow"
        :class="`text-white border-white ${modelShow ? 'active' : ''}`"
        variant="outline-warning"
        @click="emitGlobalChangeSolid('model3d', toggleShow('modelShow', modelShow))">
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
      cubeShow: true,
      modelShow: true,
    }
  },
  methods: {
    toggleShow(elSolid, visible) {
      if (visible) {
        this[elSolid] = false;
        return false
      } else {
        this[elSolid] = true;
        return true;
      }
    },
    emitGlobalChangeColor(elementAttribute, attributeValue) {
      EventBus.$emit('update-attributes', { elementAttribute, attributeValue });
    },
    emitGlobalChangeSolid(solidElement, show) {
      EventBus.$emit('update-visible-elements', { solidElement, show });
    }
  }
}
</script>