import React, { useContext } from "react";
import { View, Text } from "react-native";
import AuthenticationContext from "../Authentication";

const HeaderContainer = () => {
  const { user } = useContext(AuthenticationContext);
  return <HeaderView username={user.username} />;
};

const HeaderView = ({ username }) => (
  <View>
    <Text>{username}</Text>
  </View>
);

export default HeaderContainer;
