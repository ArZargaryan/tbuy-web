import { createSlice } from "@reduxjs/toolkit";

interface Address {
  region: string;
  city: string;
  address: string;
  isDefault?: boolean;
}

interface IState {
  general: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    passport: File | null;
    passportWithFace: File | null;
    socialCard: string;
  };
  addresses: Address[];
}

// const { blob } = ImgExporter;

const initialState: IState = {
  general: {
    firstName: "Lorem",
    lastName: "Ipsum",
    phone: "+37455 23 65 54",
    email: "loremipsum@gmail.com",
    passport: null,
    passportWithFace: null,
    socialCard: ""
  },
  addresses: [
    {
      region: "Կոտայք",
      city: "Հրազդան",
      address: "Կենտրոն թաղամաս 23",
      isDefault: true
    }
  ]
};

const userInfoSlice = createSlice({
  name: "account/user_info",
  initialState,
  reducers: {
    addAddress(state, action) {
      console.log(action.payload);
      state.addresses = [...state.addresses, action.payload];
    }
  }
});

export const { addAddress } = userInfoSlice.actions;

export default userInfoSlice.reducer;
