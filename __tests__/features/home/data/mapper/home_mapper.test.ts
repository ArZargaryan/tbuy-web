import { HomeMapper } from "@features/home/data/mapper/home_mapper";
import HomeDataMock from "@mocks/home/home_data";
import { ApiHomeResponse } from "@features/home/data/api/model/api_home_response";
import { HomeData } from "@features/home/domain/model/home_data";

describe("home - HomeMapper testing", () => {
  test("valid props", () => {
    const mapped = HomeMapper.fromApi(new ApiHomeResponse(HomeDataMock.validData as HomeData));
    expect(mapped.categories.length).toBeTruthy();
    expect(mapped.banners.length).toBeTruthy();
    expect(mapped.vacancies.length).toBeTruthy();
    expect(mapped.services.length).toBeTruthy();
    expect(mapped.products.length).toBeTruthy();
    expect(mapped.companies.length).toBeTruthy();
    expect(mapped.slides.length).toBeTruthy();
  });

  test("invalid props", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mapped = HomeMapper.fromApi(new ApiHomeResponse(HomeDataMock.invalidData));
    console.log(mapped.companies);
    expect(mapped.categories.length).toBe(0);
    expect(mapped.banners.length).toBe(0);
    expect(mapped.vacancies.length).toBe(0);
    expect(mapped.services.length).toBe(0);
    expect(mapped.products.length).toBe(0);
    expect(mapped.companies.length).toBe(0);
    expect(mapped.slides.length).toBe(0);
  });
});
