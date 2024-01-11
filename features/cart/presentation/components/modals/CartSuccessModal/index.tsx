import React from "react";
import styles from "./cart_success_modal.module.scss";
import Modal from "@libs/presentation/components/elements/Modal";
import { ModalProps } from "@mui/material";
import Link from "next/link";

interface Props extends Omit<ModalProps, "children"> {
  withAddress?: boolean;
}

function CartSuccessModal(props: Props) {
  return (
    <Modal {...props} withCloseBtn contentClassName={styles.cart_success__container}>
      <div className={styles.cart_success}>
        <h2 className={styles.cart_success__title}>ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ ՊԱՏՎԵՐԻ ՀԱՄԱՐ</h2>
        <p className={styles.cart_success__text}>Մեր աշխատակիցը շուտով կապ կհաստատի Ձեզ հետ</p>
        {!!props.withAddress && (
          <p className={styles.cart_success__text}>
            Ձեր պատվերը կարող եք վերցնել հետևյալ հասցեով <Link href={"/"}>Lorem ipsum 28</Link>
          </p>
        )}
        <Link href={"/"}>
          <button
            className={`blue_btn ${styles.cart_success__button}`}
            onClick={(e) => !!props?.onClose && props?.onClose(e, "backdropClick")}
          >
            ՓԱԿԵԼ
          </button>
        </Link>
      </div>
    </Modal>
  );
}

export default CartSuccessModal;
