import { store } from "@core/store";
import { getHomeData } from "@features/home/presentation/store/homePageSlice";
import { Lang } from "@core/store/global";

describe("home - home_page_slice testing", () => {
  it("test initial values", () => {
    const { home } = store.getState();

    expect(home.homeData).toStrictEqual({});
    expect(home.loading).toBe(false);
  });

  it("test after dispatch getHomeData", async () => {
    await store.dispatch(getHomeData(Lang.AM));

    const { home } = store.getState();

    expect(home.homeData.categories.length).toBeTruthy();
    expect(home.homeData.products.length).toBeTruthy();
    expect(home.homeData.companies.length).toBeTruthy();
    expect(home.homeData.banners.length).toBeTruthy();
    expect(home.homeData.slides.length).toBeTruthy();
    expect(home.homeData.services.length).toBeTruthy();
    expect(home.homeData.vacancies.length).toBeTruthy();

    expect(home.loading).toBe(false);
  });
});
