import React, { useMemo } from "react";
import AccountLayout from "@layouts/account-layout";
import TbuyTable from "@libs/presentation/components/tables/TbuyTable";
import Link from "next/link";
import { GridRenderCellParams } from "@mui/x-data-grid";
import styles from "./account-vacancies.module.scss";
import MobileCells from "@features/account/presentation/pages/AccountVacanciesPage/components/MobileCells";
import { map } from "lodash";

const titles = {
  id: "",
  date: "Ամսաթիվ",
  company: "Ընկերություն",
  position: "Հաստիք",
  state: "Ստատուս"
};

function AccountVacanciesPage() {
  const columns = useMemo(
    () => [
      { field: "date", headerName: titles.date, sortable: false, flex: 1, maxWidth: 300 },
      {
        field: "company",
        headerName: titles.company,
        sortable: false,
        flex: 1,
        maxWidth: 300
      },
      { field: "position", headerName: titles.position, sortable: false, flex: 1, maxWidth: 300 },
      { field: "state", headerName: titles.state, sortable: false, flex: 1, maxWidth: 300 },
      {
        field: "actions",
        headerName: "",
        sortable: false,
        flex: 1,
        renderCell: (cellValues: GridRenderCellParams) => (
          <Link
            href={`/vacancies/${cellValues.row.id}`}
            className={"blue_text"}
            style={{
              fontSize: 16,
              width: "100%",
              wordWrap: "break-word",
              whiteSpace: "break-spaces"
            }}
            target={"_blank"}
          >
            ՏԵՍՆԵԼ ԱՎԵԼԻՆ
          </Link>
        )
      }
    ],
    []
  );

  const rows = useMemo(
    () => [
      {
        id: 1,
        date: "7.11. 2020",
        company: "Lorem ipsum LLC",
        position: "Designer",
        state: "Դիտված է"
      },
      {
        id: 2,
        date: "8.11. 2020",
        company: "Lorem ipsum LLC",
        position: "Web Designer",
        state: "Դիտված է"
      },
      {
        id: 3,
        date: "9.11. 2020",
        company: "Lorem ipsum LLC",
        position: "UI Designer",
        state: "Դիտված է"
      }
    ],
    []
  );

  const mobileRows = useMemo(
    () =>
      map(rows, (row) => {
        return {
          ...row,
          MobileExtraComponent(): JSX.Element {
            return (
              <Link
                href={`/vacancies/${row.id}`}
                className={`blue_text ${styles.mobile_cell_link}`}
                target={"_blank"}
              >
                ՏԵՍՆԵԼ ԱՎԵԼԻՆ
              </Link>
            );
          }
        };
      }),
    [rows]
  );

  return (
    <AccountLayout>
      <div className={"account_content"}>
        <h2 className={`title title_account ${styles.page_title}`}>
          Իմ աշխատանքի հայտարարությունները
        </h2>
        <div className={styles.desktop_table}>
          <TbuyTable columns={columns} rows={rows} />
        </div>
        <div className={styles.mobile_table}>
          {/* TODO: Fix this type */}
          {/* @ts-ignore */}
          <MobileCells rows={mobileRows} titles={titles} />
        </div>
      </div>
    </AccountLayout>
  );
}

export default AccountVacanciesPage;
