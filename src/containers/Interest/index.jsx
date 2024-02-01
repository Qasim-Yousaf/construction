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

const Interest = () => {
  const navigation = useNavigation();
  const [selectedInterest, setSelectedInterest] = React.useState([]);
  const interests = [
    "Hiking",
    "Reading",
    "Cooking",
    "Traveling",
    "Photography",
    "Fitness",
    "Movies",
    "Music",
    "Art",
    "Yoga",
    "Gaming",
    "Technology",
    "Animals",
    "Nature",
    "Dancing",
    "Fashion",
    "Foodie",
    "Sports",
    "Writing",
    "Volunteering",
    "Camping",
    "Gardening",
    "Crafting",
    "Singing",
    "Learning new languages",
    "Meditation",
    "Coffee lover",
    "Wine tasting",
    "Collecting",
    "Board games",
    "DIY projects",
    "Skydiving",
    "Surfing",
    "Astrology",
    "Comic books",
    "Theater",
    "Skiing",
    "Running",
    "Swimming",
    "Science fiction",
    "Concerts",
    "Vintage cars",
    "Karaoke",
    "Archery",
    "Fishing",
    "Motorcycling",
  ];

  const toggleInterest = (interest) => {
    if (selectedInterest.includes(interest)) {
      // If the interest is already selected, remove it
      setSelectedInterest((prev) => prev.filter((item) => item !== interest));
    } else {
      // If the interest is not selected, add it
      setSelectedInterest((prev) => [...prev, interest]);
    }
  };

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
        <Text style={styles.headerTitle}>Choose Your Interest</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.subtitle}>
          Choose Your Interest and get the best recommendation
        </Text>

        <ScrollView
          contentContainerStyle={{
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          {interests.map((i, _) => (
            <TouchableOpacity
              style={[
                styles.interestChip,
                selectedInterest.includes(i) && styles.selectedInterest,
              ]}
              key={_}
              onPress={() => toggleInterest(i)}
            >
              <Text
                style={[
                  styles.interestTxt,
                  selectedInterest.includes(i) && styles.selectedInterestTxt,
                ]}
              >
                {i}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.skip}
          onPress={() => navigation.navigate("Gender")}
        >
          <Text style={styles.skipTxt}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continue}
          onPress={() => navigation.navigate("Gender")}
        >
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
    backgroundColor: "white",
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
  interestChip: {
    borderWidth: 2,
    borderColor: PRIMARY_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 15,
    // height: 50,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedInterest: {
    borderWidth: 2,
    borderColor: PRIMARY_COLOR,
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedInterestTxt: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 12,
    color: "#ffffff",
  },

  interestTxt: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 12,
    color: PRIMARY_COLOR,
  },
});

export { Interest };
