<script setup lang="ts">
enum Mode {
  preview = 'preview',
  edit = 'edit'
}

const currentMode = ref<Mode>(Mode.preview)
const changeMode = (mode: Mode) => (currentMode.value = mode)
</script>
<template>
  <div v-if="currentMode === Mode.preview" class="h-fit w-5/12 rounded-xl bg-neutral0 p-8">
    <h3 class="text-md mb-4 font-bold text-neutral">修改密碼</h3>
    <p class="pb-2 text-xs text-neutral80">電子信箱</p>
    <p class="pb-6 text-xs font-bold">{{ currentMode }}</p>
    <div class="mb-4 flex w-full items-center justify-between text-xs">
      <p class="flex flex-col">
        <span class="flex items-center pb-2 text-xs">密碼</span>
        <span class="text-xs">**********</span>
      </p>
      <button class="text-xs text-primary100 underline" @click="changeMode(Mode.edit)">重設</button>
    </div>
  </div>
  <div v-if="currentMode === Mode.edit" class="h-fit w-5/12 rounded-xl bg-neutral0 p-8">
    <h3 class="text-md mb-4 font-bold text-neutral">修改密碼</h3>
    <p class="pb-2 text-xs text-neutral80">電子信箱</p>
    <p class="pb-6 text-xs font-bold">sdfdfs@gmail.com</p>
    <form class="w-full" @submit.prevent>
      <h3 class="pb-2 text-xs font-bold">舊密碼</h3>
      <input
        type="password"
        placeholder="請輸入舊密碼"
        class="mb-4 w-full rounded-md border p-3 text-xs focus:outline-none"
      />
      <h3 class="pb-2 text-xs font-bold">新密碼</h3>
      <input
        type="password"
        placeholder="請輸入新密碼"
        class="mb-4 w-full rounded-md border p-3 text-xs focus:outline-none"
      />
      <h3 class="pb-2 text-xs font-bold">確認新密碼</h3>
      <input
        type="password"
        placeholder="請再輸入一次新密碼"
        class="mb-8 w-full rounded-md border p-3 text-xs focus:outline-none"
      />
      <button class="rounded-lg bg-primary100 px-5 py-3 text-xs text-neutral0">儲存設定</button>
    </form>
  </div>
</template>
