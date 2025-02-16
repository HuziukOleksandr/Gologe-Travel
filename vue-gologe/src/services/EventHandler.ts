import { onMounted, onUnmounted, unref } from 'vue';

export function useEventHandler(event: any, target: any, callback: any) {
  onMounted( () => unref(target).addEventListener(event, callback))
  onMounted(() => unref(target).removeEventListener(event, callback))
}