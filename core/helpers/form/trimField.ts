import React from "react";

type trimFieldParams = {
  name?: string;
  setValue?: (name: string, value: unknown, config?: never) => void;
};

type settingsType = {
  validate: (value: string) => true | "Поле не должно состоять из пробелов";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const trimField = ({ name, setValue }: trimFieldParams) => {
  const settings: settingsType = {
    validate: (value: string) =>
      !!value.split(" ").join("").length || "Поле не должно состоять из пробелов"
  };

  if (name && setValue) {
    settings["onChange"] = (e) => setValue(name, e.target.value.split(" ").join(""));
  }

  return settings;
};
