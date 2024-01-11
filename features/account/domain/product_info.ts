import { Product } from "@libs/domain/model/product";
import { Image } from "@libs/domain/model/image";
import { ShortCompany } from "@libs/domain/model/company";

interface ProductInfoProps extends Product {
  paymentType: string;
  count: number;
  address: string;
  courierConfirmed: boolean;
  buyerConfirmed: boolean;
}

export class ProductInfo implements ProductInfoProps {
  id: number;
  title: string;
  images: Image[];
  addedToFavorite: boolean;
  addedToCompare: boolean;
  company: ShortCompany;
  price: number;
  discountPrice?: number | null;
  discount?: number | null;

  paymentType: string;
  count: number;
  address: string;
  courierConfirmed: boolean;
  buyerConfirmed: boolean;

  constructor(public info: ProductInfoProps) {
    Object.assign(this, info);
  }
}
