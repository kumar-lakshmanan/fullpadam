<template>
  <Splitter style="height: 100vh" layout="vertical" :gutterSize="2" :pt="{
        gutterHandler: {
//          style: 'display: none'
          style: 'pointer-events: none'
        },
        gutter: {
//          style: 'display: none'
          style: 'pointer-events: none'
        },        
      }">      
      <SplitterPanel class="flex align-items-center justify-content-center" :size="5" :minSize="5">
          <HeaderBar/>
      </SplitterPanel>
      <SplitterPanel class="flex align-items-center justify-content-center" :size="95"> 
        <Splitter :gutterSize="2">
            <SplitterPanel class="flex align-items-center justify-content-center" :size="10" :minSize="10"> 
                <PaletteBar/>
            </SplitterPanel>
            <SplitterPanel class="flex align-items-center justify-content-center" :size="75"> 
              <Splitter style="height: 100vh" layout="vertical" :gutterSize="2">
                <SplitterPanel class="flex align-items-center justify-content-center" :size="85"> 
                  <FlowDesigner/>   
                </SplitterPanel>
                <SplitterPanel class="flex align-items-center justify-content-center" :size="15" :minSize="10">
                  <LogBar/>
                </SplitterPanel> 
              </Splitter>
            </SplitterPanel>
            <SplitterPanel class="flex align-items-center justify-content-center" :size="15"> 
                <PropertyBar/>
            </SplitterPanel>
        </Splitter>
      </SplitterPanel>
  </Splitter>
</template>

<script>
import FlowDesigner from './components/FlowDesigner.vue'
import PaletteBar from './components/PaletteBar.vue'
import PropertyBar from './components/PropertyBar.vue';
import LogBar from './components/LogBar.vue';
import HeaderBar from './components/HeaderBar.vue';

export default {
  name: 'App',

  components: {
    PaletteBar,
    FlowDesigner,
    PropertyBar,
    LogBar,
    HeaderBar
  },

  mounted() {
       
    },
  
  data() {
        return {
            nodes: null,
            expandedKeys: {}            
        };
    },
  computed:{

    },
  methods: {

    }   

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.33.2/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.33.2/dist/theme-default.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css';

html,
body,
#app {
  margin: 0;
  height: 100%;
}

#app {
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.basicflow.dark{background:#000000;color:#fffffb}.basicflow.dark .vue-flow__node{background:hsl(0,0%,10%);color:#fffffb}.basicflow.dark .vue-flow__node.selected{background:hsl(0,0%,20%);border:1px solid hotpink}.basicflow .vue-flow__controls{display:flex;flex-wrap:wrap;justify-content:center}.basicflow.dark .vue-flow__controls{border:1px solid #FFFFFB}.basicflow .vue-flow__controls .vue-flow__controls-button{border:none;border-right:1px solid #eee}.basicflow.dark .vue-flow__controls .vue-flow__controls-button{background:hsl(0,0%,20%);fill:#fffffb;border:none}.basicflow.dark .vue-flow__controls .vue-flow__controls-button:hover{background:hsl(0,0%,30%)}.basicflow.dark .vue-flow__edge-textbg{fill:#292524}.basicflow.dark .vue-flow__edge-text{fill:#fffffb}

.dndflow{flex-direction:column;display:flex;height:100%}.dndflow aside{color:#fff;font-weight:700;border-right:1px solid #eee;padding:15px 10px;font-size:12px;background:rgba(16,185,129,.75);-webkit-box-shadow:0px 5px 10px 0px rgba(0,0,0,.3);box-shadow:0 5px 10px #0000004d}.dndflow aside .nodes>*{margin-bottom:10px;cursor:grab;font-weight:500;-webkit-box-shadow:5px 5px 10px 2px rgba(0,0,0,.25);box-shadow:5px 5px 10px 2px #00000040}.dndflow aside .description{margin-bottom:10px}.dndflow .vue-flow-wrapper{flex-grow:1;height:100%}@media screen and (min-width: 640px){.dndflow{flex-direction:row}.dndflow aside{min-width:25%}}@media screen and (max-width: 639px){.dndflow aside .nodes{display:flex;flex-direction:row;gap:5px}}

</style>