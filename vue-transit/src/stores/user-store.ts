import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: {
      monthScore: '0',
      userId: '123',
      account: 'gilbradoestear@gmail.com',
      department: {
        name: 'reglation law',
        lastThreeMonthsScore: ['14', '20', '19']
      }
    }
  }),
  getters: {
    userId: (state) => state.currentUser.userId
  },
  actions: {}
})
