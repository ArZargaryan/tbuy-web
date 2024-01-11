import { Category } from "@libs/domain/model/category";
import { HomeSlides } from "@features/home/domain/model/home_slider";
import { ShortCompany } from "@libs/domain/model/company";
import { HomeCategoryProducts } from "@features/home/domain/model/home_category_products";
import { Service } from "@libs/domain/model/service";
import { VacancyShort } from "@libs/domain/model/vacancy";
import { HomeBanner } from "@features/home/domain/model/home_banner";

export interface HomeDataInterface {
  categories: Category[];
  slides: HomeSlides[];
  companies: ShortCompany[];
  products: HomeCategoryProducts[];
  services: Service[];
  vacancies: VacancyShort[];
  banners: HomeBanner[];
}

export class HomeData implements HomeDataInterface {
  categories: Category[];
  slides: HomeSlides[];
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
  }: HomeDataInterface) {
    this.categories = categories;
    this.slides = slides;
    this.companies = companies;
    this.products = products;
    this.services = services;
    this.vacancies = vacancies;
    this.banners = banners;
  }
}
