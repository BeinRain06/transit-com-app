<script setup lang="ts">
import { useTemplateRef, ref, computed, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import Navbar from './components/navbar/NavbarView.vue'
import HomeView from './views/HomeView.vue'

const styleMainRef = useTemplateRef<HTMLElement>('mainRef')

const stateMenu = ref(false)

computed(() => {
  console.log('stateMenu :', stateMenu)
  return null
})

watch(stateMenu, async () => {
  console.log('stateMenu watch :', stateMenu)

  if (stateMenu.value) {
    styleMainRef.value?.classList.add('active_mobile_menu')
    stateMenu.value = true
    await stateMenu
  } else {
    styleMainRef.value?.classList.remove('active_mobile_menu')
    stateMenu.value = false
    await stateMenu
  }
})

async function handleStateMenu() {
  if (stateMenu.value) {
    styleMainRef.value?.classList.remove('active_mobile_menu')
    stateMenu.value = false
    await stateMenu
  }
}
</script>

<template>
  <header>
    <Navbar v-model="stateMenu" />
  </header>
<<<<<<< HEAD
  <main class="main_container"></main>
=======
<<<<<<< HEAD
  <main class="main_container" ref="mainRef" @click="async () => handleStateMenu()">
    <RouterView />
  </main>
=======
  <main class="main_container"></main>
>>>>>>> origin/master
>>>>>>> a6d7d85 (navbar action in the main_container /App.vue component)

  <!-- <RouterView /> -->
</template>

<style scoped>
.main_container {
  position: relative;
  width: 100vw;
  height: auto;
  margin: 0 auto;
  z-index: 3;
  transition: all 1s ease;
}

.main_container.active_mobile_menu {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  overflow-y: hidden;
}
</style>
