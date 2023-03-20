<script setup lang="ts">
const items = [
  { text: 'Contacts', icon: 'mdi-account-switch' },
  { text: 'Lead', icon: 'mdi-account-star' },
  { text: 'Open Opportunities', icon: 'mdi-crosshairs-gps' },
  {text: 'Organization', icon: 'mdi-hexagon'}
]
</script>

<template>
  <div class="salesforce-config">
    <v-row>
    <v-col md="3">
    <v-card class="rounded-0" max-width="250">
      <v-list>
        <v-list-subheader>SALESFORCE</v-list-subheader>

        <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-color="primary" rounded="shaped">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
    </v-col>
    <v-col md="9">
    <v-card class="rounded-0" max-width="100%">
      
    </v-card>
    </v-col>
    </v-row>
  </div>
</template>
