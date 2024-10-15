import { ButtonStore } from '@/stores/button-store'

export const playOnClickBtn = (baseFtSize: number) => {
  const useButtonStore = ButtonStore()
  const buttonProps = useButtonStore.btnModalOne

  setTimeout(() => {
    buttonProps.fontSize = `${baseFtSize}px`
  }, 900)

  buttonProps.fontSize = `calc(${baseFtSize}px + 0.15vw)`
}

export const grabElementStyleButton = (
  id: string,
  label: string,
  isBtnApplication: boolean,
  newWidth?: string,
  background?: string,
  color?: string,
  margin?: string,
  fontSize?: string
) => {
  const useButtonStore = ButtonStore()

  if (isBtnApplication) {
    const selectInStore = useButtonStore.applyBtnStyleOne(
      id,
      label,
      newWidth,
      background,
      color,
      margin,
      fontSize
    )

    return selectInStore
  } else {
    const selectInStore = useButtonStore.applyBtnStyleTwo(
      id,
      label,
      newWidth,
      background,
      color,
      margin,
      fontSize
    )

    return selectInStore
  }
}

export const grabElementStyleButtonPrompt = (
  id: string,
  label: string,
  isBtnApplication: boolean,
  newWidth?: string,
  background?: string,
  color?: string,
  margin?: string,
  fontSize?: string
) => {
  const useButtonStore = ButtonStore()

  if (isBtnApplication) {
    const selectInStore = useButtonStore.applyBtnStyleThree(
      id,
      label,
      newWidth,
      background,
      color,
      margin,
      fontSize
    )

    return selectInStore
  } else {
    const selectInStore = useButtonStore.applyBtnStyleFour(
      id,
      label,
      newWidth,
      background,
      color,
      margin,
      fontSize
    )

    return selectInStore
  }
}
