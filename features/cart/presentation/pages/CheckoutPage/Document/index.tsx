import React, { FC, useState } from "react";

import styles from "@features/cart/presentation/styles/cart.module.scss";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { Button } from "@core/button/default";
import PrimaryButton from "@core/button/primary";
import { Modal } from "@libs/presentation/components/modals/Modal";

type Props = {
  changeDocumentsState: any;
  setStep: any;
  idx: number;
};
const CheckoutDocument: FC<Props> = ({ changeDocumentsState, idx, setStep }) => {
  const [checkboxes, setCheckboxes] = useState([false, false, false]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isModal, setIsModal] = useState(false);

  function changeState(id: number) {
    const arr = [...checkboxes];
    arr[id] = !arr[id];
    setCheckboxes(arr);

    const isFalse = arr.find((el) => el === false);

    if (isFalse === false) {
      setIsDisabled(true);
    } else setIsDisabled(false);
  }

  return (
    <>
      <div className={styles.document}>
        <div className={styles.document__title}>Lorem ipsum dolor sit ame</div>
        <p className={styles.document__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className={styles.document__text}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <div className={styles.document__checkbox}>
          <div className={styles.document__checkbox_item}>
            <Checkbox
              variant="primary_filled"
              className={styles.document__title}
              onChange={() => changeState(0)}
            />
            <span>*</span>
          </div>
          Lorem ipsum dolor sit amet,
        </div>
        <p className={styles.document__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className={styles.document__text}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <div className={styles.document__checkbox}>
          <div className={styles.document__checkbox_item}>
            <Checkbox
              variant="primary_filled"
              className={styles.document__title}
              onChange={() => changeState(1)}
            />
            <span>*</span>
          </div>
          Lorem ipsum dolor sit amet,
        </div>
        <div className={styles.document__checkbox}>
          <div className={styles.document__checkbox_item}>
            <Checkbox
              variant="primary_filled"
              className={styles.document__title}
              onChange={() => changeState(2)}
            />
            <span>*</span>
          </div>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
        </div>

        <Modal isActive={isModal} setIsActive={setIsModal} className={styles.document__modal}>
          Կարդացել եմ ամբողջը, համաձայն եմ պայմաններին։
          <div className={styles.document__modal_buttons}>
            <PrimaryButton
              disabled={isDisabled}
              className={styles.document__button}
              onClick={() => {
                changeDocumentsState(idx);
                setStep((old) => old - 1);
              }}
            >
              Ստորագրել
            </PrimaryButton>
            <PrimaryButton
              buttonStyle="outline"
              className={styles.panel__btn}
              onClick={() => setIsModal(false)}
            >
              Չեղարկել
            </PrimaryButton>
          </div>
        </Modal>
      </div>

      <PrimaryButton
        disabled={isDisabled}
        className={styles.document__button}
        onClick={() => setIsModal(true)}
      >
        հաստատել
      </PrimaryButton>
    </>
  );
};
export default CheckoutDocument;
