import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@libs/domain/model/product";
import { Rating } from "@libs/domain/model/rating";
import { Service } from "@libs/domain/model/service";
import { VacancyShort } from "@libs/domain/model/vacancy";

export interface Contact {
  type: "email" | "phone" | "viber" | "whatsapp";
  value: string;
}

interface IState {
  info: {
    originalImage: string;
    sellerType: "legal" | "individual";
    fullName: string;
    email: string;
    contacts: Contact[];
    rating: Rating;
  };
  products: Product[];
  services?: Service[];
  vacancies?: VacancyShort[];
}

const initialState: IState = {
  info: {
    originalImage:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    sellerType: "individual",
    fullName: "Arman Sahakyan",
    email: "testuser@gmail.com",
    rating: Rating.FourStars,
    contacts: [
      { type: "email", value: "testuser@gmail.com" },
      { type: "phone", value: "+374 01 02 03 04" },
      { type: "viber", value: "+374 01 02 73 04" },
      { type: "whatsapp", value: "+374 01 32 03 44" }
    ]
  },
  products: [
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
    })
  ],
  services: [
    new Service({
      id: 43033,
      title: "Շինարարական քերիչ մածկաթիակ TOTAL THT8310026 Ածխածնային պողպատ",
      images: [
        {
          original:
            "https://bookdirtbusters.com/wp-content/uploads/2020/10/house-cleaning-service.jpeg",
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
          original:
            "https://bookdirtbusters.com/wp-content/uploads/2020/10/house-cleaning-service.jpeg",
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
          original:
            "https://bookdirtbusters.com/wp-content/uploads/2020/10/house-cleaning-service.jpeg",
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
          original:
            "https://bookdirtbusters.com/wp-content/uploads/2020/10/house-cleaning-service.jpeg",
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
          original:
            "https://bookdirtbusters.com/wp-content/uploads/2020/10/house-cleaning-service.jpeg",
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
          original:
            "https://bookdirtbusters.com/wp-content/uploads/2020/10/house-cleaning-service.jpeg",
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
  ],
  vacancies: [
    new VacancyShort({
      date: "20.01.1970",
      id: 6959300,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 695939,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 695938,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 695937,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 695936,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 695935,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 695934,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 695933,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    })
  ]
};

const aboutSellerSlice = createSlice({
  name: "shop/about_seller",
  initialState,
  reducers: {}
});
export default aboutSellerSlice.reducer;
