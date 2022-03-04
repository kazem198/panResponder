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

const Apple2 = () => {
  //   useEffect(() => {
  const animation = useRef(
    new Animated.ValueXY({ x: 0, y: SCREEN_HIGHT - 90 })
  ).current;
  //   }, []);

  const animatedHight = {
    transform: animation.getTranslateTransform(),
  };
  //   console.log(animatedHight);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gestureState) => {
      animation.extractOffset();
      //       console.log("first");
      console.log(animation.y, "dy in grant");
    },
    onPanResponderMove: (evt, gestureState) => {
      // console.log(gestureState.dy)
      animation.setValue({ x: 0, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dy < 0) {
        if (gestureState.moveY < 120) {
          console.log("Ok");
          Animated.spring(animation.y, {
            toValue: 0,
            tension: 1,
            useNativeDriver: false,
          }).start();
        } else {
          console.log("not");
          Animated.spring(animation.y, {
            toValue: -SCREEN_HIGHT + 120,
            // toValue: 0,
            tension: 1,
            useNativeDriver: false,
          }).start();
        }
      } else if (gestureState.dy > 0) {
        if (gestureState.moveY > SCREEN_HIGHT - 120) {
          console.log("Ok20");
          Animated.spring(animation.y, {
            toValue: 0,
            tension: 1,
            useNativeDriver: false,
          }).start();
        } else {
          console.log("firsokt");
          Animated.spring(animation.y, {
            toValue: SCREEN_HIGHT - 120,
            // toValue: 120,
            tension: 1,
            useNativeDriver: false,
          }).start();
        }
      }

      console.log(gestureState.y0, "y0");
      console.log(gestureState.dy, "dy");
      console.log(animation.y, "animation.y");
      console.log(gestureState.moveY, "movy");
      console.log(SCREEN_HIGHT, "screenHight");
    },
  });
  const animatedImageHight = animation.y.interpolate({
    inputRange: [0, SCREEN_HIGHT - 90],
    outputRange: [200, 32],
    extrapolate: "clamp",
  });

  const animatedSongeTitleOpacity = animation.y.interpolate({
    inputRange: [0, SCREEN_HIGHT - 500, SCREEN_HIGHT - 90],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });

  const animatedImageMarginLeft = animation.y.interpolate({
    inputRange: [0, SCREEN_HIGHT - 90],
    outputRange: [SCREEN_WIDTH / 2 - 100, 10],
    extrapolate: "clamp",
  });
  const animatedHeaderHight = animation.y.interpolate({
    inputRange: [0, SCREEN_HIGHT - 90],
    outputRange: [SCREEN_WIDTH / 2, 90],
    extrapolate: "clamp",
  });

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
            height: animatedHeaderHight,
            borderTopWidth: 1,
            borderTopColor: "#ebe5e5",
            flexDirection: "row",
            alignItems: "center",
          }}
          {...panResponder.panHandlers}
        >
          <View style={{ flex: 4, flexDirection: "row", alignItems: "center" }}>
            <Animated.View
              style={{
                height: animatedImageHight,
                width: animatedImageHight,
                marginLeft: animatedImageMarginLeft,
              }}
            >
              <Image
                style={{ flex: 1, width: null, height: null }}
                source={require("./assets/Hotelcalifornia.jpg")}
              />
            </Animated.View>
            <Animated.Text
              style={{
                opacity: animatedSongeTitleOpacity,
                fontSize: 18,
                paddingLeft: 10,
              }}
            >
              Hotel california(live)
            </Animated.Text>
          </View>
          <Animated.View
            style={{
              opacity: animatedSongeTitleOpacity,
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

export default Apple2;
