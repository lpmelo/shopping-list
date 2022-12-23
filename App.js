import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Root from "./src/Root";

export default function App() {
  return (
    <PaperProvider>
      <Root />
    </PaperProvider>
  );
}
