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

import { addCategory } from "../../store/CategoryReducer";

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const Dashboard: React.FC<Props> = ({ containerStyle, textStyle }) => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.category);

  useEffect(() => {
    console.log(
      "categories....",
      JSON.stringify(category.categories, undefined, 2)
    );
  }, [category.categories]);
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
