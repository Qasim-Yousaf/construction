import React from "react";

import { View, Text } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/CategoryReducer";

const Category: React.FC = () => {
  const count = useSelector((state: RootState) => state.category.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View>
      <Text>Category {count}</Text>
    </View>
  );
};

export default Category;
