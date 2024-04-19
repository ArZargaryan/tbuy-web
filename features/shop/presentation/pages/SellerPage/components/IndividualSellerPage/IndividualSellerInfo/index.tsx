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
      <div className={styles.body}>
        <div className={styles.avatar}>
          <img src={originalImage} />
        </div>
        <h3 className={`${styles.userName} title title_account`}>Arman Sahakyan</h3>
        <Contacts contacts={contacts} className={styles.contacts} />
        <div className={styles.social_links}>
          <a href="">
            <Logos.instagram />
          </a>
          <a href="">
            <Logos.facebook />
          </a>
          <a href="">
            <Logos.telegram />
          </a>
        </div>
        <StarsRating className={styles.stars} defaultValue={rating} readOnly />

        <PrimaryButton className={styles.button_followers}>
          Հետեվեl{" "}
          <span>
            <Followers /> 236
          </span>
        </PrimaryButton>

        <div className={styles.white_buttons}>
          <PrimaryButton
            className={styles.button_chat}
            buttonStyle="outline"
            onClick={changeMessageModal}
          >
            <Chat />
            <span>ԳՐԵԼ ՎԱՃԱՌՈՂԻՆ</span>
          </PrimaryButton>
          <PrimaryButton className={styles.button_empty}>ԲՈՂՈՔԵԼ</PrimaryButton>
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
