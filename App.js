import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Root from "./src/Root";
import { Provider } from "react-redux";
import { globalStore } from "./src/features/store";

export default function App() {
  return (
    <Provider store={globalStore}>
      <PaperProvider>
        <Root />
      </PaperProvider>
    </Provider>
  );
}
