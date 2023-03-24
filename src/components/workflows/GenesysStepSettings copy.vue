<script setup lang="ts">
import { ref } from "vue";

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


  <v-expansion-panels variant="popout" class="my-4">

<v-expansion-panel>
  <v-expansion-panel-title>
    <v-avatar>
      <v-img src="/assets/images/apps/genesys.png"></v-img>
    </v-avatar>
    Genesys
  </v-expansion-panel-title>
  <v-expansion-panel-text>
    <WorkflowDefaultConfigureForm></WorkflowDefaultConfigureForm>
    <v-expansion-panels variant="popout" class="my-4">

      <v-expansion-panel title="Configure">
        <v-expansion-panel-text>
          <v-container>
            <v-row justify="space-around">
              <v-col>
                <v-card class="mb-7">
                  <v-card-text class="pa-5">
                    <h3 class="title text-h6">Employee Profile</h3>
                    <h6 class="text-subtitle-1 text-grey-darken-1">This is the employee profile form with labels on
                      left
                      and form controls on right in one line two controls. To use add class form-horizontal to the
                      form
                      tag and give class row with form-group.</h6>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-text class="pa-5">
                    <h3 class="title text-h6">Employee User</h3>
                    <v-row>
                      <v-col cols="12" lg="6">
                        <v-row>
                          <v-col cols="12" sm="3" class="d-flex align-center">
                            <label>First Name</label>
                          </v-col>
                          <v-col cols="12" sm="9">
                            <v-text-field label="Enter First name" single-line hide-details></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" sm="3" class="d-flex align-center">
                            <label>Username</label>
                          </v-col>
                          <v-col cols="12" sm="9">
                            <v-text-field label="Enter Username" single-line hide-details></v-text-field>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" lg="6">
                        <v-row>
                          <v-col cols="12" sm="3" class="d-flex align-center">
                            <label>Last Name</label>
                          </v-col>
                          <v-col cols="12" sm="9">
                            <v-text-field label="Enter Last name" hide-details single-line></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" sm="3" class="d-flex align-center">
                            <label>Nick Name</label>
                          </v-col>
                          <v-col cols="12" sm="9">
                            <v-text-field label="Enter Nick name" single-line hide-details></v-text-field>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-text class="pa-5">
                    <h3 class="title text-h6">Contact Info & Bio</h3>
                    <v-row>
                      <v-col cols="12" lg="6">
                        <v-row>
                          <v-col cols="12" sm="3" class="d-flex align-center">
                            <label>Email</label>
                          </v-col>
                          <v-col cols="12" sm="9">
                            <v-text-field label="Enter Email" single-line hide-details></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" sm="3" class="d-flex align-center">
                            <label>Contact No</label>
                          </v-col>
                          <v-col cols="12" sm="9">
                            <v-text-field label="Enter Contact no" single-line hide-details></v-text-field>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" lg="6">
                        <v-row>
                          <v-col cols="12" sm="3" class="d-flex align-center">
                            <label>Website</label>
                          </v-col>
                          <v-col cols="12" sm="9">
                            <v-text-field label="http://" single-line hide-details></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" sm="3" class="d-flex align-center">
                            <label>Bio</label>
                          </v-col>
                          <v-col cols="12" sm="9">
                            <v-text-field label="Enter Bio" single-line hide-details></v-text-field>
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
              <v-col>
                <v-card>
                  <v-img height="200" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                    cover class="text-white">
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
              </v-col>
            </v-row>
          </v-container>

        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel title="Select Event"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title v-slot="{ open }">
          <v-row no-gutters>
            <v-col cols="4" class="d-flex justify-start">
              Start and end dates
            </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open">When do you want to travel?</span>
                <v-row v-else no-gutters style="width: 100%">
                  <v-col cols="6" class="d-flex justify-start">
                    Start date: {{ 'Not set' }}
                  </v-col>
                  <v-col cols="6" class="d-flex justify-start">
                    End date: {{ 'Not set' }}
                  </v-col>
                </v-row>
              </v-fade-transition>
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-row justify="space-around" no-gutters>
            <v-col cols="3">
              <v-text-field label="Start date" type="date"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field label="End date" type="date"></v-text-field>
            </v-col>
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>


    </v-expansion-panels>

  </v-expansion-panel-text>
