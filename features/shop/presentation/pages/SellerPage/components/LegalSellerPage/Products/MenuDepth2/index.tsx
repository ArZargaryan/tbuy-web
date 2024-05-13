import { FC, useState } from "react";
import cl from "../products.module.scss";
import { Depth_2 } from "..";

type Props = {
  el: Depth_2;
  idx: number;
};

export const MenuDepth2: FC<Props> = ({ el, idx }) => {
  const [subcategoriesIsShow, setSubcategoriesIsShow] = useState([false]);

  const getClassName = (className: string, idx: number) => {
    if (subcategoriesIsShow[idx]) {
      return `${className} ${cl.open}`;
    }
    return className;
  };

  const changeSubcategoriesIsShow = (idx: number) => {
    const newArr = [...subcategoriesIsShow];

    newArr[idx] = !newArr[idx];

    setSubcategoriesIsShow(newArr);
  };

  return (
    <div key={idx} className={cl.sidebar__lvl_2}>
      <div
        className={getClassName(cl.sidebar__panel, idx)}
        onClick={() => changeSubcategoriesIsShow(idx)}
      >
        {el.title}
        <ArrowIcon />
      </div>

      {el.subcategories.map((el, idx) => (
        <div key={idx} className={cl.sidebar__lvl_3}>
          <div className={cl.sidebar__panel}>{el.title}</div>
        </div>
      ))}
    </div>
  );
};

const ArrowIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <g clip-path="url(#clip0_269_47625)">
        <path
          d="M6 7.5L9 10.5L12 7.5"
          stroke="#1D1D1D"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_269_47625">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
