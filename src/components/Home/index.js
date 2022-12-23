import * as React from "react";
import { ScrollView, View } from "react-native";
import { Card, Text } from "react-native-paper";
import HorizontalCarousel from "../../../assets/elementComponents/HorizontalCarousel/HorizontalCarousel";
import style from "./style";

const Home = () => {
  const data = [
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "4" },
    { text: "5" },
  ];
  return (
    <ScrollView>
      <Text style={style.greetingsTitle}>
        Bem vinda <Text style={{ color: "#ba2d65" }}>Vidinha</Text>
      </Text>

      <View style={{ marginTop: 25, marginBottom: 25 }}>
        <HorizontalCarousel data={data} cardStyle={style.carouselCard} />
      </View>

      <View style={style.container}>
        <View>
          <Card mode="elevated" style={style.card}>
            <Text>Bem vindo(a)</Text>
          </Card>
        </View>
      </View>

      <View style={style.container}>
        <View>
          <Card mode="elevated" style={style.card}>
            <Text>Bem vindo(a)</Text>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
