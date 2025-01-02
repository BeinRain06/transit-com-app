<script setup lang="ts"></script>
<template>
  <section id="individual_statistics" class="w-full">
    <div class="stats_card_wrap m-4">
      <div class="stats_card_content w-full roboto-regular">
        <div class="employee_sector mt-4">
          <div class="department_name w-1/2 mx-auto mb-8 grid place-items-center">
            <div class="mb-8">
              <h3 class="text-center leading-relaxed lato-regular">DEPARTMENT</h3>
            </div>
            <div class="dpt_title mb-2 p-1 text-center roboto-light">
              <h2>Regulation Law</h2>
            </div>
          </div>
          <ul class="employee_print mb-2">
            <li class="employee_name">
              <div class="text-center">
                <h3 class="p-1">Batanga Beauville Celestin</h3>
              </div>
            </li>
            <li class="employee_picture py-2">
              <div
                class="employee_layout w-full h-full relative border border-solid border-purple-300"
              >
                <div class="picture_desc">Photo</div>
              </div>
            </li>
          </ul>
        </div>

        <div class="activities_track mt-6 sm:mt-12">
          <div class="index_score_wrap sm:mb-8">
            <div class="index_score_ct">
              <div class="outer_score_circle">
                <div class="inner_score_circle">
                  <span class="text_score">13</span>
                  <span class="mx-2 text_score">pts</span>
                </div>
              </div>
            </div>
          </div>

          <div class="ratings_last_activity mt-10">
            <div class="stars_rating_wrap">
              <div class="star_rating">
                <div class="star" data-rate="1"></div>
                <div class="star" data-rate="2"></div>
                <div class="star" data-rate="3"></div>
                <div class="star" data-rate="4"></div>
                <div class="star" data-rate="5"></div>
              </div>
            </div>
            <div class="last_feedback">
              <div
                class="subject_feedback flex flex-col leading-tight justify-center items-center md:text-center"
              >
                <h5 class="lato-regular">last feedback :</h5>
                <div class="activities_track px-1 mt-1 text-gray-500">
                  <h6 class="text_feed">commercial law Tchad</h6>
                </div>
                <p class="text-center roboto-light">sent on 13 july, 24 at 9:36 a.m</p>
              </div>
            </div>
          </div>
        </div>
        <div class="feed_req_months mt-10">
          <div class="py-2 mb-6 flex justify-center">
            <h3 class="font-bold">Month Stats</h3>
          </div>
          <ul class="track_feed_req">
            <li class="track_month_feed">
              <h4 class="p-1">feedbacks :</h4>
              <span class="text-base">0</span>
            </li>
            <li class="track_month_req">
              <h4 class="p-1">requests :</h4>
              <span class="text-base">0</span>
            </li>
          </ul>
        </div>
        <div class="more_infos mt-10">
          <div class="more_info_ct px-4">
            <div class="btn_wrapper">
              <div class="btn_add_anim">
                <button class="btn_more text-base roboto-regular">more</button>
              </div>
            </div>
            <div class="year_stats my-10">
              <ul class="list_record">
                <li class="year_display">
                  <div class="determined_year">
                    <h3>
                      <span class="text_year krub-medium-italic">Year :</span>
                      <span class="text_year krub-medium-italic"> 2024</span>
                    </h3>
                  </div>
                </li>
                <li class="request_account">
                  <div class="text_activity"><span>Requests :</span> <span> 14</span></div>
                </li>
                <li class="feedback_account">
                  <div class="text_activity"><span>Feedbacks :</span> <span> 8</span></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="categorize_employee_post mt-10 h-20 w-full flex flex-col justify-end text-center"
        >
          <div class="category_post sm:text-lg">
            <span>Consultant</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
ul {
  list-style: none;
}

