import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./login-second-step.module.scss";
import LoginThirdStep from "../LoginThirdStep";
import LoginSellerStep from "../LoginSeller";
import DefaultLayout from "@core/layouts/default";
import PrimaryButton from "@core/button/primary";

function LoginSecondStep() {
  const { t } = useTranslation(["account/auth"]);

  const { Icons } = ImgExporter;

  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [showLoginAs, setShowLoginAs] = useState(true);

  const handleItemClick = (item: string | null) => {
    setActiveItem(item);
  };

  const handleButtonClick = () => {
    setShowLoginAs(false);
    activeItem === "buyer" ? <LoginSellerStep /> : <LoginThirdStep />;
  };

  return (
    <DefaultLayout>
      {showLoginAs && (
        <>
          <div className={styles.loginAs}>
            <div
              className={`${styles.loginAs__link} ${
                activeItem === "buyer" ? styles.loginAs__link_active : styles.loginAs__link_active1
              }`}
              onClick={() => handleItemClick("buyer")}
            >
              <Icons.buyer className={styles.loginAs__link_icon} />
              <h3 className={styles.loginAs__link_title}>{t("buyer")}</h3>
              <div className={styles.activeCircle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  {activeItem === "buyer" ? (
                    <>
                      <path
                        d="M25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25C19.6274 25 25 19.6274 25 13Z"
                        stroke="#2463BF"
                      />
                      <path
                        d="M13 6.5C16.5899 6.5 19.5 9.41015 19.5 13C19.5 16.5899 16.5899 19.5 13 19.5C9.41015 19.5 6.5 16.5899 6.5 13C6.5 9.41015 9.41015 6.5 13 6.5Z"
                        fill="#2463BF"
                        stroke="#2463BF"
                      />
                    </>
                  ) : (
                    <path
                      d="M25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25C19.6274 25 25 19.6274 25 13Z"
                      stroke="#9D9D9D"
                    />
                  )}
                </svg>
              </div>
            </div>

            <div
              className={`${styles.loginAs__link} ${
                activeItem === "seller" ? styles.loginAs__link_active : styles.loginAs__link_active1
              }`}
              onClick={() => handleItemClick("seller")}
            >
              <Icons.seller className={styles.loginAs__link_icon} />
              <h3 className={styles.loginAs__link_title}>{t("seller")}</h3>
              <div className={styles.activeCircle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  {activeItem === "seller" ? (
                    <>
                      <path
                        d="M25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25C19.6274 25 25 19.6274 25 13Z"
                        stroke="#2463BF"
                      />
                      <path
                        d="M13 6.5C16.5899 6.5 19.5 9.41015 19.5 13C19.5 16.5899 16.5899 19.5 13 19.5C9.41015 19.5 6.5 16.5899 6.5 13C6.5 9.41015 9.41015 6.5 13 6.5Z"
                        fill="#2463BF"
                        stroke="#2463BF"
                      />
                    </>
                  ) : (
                    <path
                      d="M25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25C19.6274 25 25 19.6274 25 13Z"
                      stroke="#9D9D9D"
                    />
                  )}
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.btn_box}>
            <PrimaryButton onClick={handleButtonClick}>
              Continue
            </PrimaryButton>
          </div>
        </>
      )}
      {activeItem === "buyer" && !showLoginAs && <LoginThirdStep />}
      {activeItem === "seller" && !showLoginAs && <LoginSellerStep />}
    </DefaultLayout>
  );
}

export default LoginSecondStep;
