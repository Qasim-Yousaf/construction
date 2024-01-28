import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  PRIMARY_COLOR,
} from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Gender = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = React.useState("male");

  return (
    <SafeAreaView style={styles.container}>
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
        <Text style={styles.headerTitle}>Tell Us About Your Self</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.subtitle}>
          Choose Your Indentity & help us to find the right match for you.
        </Text>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => setSelectedGender("male")}
            style={[
              {
                width: 180,
                height: 180,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 90,
              },
              selectedGender === "male"
                ? {
                    backgroundColor: PRIMARY_COLOR,
                  }
                : { backgroundColor: "grey" },
            ]}
          >
            <Image
              source={require("../../../assets/images/male.png")}
              style={{
                width: 50,
                height: 50,
                marginBottom: 10,
              }}
            />
            <Text
              style={[
                {
                  fontFamily: FONT_FAMILY_BOLD,
                  fontSize: 20,
                  color: "black",
                },
              ]}
            >
              Male
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedGender("female")}
            style={[
              {
                width: 180,
                height: 180,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 90,
                marginTop: 30,
              },
              selectedGender === "female"
                ? {
                    backgroundColor: PRIMARY_COLOR,
                  }
                : { backgroundColor: "grey" },
            ]}
          >
            <Image
              source={require("../../../assets/images/female.png")}
              style={{
                width: 50,
                height: 50,
                marginBottom: 10,
              }}
            />
            <Text
              style={[
                {
                  fontFamily: FONT_FAMILY_BOLD,
                  fontSize: 20,
                  color: "black",
                },
              ]}
            >
              Female
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.skip}>
          <Text style={styles.skipTxt}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continue}>
          <Text style={styles.continueTxt}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
});

export { Gender };
