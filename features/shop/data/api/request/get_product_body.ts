import { Lang } from "@core/store/global";

export interface getProductProps {
  id?: number;
  lang: Lang;
}
export class GetProductBody {
  page: string;
  lang: Lang;
  req?: string;

  constructor({ id, lang }: getProductProps) {
    this.page = "product";
    this.lang = typeof lang === "string" ? lang : Lang.AM;
    this.req = typeof id === "number" ? `"id":"${id}"` : "";
  }
}
