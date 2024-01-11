import account_favorite from "@features/account/presentation/store/favoritePageSlice";
import account_notifications from "@features/account/presentation/store/notificationsPageSlice";
import account_gift_cards_outgoing from "@features/account/presentation/store/giftCardsOutgoingPageSlice";
import account_gift_cards_incoming from "@features/account/presentation/store/giftCardsIncomingPageSlice";
import account_orders from "@features/account/presentation/store/ordersSlice";
import account_last_viewed_pages from "@features/account/presentation/store/lastViewedPagesSlice";
import account_write_review from "@features/account/presentation/store/writeReviewPageSlice";
import account_user_info from "@features/account/presentation/store/userInfoPageSlice";

export const account = {
  account_favorite,
  account_notifications,
  account_gift_cards_outgoing,
  account_gift_cards_incoming,
  account_orders,
  account_last_viewed_pages,
  account_write_review,
  account_user_info
};
