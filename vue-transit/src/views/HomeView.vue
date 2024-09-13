<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main id="transit_landing_page">
    <div class="transit_wrapper">
      <div class="landing_upper_picture">
        <div></div>
      </div>
      <div class="company_wrap">
        <div class="logo_company_ct righteous-regular">
          <p class="text-gray-400">
            <span>trans</span><span class="text-purple-500">it</span
            ><span class="text-gray-400">com</span>
          </p>
        </div>
        <div class="home_btn_wrapper">
          <button id="btn_home" class="btn_home">next</button>
        </div>
      </div>
      <div class="landing_lower_picture">
        <div></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 180px) {
  .transit_wrapper {
    position: relative;
    top: 0;
    width: 100vw;

    height: 100vh;
    margin: 0 auto;
    background-color: #fff;
    overflow-x: hidden;
  }

  .landing_upper_picture {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 16%;
    background-color: #eee;
    transform: rotate(0deg);
  }

  .landing_upper_picture div {
    position: absolute;
    right: -2.25rem;
    bottom: -0.75rem;
    width: 4rem;
    height: 2rem;
    background-color: #eee;
    transform: rotate(30deg);
    z-index: 3;
  }

  .company_wrap {
    position: relative;
    width: 100vw;
    height: calc(100vh - 34%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .logo_company_ct {
    position: relative;
    top: -2rem;
    padding: 0.25rem 0.5rem;
    font-size: calc(22px + 0.3vw);
    transform: skew(2deg);
    @apply rounded border border-solid border-purple-400;
    box-shadow: 2px -2px 3px rgba(0, 0, 0, 0.65);
  }

  .logo_company_ct::before {
    content: '';
    position: absolute;
    top: -0.25rem;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.25rem 0.5rem;
    border: 2px solid #ccc;
    transform: skew(-12deg);
    box-shadow: 1px 2px 5px #7d8a7c;
  }

  .landing_lower_picture {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 18%;
    background-color: #ddd;
    transform: rotate(0deg);
  }

  .landing_lower_picture div {
    position: absolute;
    top: -1.1rem;
    left: -2.75rem;
    width: 4rem;
    height: 2rem;
    background-color: #ddd;
    transform: rotate(30deg);
  }

  .home_btn_wrapper {
    position: absolute;
    bottom: 3rem;
    width: 36%;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.85);
    transform: scale(0.95);
  }

  .home_btn_wrapper .btn_home {
    width: 100%;
    height: 100%;
    color: #f4f4f4;
    background-color: rgb(131, 73, 138);
    font-size: calc(13px + 0.15vw);
    border-radius: 5px;
    outline: 2px solid #555;
  }
}

@media (min-width: 180px) and (max-width: 780px) and (orientation: landscape) {
  .logo_company_ct {
    position: relative;
    top: -1.4rem;
    font-size: calc(23px + 0.3vw);
  }

  .home_btn_wrapper {
    position: absolute;
    bottom: 1.2rem;
  }
}

@media (min-width: 860px) {
  .logo_company_ct {
    position: relative;
    top: -3rem;
    font-size: calc(30px + 0.3vw);
  }

  .home_btn_wrapper {
    position: absolute;
    bottom: 4rem;
  }

  .home_btn_wrapper .btn_home {
    font-size: calc(20px + 0.2vw);
  }
}
</style>
