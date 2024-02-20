import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import { NavigationProps } from "../AppNavigator";

const Home = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={{ paddingTop: "50%", flexGrow: 1 }}>
      <Button
        title="Navigate to onboarding"
        onPress={() => navigation.navigate("Onboarding")}
      />
    </View>
  );
};

export default Home;
