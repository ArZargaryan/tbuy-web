import styled from "@emotion/styled";

import { CheckboxProps } from ".";

export const Input = styled.input`
  position: absolute;
  z-index: -9999;
  width: 0;
  heidth: 0;
`;
export const Label = styled.label<{ margin?: string }>`
  width: max-content;
  position: relative;
  display: flex;
  align-items: center;

  margin: ${({ margin }) => margin || "0"};
`;

export const CustomCheckbox = styled.span<{ checked: boolean } & CheckboxProps>`
  width: 18px;
  height: 18px;
  border: ${({ border }) => border || "1.4px solid #6B718D"};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  img {
    display: none;
  }

  ${(props) =>
    props.checked
      ? `
					background: var(--primary);
					border: 1px solid var(--primary);

					svg,
					img {
						display: block;
					}
				`
      : null};
`;

export const Text = styled.span`
  font-size: 14px;
  padding-left: 4px;
`;

export const ErrorText = styled(Text)`
  color: var(--error);
`;
