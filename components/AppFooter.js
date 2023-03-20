import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AppFooter = () => {
  return (
    <View style={styles.footer}>
      <Text>Made with ❤️ Airbus IN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppFooter;
