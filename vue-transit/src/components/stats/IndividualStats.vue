<script setup lang="ts"></script>
<template>
  <section id="individual_statistics" class="w-full bg-gray-200 pt-10 pb-16">
    <div class="stats_card_wrap">
      <div class="stats_card_content w-full roboto-regular">
        <!-- employee sectors -->
        <div class="employee_sector mt-6">
          <div class="department_name w-1/2 mx-auto mb-3 grid place-items-center">
            <div>
              <h4 class="text-center leading-relaxed lato-regular">Department :</h4>
            </div>
            <h4 class="w-full p-1 text-center">Regulation Law</h4>
          </div>
          <ul class="employee_print mb-2">
            <li class="employee_name">
              <div class="text-center">
                <h5>Batanga Beauville Celestin</h5>
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
        <!-- actiity tracks -->
        <div class="activities_track mt-2 md:mt-6">
          <div class="index_score_wrap sm:mb-8">
            <div class="index_score_ct">
              <div class="outer_score_circle">
                <div class="inner_score_circle">
                  <h3 class="font-bold"><span>13</span> <span>pts</span></h3>
                </div>
              </div>
            </div>
          </div>
          <!-- stars ratings -->
          <div class="ratings_last_activity py-2">
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
              <div class="subject_feedback flex flex-col leading-tight items-center md:text-center">
                <span> last feedback : </span>
                <h6 class="pb-1">commercial law Tchad</h6>
                <h6>sent on 13 july, 24 at 9:36 a.m</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="more_infos mt-2">
          <div class="more_info_ct" style="font-size: calc(14px + 0.25vw)">
            <div class="btn_wrapper">
              <div class="btn_add_anim">
                <button class="btn_more roboto-regular">more</button>
              </div>
            </div>
            <div class="year_stats">
              <ul class="list_record">
                <li class="year_display">
                  <div class="determined_year">
                    <h3><span>Year :</span> <span> 2024</span></h3>
                  </div>
                </li>
                <li class="request_account">
                  <div class="account_activity">
                    <p><span>Requests :</span> <span> 14</span></p>
                  </div>
                </li>
                <li class="feedback_account">
                  <div class="account_activity">
                    <p><span>Feedbacks :</span> <span> 8</span></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="categorize_employee_post mt-10 text-center">
          <div class="category_post">
            <span>Consultant</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

div {
  width: 100%;
}

@media (min-width: 180px) {
  h4 {
    font-size: 1.01em;
  }

  h5 {
    font-size: calc(13px + 0.45vw);
  }

  h6 {
    font-size: calc(12px + 0.18vw);
    line-height: 1.3;
  }

  /* container */
  .stats_card_wrap {
    width: 100%;
    max-width: 440px;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 12px;
    background-color: #fff;
  }

  /* employee sector */
  .employee_print {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
      'picture'
      'name';

    grid-auto-rows: 96px 40px;
    gap: 10px;
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

  /* activity tracks */

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

  /* ratings */
  .ratings_last_activity {
    @apply py-2 flex justify-between;
  }

  .stars_rating_wrap {
    inline-size: 50%;
    @apply flex flex-col items-start justify-center;
  }

  .stars_rating_wrap .star_rating {
    /* width: min(90%, 350px); */
    width: min(90%, 240px);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .last_feedback {
    inline-size: 50%;
    padding: 1.5rem 0;
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

  /* more infos */
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
    display: grid;
    place-content: center;
  }

  .list_record .feedback_account {
    grid-area: feedbacks;
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    display: grid;
    place-content: center;
  }

  /* 
  categorize employee */
  .category_post {
    width: min(50%, 6.4rem);
    padding: 2px 5px;
    margin: 0 auto;
    border-radius: 3px;
    @apply border-2 border-solid border-gray-300;
  }
}

@media (min-width: 420px) {
  h4 {
    font-size: 1.04em;
  }

  h5 {
    font-size: calc(14px + 0.25vw);
  }

  h6 {
    font-size: calc(13px + 0.12vw);
    line-height: 1.3;
  }

  /* employee sector */

  .employee_print {
    width: 100%;
    max-width: 600px;
    display: grid;
    grid-template-areas:
      'picture'
      'name';

    grid-auto-rows: 140px 40px;
    gap: 10px;
  }

  .employee_print .employee_picture {
    width: 12rem;
  }
}
</style>
