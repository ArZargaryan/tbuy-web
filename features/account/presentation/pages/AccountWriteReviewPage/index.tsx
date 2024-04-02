import React, { SyntheticEvent } from "react";
import AccountLayout from "@layouts/account-layout";
import styles from "./write_review.module.scss";
import { useAppSelector } from "@core/store";
import { FieldValues, useForm } from "react-hook-form";
import { stars_categories } from "@features/account/presentation/pages/AccountWriteReviewPage/model/stars_categories";
import StarsRating from "@libs/presentation/components/elements/StarsRating";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import { ImgExporter } from "@core/helpers/ImgExporter";
import FileImage from "@libs/presentation/components/elements/FileImage";
import PrimaryButton from "@core/button/primary";

const { Icons } = ImgExporter;

function AccountWriteReviewPage() {
  const { product } = useAppSelector((state) => state.account_write_review);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    getValues,
    watch
  } = useForm();
  const watchFormImages = watch("files");

  const submitHandler = async (data: FieldValues) => {
    try {
      console.log(data);
    } catch (error: unknown) {}
  };

  const changeStarGrade = (name: string, value: number) => setValue(name, value);

  return (
    <AccountLayout contentClassName={`account_content ${styles.write_review}`}>
      <h1 className={"title title_account"}>Թողնել կարծիք</h1>

      <div className={styles.product_info}>
        <img src={product.images[0]?.original} className={styles.product_info__image} alt="" />
        <h3 className={styles.product_info__title}>{product?.title}</h3>
      </div>

      <h2 className={styles.sup_title}>Խնդրում ենք գնահատել</h2>

      <form onSubmit={handleSubmit(submitHandler)}>
        {stars_categories.map((category) => (
          <div key={category.title} className={styles.category}>
            <h3 className={styles.category__name}>{category.title}</h3>

            {category.categories.map((item) => (
              <div key={item.name} className={styles.category__grade}>
                <StarsRating
                  defaultValue={0}
                  name={item.name}
                  onChange={(e: SyntheticEvent<Element, Event>, value: number | null) =>
                    changeStarGrade(item.name, value as number)
                  }
                />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        ))}

        <div className={styles.form_comment}>
          <h2 className={styles.sup_title}>Գրեք Ձեր կարծիքը</h2>

          <TextInput
            control={control}
            {...register("comment")}
            inputProps={{
              multiline: true,
              rows: 3,
              placeholder: "Մեկնաբանություն"
            }}
          />
          <FormError errors={errors} name={"comment"} />

          <div className={styles.comment__send_file}>
            <PrimaryButton className={`${styles.send_file__button}`} buttonStyle="outline">
              <input
                accept="image/*"
                hidden
                multiple
                type="file"
                maxLength={5}
                value={""}
                onChange={(e) => {
                  setValue(
                    "files",
                    [
                      ...(getValues().files?.length ? getValues().files : []),
                      ...Array.from(e.target.files?.length ? e.target.files : [])
                    ]
                      .filter((file) => !!file?.size && file.size <= 1048576 * 100)
                      .slice(0, 5)
                  );
                }}
                style={{ display: "none" }}
              />
              <Icons.Camera />
              ԿՑԵԼ ՆԿԱՐ
            </PrimaryButton>
            <p className={styles.send_file__text}>
              Կարող եք ներբեռնել 5 ֆայլ: Յուրաքանչյուր ֆայլի չափը չի կարող գերազանցել 100 MB
            </p>
          </div>

          {!!watchFormImages?.length && (
            <div className={styles.comment__images}>
              {watchFormImages?.map((image: File) => (
                <FileImage
                  key={`${image.name}_${image.webkitRelativePath}`}
                  onCancel={() =>
                    setValue(
                      "files",
                      watchFormImages.filter((file: File) => file.name !== image.name)
                    )
                  }
                  file={image}
                />
              ))}
            </div>
          )}

          <PrimaryButton>ՀԱՍՏԱՏԵԼ</PrimaryButton>
        </div>
      </form>
    </AccountLayout>
  );
}

export default AccountWriteReviewPage;
