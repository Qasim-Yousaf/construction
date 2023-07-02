import React, { useEffect } from "react";
import styles from "./styles";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../store";

import { addCategory, clear, increment } from "../../store/CategoryReducer";

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const Dashboard: React.FC<Props> = ({ containerStyle, textStyle }) => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.category);

  useEffect(() => {
    console.log("categories....", JSON.stringify(category, undefined, 2));
  }, [category]);
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>Dashboard : {category.value}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(clear());
        }}
      >
        <Text>clear</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispatch(increment());
        }}
      >
        <Text>increment</Text>
      </TouchableOpacity>

      {category.categories.map((c) => {
        return (
          <View>
            <Text>{c.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Dashboard;
