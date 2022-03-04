import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { useEffect } from "react";
import MyAnimated from "./MyAnimated";
import MyAnimated2 from "./MyAnimated2";
import Apple from "./Apple";
import Apple2 from "./Apple2";
import Apple3 from "./Apple3";

export default function App() {
  const animatedValue = new Animated.Value(0);
  const animatedValue1 = new Animated.Value(0);

  const animatedValue2 = new Animated.Value(0);
  const animatedValue3 = new Animated.Value(0);
  const animatedValue4 = new Animated.Value(0);
  useEffect(() => {
    spin();
  }, []);

  const spin = () => {
    animatedValue.setValue(0);
    animatedValue1.setValue(0);
    animatedValue2.setValue(0);
    animatedValue3.setValue(0);
    animatedValue4.setValue(0);
    Animated.sequence([
      Animated.parallel([
        Animated.timing(animatedValue, {
          toValue: 1,
          easing: Easing.linear,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue1, {
          toValue: 1,
          easing: Easing.linear,
          duration: 3000,
          useNativeDriver: false,
        }),
      ]),

      Animated.parallel([
        Animated.timing(animatedValue2, {
          toValue: 1,
          easing: Easing.linear,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue1, {
          toValue: 1,
          easing: Easing.linear,
          duration: 3000,
          useNativeDriver: false,
        }),
      ]),
      Animated.parallel([
        Animated.timing(animatedValue3, {
          toValue: 1,
          easing: Easing.linear,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue1, {
          toValue: 0,
          easing: Easing.linear,
          duration: 3000,
          useNativeDriver: false,
        }),
      ]),
      Animated.parallel([
        Animated.timing(animatedValue4, {
          toValue: 1,
          easing: Easing.linear,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue1, {
          toValue: 1,
          easing: Easing.linear,
          duration: 3000,
          useNativeDriver: false,
        }),
      ]),
    ]).start(() => spin());
  };

  const marginLeft = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });
  const Routet = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const marginTop = animatedValue2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });
  const marginRight = animatedValue3.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });
  const marginBottom = animatedValue4.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   {/* <Animated.Image
    //     source={require("./assets/icon.png")}
    //     style={{ transform: [{ rotate: Routed }], width: 200, height: 200 }}
    //   /> */}
    //   <Animated.View
    //     style={{
    //       marginLeft,
    //       width: 20,
    //       height: 20,
    //       backgroundColor: "blue",

    //       transform: [{ rotate: Routet }],
    //       marginTop,
    //       marginRight,
    //       marginBottom,
    //     }}
    //   />
    // </View>
    // <MyAnimated2 />
    <Apple2 />
    // <MyAnimated2 />
    // <Apple3 />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
