<script setup>
import {onBeforeMount} from "vue";
import {useRouter} from 'vue-router';

const router = useRouter()

import {try_login} from "@/plugins/basic_auth.js";

onBeforeMount(
    () => {
      if (window.location.href.includes('/login')) {
      } else {
        try_login().catch(
            () => router.push('/login')
        )
      }
    }
)
</script>

<template>
  <div>
    <router-view></router-view>
  </div>

</template>


