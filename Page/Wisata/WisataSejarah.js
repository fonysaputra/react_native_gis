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
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import {
  Content,
  Text,
  Card,
  CardItem,
  Item,
  Input,
  Body,
  Left,
  Icon
} from "native-base";
import axios from "axios";

import url from "../../Server";


export default class WisataSejarah extends Component {
  static navigationOptions = {
    title: "Wisata Sejarah",
    headerStyle: {
      backgroundColor: "#fff",
      textAlign: "center"
    },
    headerTintColor: "#000",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      data_semua_wisata: []
    };
  }
  getData = e => {
    axios.get(`${url}api.php?operasi=wisata_sejarah&data=${e}`).then(res => {
      const data = res.data;
      this.setState({ data_semua_wisata: data });
    });
  };

  componentDidMount() {
    this.getData("");
  }
  render() {
    if(this.state.data_semua_wisata.length === 0){
      return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={{textAlign:"center",color:"#000"}}>Loading ...</Text>
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <Item rounded style={{ margin: 10, marginLeft: 10 }}>
          <Input
            style={{ paddingLeft: 10 }}
            placeholder="Pencarian Wisata Sejarah"
            onChangeText={e => {
              this.getData(e);
            }}
          />
          <Icon active name="search" />
        </Item>
        <Content>
          {this.state.data_semua_wisata.map((dat, key) => {
            return (
              <TouchableOpacity
                key={key}
                onPress={() =>
                  this.props.navigation.navigate("DetailWisata", {
                    idWisata: dat.id_wisata,
                    namaWisata: dat.nama_wisata
                  })
                }
              >
                <Card style={{ marginBottom: 20 }}>
                  <CardItem cardBody>
                    <Image
                      source={{
                        uri: url + "images/" + dat.foto_wisata
                      }}
                      style={{
                        height: 200,
                        flex: 1
                      }}
                    />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Icon name="paper-plane" />
                    </Left>

                    <Text>{dat.nama_wisata}</Text>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            );
          })}
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})