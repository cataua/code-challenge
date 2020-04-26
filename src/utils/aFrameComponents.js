import AFRAME from 'aframe'

const stageScene = document.querySelector('#stage');
AFRAME.registerComponent('stage-scene', {
  init: function() {
    console.log('Scene', stageScene);
  }
});

AFRAME.registerComponent('modify-materials', {
  init: function() {
    this.el.addEventListener('model-loaded', () => {
      const obj = this.el.getObject3D('mesh');
      obj.traverse(node => {
        if (node.name == 'Monkey') {
          console.log(this.color);
          node.material.color.set('brown');
        }
      })
    })
  }
});