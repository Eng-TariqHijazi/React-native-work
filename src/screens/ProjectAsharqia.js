import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { useWindowDimensions } from "react-native";

const Data = [
  {
    id: 1,
    item: () => {
      return (
        <View style={styles.childContainer}>
          <Image
            source={require("../../assets/1-removebg-preview.png")}
          ></Image>
          <Text style={styles.textStyle}>CONTRACTING</Text>
        </View>
      );
    },
  },
  {
    id: 2,
    item: () => {
      return (
        <View style={styles.childContainer}>
          <Image source={require("../../assets/card1.png")}></Image>
        </View>
      );
    },
  },
];
export default function ProjectAsharqia() {
  const { height, width } = useWindowDimensions();
  const [point, setpoint] = useState(true);
  const onScroll = (value) => {
    value.nativeEvent.contentOffset.x < width / 2
      ? setpoint(true)
      : setpoint(false);
  };
  // search about expo fonts and how to use it
  return (
    <View style={{ alignItems: "center", height }}>
      <ScrollView
        onScroll={onScroll}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {Data.map((myItem) => {
          return (
            <View key={myItem.id} style={[styles.container, { width }]}>
              {myItem.item()}
            </View>
          );
        })}
      </ScrollView>
      <View style={{ flexDirection: "row", bottom: 200 }}>
        <View 
          style={[
            styles.point,
            {
              backgroundColor: point ? "black" : "#AEAEAE",
              marginHorizontal: 8,
            },
          ]}
        />
        <View
          style={[
            styles.point,
            { backgroundColor: point ? "#AEAEAE" : "black" },
          ]}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  childContainer: {
    flexDirection: "row",
    height: 208.66,
    alignItems: "flex-end",
  },
  textStyle: {
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: -60,
    marginBottom: 10,
  },
  point: {
    width: 14,
    height: 14,
    borderRadius: 1000,
  },
});
