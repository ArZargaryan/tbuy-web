import { createSlice } from "@reduxjs/toolkit";
import { ImgExporter } from "@core/helpers/ImgExporter";

// TODO: возможно нужно будет изменить (зависит от бэка)

const { blob } = ImgExporter;

export interface DayNotification {
  title: string;
  description: string;
  date: string;
  dateUrl: string;
  viewed: boolean;
}

export interface DayDetailsNotification {
  price: string;
  allPrice: string;
  title: string;
  count: string;
  id: number;
  image: string;
  viewed: boolean;
}

interface IState {
  notificationsByDate: DayNotification[];
  notificationsByDateDetails: DayDetailsNotification[];
}

const initialState: IState = {
  notificationsByDate: [
    {
      date: "2 րոպե առաջ",
      dateUrl: "26.04.2023",
      description: "Կարող եք թողնել կարծիք",
      title: "Դուք ստացել եք #25987 ապրանքը",
      viewed: false
    },
    {
      date: "19.01.2021",
      dateUrl: "19.01.2021",
      description: "Կարող եք թողնել կարծիք",
      title: "Դուք ստացել եք #25987 ապրանքը",
      viewed: false
    },
    {
      date: "17.12.2020",
      dateUrl: "17.12.2020",
      description: "Կարող եք թողնել կարծիք",
      title: "Դուք ստացել եք #25987 ապրանքը",
      viewed: true
    },
    {
      date: "17.12.2020",
      dateUrl: "17.12.2020",
      description: "Կարող եք թողնել կարծիք",
      title: "Դուք ստացել եք #25987 ապրանքը",
      viewed: true
    }
  ],
  notificationsByDateDetails: [
    {
      id: 1,
      allPrice: "246.000 AMD",
      count: "2",
      title: "Apple AirPods Pro",
      image: blob.productBigImage.src,
      price: "123.000 AMD",
      viewed: false
    },
    {
      id: 2,
      allPrice: "246.000 AMD",
      count: "2",
      title: "Apple AirPods Pro",
      image: blob.productBigImage.src,
      price: "123.000 AMD",
      viewed: false
    }
  ]
};

const notificationsSlice = createSlice({
  name: "account/notifications",
  initialState,
  reducers: {}
});
export default notificationsSlice.reducer;
