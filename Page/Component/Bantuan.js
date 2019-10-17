import React, { Component } from "react";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import { Thumbnail } from "native-base";

export default class Bantuan extends Component {
  static navigationOptions = {
    title: "Bantuan Aplikasi",
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
      <View
        style={{
          flex: 1,
          backgroundColor: "#05044b"
        }}
      >
        <View
          style={{
            alignItems: "center",
            zIndex: 2,
            top: 40,
            left: 0,
            right: 0,
            position: "absolute",

            justifyContent: "center"
          }}
        >
          <Thumbnail
            source={require("../../assets/tekno.png")}
            style={{ height: 80, width: 80 }}
          />
        </View>
        <View style={{ backgroundColor: "#138ea3", flex: 1 }} />
        <View style={{ flex: 5, backgroundColor: "#138ea3" }}>
          <View
            style={{
              backgroundColor: "#eaf0e4",
              zIndex: 1,
              marginHorizontal: 10,
              marginBottom: 10,
              flex: 1,
              borderRadius: 10,
              paddingTop: 40,
              paddingHorizontal: 20
            }}
          >
            <ScrollView>
              <Text style={{ color: "#000000", margin: 5 }}>
                1. Menu Maps Menampilkan Lokasi Pariwisata Lampung Tengah Di
                Dalam. Peta.
              </Text>
              <Text style={{ color: "#000000", margin: 5 }}>
                2. Menu Pariwisata Menampilkan Jenis / Type Pariwisata Lampung
                Tengah (Alam,Sejarah,Belanja,Kuliner)
              </Text>
              <Text
                style={{ color: "#000000", marginLeft: 20, marginVertical: 5 }}
              >
                - Wisata Alam Menampilkan Wisata Alam Yang Terdapat Di Lampung
                Tengah
              </Text>
              <Text
                style={{ color: "#000000", marginLeft: 20, marginVertical: 5 }}
              >
                - Wisata Sejarah Menampilkan Wisata Sejarah Yang Terdapat Di
                Lampung Tengah
              </Text>
              <Text
                style={{ color: "#000000", marginLeft: 20, marginVertical: 5 }}
              >
                - Wisata Belanja Menampilkan Wisata Belanja Yang Terdapat Di
                Lampung Tengah
              </Text>
              <Text
                style={{ color: "#000000", marginLeft: 20, marginVertical: 5 }}
              >
                - Wisata Kuliner Menampilkan Wisata Kuliner Yang Terdapat Di
                Lampung Tengah
              </Text>
              <Text
                style={{ color: "#000000", marginLeft: 20, marginVertical: 5 }}
              >
                - Detail Wisata Manampilkan Informasi Yang Terdapat Di Suatu
                Wisata (Alamat,Sarana & Prasarana, Dll).
              </Text>
              <Text style={{ color: "#000000", margin: 5 }}>
                3. Menu Tentang Menampilkan Informasi Aplikasi Yang Telah
                DiKembangkan
              </Text>
              <Text style={{ color: "#000000", margin: 5 }}>
                4. Menu Bantuan Menampilkan Bantuan Aplikasi
              </Text>
            </ScrollView>
          </View>
          <View
            style={{
              backgroundColor: "#eaf0e4",

              marginHorizontal: 10,
              marginBottom: 10,
              flex: 0.1,
              borderRadius: 30,
              paddingTop: 10,
              paddingHorizontal: 20
            }}
          >
            <Text
              style={{ textAlign: "center", color: "#050605", fontSize: 17 }}
            >
              Pariwisata Lampung Tengah
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
