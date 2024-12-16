<script setup lang="ts">
import { useTemplateRef, computed } from 'vue'

const navLinkOneRef = useTemplateRef<HTMLLIElement | null>('linkTagOne')
const navLinkTwoRef = useTemplateRef<HTMLLIElement | null>('linkTagTwo')
const navLinkThreeRef = useTemplateRef<HTMLLIElement | null>('linkTagThree')

const searchDeskRef = useTemplateRef<HTMLDivElement | null>('searchDesk')

const dropUserDeskRef = useTemplateRef<HTMLDivElement | null>('dropUser')

function handleResearch() {
  // do something ...
}
function handleActSearch(value: string) {
  if (value === 'open') {
    // do something ...
    searchDeskRef.value?.classList.add('active_bar_research')
  } else if (value === 'close') {
    // do something ...
    searchDeskRef.value?.classList.remove('active_bar_research')
  }
}
function handleLogSignRedirect() {
  // do something ...
}

function handleMenu(label: string) {
  // do something ...
}

function handleDropDown(label: string) {
  // do something ...
}

function handleSubDropDown() {
  // do something ...
}

function handleLinkModal(aliasRef: string, label: string) {
  // do something ...

  if (label === 'open') {
    // do from open
    switch (aliasRef) {
      case 'linkOne':
        navLinkOneRef.value?.classList.add('active_hover')
        break
      case 'linkTwo':
        navLinkTwoRef.value?.classList.add('active_hover')
        break
      case 'linkThree':
        navLinkThreeRef.value?.classList.add('active_hover')
        break
      default:
        throw Error('there is something wrong in handleLinkModal Function')
    }
  } else if (label === 'close') {
    // do from close
    switch (aliasRef) {
      case 'linkOne':
        navLinkOneRef.value?.classList.remove('active_hover')
        break
      case 'linkTwo':
        navLinkTwoRef.value?.classList.remove('active_hover')
        break
      case 'linkThree':
        navLinkThreeRef.value?.classList.remove('active_hover')
        break
      default:
        throw Error('there is something wrong in handleLinkModal Function')
    }
  }
}

function handleDeskUserDropDown() {
  if (!dropUserDeskRef.value?.classList.contains('active_select')) {
    dropUserDeskRef.value?.classList.add('active_select')
    setTimeout(() => {
      dropUserDeskRef.value?.classList.remove('active_select')
    }, 10000)
  } else {
    dropUserDeskRef.value?.classList.remove('active_select')
  }
}

