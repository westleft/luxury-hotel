<script setup lang="ts">
import { useLoginStatusStore } from '~/store/user/login_status'
import { useProfileStore } from '~/store/user/profile'

const { checkLoginStatus } = useLoginStatusStore()
const { loginStauts } = storeToRefs(useLoginStatusStore())

const { getUserProfile } = useProfileStore()

onNuxtReady(async () => {
  await checkLoginStatus()
  if (loginStauts.value) {
    getUserProfile()
  }
})
</script>

<template>
  <main>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </main>
</template>
