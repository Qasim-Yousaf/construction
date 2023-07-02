import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderRadius: 5,
    backgroundColor: "white",
  },
  catName: {
    fontSize: 20,
    color: "black",
    fontWeight: "500",
  },
  textInput: {
    marginVertical: 1,
    height: 50,
    backgroundColor: "#f7f7f7",
    fontSize: 14,
  },
  fieldContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  fieldTextInput: {
    flex: 1,
  },
  fieldActions: {
    height: 50,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  fieldType: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#dddedf",
    height: 50,
  },
  fieldTypeTxt: {
    color: "blue",
    fontWeight: "700",
    fontSize: 12,
    textTransform: "uppercase",
  },
  fieldDeleteView: { width: 50 },
  categoryActionBtnView: {
    alignSelf: "flex-start",
  },
  categoryActionBtnRow: {
    display: "flex",
    flexDirection: "row",
  },
  newFieldBtn: { borderRadius: 5, marginRight: 5 },
  categoryActionBtnTxt: { color: "blue", fontWeight: "600" },
});

export default styles;
