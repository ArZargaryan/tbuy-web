import CategoryBar from "@features/home/presentation/components/CategoryBar";
import { render, screen } from "@testing-library/react";
import CategoriesMock from "@mocks/categories.js";
import { Provider } from "react-redux";
import { store } from "@core/store";

jest.mock("next/router", () => ({
  useRouter: jest.fn()
}));

jest.mock("next/router", () => require("next-router-mock"));

describe("CategoryBar", () => {
  test("if categories valid", () => {
    render(
      <Provider store={store}>
        <CategoryBar categories={CategoriesMock.validCategories} />
      </Provider>
    );

    setTimeout(() => {
      const heading = screen.getByText("Электроника");
      expect(heading).toBeInTheDocument();
    }, 1000);
  });
});
