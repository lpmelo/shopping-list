import { Text } from "@react-native-material/core";
import React from "react";
import { ScrollView } from "react-native";
import { Card } from "react-native-paper";

const HorizontalCarousel = ({ data, cardStyle }) => {
  return (
    <ScrollView horizontal>
      {data.map((item, index) => {
        return (
          <Card mode="elevated" key={index} style={cardStyle}>
            <Card.Content
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontStyle: "italic",
                  fontSize: 100,
                }}
              >
                {item.text}
              </Text>
            </Card.Content>
          </Card>
        );
      })}
    </ScrollView>
  );
};

export default HorizontalCarousel;
