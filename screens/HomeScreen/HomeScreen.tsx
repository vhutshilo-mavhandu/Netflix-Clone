import * as React from "react";
import { FlatList, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

import styles from "./style";
import categories from "../../assets/data/categories";
import HomeCategory from "../../components/HomeCategories";

const HomeScreen = ({ navigation }: RootTabScreenProps<"Home">) => {
  const firstCategories = categories.items[0];

  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;
