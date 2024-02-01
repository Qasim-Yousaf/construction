import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  PRIMARY_COLOR,
} from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import { CustomWrapper, OptInput } from "../../components";

const Pin = () => {
  const navigation = useNavigation();

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
          <Text style={styles.headerTitle}>Create a new Pin</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.subtitle}>
            Add a PIN number to make your account more secure
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <OptInput
                handleOptCode={(v) => {
                  // setOptCode(v);
                  console.log("v.....", v);
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.skip}>
            <Text style={styles.skipTxt}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.continue}
            onPress={() => {
              navigation.navigate("FingerPrint");
            }}
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
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  footer: {
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // paddingHorizontal: 20,
  },
  body: {
    flex: 1,
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
  img: {
    width: 160,
    height: 160,
    borderWidth: 5,
    borderColor: PRIMARY_COLOR,
    borderRadius: 45,
    marginBottom: 10,
    borderRadius: 80,
  },
  subtitle: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
    color: "black",
    marginTop: 10,
    marginBottom: 10,
  },
});

export { Pin };
