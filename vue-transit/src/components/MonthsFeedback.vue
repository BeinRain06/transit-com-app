<script setup lang="ts"></script>
<template>
  <div class="consult_month_feedback w-full">
    <div class="template_area_base w-full">
      <div class="template_base_ct">
        <div clas="template_feed_in">
          <div class="feed_in_wrap relative pb-6 mb-4">
            <div class="identify_month">
              <h3 class="text-xs italic pb-3 md:text-sm">Aug 2024</h3>
            </div>
            <div class="feed_in">
              <h3 class="feed_title text-green-400 bg-green-100">FeedBack Received</h3>
              <div class="template_feed_cards w-full">
                <div class="template_feed_card w-full">
                  <ul class="feed_resume_card">
                    <div class="feed_matter">
                      <h3 class="feed_matter_title">
                        Feedback : <span class="feed_subject"> shortage resources </span>
                      </h3>
                    </div>

                    <div class="feed_department_wrap">
                      <h4 class="m-0">
                        Department: <span class="feed_department">law's and regulation</span>
                      </h4>
                    </div>

                    <div class="feed_priority_wrap">
                      <h4 class="feed_priority_title">
                        <span>priority</span>
                        <div class="feed_priority">High</div>
                      </h4>
                    </div>

                    <div class="feed_stats_wrap">
                      <div class="feed_status_wrap">
                        <h4 class="feed_status_title">
                          <span>status</span>
                          <div class="status_situation">
                            <span>pending ...</span>
                            <hr class="status_horizon_line" />
                          </div>
                        </h4>
                      </div>
                    </div>

                    <div class="feed_date_wrap">
                      <span class="feed_date">15 jun 2024</span>
                    </div>
                  </ul>
                  <ul class="feed_resume_card">
                    <div class="feed_matter">
                      <h3 class="feed_matter_title">
                        Feedback : <span class="feed_subject"> shortage resources </span>
                      </h3>
                    </div>

                    <div class="feed_department_wrap">
                      <h4 class="m-0">
                        Department: <span class="feed_department">law's and regulation</span>
                      </h4>
                    </div>

                    <div class="feed_priority_wrap">
                      <h4 class="feed_priority_title">
                        <span>priority</span>
                        <div class="feed_priority">High</div>
                      </h4>
                    </div>

                    <div class="feed_stats_wrap">
                      <div class="feed_status_wrap">
                        <h4 class="feed_status_title">
                          <span>status</span>
                          <div class="status_situation">
                            <span>pending ...</span>
                            <hr class="status_horizon_line" />
                          </div>
                        </h4>
                      </div>
                    </div>

                    <div class="feed_date_wrap">
                      <span class="feed_date">15 jun 2024</span>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="feed_out_wrap relative pt-0 pb-6 mt-1">
            <div class="feed_out">
              <h3 class="feed_title text-pink-400 bg-pink-100">FeedBack Received</h3>
              <div class="template_feed_cards w-full">
                <div class="template_feed_card w-full">
                  <ul class="feed_resume_card">
                    <div class="feed_matter">
                      <h3 class="feed_matter_title">
                        Feedback : <span class="feed_subject"> shortage resources </span>
                      </h3>
                    </div>

                    <div class="feed_department_wrap">
                      <h4 class="m-0">
                        Department: <span class="feed_department">law's and regulation</span>
                      </h4>
                    </div>

                    <div class="feed_priority_wrap">
                      <h4 class="feed_priority_title">
                        <span>priority</span>
                        <div class="feed_priority">High</div>
                      </h4>
                    </div>

                    <div class="feed_stats_wrap">
                      <div class="feed_status_wrap">
                        <h4 class="feed_status_title">
                          <span>status</span>
                          <div class="status_situation">
                            <span>pending ...</span>
                            <hr class="status_horizon_line" />
                          </div>
                        </h4>
                      </div>
                    </div>

                    <div class="feed_date_wrap">
                      <span class="feed_date">15 jun 2024</span>
                    </div>
                  </ul>
                  <ul class="feed_resume_card">
                    <div class="feed_matter">
                      <h3 class="feed_matter_title">
                        Feedback : <span class="feed_subject"> shortage resources </span>
                      </h3>
                    </div>

                    <div class="feed_department_wrap">
                      <h4 class="m-0">
                        Department: <span class="feed_department">law's and regulation</span>
                      </h4>
                    </div>

                    <div class="feed_priority_wrap">
                      <h4 class="feed_priority_title">
                        <span>priority</span>
                        <div class="feed_priority">High</div>
                      </h4>
                    </div>

                    <div class="feed_stats_wrap">
                      <div class="feed_status_wrap">
                        <h4 class="feed_status_title">
                          <span>status</span>
                          <div class="status_situation">
                            <span>pending ...</span>
                            <hr class="status_horizon_line" />
                          </div>
                        </h4>
                      </div>
                    </div>

                    <div class="feed_date_wrap">
                      <span class="feed_date">15 jun 2024</span>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  /** template base ct **/
  .template_base_ct {
    width: 100%;
    padding: 0.5rem;
  }

  .feed_title {
    padding: 0 1rem;
    margin: 0.5rem 0 1.35rem;
    font-size: calc(11px + 0.15vw);
    outline: none;
    border: none;
  }

  .feed_in .feed_title {
    /* box-shadow: -2px 3px 3px #cbff9b; */
    box-shadow: -3px 3px 3px #b6fce2;
  }

  .feed_out .feed_title {
    box-shadow: -3px 3px 3px #fcb6ed;
  }

  .feed_resume_card {
    font-size: calc(12px + 0.1vw);
    width: 100%;
    padding: 0.5rem;
    margin: 1.5rem auto;
    display: grid;
    grid-template-areas:
      'feed feed feed feed feed feed feed'
      '. dept dept dept dept dept .'
      'prior prior prior . stat stat stat'
      '. date_init date_init date_init date_init date_init . ';
    grid-auto-rows: 2rem 4rem 4rem 2rem;
    @apply border border-solid border-gray-200  md:border-gray-300;
  }

  .feed_matter {
    width: 100%;
    grid-area: feed;
  }

  .feed_department_wrap {
    font-size: 11px;
    width: 100%;
    grid-area: dept;
    display: grid;
    place-items: center;
    text-align: center;
  }

  .feed_priority_wrap {
    width: 100%;
    grid-area: prior;
    display: grid;
  }

  .feed_stats_wrap {
    width: 100%;
    grid-area: stat;
    display: grid;
  }

  .feed_date_wrap {
    width: 100%;
    padding: 0.5rem 0.25rem 0.25rem;
    margin: 0 auto;
    font-size: calc(11px + 0.25vw);
    font-style: italic;
    grid-area: date_init;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .feed_priority_title,
  .feed_status_title {
    width: 100%;
    padding-top: 0.25rem;
    font-size: calc(12px + 0.1vw);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }

  .feed_priority_title > span,
  .feed_status_title > span {
    width: 100%;
    padding: 0.25rem;
    text-align: center;
  }

  .feed_priority {
    --text-color: #c9d614;
    color: var(--text-color);
    font-size: calc(14px + 0.1vw);
    font-weight: bold;
    letter-spacing: 0.75px;
    transform: skewX(-8deg);
  }

  .feed_priority.low_prior {
    --text-color: #6647ad;
  }

  .feed_priority.med_prior {
    --text-color: #b64835;
  }

  .status_situation {
    @apply text-pink-400;
  }

  .status_situation.treated {
    @apply text-green-400;
  }

  .status_situation.non_treated {
    @apply text-red-400;
  }

  .status_situation .status_horizon_line {
    position: relative;
    top: 2px;
    width: 100%;
    height: 2px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0px 1px 10px #6f1d72;
    @apply bg-pink-600;
  }

  .status_situation.treated .status_horizon_line {
    padding: 0.1rem 1rem;
    box-shadow: 0px 1px 10px #1d722b;
    @apply bg-green-600;
  }

  .status_situation.non_treated .status_horizon_line {
    padding: 0.1rem 1rem;
    box-shadow: 0px 1px 10px #726c1d;
    @apply bg-yellow-500;
  }
}

@media (min-width: 360px) {
  .feed_title {
    font-size: calc(14px + 0.15vw);
  }

  .feed_resume_card {
    font-size: calc(14px + 0.2vw);
  }

  .feed_department_wrap {
    font-size: calc(13px + 0.2vw);
  }

  .feed_date_wrap {
    font-size: calc(13px + 0.25vw);
  }

  .feed_priority_title,
  .feed_status_title {
    font-size: calc(14px + 0.1vw);
  }
}

@media (min-width: 620px) {
  .feed_department_wrap {
    font-size: calc(14px + 0.2vw);
  }

  .feed_date_wrap {
    font-size: calc(14px + 0.25vw);
  }

  .feed_priority_title,
  .feed_status_title {
    font-size: calc(15px + 0.1vw);
  }
}
</style>
