import "react-native-gesture-handler";

import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { PaperProvider, TextInput } from "react-native-paper";
import Navigation from "./src/navigation";

const App: React.FC = () => {
  const [text, setText] = React.useState("");

  return (
    <PaperProvider>
      <Navigation />
      {/* <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
          style={{ width: 200 }}
        />
        <Text>Open up App.tsx to start working on your app!! ok</Text>
        <StatusBar style="auto" />
      </View> */}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
