interface HashedImageProps {
  original: string;
  blurHash: string;
}

export class Image {
  original: string;
  blurHash: string;

  constructor({ original, blurHash }: HashedImageProps) {
    this.original = original;
    this.blurHash = blurHash;
  }
}
