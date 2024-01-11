import React, { HTMLAttributes } from "react";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Contact } from "@features/shop/presentation/store/aboutSellerPageSlice";
import styles from "./contacts.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  contacts: Contact[];
}

const {
  Icons: { Phone, Mail },
  Logos: { Viber, WhatsApp }
} = ImgExporter;

function Contacts(props: Props) {
  const { contacts } = props;
  return (
    <div {...props}>
      {contacts?.map((phone, i) => (
        <div key={`${phone.value}_${i}`} className={styles.contacts_phone}>
          {phone.type === "email" && <Mail />}
          {phone.type === "phone" && <Phone />}
          {phone.type === "viber" && <Viber />}
          {phone.type === "whatsapp" && <WhatsApp />}
          <span>{phone.value}</span>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
