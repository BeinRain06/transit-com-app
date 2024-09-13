<script setup lang="ts"></script>
<template>
  <main id="transit_signing">
    <div class="signing_wrap">
      <div class="design_top"></div>

      <div class="signing_logo">
        <h3 class="text-xl mt-3 py-2 px-1 krub-regular-italic">transi\com</h3>
      </div>

      <div class="land_account">
        <div class="pitch_registering">
          <div class="register_lab px-2 relative top-2 flex_row_center">
            <a class="text-sm text-blue-400 roboto-light">Register</a>
          </div>
          <form class="transit_registering flex_col_center">
            <div class="reg_form_control">
              <label class="text-sm roboto-light">Email</label>
              <input id="email" type="text" class="input_reg email" placeholder="Enter Email" />
            </div>
            <div class="reg_form_control">
              <label class="text-sm roboto-light">Username</label>
              <input
                id="username"
                type="text"
                class="input_reg username"
                placeholder="Enter Username"
              />
            </div>
            <div class="reg_form_control">
              <label class="text-sm roboto-light">Password</label>
              <input
                id="username"
                type="text"
                class="input_reg username"
                placeholder="Enter Username"
              />
            </div>
          </form>
        </div>

        <div class="pitch_login">
          <div class="connector_label flex_col_center relative mt-3">
            <div></div>
            <div class="flex_col_center gap-1 text-xs roboto-light">
              <span>OR</span>
              <span class="text-blue-500">log in using An Account</span>
            </div>
            <div></div>
          </div>
          <div class="account_wrapper">
            <div id="google_link" class="account_detail flex_row_center">
              <img
                src="../assets/images/icons8-google.svg"
                class="w-6 h-6 object-cover opacity-95"
                alt="sorry google !"
              />
            </div>
            <div id="linkedin_link" class="account_detail flex_row_center">
              <img
                src="../assets/images/icons8-linkedin.svg"
                class="w-7 h-7 object-cover opacity-95"
                alt="sorry linkedIn !"
              />
            </div>
            <div id="facebook_link" class="account_detail flex_row_center">
              <img
                src="../assets/images/icons8-facebook.svg"
                class="w-8 h-8 object-cover opacity-95"
                alt="sorry facebook !"
              />
            </div>
            <div id="twitter_link" class="account_detail flex_row_center">
              <img
                src="../assets/images/icons8-twitterx.svg"
                class="w-7 h-7 object-cover opacity-95"
                alt="sorry twitter !"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="design_bottom"></div>
    </div>
  </main>
</template>
<style scoped>
@media (min-width: 180px) {
  div {
    width: 100%;
  }

  .flex_row_center {
    @apply flex justify-center items-center;
  }

  .flex_col_center {
    @apply flex flex-col justify-center items-center;
  }

  .signing_wrap {
    position: relative;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0 auto;
  }

  .signing_logo {
    @apply flex justify-center items-center;
  }

  /** form **/

  .transit_registering {
    width: 100%;
    padding: 0.25rem 1rem 0.5rem;
  }

  .reg_form_control {
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
  }

  .input_reg {
    height: 1.75rem;
    padding-left: 0.25rem;
    border-radius: 5px;
    @apply border border-solid border-gray-400;
  }

  .input_reg::placeholder {
    font-size: 12px;
  }

  .connector_label div::first-child,
  .connector_label div::last-child {
    width: 1px;
    height: 5px;
    margin: 0.25rem 0;
    background-color: #333;
  }

  /** account  media **/
  .account_wrapper {
    width: 100%;
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 60px;
  }
}

@media (min-width: 520px) {
  .signing_logo {
    @apply flex justify-start items-center px-2 pt-2;
  }

  .design_top {
    width: 100%;
    position: relative;
    height: 4rem;
    border-radius: 3px;
    @apply bg-gray-500;
  }

  .design_bottom {
    width: 100%;
    position: absolute;
    height: 4rem;
    border-radius: 3px;
    bottom: 0;
    @apply bg-gray-400;
  }

  .land_account {
    width: 100%;
    margin: 2rem auto 0;
    display: flex;
    flex-basis: 1;
  }

  .pitch_registering,
  .pitch_login {
    width: 100%;
    height: 20rem;
  }

  .pitch_login {
    padding-top: 2.75rem;
  }
}

@media (min-width: 860px) {
  .signing_logo {
    width: 86%;
    margin: 0 auto;
    @apply flex justify-start items-center px-2 pt-2;
  }

  .land_account {
    width: 80%;
    margin: 2rem auto 0;
    display: flex;
    flex-basis: 1;
  }
}

@media (min-width: 860px) {
  .signing_logo {
    width: 80%;
  }

  .land_account {
    width: 68%;
  }
}
</style>
