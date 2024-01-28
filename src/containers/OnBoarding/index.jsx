import { OnboardFlow } from "react-native-onboard";

import React from "react";

import { SafeAreaView, Image, StyleSheet } from "react-native";
import { FONT_FAMILY_BOLD, PRIMARY_COLOR } from "../../constants";
import { useNavigation } from "@react-navigation/core";

const OnBoarding = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <OnboardFlow
        onDone={() => navigation.navigate("SignInOption")}
        primaryButtonTextStyle={{
          fontFamily: FONT_FAMILY_BOLD,
          fontSize: 18,
        }}
        primaryButtonStyle={{
          backgroundColor: PRIMARY_COLOR,
        }}
        paginationSelectedColor={PRIMARY_COLOR}
        paginationColor="grey"
        pages={[
          {
            title: "It's easy to find soul mate nearby & around you ",
            imageUri: Image.resolveAssetSource(
              require("../../../assets/images/111.png")
            ).uri,
            titleStyle: styles.text,
          },
          {
            title: "You can share, chat, and video call with your match",
            imageUri: Image.resolveAssetSource(
              require("../../../assets/images/55.png")
            ).uri,
            titleStyle: styles.text,
          },

          {
            title: "Don't wait anymore, find your soul mate right now",
            imageUri: Image.resolveAssetSource(
              require("../../../assets/images/333.png")
            ).uri,
            titleStyle: styles.text,
          },
        ]}
        type={"fullscreen"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 32,
  },
});

export { OnBoarding };
