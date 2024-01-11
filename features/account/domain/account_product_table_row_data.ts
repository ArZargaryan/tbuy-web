import { GiftCard } from "@libs/domain/model/giftCard";
import { Product } from "@libs/domain/model/product";
import { ProductInfo } from "@features/account/domain/product_info";

export type AccountProductTableRowData<T extends GiftCard | Product | ProductInfo> = {
  orderInfo: {
    id: string;
    date: string;
    state: string;
    paymentType: string;
    totalPrice: string;
    active: boolean;
    company?: string;
  };
  product: T;
  showContent: boolean;
};
