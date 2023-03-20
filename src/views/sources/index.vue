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
  { key: 'crms', display: 'CRMs', list: ['salesforce', 'dynamics', 'netsuite'] },
  { key: 'ccaas', display: 'CCaaS', list: ['genesys', 'five9', 'talkdesk', 'amazonconnect'] },
  { key: 'cases', display: 'Case Management', list: ['servicecloud', 'servicenow', 'zendesk'] },
  { key: 'marketing', display: 'Marketing Automation', list: ['adobe', 'hubspot', 'marketo', 'netsuite'] }
])



</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <v-card class="rounded-0">
        <v-tabs v-model="tab" color="secondary" @update:model-value="source = ''">
          <v-tab v-for="(vendor) in vendors" :key="vendor.key" :value="vendor.key">{{vendor.display}}</v-tab>
          <!-- <v-tab value="crms">CRMs</v-tab>
          <v-tab value="marketing">Marketing Automation</v-tab>
          <v-tab value="cases">Case Management</v-tab>
          <v-tab value="ccaas">Apps</v-tab> -->
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item v-for="(vendor) in vendors" :key="vendor.key" :value="vendor.key">
            <v-card-text class="my-0 py-1">

              <v-container fluid>
                <v-row>
                  <v-col md="3" v-for="(val, idx) in vendor.list" :item="val" :key="idx">
                    <VCard variant="outlined" color="info">
                     
                      <v-img :height="80" :src="`assets/images/apps/${vendor.key}/${val}.png`"
                        :lazy-src="`assets/images/apps/${vendor.key}/${val}.png`" aspect-ratio="1" @click="source=val"></v-img>
                     
                        <!-- <v-img :width="200" :height="80" :src="`assets/images/apps/${vendor.key}/${val}.png`"
                         aspect-ratio="1"></v-img> -->
                     
                    </VCard>
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

          </v-window-item>
        </v-window>
      </v-card>
    </v-col>
  </v-row>


  <v-row>
    <v-col>
      <!-- <component :is="currentTabComponent" class="tab"></component> -->
      <SourceGenesys v-if="currentTabComponent == 'source-genesys'" />
      <SourceSalesforce v-if="currentTabComponent == 'source-salesforce'" />
    </v-col>

  </v-row>
</template>
