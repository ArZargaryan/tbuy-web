import React, { useState } from "react";
import DefaultLayout from "@layouts/default";
import CardsSlider from "@libs/presentation/components/cards/CardsSlider";
import { useAppSelector } from "@core/store";

import styles from "@features/cart/presentation/styles/cart.module.scss";
import CartProductsTable from "@features/cart/presentation/components/CartProductsTable";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import CartSuccessModal from "@features/cart/presentation/components/modals/CartSuccessModal";
import PrimaryButton from "@core/button/primary";
import { useRouter } from "next/router";

function CartPage() {
  const { similar_products } = useAppSelector((state) => state.cart);
  const router = useRouter();
  //
  const [showSuccess, setShowSuccess] = useState(false);

  const onClose = () => setShowSuccess(false);

  // TODO REMOVE THIS LATER IF DON'T NEED
  // const submitHandler = async (data: FieldValues) => {
  //   try {
  //     delete data.remember_me;
  //     setShowSuccess(true);
  //     console.log(data);
  //   } catch (error: unknown) {}
  // };

  return (
    <DefaultLayout>
      <div className="container">
        <div className={`${styles.cart} ${styles.cart_page}`}>
          <div className={styles.cart__content}>
            <h1 className={`title page_title ${styles.cart__title}`} style={{ marginBottom: 10 }}>
              ԻՄ ԶԱՄԲՅՈՒՂԸ
            </h1>
            <button type={"button"} className={styles.content__reset_btn}>
              Ապաընտրել բոլոր ապրանքները
            </button>
            <CartProductsTable rows={similar_products?.slice(0, 3)} />
          </div>
          <div className={styles.blue_550}>
            <CardsSlider
              cards={similar_products}
              title="ԳՆՈՒՄ ԵՆ ՆԱԵՎ"
              titleClassName={styles.slider_title}
              extra_type="short_550"
            />
          </div>
          <div className={styles.cart__conclusion}>
            <h3 className={styles.conclusion__title}>Պատվերի ամփոփում</h3>

            <div className={styles.conclusion__info}>
              <div className={styles.info__block}>
                <div className={styles.block__row}>
                  <p className={styles.row__text}>2 ապրանքների գինը</p>
                  <p className={styles.row__price}>88.000 AMD</p>
                </div>
                <div className={styles.block__row}>
                  <p className={styles.row__text}>1 ծառայություն</p>
                  <p className={styles.row__price}>3.000 AMD</p>
                </div>
                <div className={styles.block__row}></div>
              </div>
            </div>

            <div className={styles.conclusion__controls}>
              <div className={styles.info__block}>
                <div className={`${styles.block__row} ${styles.block__row_all_price}`}>
                  <p className={styles.row__text}>Ընդհանուր արժեքը</p>
                  <p className={styles.row__price}>100.000 AMD</p>
                </div>
                <div className={styles.block__row}>
                  <div className={styles.row__text}>
                    <Checkbox name={"remember_me"} variant={"secondary_outlined"} />
                    համաձայն եմ պայմաններին
                  </div>
                </div>
              </div>
              <br />
              <div className={styles.controls__btns}>
                <PrimaryButton
                  onClick={() => router.push("/cart/checkout")}
                  className={styles.controls__btn}
                >
                  ՎՃԱՐԵԼ
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.desktop_block}>
          <CardsSlider
            cards={similar_products}
            title={"ԳՆՈՒՄ ԵՆ ՆԱԵՎ"}
            titleClassName={styles.slider_title}
            extra_type={"short_550"}
          />
        </div>
      </div>
      <CartSuccessModal open={showSuccess} onClose={onClose} withAddress />
    </DefaultLayout>
  );
}

export default CartPage;
