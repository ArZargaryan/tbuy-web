import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Review } from "@libs/domain/model/review";
import { ShopRepositoryModule } from "@features/shop/internal/shop_repository_module";
import { getProductProps } from "@features/shop/data/api/request/get_product_body";
import { getProductReviewsProps } from "@features/shop/data/api/request/get_product_reviews_body";
import { DetailedService, IDetailedService } from "@features/services/domain/model/DetailedService";
import { Service } from "@libs/domain/model/service";
import { map } from "lodash";

// TODO: delete serviceInfo when the API is ready
interface IState {
  loading: boolean;
  pageData: DetailedService & {
    serviceInfo: string;
  };
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
    product: {} as IDetailedService,
    serviceInfo: "",
    suggestedProducts: []
  } as DetailedService & {
    serviceInfo: string;
  },

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

// TODO: when the api is ready to change requests
export const getProductDetails = createAsyncThunk(
  "services/service_detail/get_product_detail",
  async (props: getProductProps) => {
    const response = await Repository.getProductDetails(props);
    return {
      product: response.product,
      suggestedProducts: map(response.suggestedProducts, (item) => new Service(item))
    };
  }
);

export const getProductReviews = createAsyncThunk(
  "services/service_detail/get_product_reviews",
  async (props: getProductReviewsProps) => {
    const response = await Repository.getProductReviews(props);
    return response;
  }
);

const productDetailSlice = createSlice({
  name: "services/service_detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.pageData = {
        ...action.payload,
        serviceInfo:
          "Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է: Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է:"
      };
    });
    builder.addCase(getProductDetails.rejected, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductReviews.pending, () => {});
    builder.addCase(getProductReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
    builder.addCase(getProductReviews.rejected, () => {});
  }
});
export default productDetailSlice.reducer;
