import React from "react";
import DefaultLayout from "@layouts/default";

import styles from "./summary-creating-page.module.scss";
import BaseForm from "@features/vacancies/presentation/pages/SummaryCreatingPage/components/BaseForm";
import { useAppSelector } from "@core/store";
import JobForm from "@features/vacancies/presentation/pages/SummaryCreatingPage/components/JobForm";
import EducationForm from "@features/vacancies/presentation/pages/SummaryCreatingPage/components/EducationForm";
import SkillsForm from "@features/vacancies/presentation/pages/SummaryCreatingPage/components/SkillsForm";
import SummaryPreview from "@features/vacancies/presentation/pages/SummaryCreatingPage/components/SummaryPreview";

function SummaryCreatingPage() {
  const { step } = useAppSelector((state) => state.vacancies_summaryCreating);

  return (
    <DefaultLayout>
      {step < 5 && (
        <div className={styles.container}>
          {step == 1 && <BaseForm />}
          {step == 2 && <JobForm />}
          {step == 3 && <EducationForm />}
          {step == 4 && <SkillsForm />}
        </div>
      )}

      <div className={`container ${styles.summary_creation_wrapper}`}>
        {step == 5 && <SummaryPreview />}
      </div>
    </DefaultLayout>
  );
}

export default SummaryCreatingPage;
