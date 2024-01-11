import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "@libs/domain/model/category";
import { getCategoriesProps } from "@libs/data/api/request/get_categories_data";
import { CategoriesRepositoryModule } from "@libs/internal/categories_module";

interface CategoriesState {
  categories: {
    loading: boolean;
    items: (Category & { subcategories: [] })[];
    currSubcategory: Category[];
  };
  loading: boolean;
}

const Repository = CategoriesRepositoryModule.categoriesRepository();

export const getCategories = createAsyncThunk(
  "libs/categories/getCategories",
  async (props: getCategoriesProps) => {
    console.log(props);
    const response = await Repository.getCategories(props);

    return {
      id: props.id,
      data: response
    };
  }
);

const initialState = {
  categories: {
    loading: false,
    items: [],
    currSubcategory: []
  },
  loading: false
} as CategoriesState;

const findItem = (items: Category[], id: number, data: Category[]) => {
  items.forEach((item) => {
    if (item.id == id) {
      item.subcategories = data;
    } else if (item.subcategories?.length) {
      const foundElement = item.subcategories.find((category) => {
        console.log(category.id, id);
        if (category.id === id) {
          category.subcategories = data;
        }
      });

      if (!foundElement) {
        findItem(item.subcategories, id, data);
      }
    }
  });
};

const categoriesSlice = createSlice({
  name: "libs/categories",
  initialState,
  reducers: {
    setCurrSubcategory(state: CategoriesState, action) {
      state.categories.currSubcategory = action.payload;
    }
  },
  extraReducers: {
    [`${getCategories.pending}`]: (state: CategoriesState) => {
      state.categories.loading = true;
    },
    [`${getCategories.fulfilled}`]: (state: CategoriesState, action) => {
      if (!action.payload.id) {
        state.categories.items = action.payload.data;
        state.categories.currSubcategory = action.payload.data;
        state.categories.loading = false;
        return;
      }

      const { items } = state.categories;
      if (items.length) {
        findItem(items, action.payload.id, action.payload.data);
      }

      if (action.payload.data.length) {
        state.categories.currSubcategory = action.payload.data;
      }
      state.categories.loading = false;
    },
    [`${getCategories.rejected}`]: (state: CategoriesState) => {
      console.error("Stack trace:", new Error().stack);
      state.categories.loading = false;
    }
  }
});

export const { setCurrSubcategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
