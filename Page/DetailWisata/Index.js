import React,{Component} from 'react';

import {View,Image,ActivityIndicator, TouchableOpacity} from "react-native";
import CardView from 'react-native-cardview';
import {Button , Text,Content, Thumbnail} from "native-base";
const haversine = require('haversine');
var id_wisata = "";
var lat_user = "";
var lng_user = "";
var jarak = 0 ;

var lat_sekarang= "";
var lng_sekarang= ""; 

import url from "../../Server";
import axios from "axios";
import getDirections from 'react-native-google-maps-directions';


class Index extends Component{
    static navigationOptions = ({ navigation }) => {
        id_wisata = navigation.getParam("id_wisata");
        lat_user = navigation.getParam("lat_user");
        lng_user = navigation.getParam("lng_user");
        return {
            title: "Detail Wisata"
          };
    }
    constructor(props) {
        super(props);
        this.state = {
          detail_wisata: []
        };
      }

      handleGetDirections = () => {
        {this.state.detail_wisata.map((data)=>{
          lat_sekarang=data.latitude;
          lng_sekarang=data.longitude; 
         })}
         const data = {
            source: {
             latitude: lat_user,
             longitude: lng_user
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

        }
      

    getData = e => {
        axios.get(`${url}api.php?operasi=detail_wisata&id=${e}`).then(res => {
          const data = res.data;
          this.setState({ detail_wisata: data });
        });
      };
    
      componentDidMount() {
        this.getData(id_wisata);
      }


    render(){
        if(this.state.detail_wisata.length === 0 ){
            return(
              <View style={{flex: 1,marginTop:40,
                justifyContent: 'center'}}>
                  <ActivityIndicator size="large" color="#0000ff" />
                  <Text style={{textAlign:"center",color:"#000"}}>Loading ...</Text>
              </View>
            )
          }

        return(
        <View style={{flex:1}}>
        <Content>
            {this.state.detail_wisata.map((data,key)=>{
        const start = {
            latitude: lat_user,
            longitude: lng_user
          }
          
          const end = {
            latitude: parseFloat(data.latitude),
            longitude: parseFloat(data.longitude)
          }
          
         jarak= (haversine(start, end, {unit: 'meter'})) / 1000 ;

        return(
            <CardView
            key={key}
            style={{margin:10}}
                 cardElevation={8}
                 cardMaxElevation={8}
                 cornerRadius={8}>
                 <Image style={{height:200,width:"100%"}} source={{uri : url + "images/" + data.foto_wisata}} />
                 <View style={{margin:10}}>
                 
          <Text style={{textAlign:"center", color:'red', fontWeight:"bold"}}>
             Nama Wisata : {data.nama_wisata}
          </Text>
          <Text style={{marginTop:10}}>
             Alamat Wisata :
          </Text>
          <Text>
          {data.alamat}
          </Text>
          <Text style={{marginTop:10}}>
             Jarak Wisata Dari Lokasi Saat Ini : 
          </Text>
          <Text style={{color:"red"}}>
          {Math.round(jarak)} Km
          </Text>
          <View style={{marginTop:20,alignItems:"center" , justifyContent:"center",alignContent:"center"}}>
          <Button onPress={this.handleGetDirections} bordered info>
            <Text>Tunjukan Jalur</Text>
          </Button>
          </View>
        </View>
            </CardView> 
                )
            })}
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
        )
    }
}

export default Index;