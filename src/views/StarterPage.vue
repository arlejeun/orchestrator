<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import { useCustomizerStore } from "@/stores/customizer";
const customizer = useCustomizerStore();
customizer.SET_LAYOUT(true)
const page = ref({ title: "Orchestrator Welcome" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    to: "#",
  },
  {
    text: "Business Workflows",
    disabled: true,
  },
]);
</script>

<template>
  <!-- <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb> -->
  <v-row justify="center" align="center" class="my-4">
    <h1 style="color:blue" >Welcome Dan!</h1>
  </v-row>
  <v-row justify="center" align="center" class="py-4 my-4">
    <h1 style="color:rgb(10 18 81)">How would you like to use Orchestrator?</h1>
  </v-row>
  <v-row justify="center" class="py-4 my-4">
    <v-col cols="4" md="3">
      <v-card align="center">
        <v-toolbar color="white" dense flat>
          <v-toolbar-title>Inside Sales</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-img src="/assets/images/orchestrator/inside-sales.png" width="200"></v-img>
          <span>Use Orchestrator to accelerate lead generation, qualification and closing</span>
          <br />
          <br />
          <br />
          <v-btn color="blue" to="/metrics">Let's Go!</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="4" md="3">
      <v-card align="center" >
        <v-toolbar color="white" dense flat>
          <v-toolbar-title>VIP Customer Care</v-toolbar-title>
        </v-toolbar>
        <v-card-text justify="center">
          <v-img src="/assets/images/orchestrator/customer-care.png" width="200"></v-img>
          <span justify="center">Use Orchestrator to simplify VIP customer experience and boost satisfaction</span>
          <br />
          <br />
          <br />
          <v-btn color="blue" to="/metrics">Let's Go!</v-btn>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
