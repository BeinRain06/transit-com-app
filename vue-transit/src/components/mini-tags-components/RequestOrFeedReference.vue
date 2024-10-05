<script setup lang="ts">
const props = defineProps<{
  element: string
  label: string
  idFetch: string
}>()
</script>

<template>
  <div class="req_feed_container">
    <div class="req_feed_ct">
      <ul class="req_feed_text">
        <li>
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
