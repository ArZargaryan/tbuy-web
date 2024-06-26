import React, { ReactNode, MouseEvent, ButtonHTMLAttributes } from "react";
import styles from "./primary-button.module.scss";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  buttonStyle?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  className,
  buttonStyle = "solid",
  ...other
}) => {
  const buttonClasses = `${styles.primaryButton} ${className} ${
    buttonStyle === "outline" ? styles.outline : ""
  }`;

  return (
    <button className={buttonClasses} onClick={onClick} {...other}>
      {children}
    </button>
  );
};

export default PrimaryButton;
