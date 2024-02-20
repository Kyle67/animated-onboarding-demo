import { NavigationProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Onboarding from "./screens/Onboarding";

type StackNavigatorProps = {
  Home: undefined;
  Onboarding: undefined;
};

export type NavigationProps = NavigationProp<StackNavigatorProps>;

const Stack = createStackNavigator<StackNavigatorProps>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
