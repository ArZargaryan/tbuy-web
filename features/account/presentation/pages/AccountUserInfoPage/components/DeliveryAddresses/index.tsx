import React from "react";
import styles from "../../user-info.module.scss";
import classNames from "classnames";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { useAppSelector } from "@core/store";
import { map } from "lodash";
import AddAddressModal from "@features/account/presentation/pages/AccountUserInfoPage/components/AddAddressModal";
import { useModal } from "@core/hooks/useModal";
import PrimaryButton from "@core/button/primary";

const { Icons } = ImgExporter;

function DeliveryAddresses() {
  const { addresses } = useAppSelector((state) => state.account_user_info);

  const cls = classNames(styles.info_block, styles.delivery_addresses);

  const [openModal, changeModalVisibility] = useModal(false);

  return (
    <>
      <div className={cls}>
        <h1 className={`title title_account ${styles.block__title}`}>Հասցեագիրք</h1>
        <button className={styles.delivery_addresses__add_new_btn} onClick={changeModalVisibility}>
          <Icons.Plus /> ԱՎԵԼԱՑՆԵԼ ՆՈՐ ՀԱՍՑԵ
        </button>

        {map(addresses, ({ address, city, isDefault, region }) => (
          <div className={styles.delivery_addresses__item}>
            <div className={styles.item__row}>
              <div className={`${styles.item__col} ${styles.item__col_bold}`}>Մարզ</div>
              <div className={styles.item__col}>{region}</div>
            </div>
            <div className={styles.item__row}>
              <div className={`${styles.item__col} ${styles.item__col_bold}`}>Քաղաք</div>
              <div className={styles.item__col}>{city}</div>
            </div>
            <div className={styles.item__row}>
              <div className={`${styles.item__col} ${styles.item__col_bold}`}>Հասցե</div>
              <div className={styles.item__col}>{address}</div>
            </div>
            {isDefault && (
              <p className={styles.default_text}>This is your default delivery address</p>
            )}
          </div>
        ))}

        <div className={styles.block__actions}>
          <PrimaryButton>ՓՈՓՈԽԵԼ</PrimaryButton>
          <PrimaryButton buttonStyle="outline">ՋՆՋԵԼ</PrimaryButton>
        </div>
      </div>
      <AddAddressModal open={openModal} onClose={changeModalVisibility} />
    </>
  );
}

export default DeliveryAddresses;
