import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
  ScrollView,
  Image,
} from "react-native";
import SliderBase from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Apple3 = () => {
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);

  var scrollOffset = 0;

  const animation = new Animated.ValueXY({ x: 0, y: SCREEN_HEIGHT - 90 });

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      if (
        (isScrollEnabled && scrollOffset <= 0 && gestureState.dy > 0) ||
        (!isScrollEnabled && gestureState.dy < 0)
      ) {
        return true;
      } else {
        return false;
      }
    },
    onPanResponderGrant: (evt, gestureState) => {
      animation.extractOffset();
    },
    onPanResponderMove: (evt, gestureState) => {
      animation.setValue({ x: 0, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.moveY > SCREEN_HEIGHT - 120) {
        Animated.spring(animation.y, {
          toValue: 0,
          tension: 1,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.moveY < 120) {
        Animated.spring(animation.y, {
          toValue: 0,
          tension: 1,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dy < 0) {
        setIsScrollEnabled(true);

        Animated.spring(animation.y, {
          toValue: -SCREEN_HEIGHT + 120,
          tension: 1,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dy > 0) {
        setIsScrollEnabled(false);
        Animated.spring(animation.y, {
          toValue: SCREEN_HEIGHT - 120,
          tension: 1,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const animatedHeight = {
    transform: animation.getTranslateTransform(),
  };

  const animatedImageHeight = animation.y.interpolate({
    inputRange: [0, SCREEN_HEIGHT - 90],
    outputRange: [200, 32],
    extrapolate: "clamp",
  });
  const animatedSongTitleOpacity = animation.y.interpolate({
    inputRange: [0, SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 90],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });
  const animatedImageMarginLeft = animation.y.interpolate({
    inputRange: [0, SCREEN_HEIGHT - 90],
    outputRange: [SCREEN_WIDTH / 2 - 100, 10],
    extrapolate: "clamp",
  });
  const animatedHeaderHeight = animation.y.interpolate({
    inputRange: [0, SCREEN_HEIGHT - 90],
    outputRange: [SCREEN_HEIGHT / 2, 90],
    extrapolate: "clamp",
  });
  const animatedSongDetailsOpacity = animation.y.interpolate({
    inputRange: [0, SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 90],
    outputRange: [1, 0, 0],
    extrapolate: "clamp",
  });
  const animatedBackgroundColor = animation.y.interpolate({
    inputRange: [0, SCREEN_HEIGHT - 90],
    outputRange: ["rgba(0,0,0,0.5)", "white"],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={{ flex: 1, backgroundColor: animatedBackgroundColor }}
    >
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          animatedHeight,
          {
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: 10,
            backgroundColor: "white",
            height: SCREEN_HEIGHT,
          },
        ]}
      >
        <ScrollView
          scrollEnabled={isScrollEnabled}
          scrollEventThrottle={16}
          onScroll={(event) => {
            scrollOffset = event.nativeEvent.contentOffset.y;
          }}
        >
          <Animated.View
            style={{
              height: animatedHeaderHeight,
              borderTopWidth: 1,
              borderTopColor: "#ebe5e5",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{ flex: 4, flexDirection: "row", alignItems: "center" }}
            >
              <Animated.View
                style={{
                  height: animatedImageHeight,
                  width: animatedImageHeight,
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
                  opacity: animatedSongTitleOpacity,
                  fontSize: 18,
                  paddingLeft: 10,
                }}
              >
                Hotel California(Live)
              </Animated.Text>
            </View>
            <Animated.View
              style={{
                opacity: animatedSongTitleOpacity,
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Ionicons name="md-pause" size={32} />
              <Ionicons name="md-play" size={32} />
            </Animated.View>
          </Animated.View>

          <Animated.View
            style={{
              height: animatedHeaderHeight,
              opacity: animatedSongDetailsOpacity,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 22 }}>
                Hotel California (Live)
              </Text>
              <Text style={{ fontSize: 18, color: "#fa95ed" }}>
                Eagles - Hell Freezes Over
              </Text>
            </View>

            <View
              style={{
                height: 40,
                width: SCREEN_WIDTH,
                alignItems: "center",
              }}
            >
              <SliderBase
                style={{ width: 300 }}
                step={1}
                minimumValue={18}
                maximumValue={71}
                value={18}
              />
            </View>

            <View
              style={{
                flex: 2,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Ionicons name="md-radio" size={40} />
              <Ionicons name="md-pause" size={50} />
              <Ionicons name="md-fast-food" size={40} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingBottom: 20,
              }}
            >
              <Ionicons name="md-add" size={32} style={{ color: "#fa95ed" }} />
              <Ionicons
                name="md-mic-off-circle"
                size={32}
                style={{ color: "#fa95ed" }}
              />
            </View>
          </Animated.View>
          <View style={{ height: 1000 }} />
        </ScrollView>
      </Animated.View>
    </Animated.View>
  );
};
export default Apple3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
