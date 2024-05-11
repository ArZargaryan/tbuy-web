import { FC, LabelHTMLAttributes, MouseEventHandler, useState } from "react";

import { CustomCheckbox, ErrorText, Label, Text } from "./styles";

export type CheckboxProps = {
  text: string;
  margin?: string;
  error?: boolean;
  border?: string;
  checked?: boolean;
  onWrapperClick?: MouseEventHandler<HTMLLabelElement>;
};

const Checkbox: FC<
  CheckboxProps & LabelHTMLAttributes<HTMLLabelElement>
> = ({ text, error, border, checked, onClick, ...other }) => {
  const [internalChecked, setInternalChecked] = useState(false);

  return (
    <Label
      onClick={onClick ? onClick : () => setInternalChecked((old) => !old)}
      {...other}
    >
      {error ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <rect
              width="16"
              height="16"
              transform="translate(0 0.5)"
              fill="white"
            />
            <path
              d="M8 6.5V9.83333"
              stroke="#D85353"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99833 14.7735H3.95833C1.64499 14.7735 0.678328 13.1202 1.79833 11.1002L3.87833 7.35352L5.83833 3.83352C7.02499 1.69352 8.97166 1.69352 10.1583 3.83352L12.1183 7.36018L14.1983 11.1068C15.3183 13.1268 14.345 14.7802 12.0383 14.7802H7.99833V14.7735Z"
              stroke="#D85353"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99609 11.834H8.00208"
              stroke="#D85353"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <ErrorText>Ցույց տալ էջում</ErrorText>
        </>
      ) : (
        <>
          <CustomCheckbox
            checked={checked ?? internalChecked}
            border={border}
            text={text}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
            >
              <path
                d="M4.70711 8.69289C4.31658 9.08342 3.68342 9.08342 3.29289 8.69289L0.699999 6.1C0.3134 5.7134 0.313401 5.0866 0.7 4.7C1.0866 4.3134 1.7134 4.3134 2.1 4.7L4 6.6L9.9 0.700001C10.2866 0.313402 10.9134 0.313401 11.3 0.7C11.6866 1.0866 11.6866 1.7134 11.3 2.1L4.70711 8.69289Z"
                fill="white"
              />
            </svg>
          </CustomCheckbox>
          <Text>{text}</Text>
        </>
      )}
    </Label>
  );
};

export default Checkbox;