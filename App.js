import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import { SHADOWS, COLORS, FONTS, SIZES } from "./constants/theme";
import { Header, FocusedStatusBar, Card } from "./components/index";
import { COMBINEDATA } from "./constants/CombinedData";
import { useEffect, useState } from "react";

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setData(COMBINEDATA);
  }, []);

  useEffect(() => {
    const searched_text = searchText.toLowerCase();
    // console.log(searched_text);
    const new_data = modifyData(searched_text);
    setData(new_data);
  }, [searchText]);

  function modifyData(searched_text) {
    const newData = [];
    COMBINEDATA.forEach((item) => {
      const title = (
        item.Abbreviation ? item.Abbreviation : item.Term
      ).toLowerCase();
      if (title.includes(searched_text)) {
        newData.push(item);
      }
    });
    return newData;
  }

  if (!loaded) return null;
  return (
    <SafeAreaView style={styles.container}>
      {/* <FocusedStatusBar background={COLORS.primary} /> */}
      <View style={{ flex: 1 }}>
        <Header
          searchText={searchText}
          setSearchText={(e) => setSearchText(e)}
        />
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Card data={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex: -1,
          }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
