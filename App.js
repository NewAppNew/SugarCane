import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/Login";
import { StatusBar } from "react-native";
import DashboardScreen from "./Screens/Dashboard";
import ProfileScreen from "./Screens/Profile";
import CaneBillScreen from "./Screens/CaneBill";
import CaneWightScreen from "./Screens/CaneWight";
import CurrentCropScreen from "./Screens/CurruntCrops";


const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FAFFF3" translucent = {true}/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"  options={{headerShown: false}}  component={LoginScreen} />   
        <Stack.Screen name="Dashboard"  options={{headerShown: false}}  component={DashboardScreen} />    
        <Stack.Screen name="Profile"  options={{headerShown: false}}  component={ProfileScreen} />    
        <Stack.Screen name="CaneBill"  options={{headerShown: false}}  component={CaneBillScreen} />   
        <Stack.Screen name="CaneWight"  options={{headerShown: false}}  component={CaneWightScreen} />    
        <Stack.Screen name="CurruntCrop"  options={{headerShown: false}}  component={CurrentCropScreen} />    
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}