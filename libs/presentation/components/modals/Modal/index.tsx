import { FC, HTMLAttributes, useEffect } from "react";
import { RemoveScroll } from "react-remove-scroll";

import { Body, Close, Container } from "./modal.styles";
import { ModalProps } from "./modal.types";

export const Modal: FC<HTMLAttributes<HTMLDivElement> & ModalProps> = ({
  children,
  className,
  setIsActive,
  isActive,
  trigger,
  catchFalseActive, // Отлавливает момент, когда isActive = false. Возвращает false
  closePosition = {
    right: "24px",
    top: "24px"
  },
  ...other
}) => {
  useEffect(() => {
    catchFalseActive && !isActive && catchFalseActive(false);
  }, [isActive]);
  return (
    <>
      {trigger ? <span onClick={() => setIsActive(true)}>{trigger}</span> : null}
      {isActive && (
        <RemoveScroll enabled={isActive}>
          <Container isActive={isActive} onClick={() => setIsActive(false)} {...other}>
            <Body {...other} onClick={(e) => e.stopPropagation()} className={className}>
              {children}
              <Close onClick={() => setIsActive(false)} closePosition={closePosition}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M13.3751 11.9589C12.9846 11.5684 12.3514 11.5684 11.9609 11.9589C11.5703 12.3494 11.5703 12.9826 11.9609 13.3731L14.5871 15.9994L11.9609 18.6256C11.5704 19.016 11.5704 19.6492 11.9609 20.0398C12.3514 20.4303 12.9846 20.4303 13.3751 20.0398L16.0013 17.4136L18.6275 20.0398C19.018 20.4303 19.6512 20.4303 20.0417 20.0398C20.4323 19.6492 20.4323 19.016 20.0417 18.6255L17.4155 15.9994L20.0417 13.3731C20.4323 12.9826 20.4323 12.3495 20.0417 11.9589C19.6512 11.5684 19.018 11.5684 18.6275 11.9589L16.0013 14.5851L13.3751 11.9589Z"
                    fill="#6B718D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0013 1.66602C8.08522 1.66602 1.66797 8.08327 1.66797 15.9993C1.66797 23.9155 8.08522 30.3327 16.0013 30.3327C23.9174 30.3327 30.3346 23.9155 30.3346 15.9993C30.3346 8.08327 23.9174 1.66602 16.0013 1.66602ZM3.66797 15.9993C3.66797 9.18784 9.18979 3.66602 16.0013 3.66602C22.8128 3.66602 28.3346 9.18784 28.3346 15.9993C28.3346 22.8108 22.8128 28.3327 16.0013 28.3327C9.18979 28.3327 3.66797 22.8108 3.66797 15.9993Z"
                    fill="#6B718D"
                  />
                </svg>
              </Close>
            </Body>
          </Container>
        </RemoveScroll>
      )}
    </>
  );
};
