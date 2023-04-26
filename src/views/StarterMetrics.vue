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
    <h1 style="color:blue" >Let's get started!</h1>
  </v-row>
  <v-row justify="center" align="center" class="py-4 my-4">
    <h1 style="color:rgb(10 18 81)">Choose the top KPIs or metrics you want to measure.</h1>
  </v-row>
  <v-row justify="center" class="py-4 my-4">
    <v-col cols="3" md="2">
      <v-card align="center" >
        <v-card-text justify="center">
          <v-img src="/assets/images/orchestrator/target.png" width="100"></v-img>
          <span justify="center">Number of Sales Qualified Leads</span>
          <br />
          <br />
          <br />
          <v-btn to="/tools" color="blue">Let's Go!</v-btn>

        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" md="2">
      <v-card align="center" >
        <v-card-text justify="center">
          <v-img src="/assets/images/orchestrator/target.png" width="100"></v-img>
          <span justify="center">Number of booked meetings</span>
          <br />
          <br />
          <br />
          <v-btn to="/tools" color="blue">Let's Go!</v-btn>

        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" md="2">
      <v-card align="center" >
        <v-card-text justify="center">
          <v-img src="/assets/images/orchestrator/target.png" width="100"></v-img>
          <span justify="center">Number of new opportunities</span>
          <br />
          <br />
          <br />
          <v-btn to="/tools" color="blue">Let's Go!</v-btn>

        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" md="2">
      <v-card align="center" >
        <v-card-text justify="center">
          <v-img src="/assets/images/orchestrator/target.png" width="100"></v-img>
          <span justify="center">Increase opportunity value</span>
          <br />
          <br />
          <br />
          <v-btn to="/tools" color="blue">Let's Go!</v-btn>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
