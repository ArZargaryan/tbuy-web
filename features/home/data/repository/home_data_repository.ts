import { ApiHomeUtil } from "@features/home/data/api/api_util";
import { HomeData } from "@features/home/domain/model/home_data";
import { Lang } from "@core/store/global";

export class HomeDataRepository {
  apiUtil: ApiHomeUtil;
  constructor(props: { apiUtil: ApiHomeUtil }) {
    this.apiUtil = props.apiUtil;
  }

  getHomeData(lang: Lang): Promise<HomeData> {
    return this.apiUtil.getHomeData(lang);
  }
}
