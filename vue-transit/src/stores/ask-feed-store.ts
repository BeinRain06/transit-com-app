import { defineStore } from 'pinia'

export const useAskFeedStore = defineStore('askfeed', {
  state: () => ({
    reasons: {
      spec: [
        {
          domain: 'tech',
          archive: ['month purchase order', 'past month supply', 'past three months supply']
        },
        {
          domain: 'human',
          archive: [
            'month conveyence schedule',
            'event company agenda',
            'meetings request with outsider'
          ]
        },
        {
          domain: 'accounting',
          archive: [
            'month purchase order',
            'past month supply',
            'past three months supply',
            'decision salaries payment',
            'decision taxes payment'
          ]
        },
        {
          domain: 'law',
          archive: [
            'year task payment',
            'year bank deposit',
            'purchase order',
            'companies policies review',
            'holiday for x or y employee',
            'purchase books'
          ]
        },
        {
          domain: 'management',
          archive: [
            'month purchase order',
            'past month supply',
            'past three months supply',
            'agenda meetings with outsider',
            'review law instance',
            'year bank deposit',
            'month expenses',
            'month incomes'
          ]
        }
      ]
    },
    selectedDomain: 'tech'
  }),
  getters: {},
  actions: {
    reasonFetched() {
      const reasonObj = this.reasons.spec.map((item) => {
        if (item.domain === this.selectedDomain) {
          return item
        }
      })
      return reasonObj
    }
  }
})