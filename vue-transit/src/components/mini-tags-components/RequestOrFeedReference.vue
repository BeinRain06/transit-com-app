<script setup lang="ts">
const props = defineProps<{
  element: string
  label: string
  idFetch: string
}>()
</script>

<template>
  <div class="req_feed_container">
    <div class="req_feed_ct w-full my-2">
      <ul class="req_feed_text krub-light-italic text-xs">
        <li class="">
          <span>{{ props.element }}- {{ props.label }}</span>
        </li>
        <li>
          <span>{{ props.idFetch }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}
</style>
