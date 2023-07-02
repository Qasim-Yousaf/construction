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

import { increment } from "../../store/CategoryReducer";

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const Dashboard: React.FC<Props> = ({ containerStyle, textStyle }) => {
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
