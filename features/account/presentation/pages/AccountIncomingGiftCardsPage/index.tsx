import React from "react";
import AccountLayout from "@layouts/account-layout";
import ProductTable from "@features/account/presentation/components/ProductTable";
import { useAppSelector } from "@core/store";
import OutgoingGiftShowCell from "@features/account/presentation/components/show-cells/OutgoingGiftShowCell";

function AccountGiftCardsPage() {
  const { items } = useAppSelector((state) => state.account_gift_cards_outgoing);

  return (
    <AccountLayout contentClassName={"account_content"}>
      <h2 className={"title"}>Իմ նվեր քարտերը</h2>
      <ProductTable rows={items} ChildComponent={OutgoingGiftShowCell} />
    </AccountLayout>
  );
}

export default AccountGiftCardsPage;
