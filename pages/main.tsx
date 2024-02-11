import React from "react";
import DefaultLayout from "@layouts/default";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import styles from "@styles/page-list.module.scss";
import Link from "next/link";

function PageList() {
  return (
    <DefaultLayout>
      <div className={`container ${styles.wrapper}`} style={{ marginTop: 30 }}>
        <Link href={"/become_partner"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>Become partner</button>
        </Link>
        <Link href={"/feedback"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>feedback</button>
        </Link>
        <Link href={"/individual_partner"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>individual partner</button>
        </Link>
        <Link href={"/manager_signin"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>Manager Sign in</button>
        </Link>
        <Link href={"/services/123"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>Service detail</button>
        </Link>
        <Link href={"/vacancies"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>vacancies list</button>
        </Link>
        <Link href={"/vacancies/123"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>vacancy detail</button>
        </Link>
        <Link href={"/account/favorite"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>favorite</button>
        </Link>
        <Link href={"/organizations"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>organizations</button>
        </Link>
        <Link href={"/search/asd"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>search result</button>
        </Link>
        <Link href={"/info/about-us"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>about us</button>
        </Link>
        <Link href={"/info/credit"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>Credit network</button>
        </Link>
        <Link href={"/info/delivery"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>free shipping</button>
        </Link>
        <Link href={"/info/refund-policy"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>refund policy</button>
        </Link>
        <Link href={"/info/warranty-service"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>warranty service</button>
        </Link>
        <Link href={"/summary-creating"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>create resume</button>
        </Link>
        <Link href={"/compare_products"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>compare</button>
        </Link>
        <Link href={"/agreement"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>agreement</button>
        </Link>
        <Link href={"/cart"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>Cart + modal</button>
        </Link>
        <Link href={"/cart/checkout"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>Cart - 1, 2, 9, 11 + modal</button>
        </Link>
        <Link href={"/cart/cart_logined"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>Cart logined</button>
        </Link>
        <Link href={"/gift_cards"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>Gift Cards List</button>
        </Link>
        <Link href={"/gift_cards/123"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>Gift Card Page</button>
        </Link>
        <Link href={`/search/asd?company=Samsung`} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>search result - 1</button>
        </Link>
        <Link href={`/account/vacancies`} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>My vacancies</button>
        </Link>
        <Link href={"/account/notifications"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>account notifications</button>
        </Link>
        <Link href={"/account/notifications/07.11.2020"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>account notifications - 3</button>
        </Link>
        <Link href={"/account/gift_cards"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>account gift cards</button>
        </Link>
        <Link href={"/account/outgoing_gift_cards"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>account outgoing gift cards</button>
        </Link>
        <Link href={"/account/orders"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>account orders</button>
        </Link>
        <Link href={"/account/last_viewed_pages"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>account last viewed pages</button>
        </Link>
        <Link href={"/cart/gift_cards"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>cart - gift cards</button>
        </Link>
        <Link href={"/cart/checkout_gift_cards"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>cart - gift cards second step</button>
        </Link>
        <Link href={"/account/write_review/123"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>Write Review</button>
        </Link>
        <Link href={"/account/user_info/"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>User info</button>
        </Link>
        <Link href={"/account/my_summary/"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>Account summary</button>
        </Link>
        <Link href={"/legal_partner"} target={"_blank"}>
          <button className={"blue_btn outlined_btn"}>legal partner</button>
        </Link>
      </div>
    </DefaultLayout>
  );
}

export default PageList;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...globalTranslations]))
      // Will be passed to the page component as props
    }
  };
}
