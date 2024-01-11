import { createSlice } from "@reduxjs/toolkit";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { AccountProductTableRowData } from "@features/account/domain/account_product_table_row_data";
import { ProductInfo } from "@features/account/domain/product_info";

interface IState {
  items: AccountProductTableRowData<ProductInfo>[];
  modals: {
    confirmOrder: boolean;
    removeOrder: boolean;
    buyerChat: {
      open: boolean;
      info: {
        name: string;
      };
    };
  };
}

const { blob } = ImgExporter;

const initialState: IState = {
  items: [
    {
      orderInfo: {
        active: true,
        state: "Ստացված է",
        id: "259873",
        date: "7.11. 2020",
        paymentType: "Arman",
        totalPrice: "123.000 AMD",
        company: "Alpine LLC"
      },
      product: new ProductInfo({
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
        addedToCompare: true,
        count: 2,
        paymentType: "VISA",
        address: "lorem ipsum 23",
        buyerConfirmed: true,
        courierConfirmed: true
      }),
      showContent: false
    },
    {
      orderInfo: {
        active: true,
        state: "Ստացված է",
        id: "259872",
        date: "7.11. 2020",
        paymentType: "Mikart",
        totalPrice: "123.000 AMD",
        company: "Alpine LLC"
      },
      product: new ProductInfo({
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
        addedToCompare: true,
        count: 2,
        paymentType: "VISA",
        address: "lorem ipsum 23",
        buyerConfirmed: false,
        courierConfirmed: true
      }),
      showContent: false
    },
    {
      orderInfo: {
        active: true,
        state: "Ստացված է",
        id: "259871",
        date: "7.11. 2020",
        paymentType: "Arman",
        totalPrice: "123.000 AMD",
        company: "Alpine LLC"
      },
      product: new ProductInfo({
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
        addedToCompare: true,
        count: 2,
        paymentType: "VISA",
        address: "lorem ipsum 23",
        buyerConfirmed: true,
        courierConfirmed: true
      }),
      showContent: false
    }
  ],
  modals: {
    confirmOrder: false,
    removeOrder: false,
    buyerChat: {
      open: false,
      info: {
        name: ""
      }
    }
  }
};

const ordersSlice = createSlice({
  name: "account/orders",
  initialState,
  reducers: {
    showConfirmModal: (state) => {
      state.modals = {
        ...initialState.modals,
        confirmOrder: true
      };
    },
    showRemoveModal: (state) => {
      state.modals = {
        ...initialState.modals,
        removeOrder: true
      };
    },
    showMessageModal: (state, action) => {
      state.modals = {
        ...initialState.modals,
        buyerChat: {
          open: true,
          info: action.payload
        }
      };
    },
    closeModals: (state) => {
      state.modals = {
        ...initialState.modals
      };
    }
  }
});

export const { showConfirmModal, showRemoveModal, showMessageModal, closeModals } =
  ordersSlice.actions;

export default ordersSlice.reducer;
