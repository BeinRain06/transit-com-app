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
  newWidth?: string,
  background?: string,
  color?: string,
  fontSize?: string
) => {
  const useButtonStore = ButtonStore()

  const selectInStore = useButtonStore.applyBtnStyleOne(
    id,
    label,
    newWidth,
    background,
    color,
    fontSize
  )

  return selectInStore
}
