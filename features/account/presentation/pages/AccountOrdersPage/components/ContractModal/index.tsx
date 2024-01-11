import React, { MouseEventHandler } from "react";
import styles from "./contract-modal.module.scss";
import Modal from "@libs/presentation/components/elements/Modal";
import { ModalProps } from "@mui/material";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import FormError from "@libs/presentation/components/form/FormError";
import { useModal } from "@core/hooks/useModal";
import ModalWithButtons from "@libs/presentation/components/modals/ModalWithButtons";
import PrimaryButton from "@core/button/primary";

type Props = Omit<ModalProps, "children">;

function ContractModal(props: Props) {
  const {
    control,
    register,
    formState: { errors },
    // setError,
    // resetField,
    handleSubmit
  } = useForm();

  const { t } = useTranslation(["common"]);
  const [confirmModal, changeConfirmModal] = useModal(false);
  const [confirmCancelationModal, changeConfirmCancelationModal] = useModal(false);

  const submitHandler = (data: FieldValues) => {
    console.log(data);
    changeConfirmModal();
  };

  const successAgreed: MouseEventHandler<HTMLButtonElement> = (e) => {
    changeConfirmModal();
    if (props?.onClose) {
      props?.onClose(e, "backdropClick");
    }
  };

  const successCancelationAgreed: MouseEventHandler<HTMLButtonElement> = (e) => {
    changeConfirmCancelationModal();
    changeConfirmModal();
    if (props?.onClose) {
      props?.onClose(e, "backdropClick");
    }
  };

  return (
    <>
      <Modal {...props} contentClassName={styles.modal} withCloseBtn>
        <div className="modal-content">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="title modal-content__title">ՊԱՅՄԱՆԱԳԻՐ</div>
            <div className={styles.modal_text}>
              <p className="modal-content__text px">
                Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային
                տեքստ է: Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական
                արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր
                տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է: Այս տեքստը ոչ միայն
                կարողացել է գոյատևել հինգ դարաշրջան, այլև ներառվել է էլեկտրոնային տպագրության մեջ`
                մնալով էապես անփոփոխ: Այն հայտնի է դարձել 1960-ականներին Lorem Ipsum բովանդակող
                Letraset էջերի թողարկման արդյունքում, իսկ ավելի ուշ համակարգչային տպագրության
                այնպիսի ծրագրերի թողարկման հետևանքով, ինչպիսին է Aldus PageMaker-ը, որը ներառում է
                Lorem Ipsum-ի տարատեսակներ:
              </p>
              <p className="modal-content__text px">
                Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի
                ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը
                քիչ թե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն»
                սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է:
              </p>
              <p className="modal-content__text px">
                Շատ համակարգչային տպագրական ծրագրեր և ինտերնետային էջերի խմբագրիչներ այն օգտագործում
                են որպես իրենց ստանդարտ տեքստային մոդել, և հետևապես, ինտերնետում Lorem Ipsum-ի
                որոնման արդյունքում կարելի է հայտնաբերել էջեր, որոնք դեռ նոր են կերտվում: Ժամանակի
                ընթացքում ձևավորվել են Lorem Ipsum-ի տարբեր վերսիաներ` երբեմն ներառելով պատահական
                տեքստեր, երբեմն էլ հատուկ իմաստ (հումոր և նմանատիպ բովանդակություն):
              </p>
              <div className="modal-content__subtitle px">Որտեղի՞ց վերցնել նման տեքստ</div>
              <p className="modal-content__text px">
                Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ, երբեմն
                նույնիսկ լատիներենից շատ հեռու և անհավանական բառերի և հումորի ավելացման արդյունքում:
                Եթե ուզում եք օգտագործել Lorem Ipsum, ապա երևի չեք ցանկանա, որ այն պարունակի ինչ-որ
                թաքնված հումոր տեքստի միջնամասում
              </p>
            </div>

            <div className={`${styles.checkbox}`}>
              <Checkbox
                variant={"secondary_outlined"}
                control={control}
                {...register("agree", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                label={"Համաձայն եմ պայմաններին"}
              />

              <FormError errors={errors} name={"agree"} />
            </div>

            <div className="modal-content__button-container">
              <PrimaryButton className={`${styles.submit_btn}`}>ՀԱՍՏԱՏԵԼ</PrimaryButton>
            </div>
          </form>
        </div>
      </Modal>

      <ModalWithButtons
        title={"ՀԱՍՏԱՏՈՒՄ"}
        text={"Հաստատել կոճակը սեղմելով դուք հաստատում եք ապրանքի ստացումը։"}
        footer={
          <>
            <button className={"blue_btn"} onClick={successAgreed}>
              ՀԱՍՏԱՏԵԼ
            </button>
            <button className={"outlined_btn"} onClick={changeConfirmCancelationModal}>
              ՉԵՂԱՐԿԵԼ
            </button>
          </>
        }
        open={confirmModal}
        onClose={changeConfirmModal}
      />

      <ModalWithButtons
        title={"ՉԵՂԱՐԿՈՒՄ"}
        text={"Հաստատել կոճակը սեղմելով դուք հաստատում եք ապրանքի ստացումը։"}
        footer={
          <>
            <button className={"blue_btn"} onClick={successCancelationAgreed}>
              ՀԱՍՏԱՏԵԼ
            </button>
            <button className={"outlined_btn"} onClick={changeConfirmCancelationModal}>
              ՀԵՏ
            </button>
          </>
        }
        open={confirmCancelationModal}
        onClose={changeConfirmCancelationModal}
      />
    </>
  );
}

export default ContractModal;
