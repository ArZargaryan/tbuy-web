import { Rating } from "@libs/domain/model/rating";

type ShortCompanyType = {
  id: number;
  name: string;
  logo: string; // BOLORY KAM svg FORMATOV, KAM EL png/jpeg
};

export class ShortCompany implements ShortCompanyType {
  id: number;
  name: string;
  logo: string;
  constructor({ id, name, logo }: ShortCompanyType) {
    this.id = id;
    this.name = name;
    this.logo = logo;
  }
}

type CompanyCardInfoType = {
  id: number;
  logo: string;
  rating: Rating;
};

export class CompanyCardInfo implements CompanyCardInfoType {
  id: number;
  logo: string;
  rating: Rating;

  constructor({ id, rating, logo }: CompanyCardInfoType) {
    this.id = id;
    this.rating = rating;
    this.logo = logo;
  }
}
