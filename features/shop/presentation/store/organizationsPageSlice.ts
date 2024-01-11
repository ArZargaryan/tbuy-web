import { createSlice } from "@reduxjs/toolkit";
import { CompanyCardInfo } from "@libs/domain/model/company";
import { Rating } from "@libs/domain/model/rating";

interface IState {
  items: CompanyCardInfo[];
  loading: boolean;
}

const initialState: IState = {
  items: [
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/prod_img/7b1ade1.jpeg",
      rating: Rating.FourStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/aa23770.jpeg",
      rating: Rating.ThreeStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/8cb3163.jpeg",
      rating: Rating.TwoStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
      rating: Rating.FiveStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/prod_img/7b1ade1.jpeg",
      rating: Rating.OneStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/aa23770.jpeg",
      rating: Rating.FiveStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/8cb3163.jpeg",
      rating: Rating.OneStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
      rating: Rating.FourStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/prod_img/7b1ade1.jpeg",
      rating: Rating.FourStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/aa23770.jpeg",
      rating: Rating.ThreeStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/8cb3163.jpeg",
      rating: Rating.FourStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
      rating: Rating.FourStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/aa23770.jpeg",
      rating: Rating.ThreeStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/8cb3163.jpeg",
      rating: Rating.FourStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
      rating: Rating.FourStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/aa23770.jpeg",
      rating: Rating.ThreeStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/8cb3163.jpeg",
      rating: Rating.FourStars
    }),
    new CompanyCardInfo({
      id: 123,
      logo: "https://tbuy.am/imgs/partnersimg/9c637cd.jpeg",
      rating: Rating.FourStars
    })
  ],
  loading: false
};

const organizationsSlice = createSlice({
  name: "shop/organizations",
  initialState,
  reducers: {}
});
export default organizationsSlice.reducer;
