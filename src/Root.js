import * as React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import BottomNavigationBar from "./components/BottomNavigationBar";

const Root = () => {
  return (
    <>
      <StatusBar backgroundColor={"#ba2d65"} />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log("Pressed")}
      />
      <BottomNavigationBar />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 10,
    bottom: 90,
    zIndex: 9,
    backgroundColor: "#ff94c2",
  },
});

export default Root;
