<script setup lang="ts">
import { computed, ref } from "vue";
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

const isOpportunity = ref(false)
const slider1 = ref(50)
const slider2 = ref(50)
const slider3 = ref(50)
const satisfactionEmojis = ref(['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'])

const color1 = computed(() => {
  if (slider1.value < 20) return 'red'
  if (slider1.value < 40) return 'orange'
  if (slider1.value < 60) return 'indigo'
  if (slider1.value < 80) return 'teal'
  return 'green'
})

const color2 = computed(() => {
  if (slider2.value < 20) return 'red'
  if (slider2.value < 40) return 'orange'
  if (slider2.value < 60) return 'indigo'
  if (slider2.value < 80) return 'teal'
  return 'green'
})

const color3 = computed(() => {
  if (slider3.value < 20) return 'red'
  if (slider3.value < 40) return 'orange'
  if (slider3.value < 60) return 'indigo'
  if (slider3.value < 80) return 'teal'
  return 'green'
})

const tickLabels = ref({
  0: '<1k',
  1: '<5k',
  2: '<10k',
  3: '+10k',
})

const increment = () => {

}

const decrement = () => {

}

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
                                  <v-slider v-model="slider1" thumb-label :color="color1" track-color="grey" min="0"
                                    max="100" :step="1">
                                    <template v-slot:prepend>
                                      <v-btn size="small" variant="text" icon="mdi-minus" :color="color1"
                                        @click="decrement"></v-btn>
                                    </template>

                                    <template v-slot:append>
                                      <v-btn size="small" variant="text" icon="mdi-plus" :color="color1"
                                        @click="increment"></v-btn>
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
                                    :items="['No Contact', 'Existing Lead', 'Existing Contact', 'Inactive Contact']"></v-select>
                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <!-- <label>Last Name</label> -->
                                  <v-btn size="small" icon="mdi-cached" color="info"></v-btn>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <!-- <label>Opportunity</label> -->
                                </v-col>
                                <v-col cols="12" sm="3" class="d-flex align-center">
                                  <v-checkbox v-model="isOpportunity" label="Is Opportunity?"
                                    class="d-flex align-center"></v-checkbox>
                                </v-col>

                              </v-row>
                              <v-row v-show="isOpportunity">
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <label>Deal Size</label>
                                </v-col>
                                <v-col cols="12" sm="7">
                                  <v-slider v-model="slider2" :ticks="tickLabels" :max="3" step="1" show-ticks="always"
                                    tick-size="4" track-color="grey">
                                  </v-slider>
                              </v-col>
                            </v-row>
                          </v-col>

                        </v-row>
                      </v-card-text>

                      <v-divider></v-divider>
                      <v-card-text class="pa-5">
                        <h3 class="title text-h6 pb-4">Marketo Profile</h3>
                        <v-row>
                          <v-col cols="12" lg="12">
                            <v-row>
                              <v-col cols="12" sm="2" class="d-flex align-center">
                                <label>Campaign Name</label>
                              </v-col>
                              <v-col cols="12" sm="7">
                                <v-select label="Pick targeted type" hide-details
                                  :items="['N/A', 'Superbowl Ads 2023', 'Forbes Magazine March 2023', 'Tech Magazine February 2023', 'Google Ads']"></v-select>
                              </v-col>
                              <v-col cols="12" sm="2" class="d-flex align-center">
                                <!-- <label>Last Name</label> -->
                                <v-btn size="small" icon="mdi-cached" color="info"></v-btn>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" sm="2" class="d-flex align-center">
                                <label>Segment</label>
                              </v-col>
                              <v-col cols="12" sm="7">
                                <v-select label="Select outcome" hide-details
                                    :items="['Interested', 'Ready to Buy', 'Existing Customer', 'Discount offer']"></v-select>
                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <!-- <label>Last Name</label> -->
                                  <v-btn size="small" icon="mdi-cached" color="info"></v-btn>
                                </v-col>
                              </v-row>
                              <v-row class="pt-5">
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <label>Lead Score</label>
                                </v-col>
                                <v-col cols="12" sm="7">
                                  <v-slider v-model="slider3" thumb-label :color="color3" track-color="grey" min="0"
                                    max="100" :step="1">
                                    <template v-slot:prepend>
                                      <v-btn size="small" variant="text" icon="mdi-minus" :color="color3"
                                        @click="decrement"></v-btn>
                                    </template>

                                    <template v-slot:append>
                                      <v-btn size="small" variant="text" icon="mdi-plus" :color="color3"
                                        @click="increment"></v-btn>
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

          <v-window-item value="When">
            <v-card flat>
              <v-card-text class="pa-5 border-bottom">
                <v-container>
                  <v-row justify="space-around">
                    <v-col>
                      <v-card class="mb-7">
                        <v-card-text class="pa-5">
                          <h3 class="title text-h6">When to engage</h3>
                          <h6 class="text-subtitle-1 text-grey-darken-1">This is the configuration to define when is the
                            best moment to trigger this orchestration.</h6>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="pa-5">
                          <h3 class="title text-h6 pb-4">Channels</h3>
                          <v-row>
                            <v-col cols="12" lg="12">
                              <v-row>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <v-label class="d-flex align-center">Channel</v-label>
                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <v-checkbox label="Voice" class="d-flex align-center"></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="1" class="d-flex align-center">
                                  <label>Start Time</label>
                                </v-col>
                                <v-col cols="12" sm="2">
                                  <v-text-field type="time" single-line hide-details></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="1" class="d-flex align-center">
                                  <label>End Time</label>
                                </v-col>
                                <v-col cols="12" sm="2">
                                  <v-text-field type="time" single-line hide-details></v-text-field>
                                </v-col>

                              </v-row>

                              <v-row>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <!-- <label>Channel</label> -->
                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <v-checkbox label="Messenger" class="d-flex align-center"></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="1" class="d-flex align-center">
                                  <label>Start Time</label>
                                </v-col>
                                <v-col cols="12" sm="2">
                                  <v-text-field type="time" single-line hide-details></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="1" class="d-flex align-center">
                                  <label>End Time</label>
                                </v-col>
                                <v-col cols="12" sm="2">
                                  <v-text-field type="time" single-line hide-details></v-text-field>
                                </v-col>

                              </v-row>


                              <v-row>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <v-label>Web Engagement</v-label>
                                </v-col>
                                <v-col cols="12" sm="3" class="d-flex align-center">
                                  <v-checkbox label="Immediately" class="d-flex align-center"></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <!-- <label>Last Name</label> -->
                                  <v-checkbox label="Next visit" class="d-flex align-center"></v-checkbox>
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

                  </v-row>
                </v-container>
              </v-card-text>
              <v-divider></v-divider>

            </v-card>
          </v-window-item>

          <v-window-item value="Where">
            <v-card flat>
              <v-card-text class="pa-5 border-bottom">
                <v-container>
                  <v-row justify="space-around">
                    <v-col>
                      <v-card class="mb-7">
                        <v-card-text class="pa-5">
                          <h3 class="title text-h6">Internal resources</h3>
                          <h6 class="text-subtitle-1 text-grey-darken-1">What resources do you want to engage for customer
                            matching this specific profile.</h6>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="pa-5">
                          <h3 class="title text-h6 pb-4">Self-Service</h3>
                          <v-row>
                            <v-col cols="12" lg="12">
                              <v-row>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <label>Web</label>
                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <v-checkbox label="Popup" class="d-flex align-center"></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="1" class="d-flex align-center">
                                  <label>Start Time</label>
                                </v-col>
                                <v-col cols="12" sm="2">
                                  <v-text-field type="time" single-line hide-details></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="1" class="d-flex align-center">
                                  <label>End Time</label>
                                </v-col>
                                <v-col cols="12" sm="2">
                                  <v-text-field type="time" single-line hide-details></v-text-field>
                                </v-col>

                              </v-row>

                              <v-row>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <!-- <label>Channel</label> -->
                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <v-checkbox label="Chat bot" class="d-flex align-center"></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="1" class="d-flex align-center">
                                  <label>Start Time</label>
                                </v-col>
                                <v-col cols="12" sm="2">
                                  <v-text-field type="time" single-line hide-details></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="1" class="d-flex align-center">
                                  <label>End Time</label>
                                </v-col>
                                <v-col cols="12" sm="2">
                                  <v-text-field type="time" single-line hide-details></v-text-field>
                                </v-col>
                              </v-row>
                            </v-col>

                          </v-row>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="pa-5">
                          <h3 class="title text-h6 pb-4">Assisted Service</h3>
                          <v-row>
                            <v-col cols="12" lg="12">
                              <v-row>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <label>Targeted Skills</label>
                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <v-checkbox label="Primary skill"></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <v-select label="Select skill" hide-details :items="['Sales', 'Service']"></v-select>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" sm="2" class="d-flex align-center">

                                </v-col>
                                <v-col cols="12" sm="2" class="d-flex align-center">
                                  <v-checkbox label="Secondary skill"></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <v-select label="Select skill" hide-details :items="['English', 'French']"></v-select>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>


                        </v-card-text>

                        <div class="pa-5 text-right">
                          <v-btn color="secondary" class="text-capitalize mr-2">Save</v-btn>
                          <v-btn color="primary" class="text-capitalize" dark>Cancel</v-btn>
                        </div>
                      </v-card>
                    </v-col>

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
