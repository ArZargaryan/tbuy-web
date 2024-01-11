import { createSlice } from "@reduxjs/toolkit";
import { isEqual, uniqWith } from "lodash";
import { degrees } from "@features/vacancies/presentation/pages/SummaryCreatingPage/model/degrees";
import { months } from "@features/vacancies/presentation/pages/SummaryCreatingPage/model/monthYearSelectData";
import { proficiencies } from "@features/vacancies/presentation/pages/SummaryCreatingPage/model/proficiencies";

interface SelectItem {
  id: number;
  value: string;
}

interface Job {
  job_title: string;
  employer: string;
  city: string;
  state: string;
  startMonth: SelectItem;
  startYear: string;
  endMonth: SelectItem;
  endYear: string;
  currently_work: boolean;
  show_country: boolean;
  job_details: string;
}

interface Education {
  university_name: string;
  city: string;
  state: string;
  show_country: boolean;
  degree: SelectItem;
  study: string;
  graduationMonth: SelectItem;
  graduationYear: string;
}

interface Skill {
  value: string;
  label: string;
}

interface Language {
  lang: string;
  proficiency: SelectItem;
}

interface IState {
  step: number;
  baseInfo: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    email: string;
    phone: string;
    show_country: boolean;
  };
  jobs: Job[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
}

const initialState: IState = {
  step: 1,
  baseInfo: {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    show_country: false
  },
  jobs: [],
  education: [],
  skills: [],
  languages: []
};

const getItemById = <T extends { id: number }>(arr: T[], id: number) =>
  arr?.filter((item) => item.id === id)[0];

const summaryCreatingSlice = createSlice({
  name: "vacancies/summaryCreating",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setBaseInfo: (state, action) => {
      state.baseInfo = { ...state.baseInfo, ...action.payload };
    },
    addWork: (state, action) => {
      const startMonth = getItemById(months, action.payload.startMonth);
      const endMonth = getItemById(months, action.payload.endMonth);
      state.jobs = [
        ...state.jobs,
        {
          ...action.payload,
          startMonth,
          endMonth
        }
      ];
    },
    addEducation: (state, action) => {
      const degree = getItemById(degrees, action.payload.degree);
      const month = getItemById(months, action.payload.graduationMonth);
      state.education = [
        ...state.education,
        {
          ...action.payload,
          degree,
          graduationMonth: month
        }
      ];
    },
    addSkill: (state, action) => {
      const proficiency = getItemById(proficiencies, action.payload.proficiency);
      state.skills = uniqWith([...state.skills, ...action.payload.skills], isEqual);
      state.languages = [...state.languages, { lang: action.payload.language, proficiency }];
    }
  }
});

export const { setStep, setBaseInfo, addWork, addEducation, addSkill } =
  summaryCreatingSlice.actions;

export default summaryCreatingSlice.reducer;
