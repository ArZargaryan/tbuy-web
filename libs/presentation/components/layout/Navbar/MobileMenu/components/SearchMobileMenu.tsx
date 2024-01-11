import React from "react";
import styles from "@libs/presentation/components/layout/Navbar/navbar.module.scss";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { ImgExporter } from "@core/helpers/ImgExporter";

type Props = {
  defaultValue?: string;
};

const { Icons } = ImgExporter;

export function SearchMobileMenu(props: Props) {
  const { t } = useTranslation(["layout/navbar", "common"]);
  const { defaultValue } = props;
  const { register, handleSubmit, control } = useForm();

  const submitHandler = () => {};

  return (
    <div className={styles.mobile_menu}>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.navbar__search}>
        <TextInput
          control={control}
          {...register("search")}
          inputProps={{
            placeholder: `${t("search", { ns: "common" })}`
          }}
          className={styles.navbar__search_area_inp}
          icon={<Icons.Search />}
          defaultValue={defaultValue || ""}
        />
      </form>
    </div>
  );
}
