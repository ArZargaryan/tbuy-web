import { Dispatch, ReactNode } from "react";

type Dispatcher<T> = Dispatch<React.SetStateAction<T>>;

export type ModalProps = {
  catchFalseActive?: (state: boolean) => void;
  setIsActive: Dispatcher<boolean>;
  trigger?: ReactNode;
  closePosition?: {
    top: string;
    right: string;
  };
} & ModalBodyProps &
  ModalContainerProps &
  ModalCloseProps;

export type ModalContainerProps = {
  isActive: boolean;
};

export type ModalBodyProps = {
  width?: string;
  max_width?: string;
  min_width?: string;
  height?: string;
  padding?: string;
};

export type ModalCloseProps = {
  closePosition?: {
    top: string;
    right: string;
  };
};
