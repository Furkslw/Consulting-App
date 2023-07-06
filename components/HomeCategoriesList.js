import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { Box } from "@react-native-material/core";
import HomeCategoryCard from "./HomeCategoryCard";
import samplePopularCategories from "../enums/sample-popular-categories";

export default function HomeCategoriesList() {
  return (
    <Box w={"100%"} h={"80%"} style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={samplePopularCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HomeCategoryCard item={item} />}
        numColumns={2}
      />
    </Box>
  );
}
const styles = StyleSheet.create({
  container: {},
});
