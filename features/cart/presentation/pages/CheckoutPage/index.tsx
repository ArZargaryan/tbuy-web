import React, { useState } from "react";
import DefaultLayout from "@layouts/default";

import styles from "@features/cart/presentation/styles/cart.module.scss";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { FieldValues, useForm } from "react-hook-form";
import CartLogin from "@features/cart/presentation/components/CartLogin";
import CheckoutForm from "@features/cart/presentation/components/CheckoutForm";
import CheckoutPaymentMethod from "@features/cart/presentation/components/CheckoutPaymentMethod";
import CartSuccessModal from "@features/cart/presentation/components/modals/CartSuccessModal";
import { useAppSelector } from "@core/store";
import CartConclusionProducts from "@features/cart/presentation/components/CartConclusionProducts";
import PrimaryButton from "@core/button/primary";

// TODO: temporary property
interface Props {
  loggedIn?: boolean;
}

function CheckoutPage(props: Props) {
  const { similar_products } = useAppSelector((state) => state.cart);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    control,
    // formState: { errors },
    // setError,
    setValue,
    handleSubmit
    // getValues
  } = useForm();

  const onClose = () => setShowSuccess(false);

  // TODO: when the API appears, the field names will be changed
  const submitHandler = async (data: FieldValues) => {
    try {
      delete data.remember_me;
      setShowSuccess(true);
      console.log(data);
    } catch (error: unknown) {}
  };

  return (
    <DefaultLayout>
      <div className={`${styles.cart_container} container`}>
        <div className={`${styles.cart} ${styles.cart_page}`}>
          <div className={styles.cart__content}>
            <h1 className={`title page_title ${styles.cart__title}`}>ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐ</h1>
            {!props.loggedIn && <CartLogin />}

            <CheckoutForm />
            <h1 className={`title page_title ${styles.cart__title}`}>ՎՃԱՐՄԱՆ ՊԱՅՄԱՆՆԵՐ</h1>
            <h3 className={styles.cart_suptitle}>Ընտրեք վճարման տարբերակը</h3>
            <CheckoutPaymentMethod />
          </div>
          <form className={styles.cart__conclusion} onSubmit={handleSubmit(submitHandler)}>
            <h3 className={styles.conclusion__title}>Պատվերի ամփոփում</h3>

            <div className={styles.conclusion__info}>
              <CartConclusionProducts products={similar_products.slice(0, 2)} />
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

                <div className={styles.block__row} style={{ display: "block", marginTop: 10 }}>
                  <span className="red" style={{ marginRight: "3px" }}>
                    *
                  </span>{" "}
                  Ձեր պատվերն կառաքվի 20 րոպեների ընթացքում
                </div>

                <div className={styles.block__row}>
                  <div className={styles.row__text}>
                    <Checkbox
                      control={control}
                      variant={"secondary_outlined"}
                      {...register("ustan")}
                      label={"Տեղադրում"}
                    />
                  </div>
                  <p className={styles.row__price}>4000 AMD</p>
                </div>
                <div className={styles.block__row} style={{ display: "block", marginTop: 10 }}>
                  <span className="red" style={{ marginRight: "3px" }}>
                    *
                  </span>{" "}
                  Գնի մեջ ներառված չէ վերամբարձ կռունկի արժեքը
                </div>
              </div>
            </div>

            <div className={styles.conclusion__controls}>
              <div className={styles.info__block}>
                <div className={`${styles.block__row} ${styles.block__row_all_price}`}>
                  <p className={styles.row__text}>Ընդհանուր արժեքը</p>
                  <p className={styles.row__price}>100.000 AMD</p>
                </div>
              </div>

              <div className={styles.controls__btns}>
                <PrimaryButton buttonStyle="outline" className={styles.controls__btn}>
                  Դիտել պատվերը
                </PrimaryButton>
                <PrimaryButton className={styles.controls__btn}>պատվիրել</PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>
      <CartSuccessModal open={showSuccess} onClose={onClose} />
    </DefaultLayout>
  );
}

export default CheckoutPage;
