import { View, Text, StyleSheet } from "react-native";
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
      <View
        style={{
          width: "100%",
          height: "auto",
          paddingBottom: 20,
        }}>
        <Text
          style={{
            paddingTop: 20,
            paddingLeft: 10,
            fontWeight: 700,
            fontSize: 16,
          }}>
          {data.Term ? data.Term : data.Abbreviation}
        </Text>
        <Text style={{ paddingLeft: 10, fontSize: 12, color: "gray" }}>
          {data.Usage}
        </Text>
        <Text style={styles.term}>
          {data.Definition ? data.Definition : data["Full Form"]}
        </Text>
      </View>
    </View>
  );
};
// abbreviation - height 100
// term - height 150
const styles = StyleSheet.create({
  term: {
    paddingTop: 20,
    paddingLeft: 10,
    lineHeight: 17,
  },
});
export default Card;
