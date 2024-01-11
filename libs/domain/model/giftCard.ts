import { ShortCompany } from "@libs/domain/model/company";
import { Image } from "@libs/domain/model/image";

interface GiftCardProps {
  id: number;
  title: string;
  images: Image[];
  company: ShortCompany;
  price: number;
  addedToFavorite: boolean;
  addedToCompare: boolean;
}

export class GiftCard implements GiftCardProps {
  public id: number;
  public title: string;
  public images: Image[];
  public company: ShortCompany;
  public price: number;
  public addedToFavorite: boolean;
  public addedToCompare: boolean;

  constructor(info: GiftCardProps) {
    Object.assign(this, info);
  }
}
