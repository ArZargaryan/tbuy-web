export function getImageUrl(str: string) {
  const substr = str.substring(0, 4);
  if (substr === "http") {
    return str;
  }
  return `https://tbuy.am${str}`;
}

export function fixAllImageUrls(obj: any) {
  return {
    ...obj,
    logo: "logo" in obj ? getImageUrl(obj.logo) : undefined,
    icon: "icon" in obj ? getImageUrl(obj.icon) : undefined,
    original: "original" in obj ? getImageUrl(obj.original) : undefined,
    desktop: "desktop" in obj ? getImageUrl(obj.desktop) : undefined,
    mobile: "mobile" in obj ? getImageUrl(obj.mobile) : undefined,
    currentImage:
      "mobile" in obj && "desktop" in obj
        ? window.screen.width > 500
          ? getImageUrl(obj.desktop)
          : getImageUrl(obj.mobile)
        : undefined
  };
}
