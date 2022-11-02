// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SplashScreen from "./screens/SplashScreen";
import DrawerNavigatorRoutes from "./screens/DrawerNavigationRoutes";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import OrderApproveScreen from "./screens/OrderApproveScreen";
import EditDraftScreen from "./screens/EditDraftScreen";
import AddNewDraftScreen from "./screens/AddNewDraftScreen";

const Stack = createNativeStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigatorRoutes}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="OrderDetailScreen"
          component={OrderDetailScreen}
          options={{
            title: "Order Detail", //Set Header Title
          }}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderApproveScreen"
          component={OrderApproveScreen}
          options={{
            title: "Approve Order", //Set Header Title
          }}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditDraftScreen"
          component={EditDraftScreen}
          options={{
            title: "Add The Products", //Set Header Title
          }}
          // options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AddNewDraftScreen"
          component={AddNewDraftScreen}
          options={{
            title: "Add New Draft Order", //Set Header Title
          }}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start worhhking on app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
