<script setup lang="ts">
import { useLoginStatusStore } from '~/store/user/login_status'
import { useProfileStore } from '~/store/user/profile'
import { useLogoutStore } from '~/store/user/logout'

const { loginStauts } = storeToRefs(useLoginStatusStore())
const { userProfile } = storeToRefs(useProfileStore())
const { logout } = useLogoutStore()

const props = defineProps({
  background: {
    default: 'bg-neutral',
    type: String
  }
})

const showProfileMenu = ref<boolean>(false)
const handShowMenu = () => {
  showProfileMenu.value = !showProfileMenu.value
}
</script>
<template>
  <header
    class="flex w-full items-center justify-between px-[8%] py-4 sm:px-20"
    :class="`${props.background}`"
  >
    <NuxtLink class="flex" to="/">
      <img class="w-[40%] sm:w-40" src="~/assets/images/desktop/logo.png" alt="logo" />
    </NuxtLink>
    <div class="hidden items-center justify-between sm:flex">
      <NuxtLink class="text-xs text-neutral0" to="/rooms">客房旅宿</NuxtLink>
      <div class="relative">
        <button v-if="loginStauts" class="ml-6 text-xs text-neutral0" @click="handShowMenu">
          <Icon
            name="material-symbols:account-circle-full"
            color="#ffffff"
            size="24"
            class="mr-2"
          />
          {{ userProfile?.name }}
        </button>
        <ul
          v-show="showProfileMenu"
          class="absolute right-0 top-8 flex w-28 flex-col items-start justify-center rounded-md bg-neutral0 py-4"
        >
          <li class="w-full">
            <NuxtLink
              class="flex w-full px-6 py-2 text-xs text-neutral hover:bg-primary10 hover:text-primary100"
              to="/user/profile"
              >我的帳戶</NuxtLink
            >
          </li>
          <li class="w-full">
            <button
              class="flex w-full px-6 py-2 text-xs text-neutral hover:bg-primary10 hover:text-primary100"
              @click="logout"
            >
              登出
            </button>
          </li>
        </ul>
      </div>
      <!-- <NuxtLink v-if="loginStauts" class="ml-6 text-xs text-neutral0" to="/user/profile">
        <Icon name="material-symbols:account-circle-full" color="#ffffff" size="24" class="mr-2" />
        {{ userProfile?.name }}
      </NuxtLink> -->
      <NuxtLink v-if="!loginStauts" class="ml-6 text-xs text-neutral0" to="/login"
        >會員登入</NuxtLink
      >
      <NuxtLink
        class="ml-6 rounded-md bg-primary100 px-5 py-3 text-xs text-neutral0"
        :to="loginStauts ? '/rooms' : '/login'"
        >立即訂房</NuxtLink
      >
    </div>
    <div class="sm:hidden">
      <Icon name="ic:round-menu" color="#fff" size="24" />
    </div>
  </header>
</template>
