import React from "react";

import { View, StyleProp, TextStyle, ViewStyle, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../../store";
import { addCategory } from "../../store/CategoryReducer";
import styles from "./styles";
import { CategoryCard } from "../../components";
import { Category as CategoryType } from "../../types";

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
};

const Category: React.FC<Props> = ({
  containerStyle,
  viewStyle,
  textStyle,
}) => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.category);

  const handleNewCategory = (): void => {
    dispatch(
      addCategory({
        id: 2,
        name: "",
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
      })
    );
  };

  const renderCategory = ({ item }: { item: CategoryType }) => (
    <CategoryCard c={item} />
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.body, containerStyle]}>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.name || Math.random().toString()}
        />
      </View>
      <View style={[styles.footer, viewStyle]}>
        <Button
          mode="outlined"
          style={[styles.addNewBtn]}
          onPress={handleNewCategory}
        >
          <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
            ADD NEW CATEGORY
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Category;
