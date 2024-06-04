import { FC, useState } from "react";
import ReactSelect, { IndicatorsContainerProps } from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/stateManager";

import { Label, Required, Wrapper } from "./styles";

export type SelectProps = {
  label?: string;
  required?: boolean;
  labelBackgroundColor?: string;
  padding?: string;
  height?: string;
  optionHeight?: string;
};

const NewSelect: FC<StateManagerProps & SelectProps> = ({
  label,
  required,
  labelBackgroundColor = "white",
  height = "50px",
  optionHeight = "50px",
  padding = "0 16px",
  className,
  components,
  ...other
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const CustomIndicator: FC<IndicatorsContainerProps> = ({ innerProps }) => {
    return (
      <div
        {...innerProps}
        style={{ display: "flex", transform: isOpen ? "rotate(180deg)" : "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <g clip-path="url(#clip0_2136_2962)">
            <path
              d="M5 7L9 11L13 7"
              stroke="#1D1D1D"
              stroke-width="1.6"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2136_2962">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  };

  return (
    <Wrapper className={className}>
      {label ? (
        <Label labelBackgroundColor={labelBackgroundColor}>
          {label} {required && <Required>*</Required>}
        </Label>
      ) : null}

      <ReactSelect
        onMenuOpen={() => setIsOpen(true)}
        onMenuClose={() => setIsOpen(false)}
        unstyled
        components={{ IndicatorsContainer: CustomIndicator, ...components }}
        defaultValue={{ label: "Չափման միավորն ըստ", value: 0 }}
        styles={{
          singleValue: (baseStyles) => ({
            ...baseStyles,
            fontWeight: 500
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: state.isFocused ? "1px solid var(--primary)" : "1px solid #D8D8D8",
            height: height,
            transition: "0.2s",
            padding: padding,
            background: "white",
            gap: "8px"
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            borderTop: "none",
            boxShadow: "0 10px 26px 0 #00000040",
            marginTop: "2px",
            minWidth: "max-content",
            zIndex: 2
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            padding: padding,
            height: optionHeight,
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            background: "white",

            ":hover": {
              background: "#e8e9f0"
            }
          })
        }}
        {...other}
      />
    </Wrapper>
  );
};

export default NewSelect;
