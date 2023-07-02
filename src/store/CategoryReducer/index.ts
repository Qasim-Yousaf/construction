import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

interface CategoryState {
  value: number;
}

const initialState: CategoryState = {
  value: 0,
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
