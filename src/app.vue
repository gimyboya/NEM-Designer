<template>
  <div class='container'>
    
  <paper class='canvas' ></paper>
  <controlpanel class='panel' ></controlpanel>

  </div>  
</template>

<script>
import paper from './components/paper.vue'
import controlpanel from './components/control-panel.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    paper,
    controlpanel
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
html, body{
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Roboto', sans-serif;
}
.container{
  display: flex;
  flex-direction: column;
}

.canvas {
  background-color: red;
  height: 478px;
}

</style>

