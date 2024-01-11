import { Image } from "@libs/domain/model/image";
import { ShortCompany } from "@libs/domain/model/company";

interface ServiceProps {
  id: number;
  title: string;
  images: Image[];
  addedToFavorite: boolean;
  addedToCompare: boolean;
  company: ShortCompany;
}

export class Service implements ServiceProps {
  id: number;
  title: string;
  images: Image[];
  addedToFavorite: boolean;
  addedToCompare: boolean;
  company: ShortCompany;

  constructor({ id, title, images, company, addedToFavorite, addedToCompare }: ServiceProps) {
    this.id = id;
    this.title = title;
    this.images = images;
    this.company = company;
    this.addedToFavorite = addedToFavorite;
    this.addedToCompare = addedToCompare;
  }
}
