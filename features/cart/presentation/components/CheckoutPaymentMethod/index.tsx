import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import styles from "./checkout_payment_method.module.scss";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import PaymentVariantForm from "@features/cart/presentation/components/CheckoutPaymentMethod/components/PaymentVariantForm";
import TransferForm from "@features/cart/presentation/components/CheckoutPaymentMethod/components/TransferForm";
import QrForm from "@features/cart/presentation/components/CheckoutPaymentMethod/components/QrForm";

interface Props {
  type?: "default" | "gift_card";
}

function CheckoutPaymentMethod(props: Props) {
  const { type } = props;

  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
    // setError,
    // watch
    // setValue,
    // getValues
    reset
  } = useForm();
  //
  // const { t } = useTranslation(["common"]);
  // const wantSignup = watch("want_signup", false);
  const [variant, setVariant] = useState("");

  const submitHandler = async (data: FieldValues) => {
    try {
      delete data.remember_me;
      console.log(data);
    } catch (error: unknown) {}
  };

  return (
    <>
      <form className={styles.checkout_form} onSubmit={handleSubmit(submitHandler)}>
        {type !== "gift_card" && (
          <div className={styles.checkout_form__item}>
            <Checkbox
              variant={"circle"}
              control={control}
              disabled
              {...register("nal", {
                onChange: () => {
                  reset({ nal: true });
                  setVariant("nal");
                }
              })}
              label={"Կանխիկ"}
            />
          </div>
        )}
        <div className={styles.checkout_form__item}>
          <Checkbox
            variant={"circle"}
            control={control}
            {...register("visa", {
              onChange: () => {
                reset({ visa: true });
                setVariant("visa");
              }
            })}
            label={"Քարտով (Visa, MasterCard, Arca, American Express)"}
          />
        </div>
        <div className={styles.checkout_form__item}>
          <Checkbox
            variant={"circle"}
            control={control}
            {...register("transfer", {
              onChange: () => {
                reset({ transfer: true });
                setVariant("transfer");
              }
            })}
            label={"Փոխանցումով (Կազմակերպությունների համար)"}
          />
          <TransferForm variant={variant} />
        </div>
        <div className={styles.checkout_form__item}>
          <Checkbox
            variant={"circle"}
            control={control}
            {...register("inecopay", {
              onChange: () => {
                reset({ inecopay: true });
                setVariant("inecopay");
              }
            })}
            label={"INECOPAY"}
          />
          <QrForm variant={variant} check={"inecopay"} />
        </div>
        <div className={styles.checkout_form__item}>
          <Checkbox
            variant={"circle"}
            control={control}
            {...register("idram", {
              onChange: () => {
                reset({ idram: true });
                setVariant("idram");
              }
            })}
            label={"IDRAM"}
          />
          <QrForm variant={variant} check={"idram"} />
        </div>

        <div className={styles.checkout_form__item}>
          <Checkbox
            variant={"circle"}
            control={control}
            {...register("credit", {
              onChange: () => {
                reset({ credit: true });
                setVariant("credit");
              }
            })}
            label={"Գնել ապառիկ"}
          />
          <QrForm variant={variant} check={"credit"} />
        </div>
      </form>

      <PaymentVariantForm variant={variant} />
    </>
  );
}

export default CheckoutPaymentMethod;

// временно
// <div className={styles.checkout_form__item}>
//   <Checkbox
//     variant={"circle"}
//     control={control}
//     {...register("rassrochka", {
//       onChange: () => {
//         reset({ rassrochka: true });
//         setVariant("rassrochka");
//       }
//     })}
//     label={"Ապառիկ օնլայն (Inecobank, Unibank, Acba-Credit Agricole)"}
//   />
// </div>
// <div className={styles.checkout_form__item}>
//   <Checkbox
//     variant={"circle"}
//     control={control}
//     {...register("evocabank", {
//       onChange: () => {
//         reset({ evocabank: true });
//         setVariant("evocabank");
//       }
//     })}
//     label={"Ապառիկ օնլայն (EvocaBank)"}
//   />
// </div>
