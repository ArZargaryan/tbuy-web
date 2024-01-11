import { ShortCompany } from "@libs/domain/model/company";

interface VacancyShortModelProps {
  id: number;
  title: string;
  shortDesc: string;
  location: string;
  date: string | number;
  company: ShortCompany;
}

export class VacancyShort implements VacancyShortModelProps {
  id: number;
  title: string;
  shortDesc: string;
  location: string;
  date: string | number; // MILLISECONDS SINCE EPOCH
  company: ShortCompany;

  constructor({ id, title, shortDesc, location, date, company }: VacancyShortModelProps) {
    this.id = id;
    this.title = title;
    this.shortDesc = shortDesc;
    this.location = location;
    this.date = date;
    this.company = company;
  }
}
