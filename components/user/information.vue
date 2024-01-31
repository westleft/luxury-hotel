<script setup lang="ts">
enum Mode {
  preview = 'preview',
  edit = 'edit'
}

const currentMode = ref<Mode>(Mode.preview)
const changeMode = (mode: Mode) => (currentMode.value = mode)

const citys = useCity()
const towns = computed(() => {
  return citys[userCity.value]
})
const userCity = ref<keyof typeof citys>('臺北市')
</script>
<template>
  <div v-if="currentMode === Mode.preview" class="h-fit w-[55%] rounded-xl bg-neutral0 p-8">
    <h3 class="text-md mb-4 font-bold text-neutral">基本資料</h3>
    <p class="pb-2 text-xs text-neutral80">電子信箱</p>
    <p class="pb-6 text-xs font-bold">Jessica@exsample.com</p>
    <p class="pb-2 text-xs text-neutral80">手機號碼</p>
    <p class="pb-6 text-xs font-bold">+886 912 345 678</p>
    <p class="pb-2 text-xs text-neutral80">生日</p>
    <p class="pb-6 text-xs font-bold">1990 年 8 月 15 日</p>
    <p class="pb-2 text-xs text-neutral80">地址</p>
    <p class="pb-10 text-xs font-bold">高雄市新興區六角路 123 號</p>
    <button
      class="rounded-lg border border-primary100 px-5 py-3 text-xs text-primary100"
      @click="changeMode(Mode.edit)"
    >
      編輯
    </button>
  </div>
  <div v-if="currentMode === Mode.edit" class="h-fit w-[55%] rounded-xl bg-neutral0 p-8">
    <h3 class="text-md mb-4 font-bold text-neutral">修改密碼</h3>
    <p class="pb-2 text-xs text-neutral80">電子信箱</p>
    <p class="pb-6 text-xs font-bold">sdfdfs@gmail.com</p>
    <form class="w-full" @submit.prevent>
      <h3 class="pb-2 text-xs font-bold">姓名</h3>
      <input
        type="text"
        placeholder="請輸入姓名"
        class="mb-4 w-full rounded-md border p-3 text-xs focus:outline-none"
      />
      <h3 class="pb-2 text-xs font-bold">手機號碼</h3>
      <input
        type="tel"
        placeholder="請輸入手機號碼"
        class="mb-4 w-full rounded-md border p-3 text-xs focus:outline-none"
      />
      <h3 class="pb-2 text-xs font-bold">生日</h3>
      <div class="mb-3 flex w-full justify-between">
        <input
          class="w-full rounded-md border px-2 py-2.5 text-xs"
          type="date"
          min="1900"
          max="2099"
          step="1"
          value="2016"
        />
      </div>
      <h3 class="pb-2 text-xs font-bold">地址</h3>
      <div class="mb-8 flex w-full justify-between">
        <select class="w-full rounded-md border px-2 py-2.5 text-xs">
          <option v-for="city in Object.keys(citys)" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
        <div class="w-4"></div>
        <select class="w-full rounded-md border px-2 py-2.5 text-xs">
          <option v-for="town in towns" :key="town" :value="town">
            {{ town }}
          </option>
        </select>
      </div>
      <button class="rounded-lg bg-primary100 px-5 py-3 text-xs text-neutral0">儲存設定</button>
    </form>
  </div>
</template>
