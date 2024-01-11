// TODO: refactor types when connecting api

import { Image } from "@libs/domain/model/image";
import { Service } from "@libs/domain/model/service";

export interface DetailedServiceProps {
  product: IDetailedService;
  suggestedProducts: Service[];
}

export class DetailedService implements DetailedServiceProps {
  product: IDetailedService;
  suggestedProducts: Service[];
  constructor(props: DetailedServiceProps) {
    this.product = props?.product || {};
    this.suggestedProducts = props?.suggestedProducts || [];
  }
}

export type IDetailedService = {
  id: number;
  title: string;
  price: PriceEntity;
  exchanges: ExchangeEntity[];
  state: "NEW" | "USED";
  discountPrice?: number; // integer
  discount?: number; // integer
  images: Image[];
  videos?: string[];
  rating: number; // float
  wholesales: WholesalePriceEntity[];
  availability: AvailabilityEntity[];
  details: ProductDetailEntity[];
  parameters: ParameterEntity[];
  category: CategoryEntity;
  company: Company;
  totalReviews: number; // integer
  linkUrl: string;
  addedToFavorite: boolean;
  addedToCompare: boolean;
};

type ExchangeEntity = {
  currency: "AMD" | "RUR" | "USD";
  rate: number; // float
};

type PriceEntity = {
  currency: "AMD" | "RUR" | "USD";
  price: number; // float
};

export type ParameterEntity = {
  type: "color" | "size" | "texture"; // Rgb color string. For example: 250,250,250
  values: ParameterValueEntity[];
  image?: string;
};

type ParameterValueEntity = {
  label?: string;
  value: string;
};

type AvailabilityEntity = {
  availability: string;
  location: string;
};

export type Company = {
  id: number;
  name: string;
  rating: number; // float
  type: "individual" | "legal";
  images: SellerImageEntity;

  phones?: string[];
};

type SellerImageEntity = {
  background: Image;
  largeLogo: Image;
  smallLogo: string; // Image URL
};

type CategoryEntity = {
  id: number;
  label: string;
  icon: string;
};

type WholesalePriceEntity = {
  price: number; // integer
  fromAmountText: string;
  fromAmount: string; // integer
};

type ProductDetailEntity = {
  id: number;
  label: string;
  value: string | number; // string or integer or float
};
