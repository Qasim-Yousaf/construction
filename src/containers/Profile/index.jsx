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
import { TextInput, Avatar } from "react-native-paper";
import { Dimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ProfileSetup = () => {
  const navigation = useNavigation();
  const [info, setInfo] = React.useState({
    image: null,
    fullName: "",
    nickName: "",
    email: "",
    phone: "",
    address: "",
    ssn: "",
  });
  const [errors, setErros] = React.useState({
    image: false,
    fullName: false,
    nickName: false,
    email: false,
    phone: false,
    address: false,
  });

  const updateState = (key, value) => {
    setInfo({
      ...info,
      [key]: value,
    });
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      let object = result.assets[0];
      updateState("image", object);
    }
  };

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
            <Text style={styles.headerTitle}>Fill Your Profile</Text>
          </View>
          <View style={styles.body}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => pickImage()} style={styles.img}>
                {info.image != null ? (
                  <Image
                    source={{ uri: info.image.uri }}
                    style={{ width: 150, height: 150, borderRadius: 75 }}
                    resizeMode="cover"
                  />
                ) : (
                  <Avatar.Image
                    size={150}
                    source={require("../../../assets//images/profile.jpeg")}
                  />
                )}
              </TouchableOpacity>

              <TextInput
                mode="outlined"
                style={styles.input}
                label={"Full Name"}
                contentStyle={styles.txtContainer}
                labelTextColor={"black"}
                value={info.fullName}
                onChangeText={(text) => updateState("fullName", text)}
              />
              <TextInput
                mode="outlined"
                style={styles.input}
                label={"Nick Name"}
                contentStyle={styles.txtContainer}
                labelTextColor={"black"}
                value={info.nickName}
                onChangeText={(text) => updateState("nickName", text)}
              />

              <TextInput
                mode="outlined"
                style={styles.input}
                label={"Email"}
                contentStyle={styles.txtContainer}
                labelTextColor={"black"}
                right={
                  <TextInput.Icon style={{ marginTop: 15 }} icon={"email"} />
                }
                value={info.email}
                keyboardType="email-address"
                onChangeText={(text) => updateState("email", text)}
              />

              <TextInput
                mode="outlined"
                style={styles.input}
                label={"Phone"}
                contentStyle={styles.txtContainer}
                labelTextColor={"black"}
                right={
                  <TextInput.Icon style={{ marginTop: 15 }} icon={"phone"} />
                }
                value={info.phone}
                keyboardType="phone-pad"
                onChangeText={(text) => updateState("phone", text)}
              />

              <TextInput
                mode="outlined"
                style={styles.input}
                label={"SSN"}
                contentStyle={styles.txtContainer}
                labelTextColor={"black"}
                value={info.ssn}
                onChangeText={(text) => updateState("ssn", text)}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.skip}>
              <Text style={styles.skipTxt}>Skip</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.continue}
              onPress={() => {
                navigation.navigate("Pin");
              }}
            >
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
});

export { ProfileSetup };
