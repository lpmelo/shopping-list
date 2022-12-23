import react from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./style";

const ItemList = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>{data.description}</Text>
    </View>
  );
};

export default ItemList;
