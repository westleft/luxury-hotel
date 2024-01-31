<script setup lang="ts"></script>
<template>
  <section class="flex items-center justify-center bg-neutral py-28">
    <div class="w-full max-w-5xl">
      <h2 class="mb-8 text-3xl font-semibold text-primary100">
        交通<br />
        方式
      </h2>
      <p class="pb-4 text-xs text-neutral0">台灣高雄市新興區六角路123號</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20447.940750653877!2d121.5108852391112!3d25.043595259389946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96523e0246d%3A0xf1c9276707165c71!2z6I-v5bGxMTkxNOaWh-WMluWJteaEj-eUoualreWckuWNgA!5e0!3m2!1szh-TW!2stw!4v1704959523351!5m2!1szh-TW!2stw"
        width="100%"
        height="300"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="mb-8"
      ></iframe>
      <ul class="flex w-full justify-between">
        <li class="flex w-[30%] flex-col text-neutral0">
          <Icon name="material-symbols:directions-car" class="mb-3" color="#BF9D7D" size="50" />
          <h4 class="pb-2 text-lg font-bold">自行開車</h4>
          <p class="text-xs">
            如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
          </p>
        </li>
        <li class="flex w-[30%] flex-col text-neutral0">
          <Icon name="ic:sharp-train" class="mb-3" color="#BF9D7D" size="50" />
          <h4 class="pb-2 text-lg font-bold">高鐵/火車</h4>
          <p class="text-xs">
            如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
          </p>
        </li>
        <li class="flex w-[30%] flex-col text-neutral0">
          <Icon name="mdi:car-hatchback" class="mb-3" color="#BF9D7D" size="50" />
          <h4 class="pb-2 text-lg font-bold">禮賓車服務</h4>
          <p class="text-xs">
            承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
