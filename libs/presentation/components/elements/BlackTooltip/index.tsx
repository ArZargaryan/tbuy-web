import React, { FC, HTMLAttributes } from "react";
import cl from "./black-tooltip.module.scss";

const BlackTooltip: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...other }) => {
  return (
    <div className={`${cl.tooltip} ${className}`} {...other}>
      {children}
    </div>
  );
};

export default BlackTooltip;
