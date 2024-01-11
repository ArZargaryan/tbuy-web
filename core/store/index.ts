import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import global from "./global";
import { createWrapper } from "next-redux-wrapper";

import { shop } from "@features/shop/presentation/store";
import { home } from "@features/home/presentation/store";
import { services } from "@features/services/presentation/store";
import { libsStore } from "@libs/presentation/store";
import { account } from "@features/account/presentation/store";
import { vacancies } from "@features/vacancies/presentation/store";
import { search } from "@features/search/presentation/store";
import { cart } from "@features/cart/presentation/store";
import { gifts } from "@features/gifts/presentation/store";

export const store = configureStore({
  reducer: {
    global: global,
    ...shop,
    ...home,
    ...services,
    ...libsStore,
    ...account,
    ...vacancies,
    ...search,
    ...cart,
    ...gifts
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper(() => store);
