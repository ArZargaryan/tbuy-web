import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "@core/store";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Lang } from "@core/store/global";

import { getCategories, setCurrSubcategory } from "@libs/presentation/store/categoriesSlice";

import AssortmentPoppup from "@libs/presentation/components/layout/AssortmentPoppup";

import DesktopMenu from "./DesktopMenu";
import MobileMenu, { MobileMenuProps } from "./MobileMenu";

import styles from "./navbar.module.scss";

type Props = {
  mobileMenuProps?: MobileMenuProps;
};

type Category = {
  id: number;
  name: string;
  label: string; 
  icon: string;
  numberOfSubcategories: number;
  subcategories: Category[];
}

export default function Navbar(props: Props) {
  const { items, currSubcategory, loading } = useAppSelector(
    (state) => state.libs_categories.categories
  );

  const dummyData: Category[] = [
    {
      id: 1,
      name: "Category 1",
      label: "Label 1",
      icon: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
      numberOfSubcategories: 2,
      subcategories: [
        {
          id: 11,
          name: "Subcategory 1-1",
          label: "Label 1-1",
          icon: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
          numberOfSubcategories: 2,
          subcategories: [
            {
              id: 111,
              name: "Subcategory 1-1-1",
              label: "Label 1-1-1",
              icon: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
              numberOfSubcategories: 0,
              subcategories: []
            },
            {
              id: 112,
              name: "Subcategory 1-1-2",
              label: "Label 1-1-2",
              icon: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
              numberOfSubcategories: 0,
              subcategories: []
            }
          ]
        },
        {
          id: 12,
          name: "Subcategory 1-2",
          label: "Label 1-2",
          icon: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
          numberOfSubcategories: 0,
          subcategories: []
        }
      ]
    },
    {
      id: 2,
      name: "Category 2",
      label: "Label 2",
      icon: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
      numberOfSubcategories: 2,
      subcategories: [
        {
          id: 21,
          name: "Subcategory 2-1",
          label: "Label 2-1",
          icon: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
          numberOfSubcategories: 0,
          subcategories: []
        },
        {
          id: 22,
          name: "Subcategory 2-2",
          label: "Label 2-2",
          icon: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
          numberOfSubcategories: 1,
          subcategories: [
            {
              id: 221,
              name: "Subcategory 2-2-1",
              label: "Label 2-2-1",
              icon: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
              numberOfSubcategories: 0,
              subcategories: []
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Category 3",
      label: "Label 3",
      icon: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
      numberOfSubcategories: 0,
      subcategories: []
    }
  ];
  
  
  const [toggle, setToggle] = useState(false);

  function toggleActive() {
    setToggle((toggle) => !toggle);
  }

  const dispatch = useAppDispatch();
  const { locale } = useRouter();

  const getSubcategories = async (id: number) => {
    dispatch(getCategories({ id, lang: locale as Lang }));
  };

  const onSubClick = async (id: number) => {
    if (!items.find((item) => id === item.id)?.subcategories?.length) {
      await getSubcategories(id);
    }
    if (items.find((item) => id === item.id)?.subcategories?.length) {
      dispatch(setCurrSubcategory(items.find((item) => id === item.id)?.subcategories));
    }
  };

  useEffect(() => {
    dispatch(getCategories({ lang: locale as Lang }));
  }, [dispatch, locale]);

  const { Logos } = ImgExporter;

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={`container ${styles.navbar__content_container}`}>
          <Link href={"/"} className={styles.navbar__logo}>
            <Logos.Tbuy className={styles.navbar__logo_img} />
          </Link>
          <DesktopMenu toggleActive={toggleActive} />
          <MobileMenu {...(props.mobileMenuProps as MobileMenuProps)} />
        </div>
      </div>

      <AssortmentPoppup
        active={toggle}
        items={dummyData}
        loading={loading}
        mobileItems={currSubcategory}
        onSubClick={onSubClick}
        inNavbar={true}
        closePoppup={() => setToggle(false)}
      />
    </div>
  );
}
