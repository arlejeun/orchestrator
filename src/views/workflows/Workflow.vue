<script setup lang="ts">
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import WorkflowDefaultConfigureForm from "@/components/workflows/builder/WorkflowDefaultConfigureForm.vue";
import GenesysSteps from "@/components/workflows/GenesysSteps.vue";
import { ref } from 'vue';
import { useRoute } from "vue-router";
const page = ref({ title: "Workflow Detail" });
const route = useRoute()

const breadcrumbs = ref([
  {
    text: "Workflows",
    disabled: false,
    href: "/workflows",
  },
  {
    text: route.params.id,
    disabled: true,
    href: "#",
  },
]);


const messages = [
  {
    from: 'You',
    message: `Sure, I'll see you later.`,
    time: '10:42am',
    color: 'deep-purple-lighten-1',
  },
  {
    from: 'John Doe',
    message: 'Yeah, sure. Does 1:00pm work?',
    time: '10:37am',
    color: 'green',
  },
  {
    from: 'You',
    message: 'Did you still want to grab lunch today?',
    time: '9:47am',
    color: 'deep-purple-lighten-1',
  },
]


</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>

  <div class="workflow-blocks">
    <h1 class="green"></h1>
    Workflow {{ $route.params.id }}

    <GenesysSteps/>

  </div>
</template>
