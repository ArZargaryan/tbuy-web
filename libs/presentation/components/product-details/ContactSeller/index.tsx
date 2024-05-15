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
              width="20.5"
              height="20.5"
              viewBox="0 0 20.5 20.5"
            >
              <path
                id="Объединение_50"
                data-name="Объединение 50"
                d="M-3110.353,11863.457a.561.561,0,0,1-.334-.517v-3.132a4.794,4.794,0,0,1-3.008-1.569,5.121,5.121,0,0,1-1.306-3.449l.01-6.721a5.166,5.166,0,0,1,1.421-3.579,4.72,4.72,0,0,1,3.439-1.489h10.783a4.706,4.706,0,0,1,3.434,1.489,5.155,5.155,0,0,1,1.413,3.584v6.716a4.972,4.972,0,0,1-4.857,5.07h-6.255l-4.149,3.482a.541.541,0,0,1-.381.158A.5.5,0,0,1-3110.353,11863.457Zm-3.549-15.383-.01,6.718a4,4,0,0,0,1.159,2.863,3.664,3.664,0,0,0,2.609,1.089.555.555,0,0,1,.546.558v2.355l3.392-2.756a.537.537,0,0,1,.376-.157h6.472a3.87,3.87,0,0,0,3.771-3.954v-6.716a3.822,3.822,0,0,0-3.761-3.957h-10.783A3.83,3.83,0,0,0-3113.9,11848.074Zm11.284,3.358a1.239,1.239,0,0,1,1.214-1.257,1.237,1.237,0,0,1,1.214,1.257,1.236,1.236,0,0,1-1.214,1.256A1.238,1.238,0,0,1-3102.617,11851.433Zm-3.347,0a1.238,1.238,0,0,1,1.214-1.257,1.183,1.183,0,0,1,.86.372,1.266,1.266,0,0,1,.354.885,1.236,1.236,0,0,1-1.214,1.256A1.238,1.238,0,0,1-3105.964,11851.433Zm-3.347,0a1.238,1.238,0,0,1,1.214-1.257,1.182,1.182,0,0,1,.86.372,1.268,1.268,0,0,1,.354.885,1.236,1.236,0,0,1-1.214,1.256A1.238,1.238,0,0,1-3109.311,11851.433Z"
                transform="translate(3115.001 -11843.001)"
                fill="$red-1"
              />
            </svg>
            {/*<span>ԳՐԵԼ</span>*/}
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
              width="20"
              height="20"
              viewBox="0 0 20 20"
              style={{ transform: "rotate(-90deg)" }}
            >
              <path
                id="Контур_18"
                data-name="Контур 18"
                d="M20.492,2.168c-.05-.045-.155-.121-.227-.172A9.062,9.062,0,0,0,15.018,0c-3.242.144-7.552,4.347-8.8,5.632s-5.293,5.721-5.2,8.835a5.069,5.069,0,0,0,.338,1.635,10.635,10.635,0,0,0,2.1,3.231s.143.161.211.223a1.959,1.959,0,0,0,.785.379,1.92,1.92,0,0,0,.5.061,2.079,2.079,0,0,0,.665-.1,1.951,1.951,0,0,0,.749-.43c.12-.124,2.41-2.932,2.423-2.95l.015-.021a1.927,1.927,0,0,0,.283-.473A1.813,1.813,0,0,0,9.1,14.7,1.783,1.783,0,0,0,8.615,14L7.54,13.033a.933.933,0,0,1-.221-.318.823.823,0,0,1-.016-.134l6.265-6.475a.121.121,0,0,1,.041-.028l.025.009A2.32,2.32,0,0,1,14,6.362l1.076.955a2.007,2.007,0,0,0,2.131.309,2.311,2.311,0,0,0,.513-.344l.049-.038c.022-.019,2.723-2.382,2.824-2.488a1.9,1.9,0,0,0,.421-1.265,1.834,1.834,0,0,0-.238-.975A1.74,1.74,0,0,0,20.492,2.168Zm-.777,1.783c-.14.132-2.593,2.284-2.721,2.4l-.1.079a1.06,1.06,0,0,1-.22.152.731.731,0,0,1-.775-.116l-1.077-.956a2.985,2.985,0,0,0-.715-.492,1.258,1.258,0,0,0-1.425.294L6.354,11.85a1.157,1.157,0,0,0-.228,1.076,1.965,1.965,0,0,0,.586.959l1.077.966a.626.626,0,0,1,.166.246.7.7,0,0,1-.008.5.8.8,0,0,1-.121.195.728.728,0,0,0-.045.061c-.217.269-2.192,2.683-2.307,2.814a1.057,1.057,0,0,1-.291.138.862.862,0,0,1-.24.029.655.655,0,0,1-.158-.015,1.252,1.252,0,0,1-.294-.111c-.039-.038-.107-.116-.118-.129A9.515,9.515,0,0,1,2.5,15.713a3.946,3.946,0,0,1-.267-1.271C2.169,12.315,4.822,8.8,7.111,6.43s5.748-5.164,7.963-5.262a7.8,7.8,0,0,1,4.449,1.747l.044.031c.026.018.074.051.1.068a.732.732,0,0,1,.079.107.814.814,0,0,1,.061.312A1.687,1.687,0,0,1,19.715,3.951Z"
                transform="translate(-1.015 0)"
                fill="$red-1"
              />
            </svg>
            {/*<span>ԶԱՆԳԵԼ</span>*/}
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
