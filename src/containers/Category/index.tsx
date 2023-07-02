import React from "react";

import {
  View,
  ScrollView,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import {
  Button,
  Text,
  Card,
  TextInput,
  IconButton,
  MD3Colors,
} from "react-native-paper";

import { useAppDispatch, useAppSelector } from "../../store";

import { addCategory } from "../../store/CategoryReducer";
import styles from "./styles";

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

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.body, containerStyle]}>
        <ScrollView>
          {categories.map((c, index) => {
            return (
              <Card
                key={index}
                style={[styles.card, viewStyle]}
                mode="elevated"
              >
                <Card.Title
                  titleStyle={[styles.catName, textStyle]}
                  title={!c?.name ? "New Category" : c?.name}
                />
                <Card.Content>
                  <TextInput
                    outlineColor="gray"
                    activeOutlineColor="blue"
                    style={[styles.textInput]}
                    placeholder=""
                    mode="outlined"
                    label="Category Name"
                  />
                  {c.fileds.map((f, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                          }}
                        >
                          <TextInput
                            outlineColor="gray"
                            activeOutlineColor="blue"
                            style={[styles.textInput]}
                            placeholder=""
                            mode="outlined"
                            label="Field"
                          />
                        </View>

                        <View
                          style={{
                            height: 50,
                            marginTop: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              paddingHorizontal: 8,
                              borderWidth: 1,
                              borderColor: "#dddedf",
                              height: 50,
                            }}
                          >
                            <Text
                              style={{
                                color: "blue",
                                fontWeight: "700",
                                fontSize: 12,
                                textTransform: "uppercase",
                              }}
                            >
                              {f?.type}
                            </Text>
                          </View>
                          <View style={{ width: 50 }}>
                            <IconButton
                              icon="delete"
                              iconColor={"black"}
                              size={24}
                              onPress={() => console.log("Pressed")}
                            />
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </Card.Content>
                <Card.Actions
                  style={{
                    alignSelf: "flex-start",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Button
                      onPress={() => {}}
                      style={{ borderRadius: 5 }}
                      mode="outlined"
                    >
                      <Text style={{ color: "blue", fontWeight: "600" }}>
                        ADD NEW FIELD
                      </Text>
                    </Button>

                    <Button
                      textColor="blue"
                      icon="delete"
                      mode="text"
                      onPress={() => console.log("Pressed")}
                    >
                      <Text style={{ color: "blue", fontWeight: "600" }}>
                        REMOVE
                      </Text>
                    </Button>
                  </View>
                </Card.Actions>
              </Card>
            );
          })}
        </ScrollView>
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
