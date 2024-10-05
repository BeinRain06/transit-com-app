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
      fontSize: 'calc(13px + 0.15vw)',
      transition: 'all 300ms ease-in-out'
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
      fontSize?: string
    ) {
      this.$patch({
        btnModalOne: {
          btnId: id,
          btnLab: label,
          width: newWidth ? newWidth : this.$state.btnModalOne.width,
          bgColor: background ? background : this.$state.btnModalOne.defaultBgColor,
          textColor: color ? color : this.$state.btnModalOne.textColor,
          fontSize: fontSize ? fontSize : this.$state.btnModalOne.fontSize
        }
      })

      return this.$state.btnModalOne
    }
  }
})
