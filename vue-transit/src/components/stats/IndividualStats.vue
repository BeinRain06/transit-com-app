<script setup lang="ts"></script>
<template>
  <section id="individual_statistics" class="w-full">
    <div class="stats_card_wrap">
      <div class="stats_card_content w-full p-2">
        <div class="employee_sector">
          <div class="department_name">
            <h2>Regulation Law</h2>
          </div>
          <ul class="employe_print">
            <li class="employee_name">
              <div>
                <span>Batanga Beauville Celestin</span>
              </div>
            </li>
            <li class="employee_picture">
              <div class="employee_layout">
                <div class="picture_desc">Photo</div>
              </div>
            </li>
          </ul>
        </div>
        <!-- actiity tracks -->
        <div class="activities_track">
          <div class="index_score_wrap">
            <div class="index_score_ct">
              <div class="outer_score_circle">
                <div class="inner_score_circle">
                  <h3 class="font-bold"><span>13</span> <span>pts</span></h3>
                </div>
              </div>
            </div>
          </div>
          <!-- stars ratings -->
          <div class="ratings_last_activity">
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
              <div class="subject_feedback">
                <p>commercial law Tchad</p>
              </div>
              <p>sent on 13 july, 24 at 9:36 a.m</p>
            </div>
          </div>
        </div>
        <div class="more_infos">
          <div class="more_info_ct">
            <div class="btn_wrapper">
              <div class="btn_add_anim">
                <button class="btn_more">more</button>
              </div>
            </div>
            <div class="year_stats">
              <ul>
                <li>
                  <div class="determined_year">
                    <h3><span>Year :</span> <span> 2024</span></h3>
                  </div>
                </li>
                <li>
                  <div class="account_activity">
                    <p><span>Requests :</span> <span> 14</span></p>
                  </div>
                </li>
                <div class="account_activity">
                  <p><span>Feedbacks :</span> <span> 8</span></p>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="categorize_employee_post">
          <div class="category_post">
            <p>Consultant</p>
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
  /* container */
  .stats_card_wrap {
    width: 100%;
    max-width: 740px;
    margin: 5% auto;
    padding: 0;
  }

  /* employee sector */

  /* activity tracks */

  .activities_track {
    margin-top: 3rem;
    padding: 0.5rem;
    @apply flex flex-col justify-center items-center;
  }

  .index_score_ct {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
  }

  .index_score_ct .outer_score_circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    @apply bg-gray-300;
  }

  .index_score_ct .inner_score_circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    @apply bg-gray-200 text-center;
  }

  /* ratings */
  .ratings_last_activity {
    @apply h-28 flex justify-between;
  }

  .stars_rating_wrap {
    inline-size: 50%;
    @apply flex flex-col items-left justify-center;
  }

  .last_feedback {
    inline-size: 50%;
    @apply flex flex-col items-right  justify-center gap-1;
  }

  .stars_rating_wrap .star_rating {
    width: min(90%, 350px);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .star {
    width: 50px;
    height: 45px;
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
}
</style>
