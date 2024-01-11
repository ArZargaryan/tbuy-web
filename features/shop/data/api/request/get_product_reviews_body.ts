import { Lang } from "@core/store/global";

export interface getProductReviewsProps {
  id: number;
  offset: number;
  lang: Lang;
}
export class GetProductReviewsBody {
  page: string;
  lang: Lang;
  req?: string;
  constructor({ id, offset, lang }: getProductReviewsProps) {
    this.page = "prodreviews";
    this.lang = typeof lang === "string" ? lang : Lang.AM;
    this.req = `"id":"${id}","offset":"${offset}"`;
  }
}
