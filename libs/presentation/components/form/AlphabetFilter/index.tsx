import React, { HTMLAttributes } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";

import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { alphabet_en } from "@libs/presentation/components/form/AlphabetFilter/model/alphabet_en";

import styles from "./alphabet-filter.module.scss";

type Props = HTMLAttributes<HTMLDivElement>;

const { Icons } = ImgExporter;

function AlphabetFilter(props: Props) {
  const cls = classNames(styles.alphabet_filter, props.className);
  return (
    <div {...props}>
      <FormControl className={cls}>
        <div className={styles.form__content}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            className={styles.alphabet_group}
          >
            <Swiper
              slidesPerView={"auto"}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className={styles.alphabet_group__slider}
            >
              {alphabet_en.map((letter) => (
                <SwiperSlide key={letter.value} className={styles.slider__item}>
                  <FormControlLabel value={letter.value} control={<Radio />} label={letter.label} />
                </SwiperSlide>
              ))}
            </Swiper>
          </RadioGroup>
          <button className={styles.content__nums}>0 - 9</button>
        </div>
        <button className={styles.search_btn}>
          <Icons.Search />
        </button>
      </FormControl>
    </div>
  );
}

export default AlphabetFilter;
