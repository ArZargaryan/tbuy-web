import styled from "@emotion/styled";
import { ModalBodyProps, ModalCloseProps, ModalContainerProps } from "./modal.types";

export const Container = styled.div<ModalContainerProps>`
  position: fixed;
  z-index: 4444;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #00000080;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  pointer-events: ${({ isActive }) => (isActive ? "all" : "none")};
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
`;

export const Body = styled.div<ModalBodyProps>`
  transition: 0.25s;
  background: white;
  border: 1px solid var(--white);
  width: ${({ width }) => width};
  max-width: ${({ max_width }) => max_width};
  min-width: ${({ min_width }) => min_width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding || "20px"};
  margin: 20px;
  position: relative;

  img {
    max-width: 90vw;
    max-height: 90vh;
  }
`;

export const Close = styled.button<ModalCloseProps>`
  display: flex;
  position: absolute;
  top: ${(props) => props.closePosition?.top};
  right: ${(props) => props.closePosition?.right};
`;
