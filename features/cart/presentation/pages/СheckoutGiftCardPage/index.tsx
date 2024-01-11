import React from "react";
import DefaultLayout from "@layouts/default";

import styles from "@features/cart/presentation/styles/cart.module.scss";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { FieldValues, useForm } from "react-hook-form";
import CheckoutPaymentMethod from "@features/cart/presentation/components/CheckoutPaymentMethod";
import GiftCardForm from "@features/cart/presentation/components/GiftCardForm";
import GiftCardModal from "@features/cart/presentation/pages/СheckoutGiftCardPage/components/GiftCardModal";
import { useModal } from "@core/hooks/useModal";
import PrimaryButton from "@core/button/primary";

function CheckoutGiftCardPage() {
  const {
    register,
    control,
    // formState: { errors },
    // setError,
    watch,
    setValue,
    handleSubmit
    // getValues
  } = useForm();

  const [modalOpen, changeModalVisibility] = useModal(false);

  // TODO: when the API appears, the field names will be changed
  const watchDostav = watch("dostav", false);
  const submitHandler = async (data: FieldValues) => {
    try {
      delete data.remember_me;
      console.log(data);
      changeModalVisibility();
    } catch (error: unknown) {}
  };

  return (
    <DefaultLayout>
      <div className={"container"}>
        <div className={`${styles.cart} ${styles.cart_page}`}>
          <div className={styles.cart__content}>
            <h1 className={`title page_title ${styles.cart__title}`}>ԻՄ ԶԱՄԲՅՈՒՂԸ</h1>

            <GiftCardForm />
            <h1 className={`title page_title ${styles.cart__title}`}>ՎՃԱՐՄԱՆ ՊԱՅՄԱՆՆԵՐ</h1>
            <h3 className={styles.cart_suptitle}>Ընտրեք վճարման տարբերակը</h3>
            <CheckoutPaymentMethod type={"gift_card"} />
          </div>
          <form className={styles.cart__conclusion} onSubmit={handleSubmit(submitHandler)}>
            <h3 className={styles.conclusion__title}>Պատվերի ամփոփում</h3>

            <div className={styles.conclusion__info}>
              <div className={styles.info__block}>
                <div className={styles.block__row}>
                  <p className={styles.row__text}>2 ապրանքների գինը</p>
                  <p className={styles.row__price}>88.000 AMD</p>
                </div>
                <div className={styles.block__row}>
                  <p className={styles.row__text}>Տեղադրում</p>
                  <p className={styles.row__price}>3000 AMD</p>
                </div>
                <div className={styles.block__row}></div>
              </div>
              <div className={styles.info__block}>
                <div className={styles.block__row}>
                  <div className={styles.row__text}>
                    <Checkbox
                      control={control}
                      variant={"secondary_outlined"}
                      {...register("samvoz", {
                        onChange: () => setValue("dostav", false)
                      })}
                      label={"Առաքում"}
                    />
                  </div>
                </div>
                <div className={styles.block__row}>
                  <div className={styles.row__text}>
                    <Checkbox
                      control={control}
                      variant={"secondary_outlined"}
                      {...register("dostav", {
                        onChange: () => setValue("samvoz", false)
                      })}
                      label={"Շտապ առաքում"}
                    />
                  </div>
                  <p className={styles.row__price}>3000 AMD</p>
                </div>
                {watchDostav && (
                  <div className={styles.block__row} style={{ marginTop: 20 }}>
                    Ձեր պատվերն կառաքվի 20 րոպեների ընթացքում
                  </div>
                )}
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
                    <Checkbox
                      control={control}
                      name={"remember_me"}
                      variant={"secondary_outlined"}
                    />
                    համաձայն եմ պայմաններին
                  </div>
                </div>
              </div>

              <div className={styles.controls__btns}>
                <PrimaryButton>
                  ՈՒՂԱՐԿԵԼ ՊԱՏՎԵՐԸ
                </PrimaryButton>
                <PrimaryButton buttonStyle="outline">
                  ԴԻՏԵԼ ՊԱՏՎԵՐԸ
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>

      <GiftCardModal open={modalOpen} onClose={changeModalVisibility} />
    </DefaultLayout>
  );
}

export default CheckoutGiftCardPage;
