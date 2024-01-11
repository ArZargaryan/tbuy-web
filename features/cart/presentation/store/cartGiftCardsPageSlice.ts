import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@libs/domain/model/product";
import { GiftCard } from "@libs/domain/model/giftCard";
import { ImgExporter } from "@core/helpers/ImgExporter";

interface IState {
  gifts: GiftCard[];
  similar_products: Product[];
}

const { blob } = ImgExporter;

const initialState: IState = {
  gifts: [
    new GiftCard({
      id: 45491983,
      title: "Apple նվեր քարտ",
      price: 519,
      images: [
        {
          original: blob.GiftCard.src,
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      company: {
        id: 489,
        logo: "https://tbuy.run/imgs/partners_imgs/489.png",
        name: "Draft furniture design"
      },
      addedToFavorite: false,
      addedToCompare: false
    }),
    new GiftCard({
      id: 430333333,
      title: "Apple նվեր քարտ",
      price: 519,
      images: [
        {
          original: blob.GiftCard.src,
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      company: {
        id: 489,
        logo: "https://tbuy.run/imgs/partners_imgs/489.png",
        name: "Draft furniture design"
      },
      addedToFavorite: false,
      addedToCompare: false
    }),
    new GiftCard({
      id: 410321112,
      title: "Apple նվեր քարտ",
      price: 519,
      images: [
        {
          original: blob.GiftCard.src,
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      company: {
        id: 489,
        logo: "https://tbuy.run/imgs/partners_imgs/489.png",
        name: "Draft furniture design"
      },
      addedToFavorite: false,
      addedToCompare: false
    })
  ],
  similar_products: [
    new Product({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
      price: 519,
      images: [
        {
          original: "https://tbuy.run/imgs/prod_img/3203e90.webp",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      company: {
        id: 489,
        logo: "https://tbuy.run/imgs/partners_imgs/489.png",
        name: "Draft furniture design"
      },
      discountPrice: undefined,
      discount: undefined,
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Product({
      id: 430333,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
      price: 519,
      images: [
        {
          original: "https://tbuy.run/imgs/prod_img/3203e90.webp",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      company: {
        id: 489,
        logo: "https://tbuy.run/imgs/partners_imgs/489.png",
        name: "Draft furniture design"
      },
      discountPrice: undefined,
      discount: undefined,
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Product({
      id: 423033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
      price: 519,
      images: [
        {
          original: "https://tbuy.run/imgs/prod_img/3203e90.webp",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      company: {
        id: 489,
        logo: "https://tbuy.run/imgs/partners_imgs/489.png",
        name: "Draft furniture design"
      },
      discountPrice: undefined,
      discount: undefined,
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Product({
      id: 4302333,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
      price: 519,
      images: [
        {
          original: "https://tbuy.run/imgs/prod_img/3203e90.webp",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      company: {
        id: 489,
        logo: "https://tbuy.run/imgs/partners_imgs/489.png",
        name: "Draft furniture design"
      },
      discountPrice: undefined,
      discount: undefined,
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Product({
      id: 4303533,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
      price: 519,
      images: [
        {
          original: "https://tbuy.run/imgs/prod_img/3203e90.webp",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      company: {
        id: 489,
        logo: "https://tbuy.run/imgs/partners_imgs/489.png",
        name: "Draft furniture design"
      },
      discountPrice: undefined,
      discount: undefined,
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Product({
      id: 4303336,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
      price: 519,
      images: [
        {
          original: "https://tbuy.run/imgs/prod_img/3203e90.webp",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      company: {
        id: 489,
        logo: "https://tbuy.run/imgs/partners_imgs/489.png",
        name: "Draft furniture design"
      },
      discountPrice: undefined,
      discount: undefined,
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Product({
      id: 430333,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
      price: 519,
      images: [
        {
          original: "https://tbuy.run/imgs/prod_img/3203e90.webp",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      company: {
        id: 489,
        logo: "https://tbuy.run/imgs/partners_imgs/489.png",
        name: "Draft furniture design"
      },
      discountPrice: undefined,
      discount: undefined,
      addedToFavorite: true,
      addedToCompare: true
    })
  ]
};

const cartSlice = createSlice({
  name: "cart/gift_cards",
  initialState,
  reducers: {}
});
export default cartSlice.reducer;
