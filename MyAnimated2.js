import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const MyAnimated2 = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        // pan.setOffset({
        //   x: pan.x._value,
        //   y: pan.y._value,
        // });
        // pan.extractOffset();
      },
      onPanResponderMove: (e, gestureState) => {
        console.log(gestureState);
        // return Animated.event([null, { dx: pan.x, dy: pan.y }]);
        pan.setValue({ x: gestureState.dx, y: gestureState.dy });
      },

      onPanResponderRelease: (e, gestureState) => {
        console.log(gestureState.moveX, gestureState.moveY);
        // pan.flattenOffset();
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});

export default MyAnimated2;
