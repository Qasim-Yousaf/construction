import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { State } from "react-native-gesture-handler";

const DEMO_DATA = [
  {
    id: 1,
    name: "Buldozer",
    fields: [
      {
        id: 1,
        title: "Model",
        type: "text",
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
export interface CategoryItem {
  id: number;
  name: string;
  fields: Array<CategoryFieldItem>;
}
interface CategoryState {
  categories: Array<CategoryItem>;
}
interface UpdateCategoryName {
  id: number;
  value: string;
}

interface RemoveField {
  id: number;
  fieldId: number;
}
interface UpdateFieldType {
  categoryId: number;
  fieldId: number;
  type: string;
  title: string;
}

interface AddFieldType {
  categoryId: number;
  type: string;
  title: string;
}
const initialState: CategoryState = {
  categories: [],
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
    updateCategoryName: (
      state = initialState,
      action: PayloadAction<UpdateCategoryName>
    ) => {
      console.log("payload", action.payload);
      state;

      // state.categories = state.categories.map((c) =>
      //   c.id === action.payload.id
      //     ? {
      //         ...c,
      //         name: action.payload.value,
      //       }
      //     : c
      // );
    },
    updateState: (state, action) => {
      state.categories = action.payload.categories;
    },
    removeField: (state, action: PayloadAction<RemoveField>) => {
      state.categories = state.categories.map((c) =>
        c.id === action.payload.id
          ? {
              ...c,
              fields: c.fields.filter((f) => f.id != action.payload.fieldId),
            }
          : c
      );
    },
    addField: (state = initialState, action: PayloadAction<AddFieldType>) => {
      state.categories = state.categories.map((c) =>
        c.id === action.payload.categoryId
          ? {
              ...c,
              fields: [
                ...c.fields,
                {
                  id: c.fields.length + 1,
                  title: action.payload.title,
                  type: action.payload.type,
                },
              ],
            }
          : c
      );
    },

    updateField: (
      state = initialState,
      action: PayloadAction<UpdateFieldType>
    ) => {
      state.categories = state.categories.map((c) =>
        c.id === action.payload.categoryId
          ? {
              ...c,
              fields: c.fields.map((f) =>
                f.id === action.payload.fieldId
                  ? {
                      ...f,
                      type: action.payload.type,
                      title: action.payload.title,
                    }
                  : f
              ),
            }
          : c
      );
    },
  },
});

export const {
  addCategory,
  removeCategory,
  updateCategoryName,
  updateState,
  addField,
  updateField,
  removeField,
} = categorySlice.actions;

export default categorySlice.reducer;
