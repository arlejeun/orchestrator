<script setup lang="ts">
import { ref, computed } from "vue";

import WorkflowsData from "./table-data/WorkflowsData";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import router from "@/router";

const valid = ref(true);
const dialog = ref(false);
const search = ref("");
const rolesbg = ref([
  "teal lighten-3",
  "green lighten-3",
  "cyan lighten-3",
  "light-blue lighten-3",
  "deep-purple lighten-2",
]);
const wkData = ref(WorkflowsData);
const editedIndex = ref(-1);
const editedItem = ref({
  id: "",
  name: "",
  ownerName: "",
  inactive: true,
  steps: [] as any,
  latestDeployment: [] as any
});
const defaultItem = ref({
  id: "",
  name: "",
  ownerName: "",
  inactive: true,
  steps: [],
  latestDeployment: [],
});
//OnMounted

//Methods
const filteredList = computed(() => {
  return wkData.value.filter((flow: any) => {
    return flow.name.toLowerCase().includes(search.value.toLowerCase());
  });
});

function goToItem(item: any) {
  router.push({path: `/workflows/${item.id}`})
}

function editItem(item: any) {
  editedIndex.value = wkData.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}
function deleteItem(item: any) {
  const index = wkData.value.indexOf(item);
  confirm("Are you sure you want to delete this item?") &&
    wkData.value.splice(index, 1);
}

function close() {
  dialog.value = false;
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  }, 300);
}
function save() {
  if (editedIndex.value > -1) {
    Object.assign(wkData.value[editedIndex.value], editedItem.value);
  } else {
    wkData.value.push(editedItem.value);
  }
  close();
}

//Computed Property
const formTitle = computed(() => {
  return editedIndex.value === -1 ? "New Workflow" : "Edit Workflow";
});

const page = ref({ title: "Workflows" });
const breadcrumbs = ref([
  {
    text: "Workflows",
    disabled: true,
    href: "#",
  },
  {
    text: "List",
    disabled: true,
    href: "#",
  },
]);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" sm="12">
      <v-card>
        <v-card-text class="pa-5">
          <v-row>
            <v-col cols="12" lg="4" md="6">
              <v-text-field density="compact" v-model="search" label="Search workflows" hide-details
                variant="outlined"></v-text-field>
            </v-col>
          <v-col cols="12" lg="8" md="6" class="text-right">
            <v-dialog v-model="dialog">
              <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props" class="ml-auto">
                  <v-icon class="mr-2">mdi-basket-fill</v-icon>Add
                    Workflow
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="pa-4 bg-secondary">
                    <span class="title text-white">{{ formTitle }}</span>
                  </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-text-field variant="outlined" hide-details v-model="editedItem.id"
                            label="Id"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field variant="outlined" hide-details
                            label="User info"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field variant="outlined" hide-details label="User email"
                            type="email"></v-text-field>
                        </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field variant="outlined" hide-details label="Phone"
                            type="phone"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field variant="outlined" hide-details 
                            label="Joining Date"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field variant="outlined" hide-details 
                              label="Role"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12">
                            <v-select variant="outlined" hide-details :items="rolesbg"
                              label="Role Background"></v-select>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-container>
                  </v-card-text>

                  <v-card-actions class="pa-4">
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="close">Cancel</v-btn>
                    <v-btn color="secondary" :disabled="
                      editedItem.name == '' || editedItem.ownerName == ''
                    " variant="flat" @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <v-table class="mt-5">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Steps</th>
                <th>Updated</th>
                <th>Owner</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredList" :key="item.id">
                <td>{{ item.id }}</td>
                <td>
                  <div class="d-flex align-center py-4">
                    <div>
                      <v-icon color="success" icon="mdi-alert-circle" size="x-small"></v-icon>
                      <!-- <router-link :to="`/workflows/${item.id}`">{{ item.name }}</router-link> -->
                      <v-btn variant="text" @click="goToItem(item)">{{ item.name }}</v-btn>
                      <div>
                    </div>

                    </div>
                  </div>
                </td>
                <td>
                  <!-- {{ item.steps }} -->
                  <v-avatar v-for="step in item.steps">
                    <v-img :src="`${step.imageUrl}`"></v-img>
                  </v-avatar>
                  <!-- 
                    <v-avatar>
                      <v-img :src="`/assets/images/apps/aws_lambda_logo.png`"></v-img></v-avatar>

                    <v-avatar>
                      <v-img :src="`/assets/images/apps/adobe.jpg`"></v-img></v-avatar> -->

                </td>
                <td>{{ Date.now() }}</td>
                <td>{{ item.ownerName }}</td>


                <!-- <td>
                        <div class="d-flex align-center py-4">
                          <div>
                            <v-img
                              :src="`/assets/images/users/${item.avatar}`"
                              width="45px"
                              class="rounded-circle img-fluid"
                            ></v-img>
                          </div>

                          <div class="ml-5">
                            <h4>{{ item.userinfo }}</h4>
                            <span class="subtitle-2 d-block font-weight-regular">{{
                              item.usermail
                            }}</span>
                          </div>
                        </div>
                      </td> -->
                <!-- <td>{{ item.phone }}</td> -->
                <!-- <td>{{ item.jdate }}</td>
                      <td>
                        <v-chip :color="item.rolestatus" label>{{
                          item.role
                        }}</v-chip>
                      </td> -->
                <td>
                  <v-icon small class="mr-2 text-info cursor-pointer" @click="editItem(item)"
                    title="Edit">mdi-pencil</v-icon>
                  <v-icon small class="text-error cursor-pointer" title="Delete"
                    @click="deleteItem(item)">mdi-delete</v-icon>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
