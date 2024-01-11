interface ResponsiveImageProps {
  desktop: string;
  mobile: string;
  blurHash: string;
}

export class ApiResponsiveImage {
  desktop: string;
  mobile: string;
  blurHash: string;
  constructor({ desktop, mobile, blurHash }: ResponsiveImageProps) {
    this.desktop = desktop;
    this.mobile = mobile;
    this.blurHash = blurHash;
  }
}
