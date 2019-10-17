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

import axios from "axios";
import Server from "./Server";

const url = Server+"images/";

export default class App extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#fff",
      textAlign: "center",
      height: 0
    },
    headerTintColor: "#000",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      data_semua_wisata: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios.get(Server + `api.php?operasi=semua_wisata`).then(res => {
      const persons = res.data;
      this.setState({ data_semua_wisata: persons });
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar StatusBarAnimation="slide" backgroundColor="#0c8fc4" />
        <Content>
          <View style={{ height: 200 }}>
            <Image
              source={require("./assets/depan.png")}
              style={{ width: Dimensions.get("window").width, height: 200 }}
              resizeMode="contain"
            />
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={{ marginLeft: 20 }}>Wisata</Text>
            <TouchableOpacity
              style={{ width: Dimensions.get("window").width }}
              onPress={() => {
                this.props.navigation.navigate("AllWisata");
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  marginRight: 80,
                  color: "#1205a8"
                }}
              >
                Lihat Semua
              </Text>
            </TouchableOpacity>
          </View>

          <Content
            horizontal
            style={{
              marginRight: 20,
              marginLeft: 20,
              paddingTop: 10
            }}
          >
            {this.state.data_semua_wisata.map((data, key) => {
              const data_gambar = url + data.foto_wisata;
              return (
                <View key={key}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("DetailWisata", {
                        idWisata: data.id_wisata,
                        namaWisata: data.nama_wisata
                      })
                    }
                  >
                    <Thumbnail
                      source={{
                        uri: data_gambar
                      }}
                      style={{ marginHorizontal: 5 }}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </Content>

          <View style={{ height: 400 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,

                  margin: 20
                }}
              >
                <TouchableOpacity
                  style={{ backgroundColor: "#b9590a" }}
                  onPress={() => this.props.navigation.navigate("Maps")}
                >
                  <Card style={{ alignItems: "center" }}>
                    <CardItem>
                      <Image
                        source={require("./assets/maps.png")}
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
                        Maps
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
                  style={{
                    backgroundColor: "#b9590a"
                  }}
                  onPress={() => this.props.navigation.navigate("Pariwisata")}
                >
                  <Card style={{ alignItems: "center" }}>
                    <CardItem>
                      <Image
                        source={require("./assets/wisataalam.png")}
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
                        Pariwisata
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
                  style={{
                    backgroundColor: "#b9590a"
                  }}
                  onPress={() => this.props.navigation.navigate("Bantuan")}
                >
                  <Card style={{ alignItems: "center" }}>
                    <CardItem>
                      <Image
                        source={require("./assets/help.png")}
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
                        Bantuan
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
                  style={{
                    backgroundColor: "#b9590a"
                  }}
                  onPress={() => this.props.navigation.navigate("Tentang")}
                >
                  <Card style={{ alignItems: "center" }}>
                    <CardItem>
                      <Image
                        source={require("./assets/aboutus.png")}
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
                        Tentang
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
