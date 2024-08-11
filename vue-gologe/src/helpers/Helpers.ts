export function getImageUrlSvg(name: string) {
  return new URL(
    `../assets/images/svg/${name.toUpperCase()}.svg`,
    import.meta.url
  ).href;
}

export function getImageUrlPng(name: string) {
  return new URL(`../assets/images/png/Landing/${name}.png`, import.meta.url)
    .href;
}

export function getCarouselImagePng(name: string) {
  return new URL(`../assets/images/png/Carousel/${name}.png`, import.meta.url)
    .href;
}

export function getTravelCardImagePng(name: string) {
  return new URL(`../assets/images/png/Flight/${name}.png`, import.meta.url)
    .href;
}
