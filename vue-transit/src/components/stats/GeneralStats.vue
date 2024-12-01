<script setup lang="ts"></script>
<template>
  <section id="general_stats w-full ">
    <div class="gen_stats_wrap m-4 roboto-regular">
      <div class="dpt_quaterly_track mt-4">
        <div class="label_section_title p-1 text-center krub-medium-italic">
          <h3>DEPARTMENT</h3>
        </div>
        <!-- quaterly stats -->
        <div class="dpt_quaterly_stats mt-8 mx-auto">
          <div class="dpt_title mb-4 p-1 text-center roboto-light">
            <h2>Regulation Law</h2>
          </div>
          <!-- HERE WE ARE -->
          <div class="circle_track_wrap">
            <div class="py-2 mt-6">
              <h3><span class="lato-bold"> Aug - Oct </span></h3>
            </div>
            <div class="circle_month_frame">
              <div class="circle_third_month circ_layout">
                <h5 class="text-gray-500 font-bold">
                  <div>18</div>
                  <span>Aug</span>
                </h5>
              </div>
              <div class="circle_last_month circ_layout">
                <h5 class="text-gray-500 font-bold">
                  <div>21</div>
                  <span>Sep</span>
                </h5>
              </div>
              <div class="circle_this_month circ_layout">
                <h4>
                  <span>5</span>
                  <span style="padding: 0 2px">Oct</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- months stats -->
      <div class="month_track mt-12 sm:mt-16">
        <div class="month_content w-full mb-10 flex justify-center items-center">
          <ul class="dpt_month_track">
            <li class="dpt_picture_area">
              <div class="department_picture_wrap">
                <div class="department_picture w-full">
                  <span>photos</span>
                </div>
              </div>
            </li>
            <li class="month_score_wrap">
              <div class="month_score grid place-items-center">
                <h2 class="font-bold">Months</h2>
                <div class="py-2">
                  <span class="text_score roboto-light">40</span>
                  <span class="text_score roboto-light">pts</span>
                </div>
              </div>
              <!-- stars ratings -->
              <div class="stars_ratings_container my-1">
                <div class="star_rating">
                  <div class="star" data-rate="1"></div>
                  <div class="star" data-rate="2"></div>
                  <div class="star" data-rate="3"></div>
                  <div class="star" data-rate="4"></div>
                  <div class="star" data-rate="5"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- feedbacks requests month account -->
        <div class="feed_req_container">
          <div class="month_label text-center p-1">
            <h3 class="font-bold">Month Stats</h3>
          </div>
          <ul class="recap_account mt-5 sm:mt-8">
            <li class="feed_request_account w-full mb-2 flex flex-col items-center gap-1">
              <h4 class="p-1">Requests</h4>
              <span class="text-base">0</span>
            </li>
            <li class="feed_request_account w-full mb-2 flex flex-col items-center gap-1">
              <h4 class="p-1">Feedbacks</h4>
              <span class="text-base">0</span>
            </li>
          </ul>
          <div class="latest_feedback mt-8 grid place-items-center">
            <h5 class="mb-1 lato-regular">last feedback</h5>
            <div class="px-2 mx-2 mt-3 bg-gray-500 text-gray-200 rounded">
              <p class="text_feed">commercial regulation ambiguity</p>
            </div>
            <p class="w-full flex justify-center items-center" style="padding-top: 5px">
              sent on March 14, at 01:45 p.m
            </p>
          </div>
          <div
            class="group_enterprize mt-8 mx-auto w-52 max-w-6xl h-16 sm:h-24 flex flex-col justify-end"
          >
            <div class="name_company p-1 text-center border-2 border-solid border-gray-300 rounded">
              <h6>express company transit</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
ul {
  list-style: none;
  width: 100%;
}

