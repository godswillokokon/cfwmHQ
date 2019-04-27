import React from "react";
import { WebView, Dimensions } from "react-native";
export default class Blog extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    let BASEURL = "https://christfortheworldmission.org/blog/";
    return (
      <WebView
        source={{
          uri: BASEURL
        }}
        scalesPageToFit={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderError={() => this.props.navigation.navigate("Err")}
        onLoadingError={() => this.props.navigation.navigate("Err")}
        style={{
          marginTop: 20,
          height: device_height,
          width: device_width
        }}
      />
    );
  }
}
