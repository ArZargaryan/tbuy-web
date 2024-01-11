import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HomeDataRepositoryModule } from "@features/home/internal/home_data_repository_module";
import { Lang } from "@core/store/global";
import { HomeData } from "@features/home/domain/model/home_data";

interface HomePageState {
  homeData: HomeData;
  loading: boolean;
}

const Repository = HomeDataRepositoryModule.homeDataRepository();

export const getHomeData = createAsyncThunk("home/getHomeData", async (lang: Lang) => {
  const response = await Repository.getHomeData(lang);
  return response;
});

const initialState = {
  homeData: {} as HomeData,
  loading: false
} as HomePageState;

const homepageSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {
    [`${getHomeData.pending}`]: (state: HomePageState) => {
      state.loading = true;
    },
    [`${getHomeData.fulfilled}`]: (state: HomePageState, action) => {
      state.loading = false;
      state.homeData = action.payload;
    },
    [`${getHomeData.rejected}`]: (state: HomePageState) => {
      state.loading = true;
    }
  }
});

export default homepageSlice.reducer;
