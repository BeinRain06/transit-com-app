<script setup lang="ts"></script>
<template>
  <main id="reply_feed">
    <div class="reply_feed_container">
      <div class="reply_feed_content w-full h-full">
        <div class="feedback_raised_reason p-2 mt-2 lg:mt-6 mb-4">
          <div
            class="reply_feed_entitled relative -left-1 inline-flex justify-start items-center h-6"
          >
            <h5 class="w-28 h-full lg: text-lg lg:w-32">Feedback issue</h5>
            <div
              class="question_raise_symbol grid place-content-center mx-1 w-6 h-4 text-xs border border-solid border-gray-300 bg-gray-200"
              style="border-radius: 50%"
            >
              &quest;
            </div>
          </div>
          <div class="dive_reason_wrap w-full">
            <div class="about_reason w-full flex flex-col gap-2 justify-center items-center my-8">
              <span class="reason_label lg: text-xl">Concern :</span>
              <span
                class="reason_spec mx-2 bg-yellow-700 text-white px-4 py-1 text-sm lg: text-xl"
                style="border-radius: 10px"
                >Shortage Resource</span
              >
            </div>
            <div
              class="feedback_area w-full flex justify-start items-center gap-1"
              style="flex-wrap: wrap"
            >
              <span class="feedback_area_label w-full lg: text-lg">feed from:</span>
              <div class="feedback_area_text w-auto py-1 px-4 my-2 bg-green-200 lg: text-lg">
                Internal operation
              </div>
            </div>
          </div>
          <ul
            class="service_target_wrap w-full flex_row_center mt-6 mb-2 mx-auto lg:w-4/5 lg: text-lg"
          >
            <li class="service_target">
              <span class="label_departement w-full text-left">Departement</span>
              <div class="box_department"></div>
            </li>
            <li class="work_office">
              <span>to :</span>
              <span class="text-center w-full px-1">executive manager</span>
            </li>
          </ul>
        </div>
        <div class="detail_about_feed w-full p-2">
          <div class="detail_axis w-full mx-auto">
            <h3 class="title_reply my-2 lg: text-lg">Details Issue</h3>
            <div class="report_detail_feed leading-relaxed flex_row_center">
              <p class="report_detail_paragraph w-full text-left text-sm lg:text-md lg:w-4/5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus harum,
                cupiditate quia ea numquam explicabo cum ad tempora ipsam distinctio nobis. Nemo
                nostrum debitis dolores, aliquid expedita corrupti error repudiandae iure autem
                molestias ducimus quod doloribus molestiae quos alias facilis in labore iusto sint
                praesentium nulla minima soluta perspiciatis? Ex ipsam repellat, laboriosam officia
                illo suscipit pariatur deleniti voluptas!
              </p>
            </div>
            <ul class="report_feed_files">
              <li class="file_associated">
                <div class="file_box">
                  <p class="file_box_text">this image</p>
                </div>
                <span>image</span>
              </li>
              <li class="file_associated">
                <div class="file_box">
                  <p class="file_box_text">this file</p>
                </div>
                <span>file</span>
              </li>
            </ul>
          </div>
        </div>

        <div id="answer_section w-full" class="py-2 mt-6 mb-4">
          <div class="answer_section_container w-full">
            <div
              class="gen_ans_entitled inline-flex items-center justify-start h-10"
              style="padding: 5px"
            >
              <h3 class="title_reply h-full align-self-center lg:text-lg">Response</h3>
              <div class="toggle_section_ans h-full mx-2">
                <div class="div_direction_ans">&#62;</div>
              </div>
            </div>
            <div class="resolution_wrap w-full my-4">
              <div class="work_resolution_wrapper w-full my-6 lg:text-lg">
                <div class="park_resolution" data-park="1">
                  <ul class="row_elements">
                    <li class="label_res">
                      <h4 class="title_res_label">Resolution 1 :</h4>
                    </li>
                    <li class="text_res_wrap">
                      <p id="resolution_1" class="res_content_text">
                        we have to buy a new component
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="park_resolution" data-park="2">
                  <ul class="row_elements">
                    <li class="label_res">
                      <h4 class="title_res_label">Resolution 2 :</h4>
                    </li>
                    <li class="text_res_wrap">
                      <p id="resolution_2" class="res_content_text">
                        we also need to perform a mechanic to the engine car
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="park_resolution" data-park="3">
                  <ul class="row_elements">
                    <li class="label_res">
                      <h4 class="title_res_label">Resolution 3 :</h4>
                    </li>
                    <li class="text_res_wrap">
                      <p id="resolution_3" class="res_content_text">
                        we can cancel the option of sending engine to the repair shop for now
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="late_answer_wrap w-full p-1">
                  <h3 class="my-2 w-full text-center text-gray-400 font-bold lg:text-left">
                    Main Problem (answering late)
                  </h3>
                  <p class="w-9/12 mx-auto text-center lg:text-left">
                    we got stuck at the traffic while coming back to the enterprize
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="details_response w-full">
          <div class="inline-flex items-center my-1 p-1">
            <h3 class="title_reply lg:text-lg">details answer</h3>
            <div class="detail_symbol_wrap">
              <div class="detail_symbol">i</div>
            </div>
          </div>
          <div class="detail_text_wrap w-full my-1 mx-auto lg:w-4/5">
            <div class="detail_text_wrap">
              <p class="detail_text lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nam cum quas
                eligendi adipisci, quo at maiores minima cumque autem veniam ut aut laborum, eaque
                incidunt error officia! Nam, animi.
              </p>
            </div>
          </div>
          <div class="details_img_files mt-8 mb-4">
            <div class="details_mini_title">
              <h4 class="text-gray-500 lg:w-4/5 lg:text-lg">add image/file</h4>
            </div>
            <div class="details_files_ct">
              <div class="detail_file_item">
                <input
                  id="res_file_1"
                  type="file"
                  accept="image/*,.doc,.docx,.xml,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              </div>
              <div class="detail_file_item">
                <input
                  id="res_file_2"
                  type="file"
                  accept="image/*,.doc,.docx,.xml,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              </div>
              <div class="detail_file_item">
                <input
                  id="res_file_3"
                  type="file"
                  accept="image/*,.doc,.docx,.xml,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="case_further_contact my-6">
          <div class="case_contact_title w-full my-4">
            <ul class="w-full h-8 flex justify-start items-center">
              <li class="w-6 h-full flex items-center">
                <div
                  class="case_check w-4 h-4 grid place-content-center rounded border border-solid border-black"
                >
                  &check;
                </div>
              </li>
              <li class="w-9/12 h-full flex items-center text-gray-500">
                <p class="font-bold lg:text-md">more information . call or email me to</p>
              </li>
            </ul>
          </div>

          <ul class="others_means_contact">
            <li class="means_contact my-2">
              <div class="mean_element">
                <h4 class="label_mean w-full">Telephone 1 :</h4>

                <div id="mean_phone" class="res_contact_number"></div>
              </div>
            </li>
            <li class="means_contact my-2">
              <div class="mean_element">
                <h4 class="label_mean w-full">Email :</h4>
                <div id="mean_email" class="res_contact_email"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="end_feed_wrap w-full h-12 flex my-4 lg:my-10">
          <ul class="feedback_end_reply">
            <li>
              <div class="state_feedback">treated</div>
            </li>
            <li>
              <div class="py-1 px-4 bg-gray-800 border border-solid border-black">
                <span class="text-gray-500 font-bold">feedback</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
