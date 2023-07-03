import React, { useState } from "react";

import {
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
  ScrollView,
} from "react-native";
import { Button, Text } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../../store";
import { CategoryItem, updateState } from "../../store/CategoryReducer";
import styles from "./styles";
import { CategoryCard } from "../../components";

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
};

const Category: React.FC<Props> = ({ containerStyle, viewStyle }) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<CategoryItem[]>([]);
  const { categories } = useAppSelector((state) => state.category);

  React.useEffect(() => {
    setData(categories);
  }, []);

  const handleAddNewCategory = (): void => {
    setData([
      ...data,
      {
        id: categories.length + 1,
        name: "",
        fields: [
          {
            id: 1,
            title: "",
            type: "text",
          },
        ],
      },
    ]);
  };

  React.useEffect(() => {
    dispatch(updateState({ categories: data }));
  }, [data]);

  const handleRemoveCategory = (id: number) =>
    setData(data.filter((d) => d.id != id));

  const handleRemoveCategoryField = (index: number, fIndex: number) => {
    let result = data.map((c, i) =>
      i === index
        ? {
            ...c,
            fields: c.fields.filter((f, ind) => ind != fIndex),
          }
        : c
    );

    setData(result);
  };
  const handleAddField = (index: number, type: string) => {
    let result = data.map((c, i) =>
      i === index
        ? {
            ...c,
            fields: [
              ...c.fields,
              { id: c.fields.length + 1, type: type, title: "" },
            ],
          }
        : c
    );

    setData(result);
  };
  const handleFieldValueChange = (
    index: number,
    fIndex: number,
    title: string,
    type: string
  ) => {
    const newData = [...data];
    newData[index].fields[fIndex].title = title;
    newData[index].fields[fIndex].type = type;
    setData([...newData]);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.body, containerStyle]}>
        <ScrollView>
          {data.map((item, index) => {
            return (
              <CategoryCard
                key={index}
                c={item}
                index={index}
                onCategoryNameChange={(name: string) => {
                  const newData = [...data];
                  newData[index].name = name;
                  setData([...newData]);
                }}
                clickToRemoveCategory={() => handleRemoveCategory(item.id)}
                onFieldValueChange={(
                  fIndex: number,
                  title: string,
                  type: string
                ) => handleFieldValueChange(index, fIndex, title, type)}
                clickToRemoveCategoryField={(fIndex: number) =>
                  handleRemoveCategoryField(index, fIndex)
                }
                clickToAddField={(type: string) => {
                  handleAddField(index, type);
                }}
              />
            );
          })}
        </ScrollView>
      </View>

      <View style={[styles.footer, viewStyle]}>
        <Button
          mode="outlined"
          style={[styles.addNewBtn]}
          onPress={() => handleAddNewCategory()}
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
