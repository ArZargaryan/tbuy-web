import { Image } from "@libs/domain/model/image";
import { GiftCard } from "@libs/domain/model/giftCard";

export interface DetailedProductProps {
  giftCard: IDetailedGiftCard;
  suggestedGiftCards: GiftCard[];
}

export class DetailedGiftCard implements DetailedProductProps {
  giftCard: IDetailedGiftCard;
  suggestedGiftCards: GiftCard[];
  constructor(props: DetailedProductProps) {
    this.giftCard = props?.giftCard || {};
    this.suggestedGiftCards = props?.suggestedGiftCards || [];
  }
}

export type IDetailedGiftCard = {
  addedToCompare: boolean;
  addedToFavorite: boolean;
  company: Company;
  details: string;
  exchanges: ExchangeEntity[];
  id: number;
  images: Image[]; // float
  linkUrl: string;
  price: PriceEntity;
  rating: number;
  state: "NEW" | "USED";
  title: string;
  videos?: string[];
};

type ExchangeEntity = {
  currency: "AMD" | "RUR" | "USD";
  rate: number; // float
};

type PriceEntity = {
  currency: "AMD" | "RUR" | "USD";
  price: number; // float
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
