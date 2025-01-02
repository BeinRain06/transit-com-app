<script setup lang="ts">
const props = defineProps<{
  question: string
  radioEmit: {
    id: string
    label: string
    classItem: string
    modelRadio: boolean
  }[]
  isReqDisplay?: boolean
  bonusClaimed?: string
}>()
</script>
<template>
  <div class="radio_wrap w-full">
    <div class="question_tag text-center my-4">
      <span class="roboto-light">{{ props.question }}</span>
    </div>

    <ul class="list_radio_stuff my-4">
      <li
        class="radio_broadcast"
        :key="item.id"
        v-for="(item, i) in props.radioEmit"
        @click="$emit('onUpdateRadio', i)"
      >
        <div>
          <span>{{ item.label }}</span>
        </div>
        <div :id="item.id" :class="item.classItem">
          <div class="radio_inner_box"></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  .list_radio_stuff {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    gap: 1rem;
  }

  .list_radio_stuff .radio_broadcast {
    width: 100%;
    display: grid;
    grid-row: span 2;
    grid-auto-rows: subgrid;
    gap: 0.5rem;
    place-items: center;
    text-align: center;
  }

  .radio_inner_box {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid gray;
  }

  .radio_inner_box.active_inner_box {
    width: 14px;
    height: 14px;
    background-color: #7e7e7e;
    border-radius: 50%;
    border: 1px solid gray;
    outline: 2px solid #fff;
    outline-offset: -3px;
  }
}
</style>