</v-expansion-panel>



</v-expansion-panels>

<VRow class="d-flex justify-center my-2">
<v-btn icon="mdi-plus" variant="outlined" size="small" color="info"></v-btn>
</VRow>


<v-expansion-panels variant="popout" class="my-4">

<v-expansion-panel title="Configure">
  <v-expansion-panel-text>
    <v-container>
      <v-row justify="space-around">
        <v-col>
          <v-card class="mb-7">
            <v-card-text class="pa-5">
              <h3 class="title text-h6">Employee Profile</h3>
              <h6 class="text-subtitle-1 text-grey-darken-1">This is the employee profile form with labels on left
                and form controls on right in one line two controls. To use add class form-horizontal to the form
                tag and give class row with form-group.</h6>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="pa-5">
              <h3 class="title text-h6">Employee User</h3>
              <v-row>
                <v-col cols="12" lg="6">
                  <v-row>
                    <v-col cols="12" sm="3" class="d-flex align-center">
                      <label>First Name</label>
                    </v-col>
                    <v-col cols="12" sm="9">
                      <v-text-field label="Enter First name" single-line hide-details></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="3" class="d-flex align-center">
                      <label>Username</label>
                    </v-col>
                    <v-col cols="12" sm="9">
                      <v-text-field label="Enter Username" single-line hide-details></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-row>
                    <v-col cols="12" sm="3" class="d-flex align-center">
                      <label>Last Name</label>
                    </v-col>
                    <v-col cols="12" sm="9">
                      <v-text-field label="Enter Last name" hide-details single-line></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="3" class="d-flex align-center">
                      <label>Nick Name</label>
                    </v-col>
                    <v-col cols="12" sm="9">
                      <v-text-field label="Enter Nick name" single-line hide-details></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="pa-5">
              <h3 class="title text-h6">Contact Info & Bio</h3>
              <v-row>
                <v-col cols="12" lg="6">
                  <v-row>
                    <v-col cols="12" sm="3" class="d-flex align-center">
                      <label>Email</label>
                    </v-col>
                    <v-col cols="12" sm="9">
                      <v-text-field label="Enter Email" single-line hide-details></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="3" class="d-flex align-center">
                      <label>Contact No</label>
                    </v-col>
                    <v-col cols="12" sm="9">
                      <v-text-field label="Enter Contact no" single-line hide-details></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-row>
                    <v-col cols="12" sm="3" class="d-flex align-center">
                      <label>Website</label>
                    </v-col>
                    <v-col cols="12" sm="9">
                      <v-text-field label="http://" single-line hide-details></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="3" class="d-flex align-center">
                      <label>Bio</label>
                    </v-col>
                    <v-col cols="12" sm="9">
                      <v-text-field label="Enter Bio" single-line hide-details></v-text-field>
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
        <v-col>
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
        </v-col>
      </v-row>
    </v-container>

  </v-expansion-panel-text>
</v-expansion-panel>

<v-expansion-panel title="Select Event"
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
</v-expansion-panel>

<v-expansion-panel>
  <v-expansion-panel-title v-slot="{ open }">
    <v-row no-gutters>
      <v-col cols="4" class="d-flex justify-start">
        Start and end dates
      </v-col>
      <v-col cols="8" class="text--secondary">
        <v-fade-transition leave-absolute>
          <span v-if="open">When do you want to travel?</span>
          <v-row v-else no-gutters style="width: 100%">
            <v-col cols="6" class="d-flex justify-start">
              Start date: {{ 'Not set' }}
            </v-col>
            <v-col cols="6" class="d-flex justify-start">
              End date: {{ 'Not set' }}
            </v-col>
          </v-row>
        </v-fade-transition>
      </v-col>
    </v-row>
  </v-expansion-panel-title>
  <v-expansion-panel-text>
    <v-row justify="space-around" no-gutters>
      <v-col cols="3">
        <v-text-field label="Start date" type="date"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field label="End date" type="date"></v-text-field>
      </v-col>
    </v-row>
  </v-expansion-panel-text>
</v-expansion-panel>


</v-expansion-panels>

</div>
</template>
