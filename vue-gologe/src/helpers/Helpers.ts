export function getImageUrlSvg(name: string) {
    return new URL(`../assets/images/${name.toUpperCase()}.svg`, import.meta.url).href;
}

export function getImageUrlPng(name: string) {
    return new URL(`../assets/images/${name}.png`, import.meta.url).href;
}