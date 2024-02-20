import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const introductionImage = require("../assets/introduction_image.png");
const relaxImage = require("../assets/relax_image.png");

const Onboarding = () => {
  const { height: WINDOW_HEIGHT } = Dimensions.get("window");

  const screen1Position = useSharedValue(0);
  const screen2Position = useSharedValue(WINDOW_HEIGHT);

  const screen1Styles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: screen1Position.value }],
    };
  });
  const screen2Styles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: screen1Position.value }],
    };
  });

  const onBeginOnboarding = () => {
    screen1Position.value = withTiming(-WINDOW_HEIGHT, { duration: 1500 });
    screen2Position.value = withTiming(0, { duration: 1500 });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f5ebe2" }}>
      <Animated.View style={[screen1Styles, { height: "100%" }]}>
        <View style={{ backgroundColor: "#141e30", height: 15 }} />
        <Image
          source={introductionImage}
          alt="introduction image"
          style={{ width: "100%" }}
        />
        <View style={{ rowGap: 40 }}>
          <View
            style={{
              marginHorizontal: "15%",
              alignItems: "center",
              rowGap: 10,
            }}
          >
            <Text style={styles.heading}>Clearhead</Text>
            <Text style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </Text>
          </View>
          <Pressable onPress={onBeginOnboarding}>
            <View
              style={{
                backgroundColor: "#141e30",
                alignSelf: "center",
                borderRadius: 999,
                paddingVertical: 16,
                paddingHorizontal: 32,
              }}
            >
              <Text style={{ color: "#e2e7f1" }}>Let's begin</Text>
            </View>
          </Pressable>
        </View>
      </Animated.View>
      <Animated.View
        style={[
          screen2Styles, // TODO:
          {
            height: "100%",
            justifyContent: "center",
          },
        ]}
      >
        <View>
          <Text style={styles.heading}>Relax</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Text>
          <Image source={relaxImage} alt="Relax" />
        </View>
      </Animated.View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
