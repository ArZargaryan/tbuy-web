import cartReducer from "@features/cart/presentation/store/cartPageSlice";
import cart_gift_cards from "@features/cart/presentation/store/cartGiftCardsPageSlice";

export const cart = {
  cart: cartReducer,
  cart_gift_cards
};
