export async function loadStyles() {
  const context = import.meta.glob('./*.scss', { eager: true });
  return Promise.all(Object.values(context));
}