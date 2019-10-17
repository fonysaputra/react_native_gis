import React from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";

import { Icon } from "native-base";

import MapView, {
  Marker,
  Callout,
  ProviderPropType,
  Polygon
} from "react-native-maps";
import flagImg from "./assets/wisata.png";

import axios from "axios";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = -4.800809;
const LONGITUDE = 105.313118;
const LATITUDE_DELTA = 4;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

import Server from "../../Server";

class Maps extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      lat_user: null,
      lng_user: null,
      error: null,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      polygon: [
        {
          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE + SPACE
        },
        {
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE - SPACE
        },
        {
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE + SPACE
        }
      ],
      dataWisata: []
    };
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
       
        this.setState({
          lat_user: position.coords.latitude,
          lng_user: position.coords.longitude,
          region: {
            ...this.state.region,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },

          error: null
        });
        //  this.jarakTerdekat();
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  };

  componentDidMount() {
    this.getLocation();
    axios.get(Server + `api.php?operasi=semua_wisata`).then(res => {
      const data = res.data;
      this.setState({ dataWisata: data });
    });
  }

  render() {
    if(!this.state.lat_user && !this.state.lng_user ){
      return(
        <View style={{flex: 1,
          justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={{textAlign:"center",color:"#000"}}>Loading ...</Text>
        </View>
      )
    }

 

    const { polygon } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={this.onMapPress}
          loadingEnabled
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"
        >
          <Polygon
            coordinates={polygon}
            fillColor="rgba(0, 200, 0, 0.5)"
            strokeColor="rgba(0,0,0,0.5)"
            strokeWidth={2}
          />
            <Marker
              title="Lokasi Saya"
              coordinate={{
                latitude: this.state.lat_user,
                longitude: this.state.lng_user
              }}
            >
            
            </Marker>

          {this.state.dataWisata.map((data, key) => {
            return (
              
              <Marker
                key={key}
                coordinate={{
                  latitude: parseFloat(data.latitude),
                  longitude: parseFloat(data.longitude)
                }}
                centerOffset={{ x: -42, y: -60 }}
                anchor={{ x: 0.84, y: 1 }}
                image={flagImg}
                onPress={() => {
                    this.props.navigation.navigate("DetailWisataMaps",{
                      id_wisata:data.id_wisata,
                      lat_user:this.state.lat_user,
                      lng_user:this.state.lng_user
                    });
                  
                  }}
              >
                <Callout>
                  <View>
                
                    <Text>{data.nama_wisata}</Text>
                
                  </View>
                </Callout>
              </Marker>
            );
          })}
        </MapView>
        <View style={styles.buttonContainer}>
          <View style={styles.bubble}>
            <Text>Pariwisata Lampung Tengah</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Homes");
            }}
          >
            <Icon style={styles.icon} name="home" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Maps.propTypes = {
  provider: ProviderPropType
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 17,
    borderRadius: 20
  },
  icon: {
    color: "#d97d10",
    marginLeft: 20,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  }
});

export default Maps;
