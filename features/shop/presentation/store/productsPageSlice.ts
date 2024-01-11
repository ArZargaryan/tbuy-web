import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@libs/domain/model/product";

interface IState {
  items: Product[];
}

const initialState: IState = {
  items: [
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
      id: 43033315,
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

const productsSlice = createSlice({
  name: "shop/products",
  initialState,
  reducers: {}
});
export default productsSlice.reducer;
