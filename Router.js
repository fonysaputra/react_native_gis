import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import App from "./App";
import Maps from "./Page/Maps/Maps";
import Pariwisata from "./Page/Pariwisata/Pariwisata";
import Wisata from "./Page/Wisata/Wisata";
import AllWisata from "./Page/Wisata/AllWisata";
import WisataSejarah from "./Page/Wisata/WisataSejarah";
import WisataBelanja from "./Page/Wisata/WisataBelanja";
import WisataKuliner from "./Page/Wisata/WisataKuliner";
import DetailWisata from "./Page/Wisata/DetailWisata";
import Tentang from "./Page/Component/Tentang";
import Bantuan from "./Page/Component/Bantuan";
import DetailWisataMaps from "./Page/DetailWisata/Index";

const AppNavigator = createStackNavigator(
  {
    Homes: {
      screen: App
    },
    Maps: {
      screen: Maps
    },
    Pariwisata: {
      screen: Pariwisata
    },
    Wisata: {
      screen: Wisata
    },
    AllWisata: {
      screen: AllWisata
    },
    WisataSejarah: {
      screen: WisataSejarah
    },
    WisataBelanja: {
      screen: WisataBelanja
    },
    WisataKuliner: {
      screen: WisataKuliner
    },
    DetailWisata: {
      screen: DetailWisata
    },
    Tentang: {
      screen: Tentang
    },
    Bantuan: {
      screen: Bantuan
    },
    DetailWisataMaps:DetailWisataMaps
  },
  {
    initialRouteName: "Homes"
   
  }
);

export default createAppContainer(AppNavigator);
