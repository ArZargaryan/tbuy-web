import { ApiHomeResponse } from "@features/home/data/api/model/api_home_response";
import { HomeData } from "@features/home/domain/model/home_data";
import { fixAllImageUrls, getImageUrl } from "@core/helpers/getImageUrl";
import { Product } from "@libs/domain/model/product";
import { Service } from "@libs/domain/model/service";
import { isArray, map } from "lodash";
import dayjs from "dayjs";

export class HomeMapper {
  static fromApi(homeData: ApiHomeResponse) {
    return new HomeData({
      companies: isArray(homeData.companies)
        ? map(homeData.companies, (company) => fixAllImageUrls(company))
        : [],

      categories: isArray(homeData?.categories)
        ? map(homeData?.categories, (category) => fixAllImageUrls(category))
        : [],

      banners: isArray(homeData?.banners)
        ? map(homeData?.banners, (banner) => ({
            ...banner,
            image: fixAllImageUrls(banner.image)
          }))
        : [],

      products: isArray(homeData?.products)
        ? map(homeData?.products, (product) => ({
            ...product,
            products: product.products.map(
              (p) =>
                new Product({
                  ...p,
                  images: p.images.map((image) => fixAllImageUrls(image)),
                  company: fixAllImageUrls(p.company)
                })
            )
          }))
        : [],

      slides: isArray(homeData?.slides)
        ? map(homeData?.slides, (slide) => ({
            ...slide,
            image: fixAllImageUrls(slide.image)
          }))
        : [],

      services: isArray(homeData?.services)
        ? map(
            homeData?.services,
            (service) =>
              new Service({
                ...service,
                images: service.images.map((image) => fixAllImageUrls(image)),
                company: fixAllImageUrls(service.company)
              })
          )
        : [],

      vacancies: isArray(homeData?.vacancies)
        ? map(homeData?.vacancies, (vacancy) => ({
            ...vacancy,
            company: {
              ...vacancy.company,
              logo: getImageUrl(vacancy.company.logo)
            },
            date: dayjs(vacancy.date).format("DD.MM.YYYY")
          }))
        : []
    });
  }
}
