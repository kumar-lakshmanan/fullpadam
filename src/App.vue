<template>
  
  <div class="header">
    <div class="logo">
      <img alt="Vue logo" src="./assets/logo.png" height="50px" width="50px">
    </div>
    <div class="menu">
        <!-- Your menu content here -->
    </div>
    <div>
        
        <sl-color-picker></sl-color-picker>
        
    </div>
  </div>

  <div class="mainarea">
    <FlowDesigner/>
  </div>

</template>

<script>
import FlowDesigner from './components/FlowDesigner.vue'

export default {
  name: 'App',
  components: {
    FlowDesigner,
  },
  mounted() {
    const colorPicker = document.querySelector('sl-color-picker');
    colorPicker.swatches = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  }
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.33.2/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.33.2/dist/theme-default.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css';

html, body,
#app {
  margin: 0;
  height: 100%;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  overflow: hidden; 
}

.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.basicflow.dark{background:#000000;color:#fffffb}.basicflow.dark .vue-flow__node{background:hsl(0,0%,10%);color:#fffffb}.basicflow.dark .vue-flow__node.selected{background:hsl(0,0%,20%);border:1px solid hotpink}.basicflow .vue-flow__controls{display:flex;flex-wrap:wrap;justify-content:center}.basicflow.dark .vue-flow__controls{border:1px solid #FFFFFB}.basicflow .vue-flow__controls .vue-flow__controls-button{border:none;border-right:1px solid #eee}.basicflow.dark .vue-flow__controls .vue-flow__controls-button{background:hsl(0,0%,20%);fill:#fffffb;border:none}.basicflow.dark .vue-flow__controls .vue-flow__controls-button:hover{background:hsl(0,0%,30%)}.basicflow.dark .vue-flow__edge-textbg{fill:#292524}.basicflow.dark .vue-flow__edge-text{fill:#fffffb}

.mainflow{
  flex-direction:column;display:flex;height:100%;
}
.mainflow aside{
    color:#fff;font-weight:700;border-right:1px solid #eee;padding:15px 10px;font-size:12px;background:rgba(16,185,129,.75);
    -webkit-box-shadow:0px 5px 10px 0px rgba(0,0,0,.3);box-shadow:0 5px 10px #0000004d;
  }
.mainflow aside .nodes>*{
    margin-bottom:10px;cursor:grab;font-weight:500;
    -webkit-box-shadow:5px 5px 10px 2px rgba(0,0,0,.25);box-shadow:5px 5px 10px 2px #00000040;
  } 
.mainflow aside .description{margin-bottom:10px}
.mainflow .vue-flow-wrapper{flex-grow:1;height:100%}@media screen and (min-width: 640px){
  .mainflow{flex-direction:row}.mainflow aside{min-width:25%}
}
@media screen and (max-width: 639px){.mainflow aside .nodes{display:flex;flex-direction:row;gap:5px;}}

.header {
    height: 10%;
    width: 100%;
    background-color: #333;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    padding: 0 20px;
    position: fixed;
    top: 0;           
}

.mainarea {
    margin-top: 5%;
    height: 90%;
    width: 100%;
    background-color: #f2f2f2;
}

.logo {
    /* Your logo styles here */
    display: flex;
    align-items: center;
}
.header h3 {
    margin-right: 25px; /* Add left margin */
    font-size: 24px;
}
.header .guest {
    font-size: 14px;
    margin-right: -20px; /* Add left margin */
}

</style>
