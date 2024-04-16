import React, { ReactNode, MouseEvent } from "react";
import styles from "./primary-button.module.scss";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  buttonStyle?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  className,
  buttonStyle = "solid"
}) => {
  const buttonClasses = `${styles.primaryButton} ${className} ${
    buttonStyle === "outline" ? styles.outline : ""
  }`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
