import React, { useMemo } from "react";

import { DefaultMobileMenu } from "@libs/presentation/components/layout/Navbar/MobileMenu/components/DefaultMobileMenu";
import { SearchMobileMenu } from "@libs/presentation/components/layout/Navbar/MobileMenu/components/SearchMobileMenu";

const menuTypes = [
  { type: "default", Component: DefaultMobileMenu },
  { type: "search", Component: SearchMobileMenu }
];
const getMenuContentByType = (type = "default") => menuTypes.filter((item) => item.type === type);

export type DefaultMobileMenuProps = {
  type: "default";
};

export type SearchMobileMenuProps = {
  type: "search";
  defaultValue?: string;
};

export type MobileMenuProps = DefaultMobileMenuProps | SearchMobileMenuProps;

function MobileMenu(props: MobileMenuProps) {
  const { type = "default" } = props;
  const content = useMemo(() => getMenuContentByType(type), []);

  return (
    <>
      {content?.map(({ type, Component }) => (
        <Component key={type} {...props} />
      ))}
    </>
  );
}

export default MobileMenu;
