import { Lang } from "@core/store/global";

export interface getCategoriesProps {
  id?: number;
  lang: Lang;
}

export class GetCategoriesBody {
  page: string;
  lang: Lang;
  req?: string;
  constructor({ id, lang }: getCategoriesProps) {
    this.page = "categories";
    this.lang = typeof lang === "string" ? lang : Lang.AM;
    this.req = typeof id === "number" ? `"id":"${id}"` : "";
  }
}