@media (min-width: 180px) {
  h5 {
    font-size: calc(13px + 0.45vw);
  }

  h4 {
    font-size: 1.01em;
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

  .text_year {
    font-size: calc(15px + 0.3vw);
  }

  .text_activity {
    font-size: calc(14px + 0.3vw);
  }

  .stats_card_wrap {
    width: 100%;
    padding: 1rem 0 1.5rem;
    margin: 0 auto;
    background-color: #ebebeb;
  }

  .employee_print {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
      'picture'
      'name';
    grid-auto-rows: 96px 40px;
    gap: 12px;
  }

  .employee_print .employee_name {
    @apply w-4/5 mx-auto;
    grid-area: name;
  }

  .employee_print .employee_picture {
    width: 10em;
    margin: 0 auto;
    grid-area: picture;
  }

  .employee_picture .picture_desc {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .activities_track {
    padding: 0.5rem;
    @apply flex flex-col justify-center items-center;
  }

  .index_score_ct {
    width: 9rem;
    height: 9rem;
    margin: 0 auto;
  }

  .index_score_ct .outer_score_circle {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 15;
    @apply flex justify-center items-center  bg-gray-300;
  }

  .index_score_ct .outer_score_circle::before,
  .index_score_ct .outer_score_circle::after {
    content: '';
    position: absolute;
    top: 55%;
    left: -12%;
    width: 36%;
    height: 36%;
    border-radius: 50%;
    z-index: -1;
    background-color: #ddd;
  }

  .index_score_ct .outer_score_circle::after {
    top: 10%;
    left: unset;
    right: -10%;
  }

  .index_score_ct .inner_score_circle {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    z-index: 15;
    @apply flex justify-center items-center bg-gray-200;
  }

  .ratings_last_activity {
    @apply flex justify-between;
  }

  .stars_rating_wrap {
    inline-size: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .stars_rating_wrap .star_rating {
    width: min(90%, 210px);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .last_feedback {
    inline-size: 50%;
    padding: 0.5rem 0;
  }

  .star {
    width: 30px;
    height: 25px;
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

  .track_feed_req {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    gap: 0.25rem;
  }

  .track_month_feed,
  .track_month_req {
    @apply w-full flex flex-col justify-center items-center;
  }

  .year_stats .list_record {
    width: 100%;
    display: grid;
    grid-template-areas:
      'year requests'
      'year feedbacks';
    grid-auto-rows: 34px 34px;
  }

  .list_record .year_display {
    grid-area: year;
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
    display: grid;
    place-content: center;
  }

  .list_record .request_account {
    grid-area: requests;
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    padding-bottom: 2px;
    padding-right: 0.5rem;
    display: grid;
    justify-self: end;
  }

  .list_record .feedback_account {
    grid-area: feedbacks;
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    padding-top: 2px;
    padding-left: 0.5rem;
    display: grid;
    justify-self: start;
  }

  .category_post {
    width: min(50%, 6.4rem);
    padding: 2px 5px;
    margin: 0 auto;
    border-radius: 3px;
    @apply border-2 border-solid border-gray-300;
  }
}

@media (min-width: 380px) {
  h5 {
    font-size: calc(15px + 0.45vw);
  }

  h4 {
    font-size: calc(16px + 0.2vw);
  }

  h3 {
    font-size: calc(16px + 0.25vw);
  }

  h2 {
    font-size: calc(16px + 0.4vw);
  }

  p {
    font-size: calc(13px + 0.18vw);
  }

  .text_year {
    font-size: calc(16px + 0.3vw);
  }

  .text_activity {
    font-size: calc(15px + 0.28vw);
  }

  .stats_card_wrap {
    padding: 1rem 1rem 2rem;
  }

  .employee_print {
    grid-auto-rows: 140px 80px;
    gap: 10px;
  }

  .employee_print .employee_picture {
    width: 12rem;
    padding: 0.5rem 0 1.5rem;
  }

  .index_score_ct {
    width: 12rem;
    height: 12rem;
  }

  .ratings_last_activity {
    width: 86%;
    @apply flex justify-between;
  }
}

@media (min-width: 640px) {
  h6 {
    font-size: calc(15px + 0.35vw);
  }

  h5 {
    font-size: calc(16px + 0.45vw);
  }

  p {
    font-size: calc(14px + 0.25vw);
  }

  .text_feed {
    font-size: cal(12px + 0.25vw);
  }

  .stats_card_wrap {
    max-width: 780px;
    padding: 1rem 1rem 3rem;
  }

  .employee_print {
    grid-template-areas: 'picture name';
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
    gap: 12px;
  }

  .employee_print .employee_picture {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    grid-area: picture;
  }

  .employee_print .employee_name {
    grid-area: name;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .index_score_ct {
    width: 15rem;
    height: 15rem;
  }

  .list_record .request_account {
    grid-area: requests;
    padding-right: 0;
    justify-self: center;
  }

  .list_record .feedback_account {
    grid-area: feedbacks;
    padding-left: 0;
    justify-self: center;
  }
}
</style>
