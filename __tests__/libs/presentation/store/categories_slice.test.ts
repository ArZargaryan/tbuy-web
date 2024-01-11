import { store } from "@core/store";
import { getCategories } from "@libs/presentation/store/categoriesSlice";
import { Lang } from "@core/store/global";

describe("libs - categories_slice testing", () => {
  it("test initial values", () => {
    const { libs_categories } = store.getState();

    expect(libs_categories.categories).toStrictEqual({
      loading: false,
      items: [],
      currSubcategory: []
    });
  });

  it("test getCategories", async () => {
    await store.dispatch(getCategories({ lang: Lang.AM })); // getting base categories

    let { libs_categories } = store.getState();

    await store.dispatch(
      getCategories({ id: libs_categories.categories.items[0].id, lang: Lang.AM }) // getting subcategories of first category
    );

    libs_categories = store.getState().libs_categories;

    expect(libs_categories.categories.loading).toBeFalsy();
    expect(libs_categories.categories.items.length).toBeTruthy();
    expect(libs_categories.categories.items[0].subcategories.length).toBeTruthy();
  });

  it("test getCategories - invalid arguments", async () => {
    await store.dispatch(getCategories({ lang: Lang.AM })); // getting base categories

    let { libs_categories } = store.getState();

    await store.dispatch(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getCategories({ id: true, lang: "gy" }) // getting subcategories of first category
    );

    libs_categories = store.getState().libs_categories;
    console.log("libs_categories", libs_categories);
    expect(libs_categories.categories.loading).toBeFalsy();
    expect(libs_categories.categories.items.length).toBeTruthy();
    expect(libs_categories.categories.items[0].subcategories.length).toBeFalsy();
  });
});
