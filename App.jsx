import "react-native-gesture-handler";

import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
import { useFonts } from "expo-font";
import { allFonts } from "./assets/fonts";
import * as SplashScreen from "expo-splash-screen";

const App = () => {
  const [fontsLoaded] = useFonts(allFonts);

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  React.useLayoutEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar style="auto" />
          <Navigation />
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
};

export default App;
