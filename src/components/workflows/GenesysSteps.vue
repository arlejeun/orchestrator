<script setup lang="ts">
import { ref } from "vue";
import GenesysStepsSettings from '@/components/workflows/GenesysStepSettings.vue'

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

const outcomeScore = ref(65)
const slider4 = ref(50)
const satisfactionEmojis = ref(['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'])

</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Align -->
<!-- ----------------------------------------------------------------------------- -->
<div>
  <p class="text-subtitle-1 text-grey-darken-1">
    You can optionally change the color of the v-system-bar by using the color
      prop.
    </p>
    <div class="mt-6">
      <v-card class="rounded-0">
        <v-toolbar color="grey">
          <v-avatar class="ms-2" color="">
            <v-img src="/assets/images/apps/genesys.png"></v-img>
          </v-avatar>
          <v-avatar class="ms-2" color="">
            <v-img src="/assets/images/apps/sfdc_logo.png"></v-img>
          </v-avatar>
          <v-toolbar-title>Genesys x Saleforce</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon color="white">mdi-dots-vertical</v-icon>
          </v-btn>

          <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
              <v-tab v-for="item in items" :key="item" :value="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-window v-model="tab">
          <!-- <v-window-item v-for="item in items" :key="item" :value="item">
                  <v-card flat>
                    <v-card-text v-text="text"></v-card-text>
                  </v-card>
                </v-window-item> -->

          <v-window-item value="Settings">
            <v-card flat>
              <v-card-text>
                <GenesysStepsSettings />
              </v-card-text>
            </v-card>
          </v-window-item>

          <v-window-item value="Who">
            <v-card flat>
              <v-card-text class="pa-5 border-bottom">
                <v-container>
                  <v-row justify="space-around">
                    <v-col>
                      <v-card class="mb-7">
                        <v-card-text class="pa-5">
                          <h3 class="title text-h6">Ideal Profile</h3>
                          <h6 class="text-subtitle-1 text-grey-darken-1">This is the configuration of the ideal segment to
                            engage with based on Genesys Predictive Engagement and Salesforce leads or contacts.</h6>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="pa-5">
                          <h3 class="title text-h6 pb-4">Predictive Engagement</h3>
                          <v-row>
                            <v-col cols="12" lg="12">
                              <v-row>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <label>Segment</label>
                                </v-col>
                                <v-col cols="12" sm="7">
                                  <v-select label="Pick a segment" hide-details
                                    :items="['Interested', 'Ready to Buy', 'Existing Customer', 'Discount offer']"></v-select>
                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <!-- <label>Last Name</label> -->
                                  <v-btn size="small" icon="mdi-cached" color="info"></v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <label>Outcome</label>
                                </v-col>
                                <v-col cols="12" sm="7">
                                  <v-select label="Select outcome" hide-details
                                    :items="['Signed Purchase Order', 'Qualified Lead']"></v-select>
                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <!-- <label>Last Name</label> -->
                                  <v-btn size="small" icon="mdi-cached" color="info"></v-btn>
                                </v-col>
                              </v-row>
                              <v-row class="pt-5">
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <label>Score</label>
                                </v-col>
                                <v-col cols="12" sm="7">
                                  <v-slider v-model="slider4" thumb-label="always">
                                    <template v-slot:thumb-label="{ modelValue }">
                                      {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
                                    </template>
                                  </v-slider>
                                </v-col>
                              </v-row>
                            </v-col>
                            
                          </v-row>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="pa-5">
                          <h3 class="title text-h6 pb-4">Salesforce Profile</h3>
                          <v-row>
                            <v-col cols="12" lg="12">
                              <v-row>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <label>Contact Type</label>
                                </v-col>
                                <v-col cols="12" sm="7">
                                  <v-select label="Pick targeted type" hide-details
                                    :items="['No Contact', 'Existing Contact', 'Inactive Contact', 'Existing Lead']"></v-select>
                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <!-- <label>Last Name</label> -->
                                  <v-btn size="small" icon="mdi-cached" color="info"></v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <label>Outcome</label>
                                </v-col>
                                <v-col cols="12" sm="7">
                                  <v-select label="Select outcome" hide-details
                                    :items="['Signed Purchase Order', 'Qualified Lead']"></v-select>
                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <!-- <label>Last Name</label> -->
                                  <v-btn size="small" icon="mdi-cached" color="info"></v-btn>
                                </v-col>
                              </v-row>
                              <v-row class="pt-5">
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <label>Score</label>
                                </v-col>
                                <v-col cols="12" sm="7">
                                  <v-slider v-model="slider4" thumb-label="always">
                                    <template v-slot:thumb-label="{ modelValue }">
                                      {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
                                    </template>
                                  </v-slider>
                                </v-col>
                              </v-row>
                            </v-col>
                            
                          </v-row>
                      </v-card-text>
                      <v-divider></v-divider>
                      <div class="pa-5 text-right">
                        <v-btn color="secondary" class="text-capitalize mr-2">Save</v-btn>
                        <v-btn color="primary" class="text-capitalize" dark>Cancel</v-btn>
                      </div>
                    </v-card>
                  </v-col>
                  <!-- <v-col>
                <v-card>
                  <v-img height="200" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg" cover
                    class="text-white">
                      <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                        <template v-slot:prepend>
                            <v-btn icon="$menu"></v-btn>
                          </template>

                          <v-toolbar-title class="text-h6">
                            Messages
                          </v-toolbar-title>

                          <template v-slot:append>
                            <v-btn icon="mdi-dots-vertical"></v-btn>
                          </template>
                        </v-toolbar>
                      </v-img>

                      <v-card-text>
                        <div class="font-weight-bold ms-1 mb-2">
                          Today
                        </div>

                        <v-timeline density="compact" align="start">
                          <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color"
                            size="x-small">
                            <div class="mb-4">
                              <div class="font-weight-normal">
                                <strong>{{ message.from }}</strong> @{{ message.time }}
                              </div>
                              <div>{{ message.message }}</div>
                            </div>
                          </v-timeline-item>
                        </v-timeline>
                      </v-card-text>
                    </v-card>
                  </v-col> -->
                  </v-row>
                </v-container>
              </v-card-text>
              <v-divider></v-divider>

          


            </v-card>
          </v-window-item>


        </v-window>
      </v-card>
    </div>
  </div>
</template>
