import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { COLORS, SHADOWS, SIZES } from "../constants/theme";
import { logo } from "../assets/logo.png";
const Header = (props) => {
  // const [word, setWord] = useState("");
  const handleChange = (e) => {
    setSearchText(e.nativeEvent.text);
    // console.log(e.nativeEvent.text);
  };

  const { searchText, setSearchText } = props;
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Image
          source={require("../assets/logo.png")}
          resizeMode="contain"
          style={{
            width: 200,
            height: 150,
          }}
        />
        {/* can implement a light mode to dark mode toggle over here in future */}
      </View>
      <View>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}>
          <Image
            source={require("../assets/search.png")}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
          />
          <TextInput
            placeholder="Search here"
            style={{ flex: 1, fontSize: 18 }}
            onChange={(e) => handleChange(e)}
            value={searchText}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
