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
} from "react-native";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  PRIMARY_COLOR,
} from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";

const FingerPrint = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
            <Text style={styles.headerTitle}>Set Your Fingerprint</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.subtitle}>
              Add a finger print to make your account more secure
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/fingerprint.png")}
                style={[styles.FingerPrint]}
              />
            </View>
            <Text style={styles.subtitle}>
              Please put your finger on the fingerprint scanner to get started{" "}
            </Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.skip}>
              <Text style={styles.skipTxt}>Skip</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.continue}>
              <Text style={styles.continueTxt}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    height: 60,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  footer: {
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  skip: {
    backgroundColor: "grey",
    height: 60,
    width: 160,
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
    width: 160,
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
    textAlign: "center",
  },
  FingerPrint: {
    width: 250,
    height: 250,
  },
});

export { FingerPrint };
