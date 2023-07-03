import React from "react";
import { View } from "react-native";
import {
  Button,
  Text,
  Card,
  TextInput,
  IconButton,
  Menu,
  Divider,
} from "react-native-paper";
import styles from "./styles";

import { CategoryItem } from "../../store/CategoryReducer";

const menu: Array<{ id: number; title: string }> = [
  {
    id: 1,
    title: "text",
  },
  {
    id: 2,
    title: "Date",
  },

  {
    id: 3,
    title: "checkbox",
  },

  {
    id: 4,
    title: "number",
  },
];

const CategoryCard: React.FC<{
  c: CategoryItem;
  index: number;
  onCategoryNameChange: (name: string) => void;
  clickToRemoveCategory: () => void;
  onFieldValueChange: (fIndex: number, title: string, type: string) => void;
  clickToRemoveCategoryField: (fIndex: number) => void;
  clickToAddField: (type: string) => void;
}> = React.memo(
  ({
    c,
    index,
    onCategoryNameChange,
    clickToRemoveCategory,
    onFieldValueChange,
    clickToRemoveCategoryField,
    clickToAddField,
  }) => {
    const [activeId, setActiveId] = React.useState<string>("");
    const [visible, setVisible] = React.useState<boolean>(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const getKeyboardType = (type: string): string => {
      if (type === "number") {
        return "numeric";
      } else return "default";
    };

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
            <View key={index} style={styles.fieldContainer}>
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
                  keyboardType={getKeyboardType(f.type)}
                  value={f.title}
                />
              </View>
              <View style={styles.fieldActions}>
                <View style={styles.fieldType}>
                  <Menu
                    contentStyle={[styles.menuView]}
                    visible={
                      activeId === f.type + "" + index && visible === true
                        ? true
                        : false
                    }
                    onDismiss={closeMenu}
                    anchor={
                      <Button
                        onPress={() => {
                          setActiveId(f.type + "" + index), openMenu();
                        }}
                        mode="text"
                      >
                        <Text style={styles.fieldTypeTxt}>{f?.type}</Text>
                      </Button>
                    }
                  >
                    {menu.map((m) => (
                      <Menu.Item
                        key={m.id}
                        onPress={() => {
                          // clickToAddField(m.title);
                          onFieldValueChange(index, "", m.title);
                          closeMenu();
                        }}
                        title={m.title}
                      />
                    ))}
                  </Menu>
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
            <Menu
              contentStyle={[styles.menuView]}
              visible={
                activeId === "add-new-field" + index && visible === true
                  ? true
                  : false
              }
              onDismiss={closeMenu}
              anchor={
                <Button
                  onPress={() => {
                    setActiveId("add-new-field" + index);
                    openMenu();
                  }}
                  style={styles.newFieldBtn}
                  mode="outlined"
                >
                  <Text style={styles.categoryActionBtnTxt}>ADD NEW FIELD</Text>
                </Button>
              }
            >
              {menu.map((m) => (
                <Menu.Item
                  key={m.id}
                  onPress={() => {
                    clickToAddField(m.title);
                    closeMenu();
                  }}
                  title={m.title}
                />
              ))}
            </Menu>

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
