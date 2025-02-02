import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollToElement(targetId: string) {
  const isVisible = ref(false);

  const checkScroll = () => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const middleOfViewport = window.innerHeight / 2;
    isVisible.value = rect.top >= middleOfViewport;
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