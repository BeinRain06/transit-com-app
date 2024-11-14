<script setup lang="ts">
const props = defineProps<{
  element: string
  label: string
  idFetch: string
}>()
</script>

<template>
  <div class="req_feed_container">
    <div class="req_feed_ct w-full my-2 flex justify-center md:justify-end">
      <ul class="req_feed_text krub-light-italic text-xs">
        <li class="inline-block mx-2">
          <span>{{ props.element }}- {{ props.label }}</span>
        </li>
        <li class="inline-block">
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
