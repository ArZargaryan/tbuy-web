import React from "react";

import styles from "../../summary-creating-page.module.scss";
import { useAppSelector } from "@core/store";
import PrimaryButton from "@core/button/primary";

function SummaryPreview() {
  const { baseInfo, education, jobs, skills, languages } = useAppSelector(
    (state) => state.vacancies_summaryCreating
  );

  return (
    <div className={styles.summary_preview}>
      <h1 className={`title ${styles.summary_preview__title}`}>ռեզյումե</h1>
      <div className={styles.summary_preview__content}>
        <div className={styles.content__info}>
          <div className={styles.info__head}>
            <div className={styles.head__name}>
              <div className={styles.name__block}>{baseInfo.name[0]}</div>
              <h3 className={styles.name__text}>{baseInfo.name}</h3>
            </div>

            <div className={styles.head__contacts}>
              <p>{baseInfo.email}</p>
              <p>
                {baseInfo.address}, {baseInfo.city}
              </p>
              <p>{baseInfo.show_country && baseInfo.state + ", " + baseInfo.zip}</p>
            </div>
          </div>

          <div className={styles.info__item}>
            <h3 className={styles.item__title}>Eductation</h3>
            {education?.map((university, i) => (
              <div key={`${university.degree?.value}_${i}`} className={styles.item__blocks}>
                <div className={styles.blocks__block}>
                  <h4 className={styles.block__title}>{university.university_name}</h4>
                  <p className={styles.block__text}>{university.degree?.value}</p>
                  <p className={styles.block__text}>{university.study}</p>
                  <p className={styles.block__text}>
                    {university.graduationYear} {university.graduationMonth?.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.info__item}>
            <h3 className={styles.item__title}>Experience</h3>
            {jobs?.map((job, i) => (
              <div key={`${job.job_title}_${i}`} className={styles.item__blocks}>
                <div className={styles.blocks__block}>
                  <h4 className={styles.block__title}>{job.employer}</h4>
                  <p className={styles.block__text}>{job.job_title}</p>
                  <p className={styles.block__text}>
                    {job.startYear} {job.startMonth?.value} -{" "}
                    {job.currently_work ? "Present" : `${job.endYear} ${job.endMonth?.value}`}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.info__item}>
            <h3 className={styles.item__title}>Skills & languages</h3>
            <div className={styles.item__blocks}>
              <div className={styles.blocks__block}>
                {skills?.map((skill) => (
                  <p key={skill.value} className={styles.block__text}>
                    {skill.label}
                  </p>
                ))}
              </div>

              <div className={styles.blocks__block}>
                {languages?.map((lang) => (
                  <p key={lang.lang} className={`${styles.block__text} ${styles.block__text_bold}`}>
                    <span>{lang.lang}</span> {lang.proficiency?.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content__save}>
          <PrimaryButton>SAVE</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default SummaryPreview;
