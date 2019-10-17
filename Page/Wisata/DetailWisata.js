import React, { Component } from "react";

import axios from "axios";
import { View, Image, TouchableOpacity,ActivityIndicator,StyleSheet } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Icon,
  Text,
  Right,
  Body,
  Thumbnail,
  Left,
  Button
} from "native-base";
import ImageSlider from 'react-native-image-slider';

import url from "../../Server";

import getDirections from 'react-native-google-maps-directions';

var idWisata = "";
var foto =[];
export default class DetailWisata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail_wisata: [],
      images : []
    };
    foto=[];
  }
    
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("namaWisata"),
      headerStyle: {
        backgroundColor: "#fff",
        textAlign: "center"
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  getGaleri = e => {
    axios.get(`${url}api.php?operasi=galeri_foto&data=${e}`).then(res => {
      const data = res.data;
    
      this.setState({ images: data });
    });
    
  };

  getData = e => {
    axios.get(`${url}api.php?operasi=detail_wisata&id=${e}`).then(res => {
      const data = res.data;
      this.setState({ detail_wisata: data });
    });
  };


  handleGetDirections = () => {
    {this.state.detail_wisata.map((data)=>{
      lat_sekarang=data.latitude;
      lng_sekarang=data.longitude; 
})}
    navigator.geolocation.getCurrentPosition(
      position => {
      
    
    const data = {
       source: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      },
      destination: {
        latitude:  parseFloat(lat_sekarang),
        longitude: parseFloat(lng_sekarang)
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ]
     
    }
    getDirections(data)
  });
}

  componentDidMount() {
    this.getData(idWisata);
    this.getGaleri(idWisata);
  }

  render() { 

    const { navigation } = this.props;
    idWisata = navigation.getParam("idWisata", "");
    if(this.state.detail_wisata.length === 0){
      return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={{textAlign:"center",color:"#000"}}>Loading ...</Text>
        </View>
      )
    }
  
    return (
      <View style={{ flex: 1 }}>
        <Content>
        <View style={{width:"100%", height:170}}>
        {
          this.state.images.map((data)=>{
          foto.push(url + "images/" + data.foto_galeri)
          })
        }
        <ImageSlider
           
          loopBothSides
          autoPlayWithInterval={6000}
          images={foto} />
          </View>

          {this.state.detail_wisata.map((dat, key) => {
            return (

              <Card key={key}>
                <CardItem>
                <Left>
                <Thumbnail source={{uri : url + "images/" + dat.foto_wisata}} />
                  <Body>
                    <Text style={{ fontSize: 17 }}>{dat.nama_tipe}</Text>
                    <Text note style={{fontSize:16}}>Lokasi: Lampung Tengah</Text>
                  </Body>
                  </Left>
                 
                </CardItem>
                <CardItem>
                  <Text
                    style={{ backgroundColor: "#eb1a9c", flex: 1, height: 1 }}
                  />
                </CardItem>
            
                <CardItem>
                  <Left>
                    <Text style={{ color: "#0a090a" }}>Nama Wisata :</Text>
                  </Left>

                  <Body>
                    <Text style={{ color: "#0a090a" }}>{dat.nama_wisata}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text style={{ color: "#0a090a" }}>Alamat :</Text>
                  </Left>

                  <Body>
                    <Text style={{ color: "#0a090a" }}>{dat.alamat}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text style={{ color: "#0a090a" }}>Sarana :</Text>
                  </Left>

                  <Body>
                    <Text style={{ color: "#0a090a" }}>
                      {dat.sarana_prasarana}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text style={{ color: "#0a090a" }}>Biaya :</Text>
                  </Left>

                  <Body>
                    <Text style={{ color: "#0a090a" }}>{dat.biaya}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Text
                    style={{ backgroundColor: "#eb1a9c", flex: 1, height: 2 }}
                  />
                </CardItem>
                <CardItem>
                  <Left>
                    <Text style={{ color: "#0a090a" }}>Waktu Buka </Text>
                  </Left>

                  <Right>
                    <Icon name="time" />
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text style={{ color: "#0a090a" }}>{dat.hari}</Text>
                  </Left>

                  <Right>
                    <Text style={{ color: "#0a090a" }}>{dat.buka}</Text>
                  </Right>
                </CardItem>
              </Card>
            );
          })}
          <Button style={{margin:10}} onPress={this.handleGetDirections} bordered info>
            <Text>Tunjukan Jalur</Text>
          </Button>
        </Content>
        
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ margin: 10, flex: 1 }}
            onPress={() => this.props.navigation.navigate("WisataSejarah")}
          >
            <Thumbnail
              source={require("../../assets/sejarah.png")}
              style={{ marginHorizontal: 2 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10, flex: 1 }}
            onPress={() => this.props.navigation.navigate("Wisata")}
          >
            <Thumbnail
              source={require("../../assets/alam.png")}
              style={{ marginHorizontal: 2 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10, flex: 1 }}
            onPress={() => this.props.navigation.navigate("WisataBelanja")}
          >
            <Thumbnail
              source={require("../../assets/belanja.png")}
              style={{ marginHorizontal: 2 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10, flex: 1 }}
            onPress={() => this.props.navigation.navigate("WisataKuliner")}
          >
            <Thumbnail
              source={require("../../assets/kuliner.png")}
              style={{ marginHorizontal: 2 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10, flex: 1 }}
            onPress={() => this.props.navigation.navigate("Homes")}
          >
            <Thumbnail
              source={require("../../assets/home.png")}
              style={{ marginHorizontal: 2 }}
            />
          </TouchableOpacity>
        </View>
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