@media (min-width: 180px) {
  h6 {
    font-size: calc(12px + 0.1vw);
  }

  h5 {
    font-size: calc(14px + 0.35vw);
  }

  h4 {
    font-size: calc(16px + 0.12vw);
  }

  h3 {
    font-size: calc(16px + 0.25vw);
  }

  h2 {
    font-size: calc(16px + 0.4vw);
  }

  p {
    font-size: calc(12px + 0.25vw);
  }

  .text_score {
    font-size: calc(16px + 0.35vw);
  }

  .text_feed {
    font-size: cal(10px + 0.1vw);
    text-align: center;
  }

  /* container */

  .gen_stats_wrap {
    width: 100%;
    padding: 1rem 0 1.5rem;
    margin: 0 auto;
    background-color: #ebebeb;
  }

  /* quaterly stats */

  .circle_track_wrap {
    width: 80%;
    margin: 0 auto;
    @apply flex flex-col justify-center items-center;
  }

  .circle_track_wrap .circle_month_frame {
    position: relative;
    width: 8rem;
    height: 8rem;
    margin: 1.5rem auto 1rem;
    background-color: rgb(219, 219, 183);
    border-radius: 30%;
    @apply flex justify-center;
  }

  .circle_this_month {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 15;
    box-shadow: 0px 0px 2px #b458b8;
    @apply bg-green-200 grid place-items-center;
  }

  .circle_last_month {
    position: absolute;
    top: 30%;
    left: -28%;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    z-index: 1;
    @apply bg-purple-300 flex justify-start;
  }

  .circle_last_month h5 {
    position: relative;
    top: 3rem;
    left: 1rem;
  }

  .circle_third_month {
    position: absolute;
    top: 30%;
    right: -28%;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    z-index: 1;
    @apply bg-pink-300 flex justify-end;
  }

  .circle_third_month h5 {
    position: relative;
    top: 3rem;
    right: 1rem;
  }

  /* month stats */

  .month_content .dpt_month_track {
    width: 100%;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 140px 80px;
    gap: 2rem;
  }

  .dpt_picture_area {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .department_picture_wrap {
    width: 80%;
    max-width: 140px;
    height: 80%;
    display: grid;
    border-radius: 12px;
    border: 1px solid black;
  }

  .dpt_month_track .month_score_wrap {
    width: 100%;
    padding: 0;
    display: grid;
    grid-template-rows: 50px 30px;
    place-items: center;
  }

  .stars_ratings_container {
    inline-size: 50%;
    padding: 1.5rem 0 0;
    @apply flex flex-col items-start justify-center;
  }

  .stars_ratings_container .star_rating {
    /* width: min(90%, 350px); */
    width: min(90%, 240px);
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .star {
    /* width: 50px;
    height: 45px; */
    width: 35px;
    height: 30px;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    background-color: #262626;
    transform: rotateX(50deg);
    cursor: pointer;
    transition: transform 150ms ease-in;
    outline: none;
  }

  .star.rated {
    background: #ffea00;
    transform: rotateX(0);
  }

  /* feedbacks requests month account */
  .recap_account {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content;
    gap: 1rem;
  }
}

@media (min-width: 380px) {
  h6 {
    font-size: calc(13px + 0.25vw);
  }

  p {
    font-size: calc(13px + 0.18vw);
  }

  /* container */
  .gen_stats_wrap {
    max-width: 780px;
    padding: 1rem 1rem 2rem;
  }

  /* quaterly stats */
  .circle_track_wrap .circle_month_frame {
    position: relative;
    width: 10.5rem;
    height: 10.5rem;
  }

  /* month stats */

  .month_content .dpt_month_track {
    grid-template-columns: repeat(2, 50%);
    grid-auto-rows: 146px;
    gap: 0;
  }

  .dpt_month_track .month_score_wrap {
    padding: 0.5rem 0;
    grid-template-rows: 80px 56px;
  }
}

@media (min-width: 640px) {
  h6 {
    font-size: calc(13px + 0.35vw);
  }

  h5 {
    font-size: calc(15px + 0.28vw);
  }

  h4 {
    font-size: calc(17px + 0.2vw);
  }

  h3 {
    font-size: calc(17px + 0.25vw);
  }

  h2 {
    font-size: calc(17px + 0.4vw);
  }

  p {
    font-size: calc(14px + 0.2vw);
  }

  /* container */
  .gen_stats_wrap {
    max-width: 780px;
    padding: 1rem 1rem 3rem;
  }

  /* quaterly stats */
  .circle_track_wrap .circle_month_frame {
    width: 11.4rem;
    height: 11.4rem;
  }

  /* month stats */

  .month_content .dpt_month_track {
    width: 100%;
    padding: 0.5rem;
    grid-auto-rows: 220px 80px;
    gap: 2rem;
  }

  .department_picture_wrap {
    max-width: 220px;
  }

  .dpt_month_track .month_score_wrap {
    padding: 0.5rem 0;
    grid-template-rows: 126px 56px;
  }
}
</style>
