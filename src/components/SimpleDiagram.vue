<template>
  <v-stage ref="stage" :config="configKonva">
    <v-layer>
      <v-arrow :config="configArrow"></v-arrow>
      <!--<v-circle :config="configCircle"></v-circle>-->
    </v-layer>
  </v-stage>
</template>
<script lang="ts">
import Vue from "vue"

import { Component } from "vue-property-decorator"

@Component
export default class SimpleDiagram extends Vue {
  


  get configKonva() {
    return {
      width: 200,
      height: 200
    }
  }

  get configCircle() {
    return {
      x: 100,
      y: 100,
      radius: 70,
      fill: "red",
      stroke: "black",
      strokeWidth: 4
    }
  }

  get configArrow() {
    return {
      points: [100, 20, 100, 160],
      tension: 1,
      strokeWidth: 10,
      stroke: "black",
      pointerLength : 5,
      pointerWidth : 4
    }
  }

}
</script>