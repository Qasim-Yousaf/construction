import React from "react";
import { View } from "react-native";
import { Button, Text, Card, TextInput, IconButton } from "react-native-paper";
import { Category } from "../../types";
import styles from "./styles";

const CategoryCard: React.FC<{ c: Category }> = ({ c }) => {
  return (
    <Card style={styles.card} mode="elevated">
      <Card.Title
        titleStyle={styles.catName}
        title={!c?.name ? "New Category" : c?.name}
      />
      <Card.Content>
        <TextInput
          outlineColor="gray"
          activeOutlineColor="blue"
          style={styles.textInput}
          placeholder=""
          mode="outlined"
          label="Category Name"
        />
        {c.fileds.map((f) => (
          <View key={f.id} style={styles.fieldContainer}>
            <View style={styles.fieldTextInput}>
              <TextInput
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
                  onPress={() => console.log("Pressed")}
                />
              </View>
            </View>
          </View>
        ))}
      </Card.Content>
      <Card.Actions style={styles.categoryActionBtnView}>
        <View style={styles.categoryActionBtnRow}>
          <Button onPress={() => {}} style={styles.newFieldBtn} mode="outlined">
            <Text style={styles.categoryActionBtnTxt}>ADD NEW FIELD</Text>
          </Button>
          <Button
            textColor="blue"
            icon="delete"
            mode="text"
            onPress={() => console.log("Pressed")}
          >
            <Text style={styles.categoryActionBtnTxt}>REMOVE</Text>
          </Button>
        </View>
      </Card.Actions>
    </Card>
  );
};

export default CategoryCard;
