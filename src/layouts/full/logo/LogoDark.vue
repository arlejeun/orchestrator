<!-- <template>
  <div class="logo">
    <RouterLink to="/">
      <img src="../../../assets/images/logos/sabohc-logo-3.svg"/>
      <span><p>Orchestrator</p></span>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script> -->

<template>
  <div class="logo">
      <v-row class="pa-2 justify-start align-middle inline-flex">
        <RouterLink to="/">
        <img src="../../../assets/images/logos/sabohc-logo-3.svg"/>
        </RouterLink>
        <!-- <v-img :height="40" :src="`assets/images/logos/sabohc-logo-3.svg`" :aspect-ratio="1"/> -->
          <v-label v-show="!customizer.mini_sidebar" class="pa-2">SABOHC</v-label>
      </v-row>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useCustomizerStore } from "../../../stores/customizer";
const customizer = useCustomizerStore();
</script>