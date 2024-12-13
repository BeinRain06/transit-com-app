import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/career',
      name: 'career',

      component: () => import('../views/CareerCompanyView.vue')
    },
    {
      path: '/sign',
      name: 'sign',

      component: () => import('../views/SigningView.vue')
    },

    {
      path: '/feedbacks/queries/form',
      name: 'ask_form_feed',
      component: () => import('../components/feedback_queries/AskFormFeedback.vue')
    },
    {
      path: '/feedbacks/queries/template',
      name: 'ask_template_feed',
      component: () => import('../components/feedback_queries/AskSheetFeedback.vue')
    },
    {
      path: '/feedbacks/answers/form',
      name: 'reply_form_feed',
      component: () => import('../components/feedback_answers/ReplyFormFeedBack.vue')
    },
    {
      path: '/feedbacks/answers/template',
      name: 'reply_template_feed',
      component: () => import('../components/feedback_answers/ReplySheetFeedback.vue')
    },

    {
      path: '/feedbacks/list/last_and_current_month',
      name: 'month_list_feedbacks',
      component: () => import('../components/requests-feedbacks-lists/MonthFeedReq.vue')
    },
    {
      path: '/feedbacks/list/last_three_months',
      name: 'list_feedbacks',
      component: () => import('../components/requests-feedbacks-lists/MonthFeedReq.vue')
    },

    {
      path: '/requests/list/last_and_current_month',
      name: 'month_list_requests',
      component: () => import('../components/requests-feedbacks-lists/MonthFeedReq.vue')
    },
    {
      path: '/requests/list/last_three_months',
      name: 'list_requests',
      component: () => import('../components/requests-feedbacks-lists/MonthFeedReq.vue')
    },

    {
      path: '/requests/queries/form/engine_repair',
      name: 'engine_repair_form',
      component: () =>
        import('../components/request-queries/sub-request-queries/SubEngineRepairComponents.vue')
    },
    {
      path: '/requests/queries/form/fuel_oil',
      name: 'fuel_oil_form',
      component: () =>
        import('../components/request-queries/sub-request-queries/SubReqFuelOrOil.vue')
    },
    {
      path: '/requests/queries/form/human_integration',
      name: 'human_integration_form',
      component: () =>
        import('../components/request-queries/sub-request-queries/SubReqHumanIntegration.vue')
    },
    {
      path: '/requests/queries/form/maintenance_tools',
      name: 'maintenance_tools_form',
      component: () =>
        import('../components/request-queries/sub-request-queries/SubReqMaintenanceTools.vue')
    },
    {
      path: '/requests/queries/form/purchase_order',
      name: 'purchase_order_form',
      component: () =>
        import('../components/request-queries/sub-request-queries/SubReqPurchaseOrder.vue')
    },
    {
      path: '/requests/queries/form/salary_advance',
      name: 'salary_advance_form',
      component: () =>
        import('../components/request-queries/sub-request-queries/SubReqSalaryAdvance.vue')
    },
    {
      path: '/requests/queries/form/unpaid_bonus',
      name: 'unpaid_bonus_form',
      component: () =>
        import('../components/request-queries/sub-request-queries/SubReqUnpaidBonus.vue')
    },
    {
      path: '/requests/queries/form/supply_resources',
      name: 'supply_resources_form',
      component: () =>
        import('../components/request-queries/sub-request-queries/SupplyResources.vue')
    },
    {
      path: '/user/department/individual_stats',
      name: 'individual_stats',
      component: () => import('../components/stats/IndividualStats.vue')
    },
    {
      path: '/user/department/general_stats',
      name: 'general_stats',
      component: () => import('../components/stats/GeneralStats.vue')
    }
  ]
})

export default router
