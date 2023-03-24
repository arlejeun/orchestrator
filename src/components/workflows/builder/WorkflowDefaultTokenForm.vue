<script setup lang="ts">
import { ref } from "vue";
import BannerPrepand from "@/components/workflows/builder/BannerPrepand.vue"
const loading = ref(false)
const loaded = ref(false)

const password = ref("");
const show1 = ref(false);
const rules = ref({
  required: (value: string) => !!value || "Required.",
  min: (v: string) => v.length >= 8 || "Min 8 characters",
  emailMatch: () => "The email and password you entered don't match",
});

const onClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000)
}

</script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title text-h6">Client Credential</h3>
      <h6 class="text-subtitle-1 text-grey-darken-1">
        Make sure to create a specific OAuth client in Genesys Cloud
      </h6>
    </v-card-text>
    <v-divider></v-divider>

    <v-card-text>
      <v-text-field
        :loading="loading"
        label="Organization Name"
        filled
        background-color="transparent"
        @click:append-inner="onClick"
      ></v-text-field>
      <v-text-field
        :loading="loading"
        label="Secret ID"
        append-inner-icon="mdi-lock-outline"
        filled
        background-color="transparent"
        @click:append-inner="onClick"
      ></v-text-field>
      <v-text-field
        v-model="password"
        filled
        background-color="transparent"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>      
      
      <v-btn class="mt-5" color="secondary">Submit</v-btn>
    </v-card-text>
  </v-card>
</template>
