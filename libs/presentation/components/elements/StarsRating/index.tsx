import * as React from "react";
import Box from "@mui/material/Box";
import Rating, { RatingProps } from "@mui/material/Rating";
import classNames from "classnames";

type Props = RatingProps;

function StarsRating(props: Props) {
  const cls = classNames(props?.className);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 }
      }}
      className={cls}
    >
      <Rating
        name="customized-color"
        defaultValue={1}
        max={5}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? "s" : ""}`}
        {...props}
        icon={
          <svg
            id="star"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 14 14"
            style={{ marginRight: 3 }}
          >
            <g id="Сгруппировать_4531" data-name="Сгруппировать 4531" transform="translate(0 0)">
              <path
                id="Контур_4468"
                data-name="Контур 4468"
                d="M13.767,4.984a1.013,1.013,0,0,0-.617-.33h0L9.429,4.14,7.956.622a1.011,1.011,0,0,0-1.865,0L4.618,4.14.9,4.654a1.013,1.013,0,0,0-.535,1.76l2.8,2.5L2.59,12.837a1.012,1.012,0,0,0,1.569.986l2.865-1.948,2.865,1.95a1.012,1.012,0,0,0,1.569-.986l-.576-3.924,2.8-2.5A1.013,1.013,0,0,0,13.767,4.984Z"
                transform="translate(-0.023 0)"
                fill="#2463bf"
              />
            </g>
          </svg>
        }
        emptyIcon={
          <svg
            id="star"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 14 14"
            style={{ marginRight: 3 }}
          >
            <g id="Сгруппировать_4531" data-name="Сгруппировать 4531" transform="translate(0 0)">
              <path
                id="Контур_4468"
                data-name="Контур 4468"
                d="M13.767,4.984a1.013,1.013,0,0,0-.617-.33h0L9.429,4.14,7.956.622a1.011,1.011,0,0,0-1.865,0L4.618,4.14.9,4.654a1.013,1.013,0,0,0-.535,1.76l2.8,2.5L2.59,12.837a1.012,1.012,0,0,0,1.569.986l2.865-1.948,2.865,1.95a1.012,1.012,0,0,0,1.569-.986l-.576-3.924,2.8-2.5A1.013,1.013,0,0,0,13.767,4.984ZM10.014,8.35a.5.5,0,0,0-.162.446l.6,4.2L7.306,10.857a.5.5,0,0,0-.562,0L3.579,12.983l.616-4.189a.5.5,0,0,0-.162-.444l-3-2.7,4-.552a.5.5,0,0,0,.393-.3L7.029,1a.022.022,0,0,1,0,.007L8.616,4.789a.5.5,0,0,0,.393.3l4.009.577Z"
                transform="translate(-0.023 0)"
                fill="#a1a1a1"
              />
            </g>
          </svg>
        }
      />
    </Box>
  );
}

export default StarsRating;
