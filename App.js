import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./src/screens/dashboard";
import Home from "./src/screens/home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: "Home",
            headerStyle: {
              backgroundColor: "black",
              height: 110,
            },
          })}
        />

        <Stack.Screen
          name="Dashbaord"
          component={Dashboard}
          options={({ navigation }) => ({
            title: "Dashboard",
            headerStyle: {
              backgroundColor: "black",
              height: 110,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
