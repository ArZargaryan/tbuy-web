import { FC, HTMLAttributes, useState } from "react";
import cl from "./image-viewer.module.scss";
import { RemoveScroll } from "react-remove-scroll";

const ImageViewer: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...other }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onClick={() => setIsActive((prev) => !prev)} className={cl.wrapper}>
      {children}

      {isActive && (
        <RemoveScroll>
          <div className={cl.container} {...other}>
            {children}
          </div>
        </RemoveScroll>
      )}
    </div>
  );
};

export default ImageViewer;
