
<template>
  <div class="mainflow">
    <VueFlow
      :nodes="nodes"
      :edges="edges"
      :class="{ dark }"
      class="basicflow"
      :default-viewport="{ zoom: 1.5 }"
      :min-zoom="0.2"
      :max-zoom="4"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
    >
      <Background pattern-color="#aaa" :gap="16" />
      <MiniMap />
      <Controls position="top-right">
        <ControlButton title="Reset Transform" @click="resetTransform">
          <Icon name="reset" />
        </ControlButton>
        <ControlButton title="Shuffle Node Positions" @click="updatePos">
          <Icon name="update" />
        </ControlButton>
        <ControlButton title="Toggle Dark Mode" @click="toggleDarkMode">
          <Icon v-if="dark" name="sun" />
          <Icon v-else name="moon" />
        </ControlButton>
        <ControlButton title="Log `toObject`" @click="logToObject">
          <Icon name="log" />
        </ControlButton>
      </Controls>
    </VueFlow>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { ControlButton, Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import { initialEdges, initialNodes } from './initial-elements.js'
import Icon from './IconGroup.vue'

const { onPaneReady, onNodeDragStop, onConnect, addEdges, setViewport, toObject } = useVueFlow()
const nodes = ref(initialNodes)
const edges = ref(initialEdges)
const dark = ref(false)
onPaneReady(({ fitView }) => {
  fitView()
})
onNodeDragStop(({ event, nodes, node, intersections }) => {
  console.log('Node Drag Stop', { event, nodes, node, intersections })
})
onConnect((connection) => {
  addEdges(connection)
})
function updatePos() {
  nodes.value = nodes.value.map((node) => {
    return {
      ...node,
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
    }
  })
}
function logToObject() {
  console.log(toObject())
}
function resetTransform() {
  setViewport({ x: 0, y: 0, zoom: 1 })
}
function toggleDarkMode() {
  dark.value = !dark.value
}
</script>