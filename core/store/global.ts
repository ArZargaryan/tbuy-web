import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Lang {
  AM = "hy",
  EN = "en",
  RU = "ru"
}

interface InitialI {
  lang: Lang | "";
}

const initialState: InitialI = {
  lang: ""
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<Lang>) => {
      state.lang = action.payload;
    }
  }
});

export const { setLang } = globalSlice.actions;

export default globalSlice.reducer;
