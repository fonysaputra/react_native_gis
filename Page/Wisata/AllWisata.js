import React, { Component } from "react";

import { View, Image, TouchableOpacity, Dimensions,ActivityIndicator,StyleSheet } from "react-native";
import { Text, Content, Item, Input, Icon } from "native-base";
import axios from "axios";

import url from "../../Server";

export default class AllWisata extends Component {
  static navigationOptions = {
    title: "Semua Wisata",
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
      data_semua_wisata: [],
      pencarian: ""
    };
  }

  getData = e => {
    axios.get(`${url}api.php?operasi=all_wisata&data=${e}`).then(res => {
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
            placeholder="Masukkan Pencarian Wisata"
            onChangeText={e => {
              this.getData(e);
            }}
          />
          <Icon active name="search" />
        </Item>

        <Content style={{ height: 200, flex: 1 }}>
          {this.state.data_semua_wisata.map((dat, key) => {
            return (
              <View key={key}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("DetailWisata", {
                      idWisata: dat.id_wisata,
                      namaWisata: dat.nama_wisata
                    })
                  }
                  style={{
                    marginVertical: 10,
                    alignItems: "center"
                  }}
                >
                  <Image
                    borderRadius={20}
                    source={{
                      uri: url + "images/" + dat.foto_wisata
                    }}
                    style={{
                      height: 200,

                      width: Dimensions.get("window").width
                    }}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                      color: "#0b0b0b"
                    }}
                  >
                    {dat.nama_wisata}
                  </Text>
                  <View
                    style={{
                      marginTop: 10,
                      backgroundColor: "#f72348",
                      height: 2,

                      width: Dimensions.get("window").width - 30
                    }}
                  />
                </TouchableOpacity>
              </View>
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