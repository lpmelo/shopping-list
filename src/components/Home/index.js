import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, View, Image } from "react-native";
import { Card, Dialog, Portal, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import HorizontalCarousel from "../../../assets/elementComponents/HorizontalCarousel/HorizontalCarousel";
import LabelText from "../../../assets/elementComponents/LabelText/LabelText";
import LoadingComponent from "../../../assets/elementComponents/LoadingComponent/LoadingComponent";
import {
  changeGreetingMessages,
  changeUserName,
} from "../../features/home/HomeSlice";
import { defaultWelcome, welcomeCardText } from "./constants";
import style from "./style";

const Home = () => {
  const { lastList } = useSelector((state) => state.global);
  const { greetingMessages, username } = useSelector((state) => state.homePage);
  const [welcomeModal, setWelcomeModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

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

  const handleTouch = (event) => {
    setWelcomeModal(true);
  };

  const handleDismissModal = () => {
    setWelcomeModal(false);
  };

  useEffect(() => {
    dispatch(
      changeGreetingMessages(["Vidinha", "Nenê", "Gatinha", "Lindinha"])
    );
  }, [refreshing]);

  useEffect(() => {
    dispatch(changeUserName(pickRandomTitle(greetingMessages)));
  }, [greetingMessages]);

  return !refreshing ? (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={style.greetingsTitle}>
          Bem vinda <LabelText style={{ color: "#ba2d65" }} text={username} />
        </Text>

        <View style={style.carouselContainer}>
          <HorizontalCarousel data={data} cardStyle={style.carouselCard} />
        </View>

        <View style={style.container}>
          <View>
            <Card mode="elevated" onTouchEndCapture={(e) => handleTouch(e)}>
              <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
              <Card.Content style={{ flex: 1 }}>
                <Text variant="titleLarge" style={{ alignSelf: "center" }}>
                  {defaultWelcome}
                </Text>
                <Text variant="bodyMedium">{welcomeCardText(username)}</Text>
              </Card.Content>
            </Card>
          </View>
        </View>
        {lastList.length ? (
          <>
            <Text style={style.listTitle}>
              Última lista de compras{" "}
              <LabelText style={{ color: "#ba2d65" }} text={"criada"} />
            </Text>
            <View style={style.container}>
              <View>
                <Card mode="elevated" style={style.card}>
                  <Text>Esse card vai conter a última lista criada</Text>
                </Card>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
      </ScrollView>
      {welcomeModal && (
        <Portal>
          <Dialog visible={welcomeModal} onDismiss={handleDismissModal}>
            <Dialog.Title style={style.dialogTitle}>Bem vinda!</Dialog.Title>
            <Dialog.Content style={{ height: 300 }}>
              <Image
                source={{ uri: "https://picsum.photos/700" }}
                style={style.dialogImage}
              />
              <Text style={style.dialogTextContent}>
                {welcomeCardText(username)}
              </Text>
            </Dialog.Content>
          </Dialog>
        </Portal>
      )}
    </>
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