@media (min-width: 180px) {
  ul {
    list-style: none;
  }

  .flex_row_center {
    @apply flex flex-row justify-center items-center;
  }

  .flex_col_center {
    @apply flex flex-col justify-center items-center;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  select {
    border-radius: 10px;
    padding: 0.25rem 0.75rem;
    margin: 0 0.5rem;
    border: 2px solid rgb(150, 89, 89);
    outline: 2px solid #fff;
    outline-offset: -3px;
    @apply bg-gray-300;
  }

  .reply_feed_container {
    width: 100vw;
    min-height: 100vh;
    padding: 1rem 0.5rem;
    margin: 0 auto;
  }

  .service_target_wrap .service_target {
    inline-size: 60%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .box_department {
    position: relative;
    width: 100%;
    height: 160px;
    margin: 0.25rem 0;
    border-radius: 5px;
    @apply border border-solid border-gray-300;
  }

  .box_department::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    padding: 1rem;
    @apply border border-solid border-gray-400;
  }

  .service_target_wrap .work_office {
    inline-size: 40%;
    @apply flex_col_center gap-2 mx-auto;
  }

  .detail_axis .report_detail_feed {
    width: 100%;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border-radius: 8px;
    @apply bg-gray-50;
  }

  .detail_axis .report_feed_files {
    width: 100%;
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 8px;
    display: grid;
    grid-auto-columns: 100%;
    grid-template-rows: repeat(2, 140px);
    @apply border-2 border-dotted border-gray-300;
  }

  .file_associated {
    width: 100%;
    margin: 0.5rem 0;
    @apply flex_col_center gap-1;
  }

  .file_associated .file_box {
    width: 100%;
    height: 12rem;
    text-align: center;
    border-radius: 3px;
    @apply border-2 border-solid border-gray-200;
  }

  .park_resolution {
    width: 100%;
    margin: 1.5rem auto;
  }

  .park_resolution .row_elements {
    width: 100%;
    padding: 0.25rem;
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-rows: 1.4rem auto;
    gap: 1rem;
  }

  .label_res {
    width: 100%;
    margin: 0.5rem 0;
    align-self: center;
  }

  .title_res_label {
    padding: 5px 0;
  }

  .text_res_wrap {
    width: 86%;
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    outline: 2px solid #ddd;
    border-radius: 5px;
  }

  .text_res_wrap .res_content_text {
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid transparent;
    outline: none;
  }

  .text_res_wrap .add_res_toggle {
    position: absolute;
    top: 50%;
    left: calc(100%);
    width: 2rem;
    height: 100%;
    padding: 0.25rem;
    margin-left: 0.5rem;
    font-size: calc(18px + 0.35vw);
    transform: translateY(-50%);
    border-radius: 3px;
    @apply grid place-content-center bg-purple-600 text-white;
  }

  .text_res_wrap .close_toggle {
    position: absolute;
    top: 2px;
    right: -1rem;
    inline-size: 1rem;
    height: 1rem;
    border-radius: 3px;

    @apply grid place-content-center bg-gray-200;
  }

  .late_answer_wrap {
    width: 100%;
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
  }

  .details_response .detail_symbol_wrap {
    width: 1.3rem;
    height: 100%;
    margin: 0 0.5rem;
  }

  .detail_symbol_wrap .detail_symbol {
    height: 1.3rem;
    @apply grid place-content-center border border-solid border-gray-300;
  }

  .detail_text_wrap .detail_text {
    width: 100%;
    padding: 10px;
    outline: none;
    border: 2px solid transparent;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  }

  .details_img_files .details_files_ct {
    width: 100%;
    margin: 1rem auto;
    padding: 1rem 0.5rem;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, min-content);
    gap: 1rem;
    border-radius: 5px;
    @apply border border-solid border-gray-200;
  }

  .details_files_ct .detail_file_item {
    width: 100%;
    height: 4rem;
    display: flex;
    flex-wrap: wrap;
    @apply border border-solid border-gray-200;
  }

  .div_direction_ans {
    position: relative;
    top: 0.1rem;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0px;
    margin-left: 0.25rem;
    transform: rotate(90deg);
    border: 1px solid black;
    outline: 2px solid #f4f4f4;
    outline-offset: -3px;
    @apply bg-yellow-600 text-white grid place-content-center rounded-md;
  }

  .others_means_contact {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .others_means_contact .means_contact {
    position: relative;
    width: 100%;
    outline: 2px solid #ddd;
  }

  .means_contact .mean_element {
    width: 100%;
    padding: 0.5rem;
    height: auto;
    display: grid;
    grid-auto-columns: 100%;
    grid-template-rows: 100%;
  }

  .mean_element .res_contact_number,
  .mean_element .res_contact_email {
    width: 100%;
    height: 2rem;
    padding: 5px 10px;
    margin: 1rem 0 0.5rem;
    -moz-appearance: none;
    outline: none;
    border: 1px solid transparent;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  }

  .feedback_end_reply {
    --end-state-bg: rgb(120, 226, 7);
    --end-state-color: #f4f4f4;
    @apply w-full h-full flex justify-between items-center;
  }

  .feedback_end_reply .state_feedback {
    width: 5rem;
    height: 1.4rem;
    padding: 0 1rem;
    color: var(--end-state-color);
    background-color: var(--end-state-bg);
    display: grid;
    place-items: center;
    font-weight: bold;
    border-radius: 12px;
  }
}

@media (min-width: 460px) {
  .reply_feed_container {
    padding: 1rem 1.5rem;
  }

  .service_target_wrap .service_target {
    inline-size: 55%;
  }

  .service_target_wrap .work_office {
    inline-size: 45%;
  }

  .box_department {
    margin: 0.5rem 0;
  }

  .detail_axis .report_detail_feed {
    padding: 0rem 1rem 0.5rem;
    margin: 0;
  }

  .detail_axis .report_feed_files {
    margin: 1.5rem auto 2rem;
  }

  .late_answer_wrap {
    margin: 1.5rem 0;
    align-items: center;
  }

  .detail_text_wrap .detail_text {
    margin: 1rem 0 0.5rem;
  }

  .details_img_files {
    margin: 4rem 0 2rem;
  }
}

@media (min-width: 1024px) {
  .reply_feed_container {
    padding: 1rem 1.5rem 3rem;
  }

  .box_department {
    height: 220px;
    margin: 2rem 0 1rem;
  }

  .detail_axis .report_feed_files {
    width: 60%;
  }

  .park_resolution {
    width: 80%;
  }

  .details_img_files .details_files_ct {
    width: 70%;
  }
}
</style>
