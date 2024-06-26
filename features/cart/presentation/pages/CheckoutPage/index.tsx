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
import { divide } from "lodash";
import { style } from "@mui/system";
import StarsRating from "@libs/presentation/components/elements/StarsRating";
import Tooltip from "@libs/presentation/components/elements/Tooltip";
import { Modal } from "@libs/presentation/components/modals/Modal";

// TODO: temporary property
interface Props {
  loggedIn?: boolean;
}

function CheckoutPage(props: Props) {
  const { similar_products } = useAppSelector((state) => state.cart);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showTextModal, setShowTextModal] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [step, setStep] = useState(0);

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
      {step === 0 && (
        <>
          <div className={`${styles.cart_container} container`}>
            <div className={`${styles.cart} ${styles.cart_page} ${styles.cart_checkout}`}>
              <div className={styles.cart__content}>
                <h1 className={`title page_title ${styles.cart__title}`}>ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐ</h1>
                {!props.loggedIn && <CartLogin />}

                <CheckoutForm />
                <h1 className={`title page_title ${styles.cart__title}`}>ՎՃԱՐՄԱՆ ՊԱՅՄԱՆՆԵՐ</h1>
                <h3 className={styles.cart_suptitle}>Ընտրեք վճարման տարբերակը</h3>
                <CheckoutPaymentMethod setRadioValue={setRadioValue} />
              </div>
              <div className={styles.cart__conclusion}>
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
                    <PrimaryButton
                      buttonStyle="outline"
                      className={styles.controls__btn}
                      onClick={() => setShowSuccess(true)}
                    >
                      Դիտել պատվերը
                    </PrimaryButton>
                    <PrimaryButton
                      className={styles.controls__btn}
                      onClick={() => {
                        radioValue === "credit" ? setStep((old) => old + 1) : setShowSuccess(true);
                      }}
                    >
                      պատվիրել
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CartSuccessModal open={showSuccess} onClose={onClose} />
        </>
      )}

      {step === 1 && (
        <>
          <div className="container">
            <div className={styles.back} onClick={() => setStep((old) => old - 1)}>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.68989 8.03058L9.99403 2.69151C10.0533 2.63103 10.1247 2.58284 10.204 2.54991C10.2833 2.51699 10.3687 2.5 10.455 2.5C10.5413 2.5 10.6267 2.51699 10.7059 2.54991C10.7852 2.58284 10.8566 2.63103 10.9159 2.69151L11.3049 3.08444C11.4281 3.2098 11.4968 3.37592 11.4968 3.54861C11.4968 3.7213 11.4281 3.88742 11.3049 4.01278L6.85106 8.4985L11.3096 12.9872C11.4319 13.113 11.5 13.279 11.5 13.4514C11.5 13.6238 11.4319 13.7898 11.3096 13.9156L10.9206 14.3085C10.8613 14.369 10.7899 14.4172 10.7106 14.4501C10.6313 14.483 10.5459 14.5 10.4596 14.5C10.3733 14.5 10.2879 14.483 10.2087 14.4501C10.1294 14.4172 10.058 14.369 9.99869 14.3085L4.68989 8.96417C4.56784 8.83764 4.5 8.67127 4.5 8.4985C4.5 8.32573 4.56784 8.15936 4.68989 8.03283V8.03058Z"
                  fill="#1D1D1D"
                />
              </svg>
              Վերադառնալ
            </div>
            <div className={styles.stepped}>
              <div className={styles.bank}>
                <div className={styles.bank__row}>
                  <div className={styles.bank__left}>
                    <div className={styles.bank__name}>
                      Ակբաբանկ
                      <div className={styles.bank__info}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.9974 13.3307V9.9974M9.9974 6.66406H10.0057M18.3307 9.9974C18.3307 14.5998 14.5998 18.3307 9.9974 18.3307C5.39502 18.3307 1.66406 14.5998 1.66406 9.9974C1.66406 5.39502 5.39502 1.66406 9.9974 1.66406C14.5998 1.66406 18.3307 5.39502 18.3307 9.9974Z"
                            stroke="#A1A1A1"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className={styles.bank__tooltip}>
                          Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ,
                          երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և հումորի
                          ավելացման արդյունքում:
                        </div>
                      </div>
                    </div>
                    <StarsRating readOnly />
                  </div>
                  <Checkbox variant="primary_filled" />
                </div>

                <div className={styles.bank__row}>
                  <div className={styles.bank__left}>
                    <div className={styles.bank__name}>
                      Ակբաբանկ
                      <div className={styles.bank__info}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.9974 13.3307V9.9974M9.9974 6.66406H10.0057M18.3307 9.9974C18.3307 14.5998 14.5998 18.3307 9.9974 18.3307C5.39502 18.3307 1.66406 14.5998 1.66406 9.9974C1.66406 5.39502 5.39502 1.66406 9.9974 1.66406C14.5998 1.66406 18.3307 5.39502 18.3307 9.9974Z"
                            stroke="#A1A1A1"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className={styles.bank__tooltip}>
                          Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ,
                          երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և հումորի
                          ավելացման արդյունքում:
                        </div>
                      </div>
                    </div>
                    <StarsRating readOnly />
                  </div>
                  <Checkbox variant="primary_filled" />
                </div>

                <div className={styles.bank__row}>
                  <div className={styles.bank__left}>
                    <div className={styles.bank__name}>
                      Ակբաբանկ
                      <div className={styles.bank__info}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.9974 13.3307V9.9974M9.9974 6.66406H10.0057M18.3307 9.9974C18.3307 14.5998 14.5998 18.3307 9.9974 18.3307C5.39502 18.3307 1.66406 14.5998 1.66406 9.9974C1.66406 5.39502 5.39502 1.66406 9.9974 1.66406C14.5998 1.66406 18.3307 5.39502 18.3307 9.9974Z"
                            stroke="#A1A1A1"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className={styles.bank__tooltip}>
                          Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ,
                          երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և հումորի
                          ավելացման արդյունքում:
                        </div>
                      </div>
                    </div>
                    <StarsRating readOnly />
                  </div>
                  <Checkbox variant="primary_filled" />
                </div>

                <div className={styles.bank__row}>
                  <div className={styles.bank__left}>
                    <div className={styles.bank__name}>
                      Ակբաբանկ
                      <div className={styles.bank__info}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.9974 13.3307V9.9974M9.9974 6.66406H10.0057M18.3307 9.9974C18.3307 14.5998 14.5998 18.3307 9.9974 18.3307C5.39502 18.3307 1.66406 14.5998 1.66406 9.9974C1.66406 5.39502 5.39502 1.66406 9.9974 1.66406C14.5998 1.66406 18.3307 5.39502 18.3307 9.9974Z"
                            stroke="#A1A1A1"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className={styles.bank__tooltip}>
                          Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ,
                          երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և հումորի
                          ավելացման արդյունքում:
                        </div>
                      </div>
                    </div>
                    <StarsRating readOnly />
                  </div>
                  <Checkbox variant="primary_filled" />
                </div>

                <div className={styles.bank__row}>
                  <div className={styles.bank__left}>
                    <div className={styles.bank__name}>
                      Ակբաբանկ
                      <div className={styles.bank__info}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.9974 13.3307V9.9974M9.9974 6.66406H10.0057M18.3307 9.9974C18.3307 14.5998 14.5998 18.3307 9.9974 18.3307C5.39502 18.3307 1.66406 14.5998 1.66406 9.9974C1.66406 5.39502 5.39502 1.66406 9.9974 1.66406C14.5998 1.66406 18.3307 5.39502 18.3307 9.9974Z"
                            stroke="#A1A1A1"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className={styles.bank__tooltip}>
                          Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ,
                          երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և հումորի
                          ավելացման արդյունքում:
                        </div>
                      </div>
                    </div>
                    <StarsRating readOnly />
                  </div>
                  <Checkbox variant="primary_filled" />
                </div>

                <div className={styles.bank__row}>
                  <div className={styles.bank__left}>
                    <div className={styles.bank__name}>
                      Ակբաբանկ
                      <div className={styles.bank__info}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.9974 13.3307V9.9974M9.9974 6.66406H10.0057M18.3307 9.9974C18.3307 14.5998 14.5998 18.3307 9.9974 18.3307C5.39502 18.3307 1.66406 14.5998 1.66406 9.9974C1.66406 5.39502 5.39502 1.66406 9.9974 1.66406C14.5998 1.66406 18.3307 5.39502 18.3307 9.9974Z"
                            stroke="#A1A1A1"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className={styles.bank__tooltip}>
                          Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ,
                          երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և հումորի
                          ավելացման արդյունքում:
                        </div>
                      </div>
                    </div>
                    <StarsRating readOnly />
                  </div>
                  <Checkbox variant="primary_filled" />
                </div>

                <div className={styles.bank__row}>
                  <div className={styles.bank__left}>
                    <div className={styles.bank__name}>
                      Ակբաբանկ
                      <div className={styles.bank__info}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.9974 13.3307V9.9974M9.9974 6.66406H10.0057M18.3307 9.9974C18.3307 14.5998 14.5998 18.3307 9.9974 18.3307C5.39502 18.3307 1.66406 14.5998 1.66406 9.9974C1.66406 5.39502 5.39502 1.66406 9.9974 1.66406C14.5998 1.66406 18.3307 5.39502 18.3307 9.9974Z"
                            stroke="#A1A1A1"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className={styles.bank__tooltip}>
                          Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ,
                          երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և հումորի
                          ավելացման արդյունքում:
                        </div>
                      </div>
                    </div>
                    <StarsRating readOnly />
                  </div>
                  <Checkbox variant="primary_filled" />
                </div>

                <div className={styles.bank__row}>
                  <div className={styles.bank__left}>
                    <div className={styles.bank__name}>
                      Ակբաբանկ
                      <div className={styles.bank__info}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.9974 13.3307V9.9974M9.9974 6.66406H10.0057M18.3307 9.9974C18.3307 14.5998 14.5998 18.3307 9.9974 18.3307C5.39502 18.3307 1.66406 14.5998 1.66406 9.9974C1.66406 5.39502 5.39502 1.66406 9.9974 1.66406C14.5998 1.66406 18.3307 5.39502 18.3307 9.9974Z"
                            stroke="#A1A1A1"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className={styles.bank__tooltip}>
                          Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ,
                          երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և հումորի
                          ավելացման արդյունքում:
                        </div>
                      </div>
                    </div>
                    <StarsRating readOnly />
                  </div>
                  <Checkbox variant="primary_filled" />
                </div>
              </div>

              <div className={styles.panel}>
                <div className={styles.panel__header}>
                  <Checkbox variant="primary_filled" />
                  <div className={styles.panel__text}>
                    Հարցման <span onClick={() => setShowTextModal(true)}>համաձայնագրի</span>{" "}
                    ստորագրում
                  </div>
                </div>
                <div className={styles.panel__btns}>
                  <PrimaryButton buttonStyle="outline" className={styles.panel__btn}>
                    Դիտել պատվերը
                  </PrimaryButton>
                  <PrimaryButton
                    className={styles.panel__btn}
                    onClick={() => setStep((old) => old + 1)}
                  >
                    պատվիրել
                  </PrimaryButton>
                </div>
              </div>

              <Modal
                isActive={showTextModal}
                setIsActive={setShowTextModal}
                className={styles.panel__modal}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nisi quibusdam optio
                molestiae perferendis perspiciatis eum impedit, voluptatibus tempore provident.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nisi quibusdam optio
                molestiae perferendis perspiciatis eum impedit, voluptatibus tempore provident.
              </Modal>
            </div>
          </div>
        </>
      )}
    </DefaultLayout>
  );
}

export default CheckoutPage;
