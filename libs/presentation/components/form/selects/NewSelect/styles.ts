import styled from "@emotion/styled";

import { SelectProps } from ".";

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.div<Pick<SelectProps, "labelBackgroundColor">>`
  position: absolute;
  top: 0;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;

  padding: 0 5px;

  font-size: 14px;
  font-weight: 700;
  background: ${(props) => props.labelBackgroundColor};

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Required = styled.span`
  color: var(--warning);
`;
