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
  Dimensions,
  Platform,
} from "react-native";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  PRIMARY_COLOR,
} from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { CustomWrapper } from "../../components";

const FingerPrint = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

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

          <TouchableOpacity style={styles.continue} onPress={toggleModal}>
            <Text style={styles.continueTxt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal isVisible={isModalVisible} backdropColor="transparent">
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.modelView}>
            <Image
              source={require("../../../assets/images/cong.png")}
              style={[styles.cong]}
            />
            <Text
              style={{
                fontFamily: FONT_FAMILY_BOLD,
                fontSize: 24,
                color: "#ffffff",
              }}
            >
              Congratulation!
            </Text>
            <Text
              style={{
                fontFamily: FONT_FAMILY_REGULAR,
                fontSize: 18,
                color: "#ffffff",
                marginTop: 30,
                textAlign: "center",
                paddingHorizontal: 15,
              }}
            >
              Your account is ready to use. You will be redirected to home page
              after few seconds.
            </Text>

            <TouchableOpacity
              onPress={() => {
                toggleModal(), navigation.navigate("SignInOption");
              }}
            >
              <Text
                style={{
                  fontFamily: FONT_FAMILY_BOLD,
                  fontSize: 20,
                  color: "white",
                  marginTop: 20,
                }}
              >
                CLOSE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    // paddingHorizontal: 20,
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
  modelView: {
    width: Dimensions.get("screen").width - 40,
    height: 400,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cong: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export { FingerPrint };
