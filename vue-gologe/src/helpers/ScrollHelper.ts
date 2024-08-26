export const scrollTop = (top = 0, behavior = 'smooth') => {
  window.scrollTo({
      top,
      behavior
  });
} 