/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
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

import Server from "../../Server";

export default class Pariwisata extends Component {
  static navigationOptions = {
    title: "Pariwisata",
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
        <StatusBar StatusBarAnimation="slide" backgroundColor="#0c8fc4" />
        <Content>
          <View style={{ height: 200 }}>
            <Image
              source={require("../../assets/depan.png")}
              style={{ width: Dimensions.get("window").width, height: 200 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ height: 400 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  margin: 20
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Wisata", {
                      idWisata: 1,
                      otherParam: "Wisata Alam"
                    })
                  }
                >
                  <Card style={{ alignItems: "center" }}>
                    <CardItem>
                      <Image
                        source={require("../../assets/alam.png")}
                        style={{
                          width: 70,
                          height: 70,
                          margin: "auto"
                        }}
                        resizeMode="contain"
                      />
                    </CardItem>
                    <View
                      style={{
                        height: 2,
                        marginTop: 10,
                        width: 100,
                        backgroundColor: "#070807"
                      }}
                    />
                    <CardItem>
                      <Text
                        style={{
                          color: "#0b0b09",
                          fontSize: 15,
                          fontWeight: "bold"
                        }}
                      >
                        Alam
                      </Text>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 1,
                  margin: 20
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("WisataSejarah")
                  }
                >
                  <Card style={{ alignItems: "center" }}>
                    <CardItem>
                      <Image
                        source={require("../../assets/sejarah.png")}
                        style={{
                          width: 70,
                          height: 70,
                          margin: "auto"
                        }}
                        resizeMode="contain"
                      />
                    </CardItem>
                    <View
                      style={{
                        height: 2,
                        marginTop: 10,
                        width: 100,
                        backgroundColor: "#070807"
                      }}
                    />
                    <CardItem>
                      <Text
                        style={{
                          color: "#0b0b09",
                          fontSize: 15,
                          fontWeight: "bold"
                        }}
                      >
                        Sejarah
                      </Text>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  margin: 20
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("WisataBelanja")
                  }
                >
                  <Card style={{ alignItems: "center" }}>
                    <CardItem>
                      <Image
                        source={require("../../assets/belanja.png")}
                        style={{
                          width: 70,
                          height: 70,
                          margin: "auto"
                        }}
                        resizeMode="contain"
                      />
                    </CardItem>
                    <View
                      style={{
                        height: 2,
                        marginTop: 10,
                        width: 100,
                        backgroundColor: "#070807"
                      }}
                    />
                    <CardItem>
                      <Text
                        style={{
                          color: "#0b0b09",
                          fontSize: 15,
                          fontWeight: "bold"
                        }}
                      >
                        Belanja
                      </Text>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 1,
                  margin: 20
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("WisataKuliner")
                  }
                >
                  <Card style={{ alignItems: "center" }}>
                    <CardItem>
                      <Image
                        source={require("../../assets/kuliner.png")}
                        style={{
                          width: 70,
                          height: 70,
                          margin: "auto"
                        }}
                        resizeMode="contain"
                      />
                    </CardItem>
                    <View
                      style={{
                        height: 2,
                        marginTop: 10,
                        width: 100,
                        backgroundColor: "#070807"
                      }}
                    />
                    <CardItem>
                      <Text
                        style={{
                          color: "#0b0b09",
                          fontSize: 15,
                          fontWeight: "bold"
                        }}
                      >
                        Kuliner
                      </Text>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Content>
      </View>
    );
  }
}
