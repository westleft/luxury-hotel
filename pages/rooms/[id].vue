<script setup lang="ts">
import type { ApiResponseRoom } from '~/types/api/'
import type { roomReserve } from '~/types/order/reserve'

const route = useRoute()
const router = useRouter()

const { data } = await useApiFetch<ApiResponseRoom>(`/rooms/${route.params.id}`)!
const roomInfo = data && data.value?.result

const reserveData = ref<roomReserve>({
  checkInDate: '',
  checkOutDate: '',
  peopleNum: 1
})

const changePeopleNum = (oper: 'plus' | 'minus') => {
  if (oper === 'plus') {
    reserveData.value.peopleNum++
  } else {
    if (reserveData.value.peopleNum === 1) return
    reserveData.value.peopleNum--
  }
}

const pushToOrderPage = () => {
  const { checkInDate, checkOutDate, peopleNum } = reserveData.value
  if (!checkInDate || !checkOutDate) {
    useNuxtApp().$toast.error('請先選擇入住與退房日期')
    return
  }
  router.push({
    path: `/orders/${route.params.id}`,
    query: {
      checkInDate,
      checkOutDate,
      peopleNum
    }
  })
}
</script>
<template>
  <div class="min-h-dvh w-full bg-primary10">
    <NuxtLayout name="header" :background="'bg-black'"></NuxtLayout>
    <div class="flex w-full items-center justify-center py-16">
      <div
        class="grid h-[70vh] max-w-screen-xl grid-cols-5 grid-rows-2 gap-1 overflow-hidden rounded-xl"
      >
        <div class="col-span-3 row-span-2">
          <img class="h-full w-full object-cover" :src="roomInfo?.imageUrl" alt="" />
        </div>
        <div v-for="src in roomInfo?.imageUrlList" :key="src" class="col-span-1 row-span-1">
          <img class="h-full w-full object-cover" :src="src" alt="" />
        </div>
      </div>
    </div>
    <div class="flex w-full items-center justify-center">
      <div class="relative flex w-full max-w-5xl items-start justify-between pb-20">
        <div class="flex w-7/12 flex-col">
          <h1 class="pb-4 text-4xl font-bold text-primary100">{{ roomInfo?.name }}</h1>
          <p class="pb-10 text-xs text-neutral80">
            {{ roomInfo?.description }}
          </p>
          <section class="mb-10">
            <h3 class="flex items-center justify-start pb-4 font-bold text-neutral100">
              房型基本資訊
            </h3>
            <div class="flex w-full">
              <div class="mr-2 flex min-w-16 flex-col rounded-lg bg-neutral0 p-3">
                <Icon name="fluent:slide-size-24-filled" color="#BF9D7D" class="mb-1" />
                <p class="text-xs text-neutral80">{{ roomInfo?.areaInfo }}</p>
              </div>
              <div class="mr-2 flex min-w-16 flex-col rounded-lg bg-neutral0 p-3">
                <Icon name="material-symbols:bed" color="#BF9D7D" class="mb-1" />
                <p class="text-xs text-neutral80">{{ roomInfo?.bedInfo }}</p>
              </div>
              <div class="flex min-w-16 flex-col rounded-lg bg-neutral0 p-3">
                <Icon name="material-symbols:person" color="#BF9D7D" class="mb-1" />
                <p class="text-xs text-neutral80">2-4 人</p>
              </div>
            </div>
          </section>
          <section class="mb-10">
            <h3 class="flex items-center justify-start pb-4 font-bold text-neutral100">房間格局</h3>
            <div class="flex w-full flex-wrap rounded-lg bg-neutral0 p-6">
              <div v-for="i in 12" :key="i" class="mr-2 flex items-center justify-center">
                <Icon name="material-symbols:check-small" color="#BF9D7D" size="24" />
                <p class="pl-1 text-xs text-neutral80">市景</p>
              </div>
            </div>
          </section>
          <section class="mb-10">
            <h3 class="flex items-center justify-start pb-4 font-bold text-neutral100">房內設備</h3>
            <div class="flex w-full flex-wrap rounded-lg bg-neutral0 p-6">
              <div
                v-for="item in roomInfo?.facilityInfo"
                :key="item.title"
                class="mr-2 flex items-center justify-center"
              >
                <Icon name="material-symbols:check-small" color="#BF9D7D" size="24" />
                <p class="pl-1 text-xs text-neutral80">{{ item.title }}</p>
              </div>
            </div>
          </section>
          <section class="mb-10">
            <h3 class="flex items-center justify-start pb-4 font-bold text-neutral100">備品提供</h3>
            <div class="flex w-full flex-wrap rounded-lg bg-neutral0 p-6">
              <div
                v-for="item in roomInfo?.amenityInfo"
                :key="item.title"
                class="mr-2 flex items-center justify-center"
              >
                <Icon name="material-symbols:check-small" color="#BF9D7D" size="24" />
                <p class="pl-1 text-xs text-neutral80">{{ item.title }}</p>
              </div>
            </div>
          </section>
          <section>
            <h3 class="flex items-center justify-start pb-4 font-bold text-neutral100">訂房須知</h3>
            <ul class="list-decimal pl-7 text-xs text-neutral80">
              <li>入住時間為下午3點，退房時間為上午12點。</li>
              <li>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li>
              <li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li>
              <li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
              <li>請愛惜我們的房間與公共空間，並保持整潔。</li>
              <li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
              <li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
              <li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
              <li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
              <li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
            </ul>
          </section>
        </div>
        <div class="sticky top-20 w-[35%] rounded-2xl bg-neutral0 p-8 shadow-lg">
          <p class="pb-2 text-lg font-bold">預訂房型</p>
          <hr class="pb-6" />
          <h2 class="pb-4 text-3xl font-bold text-neutral80">{{ roomInfo?.name }}</h2>
          <p class="pb-8 text-xs text-neutral80">
            {{ roomInfo?.description }}
          </p>
          <div class="mb-4 flex w-full justify-between">
            <div
              class="flex w-[48%] flex-col items-start overflow-hidden rounded-md border border-black p-2"
            >
              <p class="pb-1 text-xs text-neutral">入住</p>
              <input v-model="reserveData.checkInDate" type="date" class="w-full text-xs" />
            </div>
            <div
              class="flex w-[48%] flex-col items-start overflow-hidden rounded-md border border-black p-2"
            >
              <p class="pb-1 text-xs text-neutral">退房</p>
              <input v-model="reserveData.checkOutDate" type="date" class="w-full text-xs" />
            </div>
          </div>
          <div class="mb-2 flex w-full items-center justify-between">
            <p class="text-xs text-neutral">人數</p>
            <div class="flex items-center">
              <button
                class="flex h-8 w-8 items-center justify-center rounded-full border"
                @click="changePeopleNum('minus')"
              >
                <Icon name="ic:sharp-minus" size="16" />
              </button>
              <p class="mx-4 text-sm font-bold text-neutral">{{ reserveData.peopleNum }}</p>
              <button
                class="flex h-8 w-8 items-center justify-center rounded-full border"
                @click="changePeopleNum('plus')"
              >
                <Icon name="ic:baseline-add" size="16" />
              </button>
            </div>
          </div>
          <p class="text-md pb-8 text-primary100">NT$ {{ roomInfo?.price.toLocaleString() }}</p>
          <button
            class="flex w-full justify-center rounded-lg bg-primary100 py-3 text-xs text-neutral0"
            @click="pushToOrderPage"
          >
            立即預訂
          </button>
        </div>
      </div>
    </div>
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>

<style scoped>
h3::before {
  content: '';
  display: flex;
  height: 20px;
  width: 4px;
  background-color: #bf9d7d;
  margin-right: 12px;
  border-radius: 20px;
}
</style>
