import React, { useState, useContext } from "react";
import { Button, Text, TextInput, View } from "react-native";
import AuthenticationContext from "../Authentication";
import { STYLES } from "../../Constants/";

const IsLoggedInContainer = ({ children }) => {
  const { user, login } = useContext(AuthenticationContext);

  if (!user) {
    return <LoginContainer login={login} />;
  }

  return <View>{children}</View>;
};

const LoginContainer = ({ login }) => {
  const [username, setUsername] = useState("");
  return (
    <LoginView username={username} setUsername={setUsername} login={login} />
  );
};

const LoginView = ({ username, setUsername, login }) => (
  <View style={STYLES.w100}>
    <Text>Username:</Text>
    <TextInput
      style={STYLES.textInput}
      onChangeText={text => setUsername(text)}
      value={username}
    />
    <Button
      onPress={() => login(username)}
      title="Login"
      color="#841584"
      accessibilityLabel="Press to login"
    />
  </View>
);

export default IsLoggedInContainer;
