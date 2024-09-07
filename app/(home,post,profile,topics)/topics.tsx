import { ThemedView } from "@/components/common/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

const Topics = () => {
  return <ThemedView style={styles.container}></ThemedView>;
};

export default Topics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
