import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollToElement(targetId: string, viewPort: number) {
  const isVisible = ref(false);

  const checkScroll = () => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    isVisible.value = rect.top >= viewPort;
  };
  onMounted(() => {
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
  });
  return isVisible;
}