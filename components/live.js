import React from "react";
import { WebView, Dimensions} from "react-native";
export default class Live extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    let BASEURL = "https://christfortheworldmission.org/cfwm-live-tv/";
    return (
      <WebView
        source={{
          uri: BASEURL
        }}
        scalesPageToFit={true}
        javaScriptEnabledAndroid={true}
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
