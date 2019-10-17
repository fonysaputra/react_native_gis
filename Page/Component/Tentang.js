import React, { Component } from "react";

import { View, Image } from "react-native";
import {
  CardItem,
  Card,
  Text,
  Left,
  Thumbnail,
  Body,
  Content
} from "native-base";

export default class Tentang extends Component {
  static navigationOptions = {
    title: "Tentang Aplikasi",
    headerStyle: {
      backgroundColor: "#fff",
      textAlign: "center"
    },
    headerTintColor: "#000",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require("../../assets/logorio.png")} />
              <Text style={{ fontSize: 18, color: "#080908" }}>
                Pariwisata Lampung Tengah
              </Text>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Versi Aplikasi </Text>
            </Left>
            <Body>
              <Text>: V1.0 </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Nama Pengembang </Text>
            </Left>
            <Body>
              <Text>: Rio </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Jurusan </Text>
            </Left>
            <Body>
              <Text>: S1 Informatika </Text>
            </Body>
          </CardItem>
        </Card>
        <Content>
          <Card style={{ alignItems: "center", flex: 1 }}>
            <CardItem>
              <Text style={{ color: "#1a08a8", fontSize: 20 }}>
                Universitas Teknokrat Indonesia
              </Text>
            </CardItem>
            <CardItem>
              <Image source={require("../../assets/tekno.png")} />
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  }
}
