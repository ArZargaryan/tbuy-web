import { Lang } from "@core/store/global";

export class GetHomeDataBody {
  page: string;
  lang: Lang;
  constructor(lang: Lang) {
    this.page = "main";
    this.lang = lang;
  }
}
