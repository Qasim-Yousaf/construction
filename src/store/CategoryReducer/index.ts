import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

const DEMO_DATA = [
  {
    id: 1,
    name: "Buldozer",
    fileds: [
      {
        id: 1,
        title: "Model",
        type: "textfield",
      },
      {
        id: 2,
        title: "Manufacturing Date",
        type: "date",
      },
      {
        id: 3,
        title: "Does it work?",
        type: "checkbox",
      },
      {
        id: 4,
        title: "Weight",
        type: "number",
      },
    ],
  },
];

type CategoryFieldItemValue = boolean | string | number | Date;

interface CategoryFieldItem {
  [key: string]: CategoryFieldItemValue;
}
interface CategoryItem {
  id: number;
  name: string;
  fileds: Array<CategoryFieldItem>;
}
interface CategoryState {
  value: number;
  categories: Array<CategoryItem>;
}

const initialState: CategoryState = {
  value: 0,
  categories: DEMO_DATA,
};

const categorySlice: Slice<CategoryState> = createSlice({
  name: "category",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  categorySlice.actions;

export default categorySlice.reducer;
