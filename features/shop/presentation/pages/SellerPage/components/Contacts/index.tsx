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
          {phone.type === "email" && (
            <a href="mailto:someone@example.com" className={styles.contacts_phone}>
              <Mail />
              <span>{phone.value}</span>
            </a>
          )}
          {phone.type === "phone" && (
            <a href="tel:123-456-7890" className={styles.contacts_phone}>
              <Phone />
              <span>{phone.value}</span>
            </a>
          )}
          {phone.type === "viber" && (
            <a href="viber://chat/?number=%2B37412345676" className={styles.contacts_phone}>
              <Viber />
              <span>{phone.value}</span>
            </a>
          )}
          {phone.type === "whatsapp" && (
            <a href="viber://chat/?number=%2B37412345676" className={styles.contacts_phone}>
              <WhatsApp />
              <span>{phone.value}</span>
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default Contacts;
