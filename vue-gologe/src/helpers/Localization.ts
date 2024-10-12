export function getTitleStyles(language: string) {
    return language === "EN"
        ? "leading-[74px] text-7xl sm:text-4xl"
        : "leading-[42px] text-5xl sm:text-3xl";
}
