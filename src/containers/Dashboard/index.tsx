import React from "react";
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
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/CategoryReducer";

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const Dashboard: React.FC<Props> = ({ containerStyle, textStyle }) => {
  // const { value } = useSelector((state: RootState) => state.category);
  // const dispatch = useDispatch<AppDispatch>();

  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.category);

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>Dashboard : {value}</Text>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
