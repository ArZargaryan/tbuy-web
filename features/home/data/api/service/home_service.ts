import { ApiHomeResponse } from "@features/home/data/api/model/api_home_response";
import { fetcher, HttpMethods } from "@core/helpers/fetcher";
import { Lang } from "@core/store/global";
import { GetHomeDataBody } from "@features/home/data/api/request/get_home_data_body";

export class HomeService {
  async getHomeData(lang: Lang) {
    try {
      const query = new GetHomeDataBody(lang);

      const response = await fetcher(HttpMethods.POST, query);

      return new ApiHomeResponse(response.data);
    } catch (e: unknown) {
      throw new Error("Что-то пошло не так");
    }
  }
}
