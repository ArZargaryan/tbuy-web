import React from "react";

import styles from "./choose_my_address.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";

const { Icons } = ImgExporter;

function ChooseMyAddress() {
  return (
    <div className={styles.choose_address}>
      <div className={styles.choose_address__list}>
        <div className={styles.list__item}>
          <Checkbox variant={"circle"} label={"Կոտայք, Հրազդան, Կենտրոն թաղամաս 23"} />
        </div>
      </div>
      <div className={styles.add_more}>
        <Checkbox
          variant={"circle"}
          label={
            <>
              <Icons.Home className={styles.add_more__home_icon} /> <span>Ավելացնել նոր հասցե</span>
            </>
          }
        />
      </div>
    </div>
  );
}

export default ChooseMyAddress;
