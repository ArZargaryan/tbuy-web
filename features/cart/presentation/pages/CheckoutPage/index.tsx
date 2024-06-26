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
import CheckoutDocument from "./Document";
import DownloadAppModal from "@libs/presentation/components/modals/DownloadAppModal";

// TODO: temporary property
interface Props {
  loggedIn?: boolean;
}

function CheckoutPage(props: Props) {
  const { similar_products } = useAppSelector((state) => state.cart);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showTextModal, setShowTextModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [step, setStep] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  const [selectedBank, setSelectedBank] = useState<any>();

  const [selectedDocument, setSelectedDocument] = useState<null | number>(null);
  const [documents, setDocuments] = useState([false, false, false]);
  const [allDocumentIsComplete, setAllDocumentIsComplete] = useState(false);

  const banks = [
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000"
    },
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000"
    },
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000"
    },
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000",
      disabled: true
    },
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000"
    },
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000"
    },
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000"
    },
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000"
    },
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000"
    },
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000"
    },
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000"
    },
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000"
    },
    {
      id: 1,
      annual_nominal: 24,
      annual_actual: 24,
      monthly: "0",
      approved_amount: "250.000",
      initial_payment: "0",
      first_payment: "15.18.2023",
      loan_term: "36 ամիս",
      full_repayment_amount: "-",
      monthly_payment: "25.000"
    }
  ];

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

  function changeDocumentsState(id: number) {
    const arr = [...documents];
    arr[id] = true;
    setDocuments(arr);

    const isFalse = arr.find((el) => el === false);

    if (isFalse === false) {
      setAllDocumentIsComplete(false);
    } else setAllDocumentIsComplete(true);
  }

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

      {step >= 1 && (
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
              {step === 1 && (
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
                            Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են
                            տարաբնույթ, երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և
                            հումորի ավելացման արդյունքում:
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
                            Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են
                            տարաբնույթ, երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և
                            հումորի ավելացման արդյունքում:
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
                            Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են
                            տարաբնույթ, երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և
                            հումորի ավելացման արդյունքում:
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
                            Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են
                            տարաբնույթ, երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և
                            հումորի ավելացման արդյունքում:
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
                            Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են
                            տարաբնույթ, երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և
                            հումորի ավելացման արդյունքում:
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
                            Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են
                            տարաբնույթ, երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և
                            հումորի ավելացման արդյունքում:
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
                            Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են
                            տարաբնույթ, երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և
                            հումորի ավելացման արդյունքում:
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
                            Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են
                            տարաբնույթ, երբեմն նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և
                            հումորի ավելացման արդյունքում:
                          </div>
                        </div>
                      </div>
                      <StarsRating readOnly />
                    </div>
                    <Checkbox variant="primary_filled" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className={styles.bank_info}>
                  <div className={styles.bank_info__left}>
                    <div
                      className={
                        showFullText
                          ? `${styles.bank_info__column} ${styles.bank_info__column_full}`
                          : styles.bank_info__column
                      }
                    >
                      <button
                        className={`${styles.bank_info__cell} ${styles.bank_info__cell_head}`}
                        onClick={() => setShowFullText((old) => !old)}
                      >
                        {showFullText ? (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 4.5L4 7.5M7 4.5L4 1.5M7 4.5L1 4.5"
                              stroke="#1D1D1D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11 4.5L14 7.5M11 4.5L14 1.5M11 4.5L17 4.5"
                              stroke="#1D1D1D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1 12.5C12.8857 12.5 16.619 12.5 17 12.5"
                              stroke="#1D1D1D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                            <path
                              d="M1 16.5C12.8857 16.5 16.619 16.5 17 16.5"
                              stroke="#1D1D1D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 4.5L1 4.5M17 4.5L14 7.5M17 4.5L14 1.5M1 4.5L4 7.5M1 4.5L4 1.5"
                              stroke="#1D1D1D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1 12.5C12.8857 12.5 16.619 12.5 17 12.5"
                              stroke="#1D1D1D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                            <path
                              d="M1 16.5C12.8857 16.5 16.619 16.5 17 16.5"
                              stroke="#1D1D1D"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        )}
                      </button>
                      <div className={styles.bank_info__cell}>
                        {showFullText ? (
                          <span className={styles.bank_info__full}>Տարեկան անվանական %</span>
                        ) : (
                          <span className={styles.bank_info__short}>Անվ. %</span>
                        )}
                      </div>

                      <div className={styles.bank_info__cell}>
                        {showFullText ? (
                          <span className={styles.bank_info__full}>Տարեկան փաստացի %</span>
                        ) : (
                          <span className={styles.bank_info__short}>Փաստ. %</span>
                        )}
                      </div>

                      <div className={styles.bank_info__cell}>
                        {showFullText ? (
                          <span className={styles.bank_info__full}>Ամսական սպա- սարկման վճար</span>
                        ) : (
                          <span className={styles.bank_info__short}>Սպաս. վճար</span>
                        )}
                      </div>

                      <div className={styles.bank_info__cell}>
                        {showFullText ? (
                          <span className={styles.bank_info__full}>Հաստատված գումար</span>
                        ) : (
                          <span className={styles.bank_info__short}>Հաստ. գումար</span>
                        )}
                      </div>

                      <div className={styles.bank_info__cell}>
                        {showFullText ? (
                          <span className={styles.bank_info__full}>Կանխավճար</span>
                        ) : (
                          <span className={styles.bank_info__short}>Կանխ. վճար</span>
                        )}
                      </div>

                      <div className={styles.bank_info__cell}>
                        {showFullText ? (
                          <span className={styles.bank_info__full}>1-ին վճարում</span>
                        ) : (
                          <span className={styles.bank_info__short}>1-ին. վճար.</span>
                        )}
                      </div>

                      <div className={styles.bank_info__cell}>
                        {showFullText ? (
                          <span className={styles.bank_info__full}>Վարկի ժամկետը</span>
                        ) : (
                          <span className={styles.bank_info__short}>Վարկ ժամկ.</span>
                        )}
                      </div>

                      <div className={styles.bank_info__cell}>
                        {showFullText ? (
                          <span className={styles.bank_info__full}>Մարման ընդհա-նուր գումար</span>
                        ) : (
                          <span className={styles.bank_info__short}>Ընդ. գումար</span>
                        )}
                      </div>

                      <div className={styles.bank_info__cell}>
                        {showFullText ? (
                          <span className={styles.bank_info__full}>Ամսական վճարում</span>
                        ) : (
                          <span className={styles.bank_info__short}>Ամս. վճար</span>
                        )}
                      </div>

                      <div className={styles.bank_info__cell}></div>
                    </div>
                  </div>
                  <div className={styles.bank_info__body}>
                    {banks.map((bank, id) => (
                      <div key={id} className={styles.bank_info__column}>
                        <div className={`${styles.bank_info__cell} ${styles.bank_info__cell_head}`}>
                          Ակբա.
                        </div>

                        <div className={styles.bank_info__cell}>{bank.annual_nominal} %</div>

                        <div className={styles.bank_info__cell}>{bank.annual_actual} %</div>

                        <div className={styles.bank_info__cell}>{bank.monthly}</div>

                        <div className={styles.bank_info__cell}>{bank.approved_amount}</div>

                        <div className={styles.bank_info__cell}>{bank.initial_payment}</div>

                        <div className={styles.bank_info__cell}>{bank.first_payment}</div>

                        <div className={styles.bank_info__cell}>{bank.loan_term}</div>

                        <div className={styles.bank_info__cell}>{bank.full_repayment_amount}</div>

                        <div className={styles.bank_info__cell}>{bank.monthly_payment}</div>

                        <div
                          className={`${styles.bank_info__cell} ${styles.bank_info__cell_button}`}
                        >
                          <button
                            disabled={bank.disabled}
                            onClick={() => {
                              setSelectedBank(bank);
                              setStep((old) => old + 1);
                            }}
                          >
                            Ընտրել
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className={styles.selected_bank_container}>
                  <div className={styles.selected_bank}>
                    <div className={styles.selected_bank__header}>Ակբաբանկ</div>
                    <div className={styles.selected_bank__item}>Տարեկան անվանական %</div>
                    <div className={styles.selected_bank__item}>{selectedBank.annual_nominal}</div>

                    <div className={styles.selected_bank__item}>Տարեկան փաստացի %</div>
                    <div className={styles.selected_bank__item}>{selectedBank.annual_actual}</div>

                    <div className={styles.selected_bank__item}>Ամսական սպասարկման</div>
                    <div className={styles.selected_bank__item}>{selectedBank.monthly}</div>

                    <div className={styles.selected_bank__item}>Հաստատված գումար</div>
                    <div className={styles.selected_bank__item}>{selectedBank.approved_amount}</div>

                    <div className={styles.selected_bank__item}>Կանխավճար</div>
                    <div className={styles.selected_bank__item}>{selectedBank.initial_payment}</div>

                    <div className={styles.selected_bank__item}>1-ին վճարում</div>
                    <div className={styles.selected_bank__item}>{selectedBank.first_payment}</div>

                    <div className={styles.selected_bank__item}>Վարկի ժամկետը</div>
                    <div className={styles.selected_bank__item}>{selectedBank.loan_term}</div>

                    <div className={styles.selected_bank__item}>Մարման ընդհանուր գումար</div>
                    <div className={styles.selected_bank__item}>
                      {selectedBank.full_repayment_amount}
                    </div>

                    <div className={styles.selected_bank__item}>Ամսական վճար</div>
                    <div className={styles.selected_bank__item}>{selectedBank.monthly_payment}</div>
                  </div>

                  <div className={`${styles.panel} ${styles.panel_2}`}>
                    <div className={styles.panel__btns}>
                      <PrimaryButton
                        className={styles.panel__btn}
                        onClick={() => setStep((old) => old + 1)}
                      >
                        պատվիրել
                      </PrimaryButton>
                      <PrimaryButton
                        buttonStyle="outline"
                        className={styles.panel__btn}
                        onClick={() => setStep(0)}
                      >
                        Դիտել պատվերը
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className={styles.documents}>
                  <div className={styles.documents__body}>
                    <div
                      className={
                        documents[0]
                          ? `${styles.documents__item} ${styles.documents__item_complete}`
                          : styles.documents__item
                      }
                      onClick={() => {
                        setStep((old) => old + 1);
                        setSelectedDocument(0);
                      }}
                    >
                      Document 1
                      {!documents[0] && (
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="18" cy="18" r="18" fill="#2463BF" />
                          <rect x="8" y="5.60156" width="24" height="24" rx="3" fill="#2463BF" />
                          <path
                            d="M26 14.5427V12.4016C26 10.7214 26 9.88133 25.673 9.23959C25.3854 8.6751 24.9265 8.21616 24.362 7.92854C23.7202 7.60156 22.8802 7.60156 21.2 7.60156H14.8C13.1198 7.60156 12.2798 7.60156 11.638 7.92854C11.0735 8.21616 10.6146 8.6751 10.327 9.23959C10 9.88133 10 10.7214 10 12.4016V22.8016C10 24.4817 10 25.3218 10.327 25.9635C10.6146 26.528 11.0735 26.987 11.638 27.2746C12.2798 27.6016 13.1198 27.6016 14.8 27.6016H20M20 16.6016H14M16 20.6016H14M22 12.6016H14"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22.405 22.9908C22.4403 22.8142 22.458 22.726 22.4903 22.6436C22.5189 22.5706 22.5561 22.5011 22.601 22.4367C22.6516 22.3642 22.7152 22.3005 22.8426 22.1732L27 18.0158C27.5523 17.4635 28.4477 17.4635 29 18.0158C29.5523 18.5681 29.5523 19.4635 29 20.0158L24.8426 24.1732C24.7152 24.3005 24.6516 24.3642 24.579 24.4148C24.5147 24.4597 24.4452 24.4969 24.3721 24.5255C24.2898 24.5578 24.2015 24.5755 24.025 24.6108L22 25.0158L22.405 22.9908Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                      {documents[0] && (
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="18" cy="18" r="18" fill="#09B708" />
                          <rect x="8" y="5.60156" width="24" height="24" rx="3" fill="#09B708" />
                          <path
                            d="M26 14.5427V12.4016C26 10.7214 26 9.88133 25.673 9.23959C25.3854 8.6751 24.9265 8.21616 24.362 7.92854C23.7202 7.60156 22.8802 7.60156 21.2 7.60156H14.8C13.1198 7.60156 12.2798 7.60156 11.638 7.92854C11.0735 8.21616 10.6146 8.6751 10.327 9.23959C10 9.88133 10 10.7214 10 12.4016V22.8016C10 24.4817 10 25.3218 10.327 25.9635C10.6146 26.528 11.0735 26.987 11.638 27.2746C12.2798 27.6016 13.1198 27.6016 14.8 27.6016H20M20 16.6016H14M16 20.6016H14M22 12.6016H14"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21 21.5L23 23.5L27.5 19"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <div
                      className={
                        documents[1]
                          ? `${styles.documents__item} ${styles.documents__item_complete}`
                          : styles.documents__item
                      }
                      onClick={() => {
                        setStep((old) => old + 1);
                        setSelectedDocument(1);
                      }}
                    >
                      Document 2
                      {!documents[1] && (
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="18" cy="18" r="18" fill="#2463BF" />
                          <rect x="8" y="5.60156" width="24" height="24" rx="3" fill="#2463BF" />
                          <path
                            d="M26 14.5427V12.4016C26 10.7214 26 9.88133 25.673 9.23959C25.3854 8.6751 24.9265 8.21616 24.362 7.92854C23.7202 7.60156 22.8802 7.60156 21.2 7.60156H14.8C13.1198 7.60156 12.2798 7.60156 11.638 7.92854C11.0735 8.21616 10.6146 8.6751 10.327 9.23959C10 9.88133 10 10.7214 10 12.4016V22.8016C10 24.4817 10 25.3218 10.327 25.9635C10.6146 26.528 11.0735 26.987 11.638 27.2746C12.2798 27.6016 13.1198 27.6016 14.8 27.6016H20M20 16.6016H14M16 20.6016H14M22 12.6016H14"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22.405 22.9908C22.4403 22.8142 22.458 22.726 22.4903 22.6436C22.5189 22.5706 22.5561 22.5011 22.601 22.4367C22.6516 22.3642 22.7152 22.3005 22.8426 22.1732L27 18.0158C27.5523 17.4635 28.4477 17.4635 29 18.0158C29.5523 18.5681 29.5523 19.4635 29 20.0158L24.8426 24.1732C24.7152 24.3005 24.6516 24.3642 24.579 24.4148C24.5147 24.4597 24.4452 24.4969 24.3721 24.5255C24.2898 24.5578 24.2015 24.5755 24.025 24.6108L22 25.0158L22.405 22.9908Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                      {documents[1] && (
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="18" cy="18" r="18" fill="#09B708" />
                          <rect x="8" y="5.60156" width="24" height="24" rx="3" fill="#09B708" />
                          <path
                            d="M26 14.5427V12.4016C26 10.7214 26 9.88133 25.673 9.23959C25.3854 8.6751 24.9265 8.21616 24.362 7.92854C23.7202 7.60156 22.8802 7.60156 21.2 7.60156H14.8C13.1198 7.60156 12.2798 7.60156 11.638 7.92854C11.0735 8.21616 10.6146 8.6751 10.327 9.23959C10 9.88133 10 10.7214 10 12.4016V22.8016C10 24.4817 10 25.3218 10.327 25.9635C10.6146 26.528 11.0735 26.987 11.638 27.2746C12.2798 27.6016 13.1198 27.6016 14.8 27.6016H20M20 16.6016H14M16 20.6016H14M22 12.6016H14"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21 21.5L23 23.5L27.5 19"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <div
                      className={
                        documents[2]
                          ? `${styles.documents__item} ${styles.documents__item_complete}`
                          : styles.documents__item
                      }
                      onClick={() => {
                        setStep((old) => old + 1);
                        setSelectedDocument(2);
                      }}
                    >
                      Document 3
                      {!documents[2] && (
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="18" cy="18" r="18" fill="#2463BF" />
                          <rect x="8" y="5.60156" width="24" height="24" rx="3" fill="#2463BF" />
                          <path
                            d="M26 14.5427V12.4016C26 10.7214 26 9.88133 25.673 9.23959C25.3854 8.6751 24.9265 8.21616 24.362 7.92854C23.7202 7.60156 22.8802 7.60156 21.2 7.60156H14.8C13.1198 7.60156 12.2798 7.60156 11.638 7.92854C11.0735 8.21616 10.6146 8.6751 10.327 9.23959C10 9.88133 10 10.7214 10 12.4016V22.8016C10 24.4817 10 25.3218 10.327 25.9635C10.6146 26.528 11.0735 26.987 11.638 27.2746C12.2798 27.6016 13.1198 27.6016 14.8 27.6016H20M20 16.6016H14M16 20.6016H14M22 12.6016H14"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22.405 22.9908C22.4403 22.8142 22.458 22.726 22.4903 22.6436C22.5189 22.5706 22.5561 22.5011 22.601 22.4367C22.6516 22.3642 22.7152 22.3005 22.8426 22.1732L27 18.0158C27.5523 17.4635 28.4477 17.4635 29 18.0158C29.5523 18.5681 29.5523 19.4635 29 20.0158L24.8426 24.1732C24.7152 24.3005 24.6516 24.3642 24.579 24.4148C24.5147 24.4597 24.4452 24.4969 24.3721 24.5255C24.2898 24.5578 24.2015 24.5755 24.025 24.6108L22 25.0158L22.405 22.9908Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                      {documents[2] && (
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="18" cy="18" r="18" fill="#09B708" />
                          <rect x="8" y="5.60156" width="24" height="24" rx="3" fill="#09B708" />
                          <path
                            d="M26 14.5427V12.4016C26 10.7214 26 9.88133 25.673 9.23959C25.3854 8.6751 24.9265 8.21616 24.362 7.92854C23.7202 7.60156 22.8802 7.60156 21.2 7.60156H14.8C13.1198 7.60156 12.2798 7.60156 11.638 7.92854C11.0735 8.21616 10.6146 8.6751 10.327 9.23959C10 9.88133 10 10.7214 10 12.4016V22.8016C10 24.4817 10 25.3218 10.327 25.9635C10.6146 26.528 11.0735 26.987 11.638 27.2746C12.2798 27.6016 13.1198 27.6016 14.8 27.6016H20M20 16.6016H14M16 20.6016H14M22 12.6016H14"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21 21.5L23 23.5L27.5 19"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {allDocumentIsComplete && (
                    <PrimaryButton
                      onClick={() => setShowDownloadModal(true)}
                      className={styles.documents__button}
                    >
                      Скачать приложение
                    </PrimaryButton>
                  )}
                </div>
              )}

              {step === 5 &&
                documents.map(
                  (_, id) =>
                    selectedDocument === id && (
                      <CheckoutDocument
                        key={id}
                        idx={id}
                        changeDocumentsState={changeDocumentsState}
                        setStep={setStep}
                      />
                    )
                )}

              {step === 1 && (
                <div className={styles.panel}>
                  <div className={styles.panel__header}>
                    <Checkbox variant="primary_filled" />
                    <div className={styles.panel__text}>
                      Հարցման <span onClick={() => setShowTextModal(true)}>համաձայնագրի</span>{" "}
                      ստորագրում
                    </div>
                  </div>

                  <div className={styles.panel__btns}>
                    <PrimaryButton
                      className={styles.panel__btn}
                      onClick={() => setStep((old) => old + 1)}
                    >
                      պատվիրել
                    </PrimaryButton>
                    <PrimaryButton
                      buttonStyle="outline"
                      className={styles.panel__btn}
                      onClick={() => setStep(0)}
                    >
                      Դիտել պատվերը
                    </PrimaryButton>
                  </div>
                </div>
              )}

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

              <DownloadAppModal
                open={showDownloadModal}
                onClose={() => setShowDownloadModal(false)}
              />
            </div>
          </div>
        </>
      )}
    </DefaultLayout>
  );
}

export default CheckoutPage;
