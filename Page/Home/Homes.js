/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Homes extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#fff",
      heigth: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Content>
          <View>
            <Image
              source={require("./assets/depan.png")}
              style={{ width: Dimensions.get("window").width, height: 200 }}
              resizeMode="contain"
            />
          </View>
        </Content>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "#39a39a" }}>
            <Text>tes 111 </Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "rgb(30, 173, 177)" }}>
            <Text>tes 22 </Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "#39a39a" }}>
            <Text>tes 11 </Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "rgb(30, 173, 177)" }}>
            <Text>ttrse </Text>
          </View>
        </View>
      </View>
    );
  }
}
