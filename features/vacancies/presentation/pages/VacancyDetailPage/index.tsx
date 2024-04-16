import React, { useState } from "react";
import DefaultLayout from "@layouts/default";
import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./vacancy-detail-page.module.scss";
import Link from "next/link";
import SendSummaryModal from "@features/vacancies/presentation/pages/VacancyDetailPage/components/SendSummaryModal";
import PrimaryButton from "@core/button/primary";

const { Logos } = ImgExporter;

function VacancyDetailPage() {
  const [openSummaryModal, setOpenSummaryModal] = useState(false);

  const changeModalVisibility = () => setOpenSummaryModal((prev) => !prev);

  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <section className={styles.marketing}>
            <div className={styles.container}>
              <h1 className={styles.marketing__title}>MARKETING MANAGER</h1>
              <div className={styles.marketing__info}>
                <p className={styles.info__text}>
                  Աշխատանքի պայմաններ՝ <span className={styles.text__regular}>Մշտական</span>
                </p>
                <p className={styles.info__text}>
                  Աշխատանքի տեսակը՝ <span className={styles.text__regular}>Ամբողջ դրույք</span>
                </p>
                <p className={styles.info__text}>
                  Գտնվելու վայրը՝ <span className={styles.text__regular}>Երևան</span>
                </p>
                <p className={styles.info__text}>
                  Վերջնաժամկետ՝ <span className={styles.text__regular}>13 Մարտ 2022</span>
                </p>
              </div>

              <div className={styles.marketing__list}>
                <h2 className={styles.list__title}>Աշխատանքի նկարագրություն</h2>
                <p className={styles.list__item}>
                  DANZ is on search for an enthusiastic and experienced Marketing Manager to join
                  our team.
                </p>
              </div>

              <ol className={`${styles.marketing__list} ${styles["marketing__number-list"]}`}>
                <h2 className={styles.list__title}>Աշխատանքային պարտականություններ</h2>
                <li className={styles.list__item}>
                  Manage the end-to-end video and photo production process for all company projects
                </li>
                <li className={styles.list__item}>
                  Maintain action plans and mood boards that schedule all aspects of the creation
                  and delivery of content
                </li>
                <li className={styles.list__item}>
                  Work alongside the marketing team to set up a content calendar and work on an
                  overall strategy
                </li>
                <li className={styles.list__item}>Develop video and photo story content</li>
                <li className={styles.list__item}>
                  Monitor trends in social media, fashion, lifestyle, and appropriately apply that
                  knowledge to create viral content
                </li>
                <li className={styles.list__item}>
                  Produce briefs for printing & production with all relevant information to ensure
                  efficient print process
                </li>
                <li className={styles.list__item}>
                  Analyze customer feedback and generate ideas/processes to increase customer
                  engagement
                </li>
                <li className={styles.list__item}>
                  Collaborate with online and print media platforms, outdoor agencies and
                  influencers for targeted placements
                </li>
              </ol>

              <ul className={`${styles.marketing__list} ${styles["marketing__marker-list"]}`}>
                <h2 className={styles.list__title}>Անհրաժեշտ հմտություններ</h2>
                <li className={styles.list__item}>
                  Higher Education in Marketing, Communications or relevant field
                </li>
                <li className={styles.list__item}>At least 2 years of Marketing experience</li>
                <li className={styles.list__item}>
                  Excellent knowledge of Facebook, Instagram, LinkedIn, Tiktok and other social
                  media best practices
                </li>
                <li className={styles.list__item}>
                  Strong understanding of customer and market dynamics and requirements
                </li>
                <li className={styles.list__item}>
                  Excellent communication and presentation skills
                </li>
                <li className={styles.list__item}>Advanced knowledge of MS Office, Excel</li>
                <li className={styles.list__item}>
                  Extremely responsible and detail-oriented with excellent time-management skills
                </li>
                <li className={styles.list__item}>Person with initiation and drive to succeed</li>
                <li className={styles.list__item}>Openness to new knowledge</li>
              </ul>

              <div className={styles.marketing__list}>
                <h2 className={styles.list__title}>Պահանջվող թեկնածուի մակարդակը</h2>
                <p className={styles.list__item}>Միջին մակարդակ</p>
              </div>

              <div className={styles.marketing__list}>
                <h2 className={styles.list__title}>Լրացուցիչ տեղեկություն</h2>
                <p className={styles.list__item}>
                  Խնդրում ենք հստակորեն նշել, որ աշխատանքի մասին տեղեկացել եք staff.am-ի միջոցով:
                </p>
              </div>

              <Link href="">
                <PrimaryButton className={styles.marketing__button} onClick={changeModalVisibility}>
                  ԴԻՄԵԼ
                </PrimaryButton>
              </Link>
              <div className={styles.marketing__link}>
                <span className={styles.link__text}>Տարածել</span>
                <Link href="" className={styles.link__icon}>
                  <Logos.facebook />
                </Link>
                <Link href="" className={styles.link__icon}></Link>
              </div>
            </div>
          </section>
        </main>
      </div>

      <SendSummaryModal open={openSummaryModal} onClose={changeModalVisibility} />
    </DefaultLayout>
  );
}

export default VacancyDetailPage;
