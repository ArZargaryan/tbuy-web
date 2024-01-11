import React from "react";
import AccountLayout from "@layouts/account-layout";
import ProductTable from "@features/account/presentation/components/ProductTable";
import { useAppDispatch, useAppSelector } from "@core/store";
import OrderShowCell from "@features/account/presentation/components/show-cells/OrderShowCell";
import ContractModal from "@features/account/presentation/pages/AccountOrdersPage/components/ContractModal";
import { closeModals, showMessageModal } from "@features/account/presentation/store/ordersSlice";
import RemoveOrderModal from "@features/account/presentation/pages/AccountOrdersPage/components/RemoveOrderModal";
import MessageModal from "@libs/presentation/components/modals/MessageModal";

function AccountOrdersPage() {
  const dispatch = useAppDispatch();

  const {
    items,
    modals: { confirmOrder, removeOrder, buyerChat }
  } = useAppSelector((state) => state.account_orders);

  return (
    <AccountLayout contentClassName={"account_content"}>
      <h2 className={"title"}>Իմ նվեր քարտերը</h2>
      <ProductTable
        rows={items}
        ChildComponent={OrderShowCell}
        variant={"orders"}
        withChat
        onChatClick={(info) => dispatch(showMessageModal(info))}
      />

      <ContractModal open={confirmOrder} onClose={() => dispatch(closeModals())} />
      <RemoveOrderModal open={removeOrder} onClose={() => dispatch(closeModals())} />
      <MessageModal
        open={buyerChat.open}
        onClose={() => dispatch(closeModals())}
        recipient={buyerChat.info}
      />
    </AccountLayout>
  );
}

export default AccountOrdersPage;
