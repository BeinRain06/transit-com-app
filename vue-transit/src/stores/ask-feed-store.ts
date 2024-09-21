import { defineStore } from 'pinia'

export const useAskFeedStore = defineStore('askfeed', {
  state: () => ({
    reasons: {
      spec: [
        {
          domain: 'tech',
          archive: ['purcha_order', 'inventory Goods last months', 'inventory Goods 03 past months']
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
