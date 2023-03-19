import { View, Text } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants/theme";
import Header from "./Header";
const Card = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}>
      <View style={{ width: "100%", height: 150 }}>
        <Text>{data.Abbreviation ? data.Abbreviation : data.Term}</Text>
        <Text>{data.Definition ? data.Definition : data["Full Form"]}</Text>
      </View>
    </View>
  );
};

export default Card;
