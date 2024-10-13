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
    }
  }
})
