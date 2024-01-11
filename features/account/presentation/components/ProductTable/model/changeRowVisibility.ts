import { Dispatch, SetStateAction } from "react";

export const changeRowVisibility = (
  id: string,
  activeId: string | null,
  setActiveId: Dispatch<SetStateAction<string | null>>
) => {
  if (activeId === id) {
    return setActiveId(null);
  }
  return setActiveId(id);
};
