import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  refreshDialog: {
    width: "20%",
    alignSelf: "center",
  },
  greetingsTitle: {
    marginTop: 60,
    marginLeft: 10,
    fontSize: 40,
    textAlign: "left",
  },
  listTitle: {
    marginTop: 60,
    marginLeft: 10,
    fontSize: 28,
    textAlign: "left",
  },
  card: {
    width: "100%",
    paddingTop: 300,
  },
  carouselContainer: {
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  carouselCard: {
    display: "flex",
    width: 200,
    height: 200,
    marginLeft: 7,
    marginRight: 7,
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogTextContent: {
    textAlign: "justify",
    marginTop: 30,
  },
  dialogImage: {
    height: "55%",
    width: "100%",
    borderRadius: 5,
  },
});

export default style;
