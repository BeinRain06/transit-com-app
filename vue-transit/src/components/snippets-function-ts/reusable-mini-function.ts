import { ButtonStore } from '@/stores/button-store'

export const slapLoadingTime = () => {
  const useButtonStore = ButtonStore()

  const loadingOn = useButtonStore.loading

  loadingOn.isProcessing = true

  setTimeout(() => {
    loadingOn.isProcessing = false
    loadingOn.isEnd = true
  }, 5000)
}
