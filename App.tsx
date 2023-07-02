import "react-native-gesture-handler";

import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";

const App: React.FC = () => {
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
