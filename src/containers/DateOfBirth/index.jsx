import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  PRIMARY_COLOR,
} from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { Dimensions } from "react-native";
import { CustomWrapper } from "../../components";

const DateOfBirth = () => {
  const navigation = useNavigation();
  const [DOB, setDOB] = React.useState("12/27/1995");

  return (
    <CustomWrapper>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <Image
              source={require("../../../assets/images/arrowLeft.png")}
              style={[styles.icon]}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>When is Your Birthday?</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.subtitle}>
            Your birthrday will not be shown to the public
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/images/birthday.jpg")}
              style={{
                width: 250,
                height: 250,
                marginBottom: 10,
                //   borderWidth: 1,
              }}
            />

            <TextInput
              mode="outlined"
              label={"Date Of Birth"}
              value={DOB}
              style={styles.input}
              contentStyle={styles.txtContainer}
              placeholderTextColor={"black"}
              onChangeText={(text) => setDOB(text)}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.skip}>
            <Text style={styles.skipTxt}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.continue}
            onPress={() => navigation.navigate("ProfileSetup")}
          >
            <Text style={styles.continueTxt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </CustomWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    height: 60,
    flexDirection: "row",
    // paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  footer: {
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  body: {
    flex: 1,
    // paddingHorizontal: 20,
  },
  skip: {
    backgroundColor: "grey",
    height: 60,
    width: Platform.OS === "ios" ? 160 : 140,

    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  skipTxt: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 14,
    color: "#ffffff",
  },
  continue: {
    backgroundColor: PRIMARY_COLOR,
    height: 60,
    width: Platform.OS === "ios" ? 160 : 140,

    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  continueTxt: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 14,
    color: "#ffffff",
  },
  headerTitle: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 20,
    color: "black",
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  subtitle: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
    color: "black",
    marginTop: 10,
    marginBottom: 10,
  },

  interestTxt: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 12,
    color: PRIMARY_COLOR,
  },
  input: {
    height: 60,
    width: "100%",
    borderColor: "gray",
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: "#ffffff",
  },
  txtContainer: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
  },
});

export { DateOfBirth };
