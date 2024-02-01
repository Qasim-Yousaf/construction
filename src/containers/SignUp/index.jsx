import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  PRIMARY_COLOR,
} from "../../constants";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { CustomWrapper } from "../../components";
const SignUp = () => {
  const navigation = useNavigation();

  const [email, setemail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(true);
  const [rememberMe, setRememberMe] = React.useState(false);
  const [error, setError] = React.useState({
    email: false,
    password: false,
  });
  const handleLogin = () => {
    // Implement login logic here
    console.log("Logging in...");
  };

  return (
    <CustomWrapper>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Image
            source={require("../../../assets/images/arrowLeft.png")}
            style={[styles.icon]}
          />
        </TouchableOpacity>
        <View style={styles.body}>
          <Text style={styles.boldHeading}>Create your Account</Text>
          <View>
            <TextInput
              mode="outlined"
              label="Email"
              value={email}
              onChangeText={(text) => setemail(text)}
              style={styles.input}
              contentStyle={{
                fontFamily: FONT_FAMILY_REGULAR,
                fontSize: 14,
              }}
              placeholderTextColor={"black"}
              left={<TextInput.Icon style={{ marginTop: 15 }} icon="email" />}
            />
            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry={showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              contentStyle={{
                fontFamily: FONT_FAMILY_REGULAR,
                fontSize: 14,
              }}
              placeholderTextColor={"black"}
              left={<TextInput.Icon style={{ marginTop: 15 }} icon="lock" />}
              right={
                <TextInput.Icon
                  style={{ marginTop: 15 }}
                  icon={showPassword ? "eye" : "eye-off"}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
            <TouchableOpacity
              style={styles.remberMe}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe ? (
                <MaterialCommunityIcons
                  name="checkbox-outline"
                  size={26}
                  color="black"
                />
              ) : (
                <Fontisto name="checkbox-passive" size={19} color="black" />
              )}

              <Text style={styles.rememberMeTxt}>Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Interest");
              }}
              style={styles.btn}
            >
              <Text style={styles.signIn}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.divider}>
              <View style={styles.line} />
              <Text style={styles.or}>or continue with</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require("../../../assets/images/facebook.png")}
                  style={[{ width: 25, height: 25 }]}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require("../../../assets/images/google.png")}
                  style={[{ width: 25, height: 25 }]}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require("../../../assets/images/apple.png")}
                  style={[{ width: 25, height: 25 }]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.noAcc}>
            <Text style={styles.noAccTxt}>Already have account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.signUp}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </CustomWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    height: 60,
    width: Dimensions.get("screen").width - 40,
    borderColor: "gray",
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: "#ffffff",
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  backBtnHeader: {
    height: 50,
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  boldHeading: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 36,
    marginVertical: 20,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  btn: {
    borderRadius: 25,
    // width: 310,
    width: Dimensions.get("screen").width - 40,

    height: 50,
    alignSelf: "center",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY_COLOR,
  },
  signIn: {
    fontFamily: FONT_FAMILY_BOLD,
    color: "white",
    fontSize: 16,
  },
  or: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 14,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    alignSelf: "center",
    marginTop: 10,
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
  line: {
    height: 1,
    width: 80,
    borderWidth: 0.5,
    alignSelf: "center",
    marginRight: 5,
    marginLeft: 5,
    borderColor: "grey",
  },
  socialBtn: {
    borderWidth: 0.7,
    height: 50,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 5,
    borderColor: "grey",
  },

  socialContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  remberMe: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  rememberMeTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
    marginLeft: 10,
  },
});

export { SignUp };
