import { HomeService } from "@features/home/data/api/service/home_service";
import { Lang } from "@core/store/global";
import { ApiHomeResponse } from "@features/home/data/api/model/api_home_response";

describe("home - HomeService testing", () => {
  const homeService = new HomeService();

  test("getHomeData props valid", async () => {
    const response = await homeService.getHomeData(Lang.AM);

    expect(response).toBeInstanceOf(ApiHomeResponse);
  });

  test("getHomeData props not valid", async () => {
    const response = await homeService.getHomeData("asd" as Lang);

    expect(response).toBeInstanceOf(ApiHomeResponse);
  });
});