function stayInUserDropDown(value: string) {
  if (value === 'open') {
    dropUserDeskRef.value?.classList.add('active_select')
  } else if (value === 'close') {
    setTimeout(() => {
      dropUserDeskRef.value?.classList.remove('active_select')
    }, 3000)
  }
}
</script>
<template>
  <nav id="nav_mob_container" class="nav_mob_container">
    <div id="nav_first_flow" class="nav_first_flow">
      <div class="nav_block_start flex_center gap-2">
        <!--Next menu_ design  !!!  -->
        <div class="menu_wrap">
          <div class="menu_bar" @click="() => handleMenu('open')"></div>
          <div class="modal_menu">
            <div class="modal_close">
              <div class="icon_menu_close" @click="() => handleMenu('close')">&#x2715;</div>
            </div>
            <ul class="menu_content">
              <li class="menu_elt">
                <div class="menu_label">
                  <span>Home</span>
                </div>
              </li>
              <li class="menu_elt">
                <div class="menu_label">
                  <span>Requests</span>
                  <div class="angle_menu" @click="() => handleDropDown('0')">&#xfe40;</div>
                </div>
                <div class="submenu_elt" data-drop="0">
                  <div class="submenu_item">
                    <div id="req_fuel_oil" class="column_submenu">
                      <h5>fuel or oil</h5>
                    </div>
                  </div>
                  <div class="submenu_item">
                    <div id="req_human_integration" class="column_submenu">
                      <h5>human integration</h5>
                    </div>
                  </div>
                  <div class="submenu_item">
                    <div id="req_purchase_order" class="column_submenu">
                      <h5>purchase order</h5>
                    </div>
                  </div>
                  <div class="submenu_item">
                    <div id="req_engine_components" class="column_submenu">
                      <h5>engine components repair</h5>
                    </div>
                  </div>
                  <div class="submenu_item">
                    <div id="req_maintenance_tools" class="column_submenu">
                      <h5>maintenance tools</h5>
                    </div>
                  </div>
                  <div class="submenu_item">
                    <div id="req_supply_resources" class="column_submenu">
                      <h5>supply resources</h5>
                    </div>
                  </div>
                  <div class="submenu_item">
                    <div id="req_salary_advance" class="column_submenu">
                      <h5>salary advance</h5>
                    </div>
                  </div>
                  <div class="submenu_item">
                    <div id="req_unpaid_bonus" class="column_submenu">
                      <h5>unpaid bonus</h5>
                    </div>
                  </div>
                </div>
              </li>
              <li class="menu_elt">
                <div class="menu_label">
                  <span>FeedBacks</span>
                  <div class="angle_menu" @click="() => handleDropDown('1')">&#xfe40;</div>
                </div>
                <div class="submenu_elt" data-drop="1">
                  <div class="submenu_item">
                    <div id="ask_feedback" class="column_submenu">
                      <h5>Ask Feedback</h5>
                    </div>
                  </div>
                  <div class="submenu_item">
                    <div id="reply_feedback" class="column_submenu">
                      <h5>Reply Feedback</h5>
                    </div>
                  </div>
                </div>
              </li>
              <li class="menu_elt">
                <div class="menu_label">
                  <span>Company</span>
                  <div class="angle_menu" @click="() => handleDropDown('2')">&#xfe40;</div>
                </div>
                <div class="submenu_elt" data-drop="2">
                  <div class="submenu_item">
                    <div id="company_business" class="column_submenu">
                      <h5>Career</h5>
                    </div>
                  </div>
                </div>
              </li>
              <li class="menu_elt">
                <div class="menu_label">
                  <h4>
                    <span>user</span>
                    <div class="angle_menu" @click="() => handleDropDown('3')">&#xfe40;</div>
                  </h4>
                </div>
                <div class="submenu_elt" data-drop="3">
                  <div class="submenu_item">
                    <div class="submenu_label">
                      <h5>
                        <span>stats</span>
                        <div class="angle_submenu" @click="() => handleSubDropDown()">&#xfe40;</div>
                      </h5>
                    </div>
                    <div class="column_submenu">
                      <div id="id_stats">
                        <h5>Individuals Stats</h5>
                      </div>
                      <div id="gen_stats">
                        <h5>GeneralStats</h5>
                      </div>
                    </div>
                  </div>
                  <div class="submenu_item">
                    <div id="user_profile" class="user_profile">
                      <div class="logo_letter">N</div>
                      <div class="account_email">joe_delmach@gmail.com</div>
                    </div>
                    <div id="submenu_login" class="column_submenu" @click="handleLogSignRedirect">
                      <h5>login</h5>
                    </div>
                  </div>
                  <div class="submenu_item">
                    <div id="submenu_sign_up" class="column_submenu" @click="handleLogSignRedirect">
                      <h5>Sign Up</h5>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="logo_expression">
          <h1 class="logo_app text-white">
            <span>transi</span>
            <span class="text-green-300">\</span>
            <span>.app</span>
          </h1>
        </div>
      </div>
      <ul class="nav_block_end flex_center gap-4">
        <li class="search_area">
          <div class="search_mob_button" @click="handleActSearch('open')">&#128269;</div>
          <!-- search area mob>=520px  -->
          <div class="nav_long_search">
            <input
              type="text"
              id="search_in_one"
              name="search"
              placeholder="requests or feedbacks"
            />
            <div class="close_nav_search">
              <!-- box div parent position absolute -->
              <button class="btn_close_search" @click.prevent="handleActSearch('close')">
                &#x2715;
              </button>
            </div>
          </div>
        </li>
        <li class="login_area">
          <div class="login_session">
            <div class="login_wrap">
              <button class="btn_login" @click.prevent="handleLogSignRedirect">login</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div id="nav_add_search" class="nav_add_search">
      <!-- search area 180px>= mob <520px  -->
      <div class="nav_mini_search">
        <input type="text" id="search_in_two" name="search" placeholder="requests or feedbacks" />
        <div class="close_nav_search">
          <!-- box div parent position absolute -->
          <button class="btn_close_search" @click.prevent="handleActSearch('close')">
            &#x2715;
          </button>
        </div>
      </div>
    </div>
  </nav>
  <nav id="nav_desk_container " class="nav_desk_container">
    <div class="nav_left_side">
      <div class="logo_expression">
        <h1 class="logo_app text-white">
          <span>transi</span>
          <span class="text-green-300">\</span>
          <span>.app</span>
        </h1>
      </div>
    </div>
    <!-- NEXT *nav middle inside** -->
    <div class="nav_middle_side flex_row_center">
      <ul class="link_desk_wrap">
        <li id="desk_link_home" class="hover:text-green-400">
          <div>Home</div>
        </li>
        <li id="desk_link_request" class="hover:text-green-400" ref="linkTagOne">
          <div
            @mouseover="() => handleLinkModal('linkOne', 'open')"
            @mouseleave="() => handleLinkModal('linkOne', 'close')"
          >
            Requests
          </div>
          <div
            class="modal_desk_link"
            @mouseover="() => handleLinkModal('linkOne', 'open')"
            @mouseleave="() => handleLinkModal('linkOne', 'close')"
          >
            <div class="sublink_desk">fuel or oil</div>
            <div class="sublink_desk">human integration</div>
            <div class="sublink_desk">purchase order</div>
            <div class="sublink_desk">engine components repair</div>
            <div class="sublink_desk">maintenance tools</div>
            <div class="sublink_desk">supply resources</div>
            <div class="sublink_desk">salary advance</div>
            <div class="sublink_desk">unpaid bonus</div>
          </div>
        </li>
        <li id="desk_link_feedback" class="hover:text-green-400" ref="linkTagTwo">
          <div
            @mouseover="() => handleLinkModal('linkTwo', 'open')"
            @mouseleave="() => handleLinkModal('linkTwo', 'close')"
          >
            Feedbacks
          </div>
          <div
            class="modal_desk_link"
            @mouseover="() => handleLinkModal('linkTwo', 'open')"
            @mouseleave="() => handleLinkModal('linkTwo', 'close')"
          >
            <div class="sublink_desk">ask feedbacks</div>
            <div class="sublink_desk">reply feedbacks</div>
          </div>
        </li>
        <li id="desk_link_company" class="hover:text-green-400" ref="linkTagThree">
          <div
            @mouseover="() => handleLinkModal('linkThree', 'open')"
            @mouseleave="() => handleLinkModal('linkThree', 'close')"
          >
            Company
          </div>
          <div
            class="modal_desk_link"
            @mouseover="() => handleLinkModal('linkThree', 'open')"
            @mouseleave="() => handleLinkModal('linkThree', 'close')"
          >
            <div class="sublink_desk">career</div>
          </div>
        </li>
      </ul>
      <div class="search_desk_wrapper" ref="searchDesk">
        <div class="search_desk_button ml-3 px-5 cursor-pointer" @click="handleActSearch('open')">
          &#128269;
        </div>
        <div class="input_desk_wrapper">
          <div class="input_desk_content">
            <input id="search" name="search" type="text" placeholder="requests or feedbacks ..." />
            <div class="icon_input_desk">
              <div class="icon_search_input cursor-pointer" @click="handleResearch">&#128269;</div>
              <div class="icon_close_input cursor-pointer" @click="handleActSearch('close')">
                &#x2715;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav_right_side flex_center gap-4">
      <div class="user_define">
        <div class="logo_user_define">name</div>
        <div class="user_angle_container" ref="dropUser">
          <div class="user_angle_down cursor-pointer" @click="handleDeskUserDropDown">&#xfe40;</div>
          <div
            class="modal_user_desk"
            @mouseover="() => stayInUserDropDown('open')"
            @mouseleave="() => stayInUserDropDown('close')"
          >
            <div class="modal_user_ct">
              <div id="id_user_stats">Individual Stats</div>
              <div id="gen_user_stats">General Stats</div>
              <div id="sign_up_desk" @click="handleLogSignRedirect">
                <h5>Sign up</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="login_desk" class="login_desk" @click="handleLogSignRedirect">login</div>
    </div>
  </nav>
