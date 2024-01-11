import { createSlice } from "@reduxjs/toolkit";
import { GiftCard } from "@libs/domain/model/giftCard";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { DetailedGiftCard } from "@features/gifts/domain/model/DetailedGiftCard";

interface IState {
  pageData: DetailedGiftCard;
}

const { blob } = ImgExporter;

const initialState: IState = {
  pageData: new DetailedGiftCard({
    giftCard: {
      linkUrl: "/",
      rating: 4,
      details:
        "Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է: Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է:\n Այս տեքստը ոչ միայն կարողացել է գոյատևել հինգ դարաշրջան, այլև ներառվել է էլեկտրոնային տպագրության մեջ` մնալով էապես անփոփոխ:",
      id: 43033,
      title: "Lorem Ipsum is simply dummy text of the printing typesetting",
      price: {
        currency: "AMD",
        price: 123123
      },
      state: "NEW",
      exchanges: [
        { currency: "RUR", rate: 0.2103 },
        { currency: "USD", rate: 0.0025809 }
      ],
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
        name: "Draft furniture design",
        rating: 4, // float
        type: "legal",

        phones: ["+123123123123"],
        images: {
          background: {
            original: blob.GiftCard.src,
            blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
          },
          largeLogo: {
            original: blob.GiftCard.src,
            blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
          },
          smallLogo: "https://tbuy.run/imgs/partners_imgs/489.png"
        }
      },
      addedToFavorite: false,
      addedToCompare: false
    },
    suggestedGiftCards: [
      new GiftCard({
        id: 43033,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
      new GiftCard({
        id: 41033,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        id: 41023,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        id: 41083,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        id: 41383,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        id: 41983,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        id: 4302333,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        id: 41045633,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        id: 414567023,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        id: 410687983,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        id: 4139023845683,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        id: 45491983,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
        id: 141023,
        title: "Lorem Ipsum is simply dummy text of the printing typesetting",
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
    ]
  })
};

const giftCardDetailSlice = createSlice({
  name: "gifts/gift_cards",
  initialState,
  reducers: {}
});
export default giftCardDetailSlice.reducer;
