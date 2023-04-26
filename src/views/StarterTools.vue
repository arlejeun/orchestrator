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

const selected1 = ref(false)
const selected2 = ref(false)
const variant1 = ref()
const variant2 = ref()

const isHovering3 = ref(true)

const overlay =ref(false)
const overlay1 =ref(false)
const overlay2 =ref(false)
const overlay3 =ref(false)

const selectBox = (name: String) => {
  if (name == 'genesys') {
    selected1.value = true
    variant1.value = true
  }
  if (name == 'salesforce') {
    selected2.value = true
    variant2.value = true
  }
}

const unSelectBox = (name: String) => {
  if (name == 'genesys') {
    selected1.value = false
    variant1.value = false
  }
  if (name == 'salesforce') {
    selected2.value = false
    variant2.value = false
  }
}

</script>

<template>
  <!-- <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb> -->
  <v-row justify="center" align="center" class="my-4">
    <h1 style="color:blue" >Now add data sources to your library</h1>
  </v-row>
  <v-row justify="center" align="center" class="py-4 my-4">
    <h1 style="color:rgb(10 18 81)">Select the tools that help run your business</h1>
  </v-row>
  <v-row justify="center" class="py-4 my-4">
    <v-col cols="3" md="2">
      <v-hover v-slot="{ isHovering, props }">     
      <v-card 
        :border="variant1"
        v-bind="props"
        align="center"
        :style="selected1 ? 'border: 3px solid blue;' : 'border: 1px solid white;'"
        height="140"
        >
        <v-card-title>
        </v-card-title>
        <v-card-text justify="center">
          <!-- <v-icon justify="end" v-show="selected1" size="x-small">mdi-check</v-icon> -->
          <v-img src="/assets/images/apps/ccaas/genesys-1.png" width="200" height="100"></v-img>
          <!-- <span justify="center">Number of Sales Qualified Leads</span>
          <br />
          <br /> -->
          <br />
          <!-- <v-btn color="blue">Let's Go!</v-btn> -->

        </v-card-text>
     
      <v-overlay
          :model-value="isHovering"
          contained
          scrim="#036358"
          class="align-end justify-center"
        >
          <v-btn v-show="!selected1" color="blue" variant="flat" @click="selectBox('genesys')">Select</v-btn>
          <v-btn v-show="selected1" color="blue" variant="flat" @click="unSelectBox('genesys')">Unselect</v-btn>
        </v-overlay>
      </v-card>
      </v-hover>
    </v-col>


    

    <v-col cols="3" md="2">
      <v-hover v-slot="{ isHovering, props }">     
      <v-sheet>
      <v-card 
       v-bind="props"
        align="center" 
        height="140"
        :style="selected2 ? 'border: 3px solid blue;' : 'border: 1px solid white;'"
      >
        <v-card-title align="right">
          
        </v-card-title>
        <v-card-text justify="center">
          <!-- <v-icon justify="end" v-show="selected2" size="x-small">mdi-check</v-icon> -->
          <v-img src="/assets/images/apps/crms/salesforce.png" width="200" height="100"></v-img>
          <!-- <span justify="center">Number of Sales Qualified Leads</span>
          <br />
          <br /> -->
          <br />
          <!-- <v-btn color="blue">Let's Go!</v-btn> -->

        </v-card-text>
     
      <v-overlay
          :model-value="isHovering"
          contained
          scrim="#036358"
          class="align-end justify-center"
        >
        <v-btn v-show="!selected2" color="blue" variant="flat" @click="selectBox('salesforce')">Select</v-btn>
        <v-btn v-show="selected2" color="blue" variant="flat" @click="unSelectBox('salesforce')">Unselect</v-btn>
        </v-overlay>
      </v-card>
    </v-sheet>
      </v-hover>
    </v-col>



    <v-col cols="3" md="2">
      <v-hover v-slot="{ isHovering, props }">    
      <v-card 
        :border="variant1"
        v-bind="props"
        align="center"
        height="140"
        >
        <v-card-title align="right">
        </v-card-title>
        <v-card-text justify="center">
          <v-img src="/assets/images/apps/ccaas/amazonconnect.png" width="200" height="100"></v-img>
          <!-- <span justify="center">Number of Sales Qualified Leads</span>
          <br />
          <br /> -->
          <br />
          <!-- <v-btn color="blue">Let's Go!</v-btn> -->

        </v-card-text>
     
      <v-overlay
          disabled
          :model-value="isHovering"
          contained
          scrim="#036358"
          class="align-end justify-center"
        >
        <v-btn color="red" variant="flat">Coming soon</v-btn>

        </v-overlay>
      </v-card>
      </v-hover>
    </v-col>
    
    
    <v-col cols="3" md="2">
      <v-hover v-slot="{ isHovering, props }">    
      <v-card 
        :border="variant1"
        v-bind="props"
        align="center"
        height="140"
        >
        <v-card-title align="right">
        </v-card-title>
        <v-card-text justify="center">
          <v-img src="/assets/images/apps/cases/servicenow.png" width="200" height="100"></v-img>
          <!-- <span justify="center">Number of Sales Qualified Leads</span>
          <br />
          <br /> -->
          <br />
          <!-- <v-btn color="blue">Let's Go!</v-btn> -->

        </v-card-text>
     
      <v-overlay
          disabled
          :model-value="isHovering"
          contained
          scrim="#036358"
          class="align-end justify-center"
        >
        <v-btn color="red" variant="flat">Coming soon</v-btn>
        </v-overlay>
      </v-card>
      </v-hover>
    </v-col>

    
    
  </v-row>

  <v-row justify="center" class="py-4 my-4">
    

    <v-col cols="3" md="2">
      <v-hover v-slot="{ isHovering, props }">    
      <v-card 
        :border="variant1"
        v-bind="props"
        align="center"
        height="140"
        >
        <v-card-title align="right">
        </v-card-title>
        <v-card-text justify="center">
          <v-img src="/assets/images/apps/ccaas/talkdesk.png" width="200" height="100"></v-img>
          <!-- <span justify="center">Number of Sales Qualified Leads</span>
          <br />
          <br /> -->
          <br />
          <!-- <v-btn color="blue">Let's Go!</v-btn> -->

        </v-card-text>
     
      <v-overlay
          disabled
          :model-value="isHovering"
          contained
          scrim="#036358"
          class="align-end justify-center"
        >
        <v-btn color="red" variant="flat">Coming soon</v-btn>
        </v-overlay>
      </v-card>
      </v-hover>
    </v-col>


    <v-col cols="3" md="2">
      <v-hover v-slot="{ isHovering, props }">    
      <v-card 
        :border="variant1"
        v-bind="props"
        align="center"
        height="140"
        >
        <v-card-title align="right">
        </v-card-title>
        <v-card-text justify="center">
          <v-img src="/assets/images/apps/ccaas/five9.png" width="200" height="100"></v-img>
          <!-- <span justify="center">Number of Sales Qualified Leads</span>
          <br />
          <br /> -->
          <br />
          <!-- <v-btn color="blue">Let's Go!</v-btn> -->

        </v-card-text>
     
      <v-overlay
          disabled
          :model-value="isHovering"
          contained
          scrim="#036358"
          class="align-end justify-center"
        >
        <v-btn color="red" variant="flat">Coming soon</v-btn>
        </v-overlay>
      </v-card>
      </v-hover>
    </v-col>



    <v-col cols="3" md="2">
      <v-hover v-slot="{ isHovering, props }">    
      <v-card 
        :border="variant1"
        v-bind="props"
        align="center"
        height="140"
        >
        <v-card-title align="right">
        </v-card-title>
        <v-card-text justify="center">
          <v-img src="/assets/images/apps/crms/dynamics.png" width="200" height="100"></v-img>
          <!-- <span justify="center">Number of Sales Qualified Leads</span>
          <br />
          <br /> -->
          <br />
          <!-- <v-btn color="blue">Let's Go!</v-btn> -->

        </v-card-text>
     
      <v-overlay
          disabled
          :model-value="isHovering"
          contained
          scrim="#036358"
          class="align-end justify-center"
        >
        <v-btn color="red" variant="flat">Coming soon</v-btn>
        </v-overlay>
      </v-card>
      </v-hover>
    </v-col>
    
    
    <v-col cols="3" md="2">
      <v-hover v-slot="{ isHovering, props }">    
      <v-card 
        :border="variant1"
        v-bind="props"
        align="center"
        height="140"
        >
        <v-card-title align="right">
        </v-card-title>
        <v-card-text justify="center">
          <v-img src="/assets/images/apps/crms/netsuite.png" width="200" height="100"></v-img>
          <!-- <span justify="center">Number of Sales Qualified Leads</span>
          <br />
          <br /> -->
          <br />
          <!-- <v-btn color="blue">Let's Go!</v-btn> -->

        </v-card-text>
     
      <v-overlay
          disabled
          :model-value="isHovering"
          contained
          scrim="#036358"
          class="align-end justify-center"
        >
        <v-btn color="red" variant="flat">Coming soon</v-btn>
        </v-overlay>
      </v-card>
      </v-hover>
    </v-col>

    
    
  </v-row>
<v-row class="my-6" justify="center">
  <v-btn color="blue" variant="flat" to="/library">Continue</v-btn>
</v-row>
</template>
