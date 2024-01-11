import { createSlice } from "@reduxjs/toolkit";
import { GiftCard } from "@libs/domain/model/giftCard";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { AccountProductTableRowData } from "@features/account/domain/account_product_table_row_data";

interface IState {
  items: AccountProductTableRowData<GiftCard>[];
}

const { blob } = ImgExporter;

const initialState: IState = {
  items: [
    {
      orderInfo: {
        active: true,
        state: "Ակտիվ",
        id: "25987",
        date: "7.11. 2020",
        paymentType: "Նվեր",
        totalPrice: "123.000 AMD"
      },
      product: new GiftCard({
        id: 43033,
        title: "Apple նվեր քարտ",
        price: 519,
        images: [
          {
            original: blob.GiftCard.src,
            blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
          },
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
      showContent: false
    },
    {
      orderInfo: {
        active: true,
        state: "Ակտիվ",
        id: "25988",
        date: "7.11. 2020",
        paymentType: "Նվեր",
        totalPrice: "123.000 AMD"
      },
      product: new GiftCard({
        id: 43033,
        title: "Apple նվեր քարտ",
        price: 519,
        images: [
          {
            original: blob.GiftCard.src,
            blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
          },
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
      showContent: false
    },
    {
      orderInfo: {
        active: false,
        state: "Ակտիվ",
        id: "25989",
        date: "7.11. 2020",
        paymentType: "Նվեր",
        totalPrice: "123.000 AMD"
      },
      product: new GiftCard({
        id: 43033,
        title: "Apple նվեր քարտ",
        price: 519,
        images: [
          {
            original: blob.GiftCard.src,
            blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
          },
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
      showContent: false
    },
    {
      orderInfo: {
        active: true,
        state: "Ակտիվ",
        id: "25990",
        date: "7.11. 2020",
        paymentType: "Նվեր",
        totalPrice: "123.000 AMD"
      },
      product: new GiftCard({
        id: 43033,
        title: "Apple նվեր քարտ",
        price: 519,
        images: [
          {
            original: blob.GiftCard.src,
            blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
          },
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
      showContent: false
    }
  ]
};

const giftCardsSlice = createSlice({
  name: "account/gift_cards_incoming",
  initialState,
  reducers: {}
});
export default giftCardsSlice.reducer;
