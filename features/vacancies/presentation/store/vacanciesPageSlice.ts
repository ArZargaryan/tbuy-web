import { createSlice } from "@reduxjs/toolkit";
import { VacancyShort } from "@libs/domain/model/vacancy";

interface IState {
  items: VacancyShort[];
}

const initialState: IState = {
  items: [
    new VacancyShort({
      date: "20.01.1970",
      id: 69593,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 692593,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 69593,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 695933,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 69512393,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 62229593,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 6952345234593,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 6952345234593,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 69523452345293,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 695234523452937,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 695234523452936,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    }),
    new VacancyShort({
      date: "20.01.1970",
      id: 695234523452935,
      location: "Armenia",
      shortDesc: "Защитные пленки и стекло для планшетов",
      title: "Защитные пленки и стекло для планшетов",
      company: {
        id: 3,
        logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
        name: "ZTE"
      }
    })
  ]
};

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {}
});
export default vacanciesSlice.reducer;
