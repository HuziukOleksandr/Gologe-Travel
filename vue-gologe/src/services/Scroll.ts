export const scrollTop = (top: number = 0, behavior: ScrollBehavior = 'smooth') => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top,
      behavior
    });
  }
};