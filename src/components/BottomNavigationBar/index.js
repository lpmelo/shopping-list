import React, { useState } from "react";
import { BottomNavigation, Text, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { changePageNavigationIndex } from "../../features/global/GlobalSlice";
import Home from "../Home";
import style from "./style";

const HomeRoute = () => <Home />;

const ListRoute = () => <Text>Lista de Compras</Text>;

const ProductsRoute = () => <Text>Produtos</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const BottomNavigationBar = () => {
  const dispatch = useDispatch();
  const DefaultTheme = useTheme();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#f06292",
      secondary: "#f48fb1",
      secondaryContainer: "#f48fb1",
    },
  };

  const { pageNavigationIndex } = useSelector((state) => state.global);

  const setPageNavigationIndex = (payload) => {
    dispatch(changePageNavigationIndex(payload));
  };

  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "shoppingList",
      title: "Lista de Compras",
      focusedIcon: "basket",
      unfocusedIcon: "basket-outline",
    },
    {
      key: "products",
      title: "Produtos",
      focusedIcon: "cart",
      unfocusedIcon: "cart-minus",
    },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    shoppingList: ListRoute,
    products: ProductsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index: pageNavigationIndex, routes }}
      onIndexChange={setPageNavigationIndex}
      renderScene={renderScene}
      barStyle={style.barStyle}
      theme={theme}
    />
  );
};

export default BottomNavigationBar;
