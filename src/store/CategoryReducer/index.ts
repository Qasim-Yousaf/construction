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
  data: number;
}

const initialState: CategoryState = {
  value: 0,
  categories: DEMO_DATA,
  data: 10,
};

const categorySlice: Slice<CategoryState> = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (
      state = initialState,
      action: PayloadAction<CategoryItem>
    ) => {
      state.categories = [...state.categories, action.payload];
    },
    removeCategory: (state = initialState, action: PayloadAction<number>) => {
      state.categories = state.categories.filter((c) => c.id != action.payload);
    },
    clear: (state = initialState) => {
      state.value = 0;
    },
    increment: (state = initialState) => {
      state.value += 1;
    },
  },
});

export const { addCategory, removeCategory, clear, increment } =
  categorySlice.actions;

export default categorySlice.reducer;
