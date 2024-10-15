import { defineStore } from 'pinia'

export const ButtonStore = defineStore('button', {
  state: () => ({
    btnModalOne: {
      btnId: '',
      btnLab: '',
      width: 'max-content',
      padding: ' 5px 10px',
      defaultBgColor: 'gray',
      bgColor: '',
      borderRadius: '5px',
      textColor: 'black',
      margin: '0 auto',
      fontSize: 'calc(13px + 0.15vw)',
      transition: 'all 300ms ease-in-out'
    },
    btnModalTwo: {
      btnId: '',
      btnLab: '',
      width: 'max-content',
      padding: ' 5px 10px',
      defaultBgColor: 'gray',
      bgColor: '',
      borderRadius: '5px',
      textColor: 'black',
      margin: '0 auto',
      fontSize: 'calc(13px + 0.15vw)',
      transition: 'all 300ms ease-in-out'
    },
    btnModalThree: {
      btnId: '',
      btnLab: '',
      width: 'max-content',
      padding: ' 5px 10px',
      defaultBgColor: 'gray',
      bgColor: '',
      borderRadius: '5px',
      textColor: 'black',
      margin: '0 auto',
      fontSize: 'calc(13px + 0.15vw)',
      transition: 'all 300ms ease-in-out'
    },
    btnModalFour: {
      btnId: '',
      btnLab: '',
      width: 'max-content',
      padding: ' 5px 10px',
      defaultBgColor: 'gray',
      bgColor: '',
      borderRadius: '5px',
      textColor: 'black',
      margin: '0 auto',
      fontSize: 'calc(13px + 0.15vw)',
      transition: 'all 300ms ease-in-out'
    },
    loading: {
      isProcessing: false,
      isEnd: false
    }
  }),
  getters: {},
  actions: {
    applyBtnStyleOne(
      id: string,
      label: string,
      newWidth?: string,
      background?: string,
      color?: string,
      margin?: string,
      fontSize?: string
    ) {
      this.$patch({
        btnModalOne: {
          btnId: id,
          btnLab: label,
          width: newWidth ? newWidth : this.$state.btnModalOne.width,
          bgColor: background ? background : this.$state.btnModalOne.defaultBgColor,
          textColor: color ? color : this.$state.btnModalOne.textColor,
          margin: margin ? margin : this.$state.btnModalOne.margin,
          fontSize: fontSize ? fontSize : this.$state.btnModalOne.fontSize
        }
      })

      return this.$state.btnModalOne
    },

    applyBtnStyleTwo(
      id: string,
      label: string,
      newWidth?: string,
      background?: string,
      color?: string,
      margin?: string,
      fontSize?: string
    ) {
      this.$patch({
        btnModalTwo: {
          btnId: id,
          btnLab: label,
          width: newWidth ? newWidth : this.$state.btnModalTwo.width,
          bgColor: background ? background : this.$state.btnModalTwo.defaultBgColor,
          textColor: color ? color : this.$state.btnModalTwo.textColor,
          margin: margin ? margin : this.$state.btnModalTwo.margin,
          fontSize: fontSize ? fontSize : this.$state.btnModalTwo.fontSize
        }
      })

      return this.$state.btnModalTwo
    },

    applyBtnStyleThree(
      id: string,
      label: string,
      newWidth?: string,
      background?: string,
      color?: string,
      margin?: string,
      fontSize?: string
    ) {
      this.$patch({
        btnModalThree: {
          btnId: id,
          btnLab: label,
          width: newWidth ? newWidth : this.$state.btnModalThree.width,
          bgColor: background ? background : this.$state.btnModalThree.defaultBgColor,
          textColor: color ? color : this.$state.btnModalThree.textColor,
          margin: margin ? margin : this.$state.btnModalThree.margin,
          fontSize: fontSize ? fontSize : this.$state.btnModalThree.fontSize
        }
      })

      return this.$state.btnModalThree
    },

    applyBtnStyleFour(
      id: string,
      label: string,
      newWidth?: string,
      background?: string,
      color?: string,
      margin?: string,
      fontSize?: string
    ) {
      this.$patch({
        btnModalFour: {
          btnId: id,
          btnLab: label,
          width: newWidth ? newWidth : this.$state.btnModalFour.width,
          bgColor: background ? background : this.$state.btnModalFour.defaultBgColor,
          textColor: color ? color : this.$state.btnModalFour.textColor,
          margin: margin ? margin : this.$state.btnModalFour.margin,
          fontSize: fontSize ? fontSize : this.$state.btnModalFour.fontSize
        }
      })

      return this.$state.btnModalFour
    }
  }
})
