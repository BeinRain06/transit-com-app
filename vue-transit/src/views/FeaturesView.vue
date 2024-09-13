<script setup lang="ts"></script>
<template>
  <main id="features_page">
    <div class="gen_features_wrap">
      <div class="signing_logo">
        <h3 class="text-sm mt-2 py-2 px-1 krub-regular-italic">transi\com</h3>
      </div>
      <div class="features_com_wrap p-2">
        <div class="features_com_content text-white">
          <div id="request_ft" class="feature_com">
            <h3 class="featute_title">REQUESTS</h3>
          </div>
          <div id="feedback_ft" class="feature_com">
            <h3 class="featute_title">FEEDBACKS</h3>
          </div>
          <div id="stat_ft" class="feature_com">
            <h3 class="featute_title">STATS</h3>
          </div>
        </div>
      </div>
      <div class="lan_wrapper">
        <select class="w-20 h-7 text-sm pl-2">
          <option value="english">english</option>
          <option value="french">french</option>
        </select>
      </div>
    </div>
  </main>
</template>
<style scoped>
@media (min-width: 180px) {
  .gen_features_wrap {
    position: relative;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
  }

  .signing_logo {
    position: absolute;
    bottom: 0;
    right: 1rem;
  }

  .features_com_wrap {
    width: 100%;
    height: 100%;
  }

  .features_com_content {
    width: 90%;
    margin: 1rem auto 0;
    position: relative;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
  }

  .feature_com {
    margin: 2.25rem 0;
    width: 80vw;
    height: 3rem;
    border-radius: 5px;
    outline: 3px solid rgb(92, 92, 92);
    transition: all 1s ease-in-out;
    display: grid;
    place-items: center;
    @apply grid place-items-center bg-gray-400;
  }

  .feature_com:hover {
    outline: 3px solid rgb(243, 243, 243);
    @apply bg-green-300;
  }

  .lan_wrapper {
    position: absolute;
    top: 1rem;
  }
}

@media (min-width: 760px) {
  .signing_logo {
    position: absolute;
    bottom: unset;
    top: 1rem;
    left: 1rem;
    right: 1rem;
  }

  .features_com_content {
    margin: 1.5rem auto 0;
    padding: 0.5rem 1rem;
    max-width: 42rem;
    height: 20rem;
    grid-template-areas:
      ' req_lab req_lab feed_lab feed_lab '
      ' . stats_lab stats_lab . ';
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 140px;
    place-items: center;
    gap: 4rem;
  }

  .feature_com {
    margin: 1rem 0;
    height: 4.8rem;
    border-radius: 3px;
  }

  #request_ft.feature_com {
    width: 100%;
    grid-area: req_lab;
  }

  #feedback_ft.feature_com {
    width: 100%;
    grid-area: feed_lab;
  }

  #stat_ft.feature_com {
    width: 100%;
    grid-area: stats_lab;
  }

  .lan_wrapper {
    position: absolute;
    top: unset;
    bottom: 1rem;
    right: 1rem;
  }
}
</style>
