import { createSlice } from "@reduxjs/toolkit";
import { Service } from "@libs/domain/model/service";

interface IState {
  items: Service[];
}

const initialState: IState = {
  items: [
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    }),
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
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
      addedToFavorite: true,
      addedToCompare: true
    })
    // new Service({
    //   id: 1,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 2,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 3,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 4,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 5,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 6,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 7,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 8,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 9,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 10,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 11,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 12,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 13,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 14,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src,
    //     ImgExporter.blob.product.src
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // }),
    // new Service({
    //   id: 15,
    //   title: "Lorem Ipsum is simply dummy text of the printing typesetting",
    //   images: [
    //     {original: ImgExporter.blob.product.src, blurHash: "sadasdasd"}
    //   ],
    //   companyLogo: ImgExporter.blob.productCompany.src
    // })
  ]
};

const servicesSlice = createSlice({
  name: "services/catalog",
  initialState,
  reducers: {}
});
export default servicesSlice.reducer;
