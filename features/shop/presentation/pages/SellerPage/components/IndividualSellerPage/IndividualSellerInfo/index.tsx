import React from "react";
import { Rating } from "@libs/domain/model/rating";
import styles from "./individual-seller-info.module.scss";
import { Contact } from "@features/shop/presentation/store/aboutSellerPageSlice";
import Contacts from "@features/shop/presentation/pages/SellerPage/components/Contacts";
import StarsRating from "@libs/presentation/components/elements/StarsRating";
import { ImgExporter } from "@core/helpers/ImgExporter";
import MessageModal from "@libs/presentation/components/modals/MessageModal";
import { useModal } from "@core/hooks/useModal";
import PrimaryButton from "@core/button/primary";

interface Props {
  info: {
    originalImage?: string;
    sellerType: "legal" | "individual";
    fullName: string;
    email: string;
    contacts: Contact[];
    rating: Rating;
  };
}

const {
  Icons: { Followers, Chat },
  Logos
} = ImgExporter;

function IndividualSellerInfo(props: Props) {
  const {
    info: { originalImage, fullName, contacts, rating }
  } = props;

  const [openMessageModal, changeMessageModal] = useModal(false);

  return (
    <div className={styles.individual}>
      <div className={styles.individual__content}>
        <div className={styles.content__image_container}>
          <div
            className={styles.content__image}
            style={{ backgroundImage: `url(${originalImage})` }}
          ></div>
        </div>

        <div className={styles.content__contacts}>
          <h3 className={styles.contacts__title}>{fullName}</h3>

          <Contacts contacts={contacts} className={styles.contacts__info} />

          <div className={`${styles.actions__btns} ${styles.actions__btns_mobile}`}>
            <PrimaryButton buttonStyle="outline" className={`${styles.chat_btn}`}>
              <Chat />
              <span>ԳՐԵԼ ՎԱՃԱՌՈՂԻՆ</span>
            </PrimaryButton>
            <PrimaryButton className={`${styles.report_btn}`}>ԲՈՂՈՔԵԼ</PrimaryButton>
          </div>

          <div className={styles.socials}>
            <Logos.instagram />
            <Logos.facebook />
            <Logos.telegram />
          </div>
        </div>

        <div className={styles.content__actions}>
          <h3 className={`${styles.contacts__title} ${styles.contacts__title_mobile}`}>
            {fullName}
          </h3>
          <StarsRating className={styles.contacts__rating} defaultValue={rating} readOnly />

          <div className={styles.socials}>
            <Logos.instagram />
            <Logos.facebook />
            <Logos.telegram />
          </div>

          <div className={styles.actions__btns}>
            <PrimaryButton
              buttonStyle="outline"
              className={`${styles.chat_btn}`}
              onClick={changeMessageModal}
            >
              <Chat />
              ԳՐԵԼ ՎԱՃԱՌՈՂԻՆ
            </PrimaryButton>
            <PrimaryButton buttonStyle="outline">ԲՈՂՈՔԵԼ</PrimaryButton>
          </div>

          <PrimaryButton className={`${styles.subscribe_btn}`}>
            Հետեվեl{" "}
            <span className={styles.subscribe_btn__followers}>
              <Followers /> 236
            </span>
          </PrimaryButton>
        </div>
      </div>
      <MessageModal
        recipient={{ name: fullName }}
        open={openMessageModal}
        onClose={changeMessageModal}
      />
    </div>
  );
}

export default IndividualSellerInfo;
