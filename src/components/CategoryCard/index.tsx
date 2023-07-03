import React from "react";
import { View } from "react-native";
import { Button, Text, Card, TextInput, IconButton } from "react-native-paper";
import styles from "./styles";

import { CategoryItem } from "../../store/CategoryReducer";

const CategoryCard: React.FC<{
  c: CategoryItem;
  index: number;
  onCategoryNameChange: (name: string) => void;
  clickToRemoveCategory: () => void;
  onFieldValueChange: (fIndex: number, title: string, type: string) => void;
  clickToRemoveCategoryField: (fIndex: number) => void;
}> = React.memo(
  ({
    c,
    index,
    onCategoryNameChange,
    clickToRemoveCategory,
    onFieldValueChange,
    clickToRemoveCategoryField,
  }) => {
    return (
      <Card style={styles.card} mode="elevated" key={index}>
        <Card.Title
          titleStyle={styles.catName}
          title={!c?.name ? "New Category" : c?.name}
        />
        <Card.Content>
          <TextInput
            onChangeText={(text) => {
              onCategoryNameChange(text);
            }}
            value={c?.name}
            outlineColor="gray"
            activeOutlineColor="blue"
            style={styles.textInput}
            placeholder=""
            mode="outlined"
            label="Category Name"
          />
          {c.fields.map((f, index) => (
            <View key={f.id} style={styles.fieldContainer}>
              <View style={styles.fieldTextInput}>
                <TextInput
                  onChangeText={(text) => {
                    onFieldValueChange(index, text, f.type);
                  }}
                  outlineColor="gray"
                  activeOutlineColor="blue"
                  style={styles.textInput}
                  placeholder=""
                  mode="outlined"
                  label="Field"
                />
              </View>
              <View style={styles.fieldActions}>
                <View style={styles.fieldType}>
                  <Text style={styles.fieldTypeTxt}>{f?.type}</Text>
                </View>
                <View style={styles.fieldDeleteView}>
                  <IconButton
                    icon="delete"
                    iconColor="black"
                    size={24}
                    onPress={() => clickToRemoveCategoryField(index)}
                  />
                </View>
              </View>
            </View>
          ))}
        </Card.Content>
        <Card.Actions style={styles.categoryActionBtnView}>
          <View style={styles.categoryActionBtnRow}>
            <Button
              onPress={() => {}}
              style={styles.newFieldBtn}
              mode="outlined"
            >
              <Text style={styles.categoryActionBtnTxt}>ADD NEW FIELD</Text>
            </Button>
            <Button
              textColor="blue"
              icon="delete"
              mode="text"
              onPress={() => clickToRemoveCategory()}
            >
              <Text style={styles.categoryActionBtnTxt}>REMOVE</Text>
            </Button>
          </View>
        </Card.Actions>
      </Card>
    );
  }
);

export default CategoryCard;
