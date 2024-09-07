import { ThemedView } from "@/components/common/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

const Profile = () => {
  return <ThemedView style={styles.container}></ThemedView>;
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
