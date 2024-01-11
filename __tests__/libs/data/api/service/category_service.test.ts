import { CategoryService } from "@libs/data/api/service/category_service";
import { Lang } from "@core/store/global";

describe("libs - CategoryService testing", () => {
  const categoryService = new CategoryService();

  it("with props id and lang", async () => {
    const response = await categoryService.getCategories({ id: 466, lang: Lang.AM });

    expect(response.categories.length).toBeTruthy();
  });

  it("with only prop lang", async () => {
    const response = await categoryService.getCategories({ lang: Lang.AM });

    expect(response.categories.length).toBeTruthy();
  });

  it("invalid usage without props", async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await categoryService.getCategories();
    } catch (e: unknown) {
      if (e instanceof Error) {
        expect(e.message).toBe("Что-то пошло не так");
      }
    }
  });

  it("invalid props", async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = await categoryService.getCategories({ id: [], lang: true });
    expect(response.categories.length).toBeTruthy(); // returned default categories in Armenian
  });
});
