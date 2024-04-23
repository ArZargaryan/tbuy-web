import { createSlice } from "@reduxjs/toolkit";
import { GiftCard } from "@libs/domain/model/giftCard";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Service } from "@libs/domain/model/service";

interface IState {
  items: GiftCard[];
  services: Service[];
}

const { blob } = ImgExporter;

const initialState: IState = {
  items: [
    new GiftCard({
      id: "41033",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "/pictures/temp/gift/gift-2.png",
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
      id: "41023",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "/pictures/temp/gift/gift-3.jpg",
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
      id: "41083",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "/pictures/temp/gift/gift-4.jpg",
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
      id: "41383",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "https://laks.com/wp-content/uploads/2021/02/Golden-Gift-Card.jpg",
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
      id: "41983",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original:
            "https://www.shopcepage.com/cdn/shop/products/GiftCardStockimage_1200x1200.jpg?v=1613967690",
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
      id: "4302333",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "https://www.nanan.it/data/prod/big/gift-card_16211-3422.jpg?1668163382",
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
      id: "41033",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "/pictures/temp/gift/gift-2.png",
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
      id: "41023",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "/pictures/temp/gift/gift-3.jpg",
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
      id: "41083",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "/pictures/temp/gift/gift-4.jpg",
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
      id: "41383",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "https://laks.com/wp-content/uploads/2021/02/Golden-Gift-Card.jpg",
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
      id: "41983",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original:
            "https://www.shopcepage.com/cdn/shop/products/GiftCardStockimage_1200x1200.jpg?v=1613967690",
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
      id: "4302333",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "https://www.nanan.it/data/prod/big/gift-card_16211-3422.jpg?1668163382",
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
      id: "41033",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "/pictures/temp/gift/gift-2.png",
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
      id: "41023",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "/pictures/temp/gift/gift-3.jpg",
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
      id: "41083",
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: "519 AMD",
      images: [
        {
          original: "/pictures/temp/gift/gift-4.jpg",
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
  services: [
    new Service({
      id: 4302633,
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      images: [
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        },
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
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
    new Service({
      id: 4303533,
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      images: [
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        },
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
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
    new Service({
      id: 4304433,
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      images: [
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        },
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
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
    new Service({
      id: 43052330,
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      images: [
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        },
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
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
    new Service({
      id: 43035338,
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      images: [
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        },
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
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
    new Service({
      id: 43044337,
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      images: [
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        },
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
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
    new Service({
      id: 43052334,
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      images: [
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        },
        {
          original: "https://tbuy.am/imgs/prod_img/76ee7c6.jpeg",
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
  ]
};

const giftCardsSlice = createSlice({
  name: "gifts/gift_cards",
  initialState,
  reducers: {}
});
export default giftCardsSlice.reducer;
