interface ResponsiveImageProps {
  desktop: string;
  mobile: string;
  currentImage: string;
  blurHash: string;
}

export class ResponsiveImage {
  desktop: string;
  mobile: string;
  blurHash: string;
  currentImage: string;
  constructor({ desktop, mobile, blurHash, currentImage }: ResponsiveImageProps) {
    this.desktop = desktop;
    this.mobile = mobile;
    this.blurHash = blurHash;
    this.currentImage = currentImage;
  }
}