</template>
<style scoped>
@media (min-width: 180px) {
  ul {
    list-style: none;
  }

  .logo_app {
    font-size: calc(12px + 0.35vw);
    font-weight: 600;
  }

  .btn_close_search {
    width: 18px;
    height: 18px;
    background-color: var(--grayish-text-color-1);
    border-radius: 5px;
    display: grid;
    place-items: center;
    z-index: 5;
  }

  .flex_center {
    @apply flex justify-center items-center;
  }

  .flex_row_center {
    @apply flex flex-row justify-center items-center;
  }

  .flex_between {
    @apply flex justify-between items-center;
  }

  .nav_desk_container {
    @apply hidden;
  }

  input[name='search']:focus {
    width: 100%;
    padding: 5px 10px;
    border-radius: 24px;
    border: 2px solid #092c40bb;
    outline: 2px solid #fff;
    outline-offset: -3px;
  }

  input[name='search']::placeholder {
    font-style: italic;
    font-size: calc(12px + 0.15vw);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* ** nav -- mobile** */
  .nav_mob_container {
    width: 100vw;
    margin: 0 auto;
    background-color: var(--bg-secondary);
    transition: all 1s ease;
    display: block;
  }

  .nav_mob_container .nav_first_flow {
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    @apply flex justify-between items-center;
  }

  /* nav-- block-start -- */

  .nav_block_start {
    width: 20%;
    flex-shrink: 0;
  }

  .nav_mob_container #nav_add_search {
    width: 100px;
    padding: 0 5%;
    margin: 0.25rem auto;
    @apply hidden justify-center items-center;
  }

  .nav_mob_container #nav_add_search.active_mini_search {
    @apply flex justify-center items-center;
  }

  .nav_add_search {
    width: 80%;
    height: 24px;
    margin: 0 auto;
    border-radius: 24px;
  }

  .nav_add_search .nav_mini_search {
    position: relative;
    width: 100%;
  }

  .nav_mini_search input[name='search'],
  .nav_long_search input[name='search'] {
    width: 100%;
    padding: 5px 10px;
    color: var(--bg-primary);
    background-color: #092c40a2;
    border-radius: 24px;
    border: 2px solid #092c40bb;
    outline: none;
    transition: all 1s ease;
    z-index: 3;
  }

  /*  .nav_mini_search input[name='search']:focus,
  .nav_long_search input[name='search']:focus {
    width: 100%;
    padding: 5px 10px;
    border-radius: 24px;
    border: 2px solid #092c40bb;
    outline: 2px solid #fff;
    outline-offset: -3px;
  }

  .nav_mini_search input[name='search']::placeholder,
  .nav_long_search input[name='search']::placeholder {
    font-style: italic;
    font-size: calc(12px + 0.15vw);
  } */

  .nav_mini_search .close_nav_search {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .nav_long_search .close_nav_search {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .menu_wrap {
    position: relative;
    width: 4rem;
    height: 4rem;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #fff;
  }

  .menu_bar {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: #fff;
    border-radius: 12px;
  }

  .menu_bar::before,
  .menu_bar::after {
    content: '';
    position: absolute;
    top: -10px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 12px;
  }

  .menu_bar::after {
    top: 10px;
  }

  .menu_elt .angle_menu {
    transform: rotate(45deg);
  }

  .menu_elt.active_elt_menu .angle_menu {
    transform: rotate(0deg);
  }

  .menu_bar .modal_menu {
    display: none;
    position: absolute;
    top: 2rem;
    left: 1rem;
    width: 10rem;
    padding: 1rem 0.5rem;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #5e636e;
    box-shadow: 0px 0px 5px #cccaca;
  }

  .menu_bar.active_menu .modal_menu {
    display: flex;
    justify-content: center;
  }

  .modal_menu .modal_close {
    width: 100%;
    padding: 10px 15px;
    font-size: 1rem;
    color: var(--grayish-text-color-2);
    @apply flex flex-col justify-end;
  }

  ul.menu_content {
    width: 100%;
    @apply flex flex-col justify-start gap-4;
  }

  li.menu_elt {
    width: 100%;
    padding: 10px 5px;
  }

  li.menu_elt .menu_label {
    @apply flex justify-start gap-1;
  }

  li.menu_elt .submenu_elt {
    @apply flex flex-col justify-start gap-2;
  }

  .submenu_item {
    @apply flex flex-col justify-start gap-2;
  }

  .submenu_item .user_profile {
    @apply flex flex-col justify-center gap-2;
  }

  .user_profile div.logo_letter {
    width: 25px;
    height: 25px;
    color: var(--color-subtext-title);
    background-color: #092c40d5;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid black;
    outline: 4px solid #fff;
    outline-offset: -2px;
  }

  .submenu_item .column_submenu {
    @apply flex  justify-start gap-1;
  }
  /* nav-- block-end -- */

  .nav_block_end {
    width: 80%;
  }

  li.search_area .nav_long_search {
    display: none;
    position: relative;
    width: 100%;
    padding: 5px 10px;
    z-index: 3;
    traansition: all 1s ease;
  }
}
@media (min-width: 520px) {
  /* nav-- block-start -- */
  .nav_mob_container #nav_add_search {
    @apply hidden;
  }

  /* nav-- block-end -- */
  .nav_block_end li.search_area {
    width: 80%;
    display: block;
  }

  li.search_area .nav_long_search {
    width: 100%;
    height: 24px;
  }

  .nav_block_end li.login_area {
    width: 20%;
    display: flex;
  }
}
@media (min-width: 860px) {
  .nav_mob_container {
    display: none;
  }

  /* ** nav -- desktop** */
  .nav_desk_container {
    width: 100vw;
    height: 50px;
    padding: 10px 45px 10px 20px;
    color: var(--color-subtext-title);
    background-color: var(--bg-secondary);
    transition: all 1s ease;
    @apply flex justify-between items-center;
  }

  .nav_desk_container .nav_left_side {
    width: 10%;
    flex-shrink: 0;
  }

  .nav_desk_container .nav_middle_side {
    position: relative;
    width: 75%;
    height: 100%;
    padding: 10px 2%;
  }

  .nav_middle_side ul.link_desk_wrap {
    padding-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    z-index: 3;
  }

  ul.link_desk_wrap li {
    position: relative;
    top: 0;
    width: 6rem;
    height: 100%;
  }

  li .modal_desk_link {
    position: absolute;
    top: 2rem;
    width: 200px;
    padding: 10px 20px 25px 5px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #a75da0;
    opacity: 0.1;
    visibility: hidden;
    @apply flex flex-col justify-start gap-1;
    z-index: 10;
  }

  ul.link_desk_wrap li > div {
    cursor: pointer;
    transition: all 1.4s ease;
  }

  li.active_hover .modal_desk_link {
    position: absolute;
    top: 2.1rem;
    width: 200px;
    padding: 10px 20px 25px 10px;
    color: var(--grayish-text-color-2);
    /* background-color: #fff; */
    background-color: var(--color-text-question);
    border-radius: 5px;
    box-shadow: 0px 0px 5px #a75da0;
    opacity: 1;
    visibility: visible;
    transition: all 1s ease;
    @apply flex flex-col justify-start;
  }

  .modal_desk_link div:hover {
    color: var(--grayish-text-color-2);
  }

  .modal_desk_link .sublink_desk {
    padding: 0.35rem 0;
    color: var(--color-subtext-title);
    letter-spacing: 0px;
    transition: all 350ms ease;
  }

  .modal_desk_link .sublink_desk:hover {
    padding: 0.5rem 0;
    font-weight: bold;
    color: var(--color-subtitle-footer);
    letter-spacing: 1px;
  }

  .search_desk_wrapper {
    position: relative;
    width: min-content;
    padding: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    transition: all 450ms ease;
  }

  .search_desk_wrapper.active_bar_research {
    position: absolute;
    top: 0;
    width: 100%;
    height: 42px;
  }

  .search_desk_wrapper .search_desk_button {
    display: inline-block;
  }

  .search_desk_wrapper.active_bar_research .search_desk_button {
    display: none;
  }

  .search_desk_wrapper .input_desk_wrapper {
    width: 10%;
    top: -0.38rem;
    visibility: hidden;
    opacity: 0;
    transition: all 1s ease;
    @apply relative inline-block;
  }

  .search_desk_wrapper.active_bar_research .input_desk_wrapper {
    width: 80%;
    height: 30px;
    visibility: visible;
    opacity: 1;
    transition: all 1s ease 100ms;
    @apply relative inline-block;
  }

  .input_desk_wrapper .input_desk_content {
    @apply w-full h-full absolute flex justify-center items-center;
    background-color: #000000a2;
    background-color: var(--color-text-question);
    border-radius: 24px;
    z-index: 30;
  }

  .input_desk_content input[name='search'] {
    color: var(--color-subtext-title);
    background-color: var(--color-text-question);
    padding: 0 20px;
    border: 1px solid #cccaca;
    border-radius: 24px;
    outline: none;
    z-index: 40;
    @apply w-full h-full flex justify-center items-center;
  }

  .input_desk_content .icon_input_desk {
    width: 3rem;
    position: absolute;
    right: 0.75rem;
    font-size: calc(12px + 0.15vw);
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 75;
  }

  .search_desk_wrapper .icon_input_desk {
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease;
  }

  .search_desk_wrapper.active_bar_research .icon_input_desk {
    opacity: 1;
    visibility: visible;
  }

  .nav_desk_container .nav_right_side {
    width: 15%;
  }

  .nav_right_side .user_define {
    width: 100%;
    @apply flex justify-end items-center;
  }

  .user_define .logo_user_define {
    width: auto;
    display: flex;
    text-decoration: underline;
  }

  .user_define.active_login .logo_user_define {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: var(--color-subtext-title);
    background-color: #092c40d5;
    display: grid;
    place-items: center;
    border: 1px solid black;
    outline: 4px solid #fff;
    outline-offset: -2px;
  }

  .user_angle_container {
    position: relative;
    width: 0.5rem;
    padding-top: 14px;
    margin: 0 8px;
  }

  .user_angle_container .modal_user_desk {
    display: block;
    position: absolute;
    top: 1.2rem;
    right: 0.25rem;
    width: 190px;
    height: 150px;
    opacity: 0;
    visibility: hidden;
    transition: all 1s ease;
  }

  .user_angle_container.active_select .modal_user_desk {
    top: 1.6rem;
    opacity: 1;
    visibility: visible;
  }

  .user_angle_container .modal_user_ct {
    position: relative;
    top: 0;
    padding: 15px 20px 25px;
    color: var(--color-subtext-title);
    /* background-color: #fff; */
    background-color: var(--color-text-question);
    border-radius: 5px;
    box-shadow: -2px -1px 5px #a75da0;
    visibility: hidden;
    opacity: 0.9;
    transition: all 1s ease;
    @apply w-full h-full flex flex-col justify-start gap-2;
  }

  .user_angle_container.active_select .modal_user_ct {
    top: 1rem;
    visibility: visible;
    opacity: 1;
  }

  .modal_user_ct div {
    width: max-content;
    padding: 0.25rem 0;
    border-bottom: 1px solid transparent;
    transition: all 350ms ease;
  }

  .modal_user_ct div:hover {
    padding: 0.35rem 0;
    border-bottom: 1px solid #a75da0;
    color: var(--bg-button-2);
  }

  /*  .modal_user_desk div {
    width: 100%;
    height: 1rem;
  }

  .modal_user_desk div:hover {
    cursor: pointer;
    text-decoration: underline;
  } */

  .nav_right_side .login_desk {
    cursor: pointer;
    width: min-content;
    padding-top: 1px;
    border: 1px solid transparent;
    transition: all 1s ease;
  }

  .nav_right_side .login_desk:hover {
    color: #24775b;
    padding: 0 8px;
    border: 1px solid #24775b;
  }
}
</style>
