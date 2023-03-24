<script setup lang="ts">
import { ref } from "vue";
import WorkflowDefaultTokenForm from "./builder/WorkflowDefaultTokenForm.vue";

const tab = ref(null);
const items = ref(["Settings", "Who", "When", "Where"]);
const text = ref(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
);
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
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Align -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>

    <v-container>
      <v-row justify="space-around">
        <v-col>
          <v-card class="mb-1">
            <v-card-text class="pa-5">
              <h3 class="title text-h6">Settings</h3>
              <h6 class="text-subtitle-1 text-grey-darken-1">In order to automate tasks on Genesys Cloud and Salesforce, you need to specify the OAuth client to grant the client access to specific protected resources.</h6>
            </v-card-text>
            <v-divider></v-divider>
            <v-expansion-panels class="my-4">

              <v-expansion-panel>
                <v-expansion-panel-title>
                  <v-avatar>
                    <v-img src="/assets/images/apps/genesys.png"></v-img>
                  </v-avatar>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <WorkflowDefaultTokenForm></WorkflowDefaultTokenForm>
                </v-expansion-panel-text>
              </v-expansion-panel>
              
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <v-avatar>
                    <v-img src="/assets/images/apps/sfdc_logo.png"></v-img>
                  </v-avatar>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <WorkflowDefaultTokenForm></WorkflowDefaultTokenForm>
                </v-expansion-panel-text>
              </v-expansion-panel>



            </v-expansion-panels>
          </v-card>
        </v-col>
      </v-row>
    </v-container>


  </div></template>
