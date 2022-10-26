import React, { useContext, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Cognito from "./auth/CognitoAuth";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import API from "./api/user";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./navigation/AuthNavigator";
import AuthDetailsNavigation from "./navigation/AuthDetailsNavigator";
import HomeNavigator from "./navigation/HomeNavigator";
import Handler from "./auth/context";

export default function App() {
  const [authenticated, setAuthenticated] = useState(Handler.AuthState.Logout);
  const isLoadingComplete = useCachedResources();

  const navigationHandler = () => {
    if (authenticated === Handler.AuthState.Setup) {
      console.log("DETAILS");
      return <AuthDetailsNavigation />;
    }
    if (authenticated === Handler.AuthState.Login) {
      console.log("HOME");
      return <HomeNavigator />;
    }
    if (authenticated === Handler.AuthState.Logout) {
      console.log("LOGIN");
      return <AuthNavigation />;
    }
  };

  useEffect(() => {
    Cognito.isAuthenticated()
      .then(({ attributes }) => {
        if (attributes["custom:completed"] === "true") {
          return setAuthenticated(Handler.AuthState.Login);
        } else return Cognito.signOut();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Handler.Authenticated.Provider
        value={{ authenticated, setAuthenticated }}
      >
        <NavigationContainer>{HomeNavigator()}</NavigationContainer>
      </Handler.Authenticated.Provider>
    );
  }
}
/**<NavigationContainer>{handleAuthNavigation()}</NavigationContainer>*/
