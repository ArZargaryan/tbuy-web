import styled from "@emotion/styled";

import type { ButtonProps } from "./types";

export const Button = styled.button<Omit<ButtonProps, "variant">>`
  height: ${({ height }) => height || "50px"};
  flex: ${({ flex }) => flex || "0 1 auto"};
  width: ${({ width }) => width || "auto"};
  max-width: ${({ max_width }) => max_width || "none"};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};

  display: ${({ display }) => display || "grid"};
  grid-template-columns: auto auto;
  align-items: ${({ align }) => align || "center"};
  align-self: ${({ align_self }) => align_self || "unset"};
  justify-content: ${({ justify }) => justify || "center"};

  font-size: ${({ font_size }) => font_size || "14px"};
  font-weight: ${({ font_weight }) => font_weight || "700"};

  position: relative;

  svg,
  img {
    flex: 0 0 auto;
  }

  &:disabled {
    background: #eaecf5;
    color: #9ba2bf;
    cursor: auto;
  }
`;

export const Primary = styled(Button)`
  background: #6e00e5;
  color: white;
  gap: ${({ gap }) => gap || "0"};
`;

export const Secondary = styled(Button)`
  color: #1d1d1d;
  border: 1px solid #1d1d1d;
  gap: ${({ gap }) => gap || "8px"};
`;

export const Circle = styled.span`
  display: block;
  flex: 0 0 18px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.6px solid black;
`;
