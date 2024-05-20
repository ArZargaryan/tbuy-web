import React, { useState } from "react";
import { Avatar } from "@mui/material";
import StarsRating from "@libs/presentation/components/elements/StarsRating";
import { Company } from "@features/shop/domain/model/DetailedProduct";
import styles from "./contact-seller.module.scss";
import { useModal } from "@core/hooks/useModal";
import MessageModal from "@libs/presentation/components/modals/MessageModal";
import Link from "next/link";
import router from "next/router";
import PhoneModal from "../../modals/PhoneModal";

interface Props {
  methods: {
    chat: boolean;
    call: boolean;
  };
  company: Company;
  link: string;
}

function ContactSeller({ company, methods, link }: Props) {
  const [messageModalOpen, changeMessageModalOpen] = useModal(false);
  const [phoneModalIsActive, setPhoneModalIsActive] = useState(false);

  if (!company) return <div></div>;

  const handleClickMessageButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    changeMessageModalOpen();
  };

  return (
    <div onClick={() => router.push(link)} className={styles.seller}>
      <div className={styles.seller__details}>
        {/* AVATAR */}
        <Avatar src={company?.images?.smallLogo} className={styles.seller_avatar} />
        {/* SELLER INFO */}
        <div className={styles.seller_info}>
          <p className={styles.seller_name}>{company.name}</p>
          <p className={styles.seller_group}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clipPath="url(#clip0_337_55396)">
                <path
                  d="M6.87187 8.1525C6.79687 8.145 6.70687 8.145 6.62437 8.1525C4.83937 8.0925 3.42188 6.63 3.42188 4.83C3.42187 2.9925 4.90687 1.5 6.75187 1.5C8.58937 1.5 10.0819 2.9925 10.0819 4.83C10.0744 6.63 8.65687 8.0925 6.87187 8.1525Z"
                  stroke="#6B718D"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.3084 3C13.7634 3 14.9334 4.1775 14.9334 5.625C14.9334 7.0425 13.8084 8.1975 12.4059 8.25C12.3459 8.2425 12.2784 8.2425 12.2109 8.25"
                  stroke="#6B718D"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.11906 10.92C1.30406 12.135 1.30406 14.115 3.11906 15.3225C5.18156 16.7025 8.56406 16.7025 10.6266 15.3225C12.4416 14.1075 12.4416 12.1275 10.6266 10.92C8.57156 9.5475 5.18906 9.5475 3.11906 10.92Z"
                  stroke="#6B718D"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.7539 15C14.2939 14.8875 14.8039 14.67 15.2239 14.3475C16.3939 13.47 16.3939 12.0225 15.2239 11.145C14.8114 10.83 14.3089 10.62 13.7764 10.5"
                  stroke="#6B718D"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_337_55396">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            124
            <span> հետևորդ</span>
          </p>

          <div className={styles.seller_rating}>
            <StarsRating value={company.rating} readOnly color="var(--yellow)" />
          </div>
        </div>

        <div onClick={(e) => e.stopPropagation()}>
          <PhoneModal isActive={phoneModalIsActive} setIsActive={setPhoneModalIsActive} />
        </div>
      </div>

      <div className={styles.seller__contact_actions}>
        {methods.chat && (
          <button onClick={(e) => handleClickMessageButton(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                stroke="#6E00E5"
                stroke-width="1.6"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.9961 11H16.0051"
                stroke="#6E00E5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9945 11H12.0035"
                stroke="#6E00E5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.99451 11H8.00349"
                stroke="#6E00E5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>ԳՐԵԼ</span>
          </button>
        )}
        {methods.call && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPhoneModalIsActive(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                stroke="#6E00E5"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
            <span>ԶԱՆԳԵԼ</span>
          </button>
        )}
      </div>

      <MessageModal
        open={messageModalOpen}
        onClose={changeMessageModalOpen}
        recipient={{
          name: company?.name
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default ContactSeller;
