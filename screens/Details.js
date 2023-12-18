import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";


export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      imagePath: "",
      url: `https://38f0-2804-14c-7572-44de-b41d-3ead-9703-f209.ngrok.io`
    };
  }

  componentDidMount() {
      //chame a função getDetails aqui para que os dados sejam buscados assim que a tela for montada
      this.getDetails()
  }
  getDetails = () => {
      //escreva o código para buscar os dados do planeta específico da API
      const{url}=this.state
    axios
    .get(url)
    .then((response)=>{
      this.setDetails(
        response.data.data
      )
    })
    .catch((error)=>{
      Alert.alert(error.message)
    })
  };
  /*esta função irá determinar o estado imagePath dependendo do planetType*/
  setDetails = (planetDetails) => {
    const planetType = planetDetails.planet_type;
    let imagePath = "";
    switch (planetType) {
      case "Gas Giant":
        imagePath = require("../assets/Gas_Giant.png");
        break;
      case "Terrestrial":
        imagePath = require("../assets/Terrestrial.png");
        break;
      case "Super Earth":
        imagePath = require("../assets/Super_Earth.png");
        break;
      case "Neptune Like":
        imagePath = require("../assets/Neptune-like.png");
        break;
      default:
        imagePath = require("../assets/Gas_Giant.png");
    }

  this.setState({
    details: planetDetails,
    imagePath: imagePath,
  });
};
  render() {
    return
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardItem: {
    marginBottom: 10
  }
});
