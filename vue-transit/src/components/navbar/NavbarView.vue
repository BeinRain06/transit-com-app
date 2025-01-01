<script setup lang="ts">
import { useTemplateRef, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user-store'

const stateMenuIn = defineModel()

const router = useRouter()

watch(stateMenuIn, async () => {
  await stateMenuIn
  if (!stateMenuIn.value) {
    menuLinkRef.value?.classList.remove('active_menu')
  }
  return null
})

// menu wrap
const menuLinkRef = useTemplateRef<HTMLDivElement | null>('menuLink')

// Link Mobile
const requestsLinkRef = useTemplateRef<HTMLDivElement | null>('linkZero')
const feedbacksLinkRef = useTemplateRef<HTMLDivElement | null>('linkOne')
const companyLinkRef = useTemplateRef<HTMLDivElement | null>('linkTwo')
const userLinkRef = useTemplateRef<HTMLDivElement | null>('linkThree')
const statsLinkRef = useTemplateRef<HTMLDivElement | null>('myStats')

// link DeskTop
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

async function handleMenu() {
  // do something ...
  console.log('stateMenuIn :', stateMenuIn.value)

  if (!menuLinkRef.value?.classList.contains('active_menu')) {
    menuLinkRef.value?.classList.add('active_menu')
    stateMenuIn.value = true
    await stateMenuIn
  } else {
    menuLinkRef.value?.classList.remove('active_menu')
    stateMenuIn.value = false
    await stateMenuIn
  }

  console.log('stateMenuIn end:', stateMenuIn.value)
}

function handleDropDown(labelCase: string) {
  // do something ...
  const catchItAll = [requestsLinkRef, feedbacksLinkRef, companyLinkRef, userLinkRef]

  catchItAll.forEach((linkRef, i) => {
    if (linkRef.value?.classList.contains('active_drop_case') && i !== +labelCase) {
      linkRef.value?.classList.remove('active_drop_case')
    }
  })

  switch (labelCase) {
    case '0':
      if (requestsLinkRef.value?.classList.contains('active_drop_case')) {
        requestsLinkRef.value?.classList.remove('active_drop_case')
      } else {
        requestsLinkRef.value?.classList.add('active_drop_case')
      }
      break
    case '1':
      if (feedbacksLinkRef.value?.classList.contains('active_drop_case')) {
        feedbacksLinkRef.value?.classList.remove('active_drop_case')
      } else {
        feedbacksLinkRef.value?.classList.add('active_drop_case')
      }
      break
    case '2':
      if (companyLinkRef.value?.classList.contains('active_drop_case')) {
        companyLinkRef.value?.classList.remove('active_drop_case')
      } else {
        companyLinkRef.value?.classList.add('active_drop_case')
      }
      break
    case '3':
      if (userLinkRef.value?.classList.contains('active_drop_case')) {
        userLinkRef.value?.classList.remove('active_drop_case')
      } else {
        userLinkRef.value?.classList.add('active_drop_case')
      }
      break
    default:
      throw Error('Something wrong in handleDropDown Fn')
  }
}

function resetDropDownMenu() {
  const catchItAll = [requestsLinkRef, feedbacksLinkRef, companyLinkRef, userLinkRef]

  catchItAll.forEach((linkRef, i) => {
    if (linkRef.value?.classList.contains('active_drop_case')) {
      linkRef.value?.classList.remove('active_drop_case')
    }
  })
}

function handleSubDropDown() {
  // do something ...

  if (!statsLinkRef.value?.classList.contains('active_stats')) {
    statsLinkRef.value?.classList.add('active_stats')
  } else {
    statsLinkRef.value?.classList.remove('active_stats')
  }
}

async function handleLinkTarget(linkLabel: string, sublinkLabel?: string) {
  if (linkLabel === 'home') {
    console.log('Yield Here !')
    await router.push({ path: '/' })
  } else if (linkLabel === 'requests') {
    switch (sublinkLabel) {
      case 'fuel-oil':
        await router.push({ path: '/requests/form/fuel_oil' })
        break
      case 'integration':
        await router.push({ path: '/requests/form/fuel_oil' })
        break
      case 'purchase-order':
        await router.push({ path: '/requests/form/purchase_order' })
        break
      case 'components-repair':
        await router.push({ path: '/requests/form/engine_repair' })
        break
      case 'maintenance-tools':
        await router.push({ path: '/requests/form/maintenance_tools' })
        break
      case 'supply':
        await router.push({ path: '/requests/form/supply_resources' })
        break
      case 'salary-advance':
        await router.push({ path: '/requests/form/salary_advance' })
        break
      case 'unpaid-bonus':
        await router.push({ path: '/requests/form/unpaid_bonus' })
        break
      default:
        throw new Error('something wrong in career sublinkLabel')
    }
    if (navLinkOneRef.value !== null) {
      navLinkOneRef.value?.classList.remove('active_hover')
    }
  } else if (linkLabel === 'feedbacks') {
    switch (sublinkLabel) {
      case 'ask-feed':
        await router.push({ path: '/feedbacks/queries/form' })
        break
      case 'reply-feed':
        await router.push({ path: '/feedbacks/answers/form' })
        break
      default:
        throw new Error('something wrong in career sublinkLabel')
    }
    if (navLinkTwoRef.value !== null) {
      navLinkTwoRef.value?.classList.remove('active_hover')
    }
  } else if (linkLabel === 'company') {
    switch (sublinkLabel) {
      case 'career':
        await router.push({ path: '/career' })
        break
      default:
        throw new Error('something wrong in career sublinkLabel')
    }
    if (navLinkThreeRef.value !== null) {
      navLinkThreeRef.value?.classList.remove('active_hover')
    }
  } else if (linkLabel === 'user') {
    switch (sublinkLabel) {
      case 'individual':
        await router.push({ path: '/user/stats/accounting/0045678333081' }) // will really be **router.resolve(...)**
        statsLinkRef.value?.classList.remove('active_stats')
        break
      case 'general':
        await router.push({ path: '/user/stats/accounting' }) // will really be **router.resolve(...)**
        statsLinkRef.value?.classList.remove('active_stats')
        break
      default:
        throw new Error('something wrong in career sublinkLabel')
    }
  }

  menuLinkRef.value?.classList.remove('active_menu')
  stateMenuIn.value = false

  resetDropDownMenu()
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
      <div class="nav_block_start flex_start gap-2">
        <!--Next menu_ design  !!!  -->
        <div class="menu_wrap" ref="menuLink">
          <div class="hamburger" @click="async () => handleMenu()">
            <div class="menu_bar"></div>
          </div>
        </div>
        <div class="modal_menu">
          <div class="modal_close">
            <div class="icon_menu_close cursor-pointer" @click="async () => handleMenu()">
              &#x2715;
            </div>
          </div>
          <ul class="menu_content">
            <li class="menu_elt">
              <div class="menu_label">
                <span class="cursor-pointer" @click="async () => handleLinkTarget('home')"
                  >Home</span
                >
                <div class="angle_menu invisible">&#xfe40;</div>
              </div>
            </li>
            <li class="menu_elt" data-drop="0" ref="linkZero">
              <div class="menu_label" @click="() => handleDropDown('0')">
                <span>Requests</span>
                <div class="angle_menu cursor-pointer">&#xfe40;</div>
              </div>
              <div class="submenu_elt">
                <div class="submenu_item">
                  <div
                    id="req_fuel_oil"
                    class="column_submenu sub_first_link"
                    @click="async () => handleLinkTarget('requests', 'fuel-oil')"
                  >
                    <h5 class="cursor-pointer">fuel or oil</h5>
                  </div>
                </div>
                <div class="submenu_item">
                  <div
                    id="req_human_integration"
                    class="column_submenu sub_first_link"
                    @click="async () => handleLinkTarget('requests', 'human')"
                  >
                    <h5 class="cursor-pointer">human integration</h5>
                  </div>
                </div>
                <div class="submenu_item">
                  <div
                    id="req_purchase_order"
                    class="column_submenu sub_first_link"
                    @click="async () => handleLinkTarget('requests', 'purchase-order')"
                  >
                    <h5 class="cursor-pointer">purchase order</h5>
                  </div>
                </div>
                <div class="submenu_item">
                  <div
                    id="req_engine_components"
                    class="column_submenu sub_first_link"
                    @click="async () => handleLinkTarget('requests', 'components-repair')"
                  >
                    <h5 class="cursor-pointer">engine components repair</h5>
                  </div>
                </div>
                <div class="submenu_item">
                  <div
                    id="req_maintenance_tools"
                    class="column_submenu sub_first_link"
                    @click="async () => handleLinkTarget('requests', 'maintenance-tools')"
                  >
                    <h5 class="cursor-pointer">maintenance tools</h5>
                  </div>
                </div>
                <div class="submenu_item">
                  <div
                    id="req_supply_resources"
                    class="column_submenu sub_first_link"
                    @click="async () => handleLinkTarget('requests', 'supply')"
                  >
                    <h5 class="cursor-pointer">supply resources</h5>
                  </div>
                </div>
                <div class="submenu_item">
                  <div
                    id="req_salary_advance"
                    class="column_submenu sub_first_link"
                    @click="async () => handleLinkTarget('requests', 'salary-advance')"
                  >
                    <h5 class="cursor-pointer">salary advance</h5>
                  </div>
                </div>
                <div class="submenu_item">
                  <div
                    id="req_unpaid_bonus"
                    class="column_submenu sub_first_link"
                    @click="async () => handleLinkTarget('requests', 'unpaid-bonus')"
                  >
                    <h5 class="cursor-pointer">unpaid bonus</h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="menu_elt" data-drop="1" ref="linkOne">
              <div class="menu_label" @click="() => handleDropDown('1')">
                <span>FeedBacks</span>
                <div class="angle_menu cursor-pointer">&#xfe40;</div>
              </div>
              <div class="submenu_elt">
                <div class="submenu_item">
                  <div
                    id="ask_feedback"
                    class="column_submenu sub_first_link"
                    @click="async () => handleLinkTarget('feedbacks', 'ask-feed')"
                  >
                    <h5 class="cursor-pointer">Ask Feedback</h5>
                  </div>
                </div>
                <div class="submenu_item">
                  <div
                    id="reply_feedback"
                    class="column_submenu sub_first_link"
                    @click="async () => handleLinkTarget('feedbacks', 'reply-feed')"
                  >
                    <h5 class="cursor-pointer">Reply Feedback</h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="menu_elt" data-drop="2" ref="linkTwo">
              <div class="menu_label" @click="() => handleDropDown('2')">
                <span>Company</span>
                <div class="angle_menu cursor-pointer">&#xfe40;</div>
              </div>
              <div class="submenu_elt">
                <div class="submenu_item">
                  <div
                    id="company_business"
                    class="column_submenu sub_first_link"
                    @click="async () => handleLinkTarget('company', 'career')"
                  >
                    <h5 class="cursor-pointer">Career</h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="menu_elt" data-drop="3" ref="linkThree">
              <div class="menu_label" @click="() => handleDropDown('3')">
                <span>User</span>
                <div class="angle_menu">&#xfe40;</div>
              </div>
              <div class="submenu_elt">
                <div class="submenu_item">
                  <div id="stats_box" ref="myStats">
                    <div class="submenu_label flex justify-start gap-1 hover:text-blue-400">
                      <span>stats</span>
                      <div class="angle_submenu" @click="() => handleSubDropDown()">&#xfe40;</div>
                    </div>
                    <div id="stats_mob_content" class="column_submenu drop_content my-2">
                      <div class="stats_mob_area">
                        <div
                          id="id_stats"
                          class="pt-1 pl-3"
                          @click="async () => handleLinkTarget('user', 'individual')"
                        >
                          <h5 class="cursor-pointer hover:text-blue-400">Individuals Stats</h5>
                        </div>
                        <div
                          id="gen_stats"
                          class="py-2 pl-3"
                          @click="async () => handleLinkTarget('user', 'general')"
                        >
                          <h5 class="cursor-pointer hover:text-blue-400">GeneralStats</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="submenu_item">
                  <div id="user_profile" class="user_profile">
                    <div class="logo_letter">N</div>
                    <div
                      class="account_email tracking-normal skew-x-0 hover:text-green-400 hover:tracking-wider hover:skew-x-12"
                      style="transition: all 450ms ease"
                    >
                      joe_delmach@gmail.com
                    </div>
                  </div>
                  <div
                    id="submenu_login"
                    class="column_sub_end cursor-pointer"
                    @click="handleLogSignRedirect"
                  >
                    <h5>Login</h5>
                  </div>
                  <div
                    id="submenu_sign_up"
                    class="column_sub_end cursor-pointer my-2"
                    @click="handleLogSignRedirect"
                  >
                    <h5>Sign Up</h5>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="logo_expression mx-2">
          <h1 class="logo_app text-white">
            <span>transi</span>
            <span class="text-green-300">\</span>
            <span>.app</span>
          </h1>
        </div>
      </div>
      <ul class="nav_block_end flex_center gap-4">
        <li class="search_area">
          <div class="search_mob_button text-xs cursor-pointer" @click="handleActSearch('open')">
            &#128269;
          </div>
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
            <div id="login_mob" class="btn_login" @click.prevent="handleLogSignRedirect">login</div>
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
    <div class="nav_middle_side flex_center">
      <ul class="link_desk_wrap">
        <li id="desk_link_home" class="hover:text-green-400">
          <div @click="async () => handleLinkTarget('home')">Home</div>
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
            <div class="sublink_desk" @click="async () => handleLinkTarget('requests', 'fuel-oil')">
              fuel or oil
            </div>
            <div
              class="sublink_desk"
              @click="async () => handleLinkTarget('requests', 'integration')"
            >
              human integration
            </div>
            <div
              class="sublink_desk"
              @click="async () => handleLinkTarget('requests', 'purchase-order')"
            >
              purchase order
            </div>
            <div
              class="sublink_desk"
              @click="async () => handleLinkTarget('requests', 'components-repair')"
            >
              engine components repair
            </div>
            <div
              class="sublink_desk"
              @click="async () => handleLinkTarget('requests', 'maintenance-tools')"
            >
              maintenance tools
            </div>
            <div class="sublink_desk" @click="async () => handleLinkTarget('requests', 'supply')">
              supply resources
            </div>
            <div
              class="sublink_desk"
              @click="async () => handleLinkTarget('requests', 'salary-advance')"
            >
              salary advance
            </div>
            <div
              class="sublink_desk"
              @click="async () => handleLinkTarget('requests', 'unpaid-bonus')"
            >
              unpaid bonus
            </div>
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
            <div
              class="sublink_desk"
              @click="async () => handleLinkTarget('feedbacks', 'ask-feed')"
            >
              ask feedbacks
            </div>
            <div
              class="sublink_desk"
              @click="async () => handleLinkTarget('feedbacks', 'reply-feed')"
            >
              reply feedbacks
            </div>
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
            <div class="sublink_desk" @click="async () => handleLinkTarget('company', 'career')">
              career
            </div>
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
              <div
                id="id_user_stats"
                class="cursor-pointer"
                @click="async () => handleLinkTarget('user', 'individual')"
              >
                Individual Stats
              </div>
              <div
                id="gen_user_stats"
                class="cursor-pointer"
                @click="async () => handleLinkTarget('user', 'general')"
              >
                General Stats
              </div>
              <div id="sign_up_desk" @click="handleLogSignRedirect">
                <h5>Sign up</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="login_desk" class="btn_login" @click="handleLogSignRedirect">login</div>
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

  .btn_login {
    cursor: pointer;
    width: min-content;
    padding-top: 1px;
    color: var(--color-subtext-title);
    border: 1px solid transparent;
    transition: all 1s ease;
  }

  .btn_login:hover {
    color: #24775b;
    padding: 0 8px;
    border: 1px solid #24775b;
  }

  .flex_start {
    @apply flex justify-start items-center;
  }

  .flex_center {
    @apply flex justify-center items-center;
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

  /* mobile angles animation */
  .angle_menu,
  .angle_submenu {
    cursor: pointer;
    padding-top: 2px;
    margin: 0 10px;
    font-size: calc(14px + 0.12vw);
    transform: rotate(-90deg);
    transition: all 480ms ease-in-out;
  }

  li.menu_elt.active_drop_case .angle_menu,
  #stats_box.active_stats .angle_submenu {
    transform: rotate(0deg);
  }

  #stats_box .drop_content {
    display: none;
  }

  #stats_box.active_stats .drop_content {
    display: block;
  }

  #stats_box .stats_mob_area {
    position: relative;
    display: grid;
    width: max-content;
    animation: stats-box-anim 780ms ease forwards;
  }

  #stats_box.active_stats .stats_mob_area {
    padding: 0.5rem;
    animation: stats-box-anim 780ms ease forwards;
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
    position: relative;
    width: 100%;
    height: 50px;
    padding: 5px 28px 5px 20px;
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
    width: 2.15rem;
    height: 2.15rem;
    border-radius: 5px;
    border: 1px solid #fff;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    transform: scale(0.86);
  }

  .menu_wrap .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    @apply flex justify-center items-center;
  }

  .menu_wrap .hamburger > div.menu_bar {
    position: relative;
    top: 0;
    width: 86%;
    height: 2px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 12px;
    transition: all 1s ease;
    flex-shrink: 0;
    @apply flex justify-center items-center;
  }

  .menu_wrap .hamburger > div.menu_bar::before,
  .menu_wrap .hamburger > div.menu_bar::after {
    content: '';
    position: absolute;
    top: -9px;
    width: 100%;
    height: 100%;
    display: inline-block;
    background-color: #fff;
    border-radius: 12px;
    transform: rotate(0deg);
    transition: all 1s ease;
  }

  .menu_wrap .hamburger > div.menu_bar::after {
    top: 9px;
  }

  .menu_wrap.active_menu .hamburger > div.menu_bar {
    transform: rotate(135deg);
  }

  .menu_wrap.active_menu .hamburger > div.menu_bar::before,
  .menu_wrap.active_menu .hamburger > div.menu_bar::after {
    top: 0;
    transform: rotate(90deg);
  }

  .menu_wrap + .modal_menu {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 3.1rem;
    left: -30%;
    width: 100%;
    padding: 0.5rem;
    color: var(--bg-primary);
    background-color: var(--color-text-question);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid transparent;
    backdrop-filter: grayscale;
    z-index: 15;
    transition: all 720ms ease;
  }

  .menu_wrap.active_menu + .modal_menu {
    left: 0;
    visibility: visible;
    opacity: 1;
  }

  .modal_menu .modal_close {
    width: 100%;
    padding: 5px 8px 5px 15px;
    font-size: 1.3rem;
    color: var(--grayish-text-color-1);
    @apply flex flex justify-end;
  }

  ul.menu_content {
    width: 100%;
    @apply flex flex-col justify-start  gap-10;
  }

  li.menu_elt {
    width: 100%;
    padding: 5px;
    @apply flex  flex-col justify-center gap-1;
  }

  li.menu_elt .menu_label {
    width: 70%;
    /*  padding-left: 1.65rem; */
    padding-left: -0.25rem;
    margin: 0 auto;
    cursor: pointer;
    transform: scale(1);
    transition: all 350ms ease;
    @apply flex justify-center gap-1;
  }

  li.menu_elt .menu_label:hover {
    transform: scale(1.07);
    @apply text-green-400;
  }

  li.menu_elt .submenu_elt {
    animation: sub-elt-anim 3s ease forwards;
    @apply py-1  hidden flex-col justify-center items-center;
  }

  li.menu_elt.active_drop_case .submenu_elt {
    animation: sub-elt-anim 3s ease forwards;
    @apply py-1  flex flex-col justify-start items-center;
  }

  .submenu_item {
    @apply py-2 ml-2 flex flex-col justify-start;
  }

  .submenu_item .sub_first_link {
    opacity: 0.9;
    transition: all 850ms ease;
  }

  .submenu_item .sub_first_link:hover {
    opacity: 1;
    @apply text-blue-600;
  }

  .submenu_item .user_profile {
    @apply w-full flex justify-start  gap-3;
  }

  .user_profile div.logo_letter {
    width: 22px;
    height: 22px;
    color: var(--color-subtext-title);
    background-color: #092c40d5;
    font-size: calc(11px + 0.25vw);
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 2px solid black;
    outline: 2px solid #cccaca;
    outline-offset: -1px;
  }

  .submenu_item .column_submenu {
    @apply flex flex-col justify-start gap-3;
  }

  #submenu_login {
    width: 4.2rem;
    height: 2rem;
    padding: 2px;
    margin: 1.1rem 0 0;
    position: relative;
    display: grid;
    place-items: start;
    border-radius: 5px;
    transition:
      place-items 850ms ease 3.4s,
      color 650ms ease;
  }

  #submenu_login::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 0%;
    border-bottom: 1px solid #fff;
    transition:
      height 450ms ease-in,
      width 375ms ease,
      border 500ms;
  }

  #submenu_login:hover {
    place-items: center;
    @apply text-green-400;
  }

  #submenu_login:hover::before {
    width: 100%;
    height: 100%;
    border: 3px solid #24775b;
  }

  #submenu_sign_up {
    position: relative;
    width: max-content;
    height: 1.8rem;
    z-index: 10;
    transition: all 1.5s ease;
  }

  #submenu_sign_up:hover {
    color: var(--bg-button-2);
  }

  #submenu_sign_up::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 2px;
    z-index: 1;
    transition: all 480ms ease;
  }

  #submenu_sign_up:hover::before {
    width: 100%;
    height: 2px;
    background-color: var(--bg-button-2);
  }

  /* nav-- block-end -- */

  /*  .nav_block_end {
    width: 80%;
  } */

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

  /*  li.menu_elt {
    @apply flex flex-col justify-start gap-1;
  } */

  li.menu_elt .menu_label {
    width: min-content;
    margin: 0;
    padding-left: 0.75rem;
    @apply flex justify-start gap-1;
  }

  li.menu_elt .submenu_elt {
    @apply py-1 pl-3 hidden flex-col justify-center items-start;
  }

  li.menu_elt.active_drop_case .submenu_elt {
    @apply py-1 pl-3 flex flex-col justify-start items-start;
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

  /* .nav_block_end li.login_area {
    width: 20%;
    display: flex;
  } */
}
@media (min-width: 800px) {
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
    z-index: 10;
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
    z-index: 25;
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

  /* .nav_right_side .login_desk {
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
  } */
}

@keyframes anim-login-menu {
  0% {
    border-top: 1px solid #24775b;
  }
  35% {
    border-left: 1px solid #24775b;
  }

  70% {
    border-right: 1px solid #24775b;
  }

  100% {
    border-bottom: 1px solid #24775b;
  }
}

@keyframes sub-elt-anim {
  0% {
    opacity: 0;
    visibility: hidden;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes stats-box-anim {
  0% {
    top: -1rem;
    opacity: 0;
    height: 1rem;
    visibility: hidden;
  }

  100% {
    top: 0;
    opacity: 1;
    height: 3.72rem;
    visibility: visible;
  }
}
</style>
