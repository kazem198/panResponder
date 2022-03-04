import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
  ScrollView,
  Image,
  Slider,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SCREEN_HIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Apple = () => {
  //   useEffect(() => {
  const animation = useRef(
    new Animated.ValueXY({ x: 0, y: SCREEN_HIGHT - 80 })
  ).current;
  //   }, []);

  const animatedHight = {
    transform: animation.getTranslateTransform(),
  };
  //   console.log(animatedHight);
  return (
    <Animated.View style={{ flex: 1, backgroundColor: "white" }}>
      <Animated.View
        style={[
          animatedHight,
          {
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: 10,
            height: SCREEN_HIGHT,
            backgroundColor: "orange",
          },
        ]}
      >
        <Animated.View
          style={{
            height: 80,
            borderTopWidth: 1,
            borderTopColor: "#ebe5e5",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 4, flexDirection: "row", alignItems: "center" }}>
            <Animated.View style={{ height: 32, width: 32, marginLeft: 10 }}>
              <Image
                style={{ flex: 1, width: null, height: null }}
                source={require("./assets/Hotelcalifornia.jpg")}
              />
            </Animated.View>
            <Animated.Text
              style={{ opacity: 1, fontSize: 18, paddingLeft: 10 }}
            >
              Hotel california(live)
            </Animated.Text>
          </View>
          <Animated.View
            style={{
              opacity: 1,
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Ionicons size={32} name="md-pause" />
            <Ionicons size={32} name="md-play" />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default Apple;
