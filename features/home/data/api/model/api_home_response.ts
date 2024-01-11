import { Category } from "@libs/domain/model/category";
import { HomeSlides } from "@features/home/domain/model/home_slider";
import { ShortCompany } from "@libs/domain/model/company";
import { HomeCategoryProducts } from "@features/home/domain/model/home_category_products";
import { Service } from "@libs/domain/model/service";
import { VacancyShort } from "@libs/domain/model/vacancy";
import { HomeBanner } from "@features/home/domain/model/home_banner";
import { ApiResponsiveImage } from "@libs/data/api/model/api_responsive_image";

type ApiSlides = Omit<HomeSlides, "image"> & { image: ApiResponsiveImage };

export interface ApiHomeResponseInterface {
  categories: Category[];
  slides: ApiSlides[];
  companies: ShortCompany[];
  products: HomeCategoryProducts[];
  services: Service[];
  vacancies: VacancyShort[];
  banners: HomeBanner[];
}

export class ApiHomeResponse {
  categories: Category[];
  slides: ApiSlides[];
  companies: ShortCompany[];
  products: HomeCategoryProducts[];
  services: Service[];
  vacancies: VacancyShort[];
  banners: HomeBanner[];

  constructor({
    categories,
    slides,
    companies,
    products,
    services,
    vacancies,
    banners
  }: ApiHomeResponseInterface) {
    this.categories = categories;
    this.slides = slides;
    this.companies = companies;
    this.products = products;
    this.services = services;
    this.vacancies = vacancies;
    this.banners = banners;
  }
}
