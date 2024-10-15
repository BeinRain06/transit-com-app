import { defineStore } from 'pinia'

export const SubTemplateStore = defineStore('template', {
  state: () => ({
    arrInputMob: [
      [
        { id: 'component_1', title: 'component_1', modelInput: '' },
        { id: 'quantity_1', title: 'quantity', modelInput: '' },
        { id: 'price_1', title: 'approx.Price', modelInput: '' }
      ]
    ],

    arrInputDesk: [
      [
        { id: 'component_1', title: 'component_1', modelInput: '' },
        { id: 'quantity_1', title: 'quantity', modelInput: '' },
        { id: 'price_1', title: 'approx.Price', modelInput: '' }
      ],
      [
        { id: 'component_2', title: 'component_2', modelInput: '' },
        { id: 'quantity_2', title: 'quantity', modelInput: '' },
        { id: 'price_2', title: 'approx.Price', modelInput: '' }
      ],
      [
        { id: 'component_3', title: 'component_3', modelInput: '' },
        { id: 'quantity_3', title: 'quantity', modelInput: '' },
        { id: 'price_3', title: 'approx.Price', modelInput: '' }
      ]
    ]
  }),
  getters: {},
  actions: {
    addRowInstore(label: string) {
      if (label === 'mobile') {
        const exArr = this.$state.arrInputMob
        const j = exArr.length
        const newRowArr = [
          { id: `component-${j}`, title: `component-${j}`, modelInput: '' },
          { id: `quantity-${j}`, title: 'quantity', modelInput: '' },
          { id: `price-${j}`, title: 'approx.Price', modelInput: '' }
        ]
        this.$state.arrInputMob.push(newRowArr)
      } else if (label === 'desktop') {
        const exArr = this.$state.arrInputDesk
        const j = exArr.length
        const newRowArr = [
          { id: `component-${j}`, title: `component-${j}`, modelInput: '' },
          { id: `quantity-${j}`, title: 'quantity', modelInput: '' },
          { id: `price-${j}`, title: 'approx.Price', modelInput: '' }
        ]
        this.$state.arrInputDesk.push(newRowArr)
      }
    },

    removeRowInstore(label: string) {
      let index: null | number = null

      if (label === 'mobile') {
        const exArr = this.$state.arrInputMob
        index = this.$state.arrInputMob.length
        this.$state.arrInputMob = exArr.slice(0, index - 1)
      } else if (label === 'desktop') {
        const exArr = this.$state.arrInputDesk
        index = this.$state.arrInputDesk.length
        this.$state.arrInputDesk = exArr.slice(0, index - 1)
      }
    }
  }
})
