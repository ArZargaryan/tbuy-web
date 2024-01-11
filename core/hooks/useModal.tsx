import { Dispatch, SetStateAction, useState } from "react";

export function useModal(
  defaultState: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [modalOpened, setModalOpened] = useState<boolean>(defaultState || false);

  const changeModalVisibility = () => setModalOpened((prev) => !prev);

  return [modalOpened, changeModalVisibility, setModalOpened];
}
