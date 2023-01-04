import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import { Card, Text } from "react-native-paper";
import HorizontalCarousel from "../../../assets/elementComponents/HorizontalCarousel/HorizontalCarousel";
import LabelText from "../../../assets/elementComponents/LabelText/LabelText";
import LoadingComponent from "../../../assets/elementComponents/LoadingComponent/LoadingComponent";
import { defaultWelcome, welcomeCardText } from "./constants";
import style from "./style";

const Home = () => {
  const [greetingTitles, setGreetingTitles] = useState([]);
  const [previousTitle, setPreviousTitle] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const data = [
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "4" },
    { text: "5" },
  ];

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const pickRandomTitle = (titleArray) => {
    let title = "";
    const pickRandomLength = () => {
      const randomLength = Math.floor(Math.random() * titleArray.length);
      return randomLength;
    };
    title = titleArray[pickRandomLength()];
    return title;
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    setGreetingTitles(["Vidinha", "Nenê", "Gatinha", "Lindinha"]);
  }, []);

  return !refreshing ? (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={style.greetingsTitle}>
        Bem vinda{" "}
        <LabelText
          style={{ color: "#ba2d65" }}
          text={pickRandomTitle(greetingTitles)}
        />
      </Text>

      <View style={style.carouselContainer}>
        <HorizontalCarousel data={data} cardStyle={style.carouselCard} />
      </View>

      <View style={style.container}>
        <View>
          <Card mode="elevated">
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Content style={{ flex: 1 }}>
              <Text variant="titleLarge" style={{ alignSelf: "center" }}>
                {defaultWelcome}
              </Text>
              <Text variant="bodyMedium">
                {welcomeCardText(pickRandomTitle(greetingTitles))},
              </Text>
            </Card.Content>
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
  ) : (
    <>
      <View>
        <LoadingComponent
          visible={refreshing}
          containerStyle={style.refreshDialog}
          loadingSize={30}
          loadingColor={"#ba2d65"}
        />
      </View>
    </>
  );
};

export default Home;
