import AFRAME from 'aframe'
import * as THREE from 'three'

const stageScene = document.querySelector('#stage');
AFRAME.registerComponent('stage-scene', {
  init: function() {
    console.log('Scene', stageScene);
  }
});

AFRAME.registerComponent('modify-monkey', {
  schema: {
    color: {default: '#ffd5ff'},
  },
  init: function() {
    this.el.addEventListener('model-loaded', () => {
      const obj = this.el.getObject3D('mesh');
      obj.traverse(node => {
        if (node.name == 'Monkey') {
          node.material.color.set('#ffd500');
        }
      })
    })
  },
  update: function() {
    this.el.addEventListener('click', () => {
      const obj = this.el.getObject3D('mesh');
      obj.traverse(node => {
        if (node.name == 'Monkey') {
          console.log('node', node.material);
          node.material.map = new THREE.TextureLoader().load('/textures/square.jpg');
        }
      })
    })
  }
});