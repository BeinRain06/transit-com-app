import { ButtonStore } from '@/stores/button-store'

export const slapLoadingTime = () => {
  const useButtonStore = ButtonStore()

  const loadingOn = useButtonStore.loading

  setTimeout(() => {
    loadingOn.isProcessing = true
  }, 5000)

  loadingOn.isEnd = true

  loadingOn.isProcessing = false
}
