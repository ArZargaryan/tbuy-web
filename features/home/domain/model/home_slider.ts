import { ResponsiveImage } from "@libs/domain/model/responsive_image";

interface HomeSliderProps {
  id: number;
  image: ResponsiveImage;
  url: string;
}

export class HomeSlides {
  id: number;
  image: ResponsiveImage;
  url: string;

  constructor({ id, image, url }: HomeSliderProps) {
    this.id = id;
    this.image = image;
    this.url = url;
  }
}
