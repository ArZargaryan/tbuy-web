import { ResponsiveImage } from "@libs/domain/model/responsive_image";

type HomeBannerEntity = {
  id: number;
  image: ResponsiveImage;
  url: string;
};

export class HomeBanner implements HomeBannerEntity {
  id: number;
  image: ResponsiveImage;
  url: string;

  constructor({ id, image, url }: HomeBannerEntity) {
    this.id = id;
    this.image = image;
    this.url = url;
  }
}
