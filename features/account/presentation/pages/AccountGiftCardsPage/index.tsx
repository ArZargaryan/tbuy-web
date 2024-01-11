import React from "react";
import AccountLayout from "@layouts/account-layout";
import ProductTable from "@features/account/presentation/components/ProductTable";
import { useAppSelector } from "@core/store";
import IncomingGiftShowCell from "@features/account/presentation/components/show-cells/IncomingGiftShowCell";

function AccountGiftCardsPage() {
  const { items } = useAppSelector((state) => state.account_gift_cards_outgoing);

  return (
    <AccountLayout contentClassName={"account_content"}>
      <h2 className={"title"}>Իմ նվեր քարտերը</h2>
      <ProductTable
        rows={items}
        ChildComponent={IncomingGiftShowCell}
        variant={"outgoing_gift_cards"}
      />
    </AccountLayout>
  );
}

export default AccountGiftCardsPage;
