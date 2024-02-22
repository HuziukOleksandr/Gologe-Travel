export function getImageUrl(name: string) {
    return new URL(`../assets/images/${name.toUpperCase()}.svg`, import.meta.url).href;
}