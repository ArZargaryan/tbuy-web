import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@libs/domain/model/product";
import { ImgExporter } from "@core/helpers/ImgExporter";

interface IState {
  product: Product;
}

const { blob } = ImgExporter;

const initialState: IState = {
  product: new Product({
    id: 43033,
    title: "Apple AirPods Pro",
    price: 519,
    images: [
      {
        original: blob.productBigImage.src,
        blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
      }
    ],
    company: {
      id: 489,
      logo: "https://tbuy.run/imgs/partners_imgs/489.png",
      name: "Draft furniture design"
    },
    discountPrice: undefined,
    discount: undefined,
    addedToFavorite: true,
    addedToCompare: true
  })
};

const favoriteSlice = createSlice({
  name: "account/write_review",
  initialState,
  reducers: {}
});
export default favoriteSlice.reducer;
