import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  PRIMARY_COLOR,
} from "../../constants";
import { Divider } from "react-native-paper";
import { TouchableRipple } from "react-native-paper";

const SignInOption = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/images/222.png")}
          style={styles.img}
        />
        <Text style={styles.text}>Let's you in</Text>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTxt}>Continue with facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTxt}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTxt}>Continue with Apple</Text>
        </TouchableOpacity>
        <View style={styles.divider}>
          <Text style={styles.or}>or</Text>
        </View>

        <TouchableOpacity
          onPress={() => console.log("Pressed")}
          style={styles.btn}
        >
          <Text style={styles.signIn}>Sign In with password</Text>
        </TouchableOpacity>
        <View style={styles.noAcc}>
          <Text style={styles.noAccTxt}>Don't have account? </Text>
          <TouchableOpacity>
            <Text style={styles.signUp}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 350,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
    fontFamily: FONT_FAMILY_BOLD,
    color: "black",
    fontSize: 32,
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
  },
  cardTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    fontWeight: "500",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    alignSelf: "center",
    marginTop: 10,
  },
  or: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 14,
  },
  signIn: {
    fontFamily: FONT_FAMILY_BOLD,
    color: "white",
    fontSize: 16,
  },
  btn: {
    borderRadius: 25,
    width: 310,
    height: 50,
    alignSelf: "center",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY_COLOR,
  },
  noAcc: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
  },

  noAccTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    color: "black",
  },
  signUp: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 12,
    color: PRIMARY_COLOR,
  },
});

export { SignInOption };