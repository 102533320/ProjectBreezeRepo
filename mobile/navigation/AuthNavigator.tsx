/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import HomeScreen from "../screens/Authentication/HomeScreen";
import LoginScreen from "../screens/Authentication/LoginScreen";
import LoginPhoneNumber from "../screens/Authentication/LoginPhoneNumber";
import LoginPhonePassword from "../screens/Authentication/LoginPhonePassword";
import LogoutScreen from "../screens/Logout";
import SignupScreen from "../screens/Authentication/SignupScreen";
import ConfirmSignup from "../screens/Authentication/ConfirmSignUp";
import EmailScreen from "../screens/Authentication/SignupEmail";
import PhoneScreen from "../screens/Authentication/SignupNumber";
import SignupPassword from "../screens/Authentication/SignupPassword";
import SignupProfile from "../screens/SetupProfile/SignupProfileDetails";
import GenderScreen from "../screens/SetupProfile/SignupGender";
import GenderPreScreen from "../screens/SetupProfile/SignupGenderPre";
import LocationScreen from "../screens/SetupProfile/SignupLocation";
import InterestScreen from "../screens/SetupProfile/SignupInterest";
import PersonalityScreen from "../screens/SetupProfile/SignupPersonality";
import ResetPassword from "../screens/Authentication/ResetPassword";
import ResetPasswordSubmit from "../screens/Authentication/ResetPasswordSubmit";
import AgeScreen from "../screens/SetupProfile/SignupAge";
import TermofUseScreen from "../screens/Authentication/TermsOfUse";
import ProfileDetailScreen from "../screens/SetupProfile/SignupProfileDetails";
import PrivacypolicyScreen from "../screens/Authentication/PrivacyPolicy";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="LoginPhoneNumber" component={LoginPhoneNumber} />
      <Stack.Screen name="LoginPhonePassword" component={LoginPhonePassword} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ConfirmSignup" component={ConfirmSignup} />
      <Stack.Screen name="SignupEmail" component={EmailScreen} />
      <Stack.Screen name="SignupPassword" component={SignupPassword} />
      <Stack.Screen name="SignupNumber" component={PhoneScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen
        name="ResetPasswordSubmit"
        component={ResetPasswordSubmit}
      />
      <Stack.Screen name="TermOfUse" component={TermofUseScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacypolicyScreen} />

      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}
