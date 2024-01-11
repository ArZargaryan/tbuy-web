import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Review } from "@libs/domain/model/review";
import { ShopRepositoryModule } from "@features/shop/internal/shop_repository_module";
import { getProductProps } from "@features/shop/data/api/request/get_product_body";
import { DetailedProduct, IDetailedProduct } from "@features/shop/domain/model/DetailedProduct";
import { getProductReviewsProps } from "@features/shop/data/api/request/get_product_reviews_body";

interface IState {
  loading: boolean;
  pageData: DetailedProduct;
  reviews: {
    totalItems: number;
    data: Review[];
  };
  reviewsOffset: number;
  blobCharact: { name: string; value: string }[];
}

const Repository = ShopRepositoryModule.shopRepository();

const initialState: IState = {
  loading: false,

  pageData: {
    product: {} as IDetailedProduct,
    suggestedProducts: []
  } as DetailedProduct,

  reviews: {
    totalItems: 0,
    data: []
  },
  reviewsOffset: 0,

  blobCharact: [
    { name: "Երաշխիք:", value: "1 տարի" },
    { name: "Երաշխիք:", value: "1 տարի" },
    { name: "Երաշխիք:", value: "1 տարի" },
    { name: "Երաշխիք:", value: "1 տարի" },
    { name: "Երաշխիք:", value: "1 տարի" }
  ]
};

export const getProductDetails = createAsyncThunk(
  "shop/product_detail/get_product_detail",
  async (props: getProductProps) => {
    const response = await Repository.getProductDetails(props);
    return response;
  }
);

export const getProductReviews = createAsyncThunk(
  "shop/product_detail/get_product_reviews",
  async (props: getProductReviewsProps) => {
    const response = await Repository.getProductReviews(props);
    return response;
  }
);

const productDetailSlice = createSlice({
  name: "shop/product_detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.pageData = action.payload;
    });
    builder.addCase(getProductDetails.rejected, (state) => {
      state.loading = true;
    });

    builder.addCase(getProductReviews.pending, (state) => {});
    builder.addCase(getProductReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
    builder.addCase(getProductReviews.rejected, (state) => {});
  }
});
export default productDetailSlice.reducer;
