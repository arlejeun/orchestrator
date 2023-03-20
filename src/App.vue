<template>
    <notifications />
        <authenticator :social-providers="['amazon', 'apple', 'facebook', 'google']" style="margin: var(--amplify-space-xxxl)">
          <template v-slot:header>
            <div style="padding: var(--amplify-space-large); text-align: center">
              <!-- <img alt="Vue logo" class="logo" src="@/assets/images/sabohc-logo.png" width="125" height="125" /> -->
            </div>
          </template>
          <template v-slot="{ user, signOut }">
            <RouterView />
          </template>
        </authenticator>

</template>

<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
  import "@aws-amplify/ui-vue/styles.css";
import { RouterView } from "vue-router";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
</script>
