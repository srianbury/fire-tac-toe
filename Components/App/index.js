import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import JoinStart from "../JoinStart";
import { AuthenticationProvider } from "../Authentication";
import IsLoggedIn from "../IsLoggedIn";
import Header from "../Header";
import { STYLES } from "../../Constants";

const App = () => (
  <View style={STYLES.container}>
    <AuthenticationProvider>
      <IsLoggedIn>
        <Header />
        <JoinStart />
      </IsLoggedIn>
      <StatusBar style="auto" />
    </AuthenticationProvider>
  </View>
);

export default App;
