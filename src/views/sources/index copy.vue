<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import SourceGenesys from "@/components/SourceGenesys.vue";
import SourceSalesforce from "@/components/SourceSalesforce.vue";
import { computed } from "@vue/reactivity";

const page = ref({ title: "Sources" });
const breadcrumbs = ref([
  {
    text: "List of curated data sources you can leverage to personalize your orchestration",
    disabled: false,
    to: "#",
  }
]);
const tab = ref()
const source = ref()
const currentTabComponent = computed(() => {
  return 'source-' + source.value 
})

const vendors = ref([
 {key: 'crms', display: 'CRMs', list: ['salesforce', 'dynamics', 'netsuite']},
 {key: 'ccaas', display: 'CCaaS', list: ['genesys', 'five9', 'talkdesk', 'amazonconnect']},
 {key: 'cases', display: 'Case Management', list: ['servicecloud', 'servicenow', 'zendesk']},
 {key: 'marketing', display: 'Marketing Automation', list:['adobe', 'hubspot', 'marketo', 'netsuite']}
])

const vendorsTotal = vendors.value.length



</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <v-card class="rounded-0">
        <v-tabs v-model="tab" color="secondary" @update:model-value="source=''">
          <v-tab v-for="(vendor) in vendors" :key="vendor.key" :value="vendor.key">{{vendor.display}}</v-tab>
          <!-- <v-tab :value="2">CRMs</v-tab>
          <v-tab :value="3">Marketing Automation</v-tab>
          <v-tab :value="4">Case Management</v-tab>
          <v-tab :value="5">Apps</v-tab> -->
        </v-tabs>

          <v-window v-model="tab" v-for="(vendor) in vendors" :key="vendor.key">
            <v-window-item :value="vendor.key">
              <v-container fluid>
              <v-row>
                <v-col md="3" v-for="val in vendor.list" >
                  <VCard variant="outlined" color="info">
                    <v-img :width="200"  
                    :src="`assets/images/apps/${vendor.key}/${val}.png`"
                    @click="source=val">
                    
                  </v-img>
                  </VCard>
                </v-col>
                
              </v-row>
              </v-container>
            </v-window-item>
        </v-window>
      </v-card>
    </v-col>
  </v-row>


  <v-row>
    <v-col>
    <!-- <component :is="currentTabComponent" class="tab"></component> -->
    <SourceGenesys v-if="currentTabComponent=='source-genesys'"/>
    <SourceSalesforce v-if="currentTabComponent=='source-salesforce'"/>
    </v-col>
    
  </v-row>
</template>
