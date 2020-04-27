<template>
  <b-container fluid>
    <div id="stage">
      <Stage
        :color="color"
        :rotation="rotation"
        :position="position"
        :animation="animation"
        :radius="radius"
        :colors="colors"
        :texture="applyTexture" />
    </div>
    <b-row align-h="center" align-v="center" class="p-3 commands">
      <b-col>
        <btn-actions :colors="colors" :texturized="applyTexture" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { EventBus } from './eventBus/event-bus';
import Colors from './mixins/colors';
import Stage from './components/Stage';
import btnActions from './components/btnActions';

export default {
  name: 'App',
  mixins: [ Colors ],
  components: {
    Stage,
    btnActions,
  },
  data() {
    return {
      color: 'gray',
      rotation: '0 45 0',
      position: '0 1 -3',
      applyTexture: false,
      animation: null,
      radius: null,
      colors: Object,
    }
  },
  methods: {
    defineColorsPallete() {
      const { warning, info, danger, success } = this.$data;
      this.colors = { warning, info, danger, success };
    },
    pickRandom() {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      if (randomColor.length === 6) {
        return `#${randomColor}`;
      }
      this.pickRandom();
    },
  },
  created() {
    this.defineColorsPallete();
    EventBus.$on('update-attributes', ({ elementAttribute, attributeValue }) => {
      if (attributeValue === 'random') {
        this[elementAttribute] = this.pickRandom(this.colors);
      } else {
        this[elementAttribute] = attributeValue;
      }
      });
    EventBus.$on('apply-texture', (textureApplied) => {
      this.applyTexture = !textureApplied;
    });
  }
}
</script>

<style>
.commands {
  z-index: 2;
}
</style>
