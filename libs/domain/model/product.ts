import { Image } from "@libs/domain/model/image";
import { ShortCompany } from "@libs/domain/model/company";

interface ProductProps {
  id: number;
  title: string;
  images: Image[];
  addedToFavorite: boolean;
  addedToCompare: boolean;
  company: ShortCompany;
  price: number; // integer
  discountPrice?: number | null; // integer
  discount?: number | null;
}

export class Product implements ProductProps {
  id: number;
  title: string;
  images: Image[];
  addedToFavorite: boolean;
  addedToCompare: boolean;
  company: ShortCompany;
  price: number; // integer
  discountPrice?: number | null; // integer
  discount?: number | null;

  constructor({
    id,
    title,
    images,
    company,
    price,
    discountPrice,
    discount,
    addedToFavorite,
    addedToCompare
  }: ProductProps) {
    this.id = id;
    this.title = title;
    this.images = images;
    this.company = company;
    this.price = price;
    this.discountPrice = discountPrice;
    this.discount = discount;
    this.addedToFavorite = addedToFavorite;
    this.addedToCompare = addedToCompare;
  }
}
