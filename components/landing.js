import React, { Component } from "react";
import { Image, Text, Dimensions, View } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
  ListItem,
  Footer
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default class Landing extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    return (
      <Container
        style={{
          marginTop: 20,
          height: device_height,
          width: device_width,
          backgroundColor: "#D3D3D3"
        }}
      >
        <Content>
          <Card>
            <CardItem
              style={{
                backgroundColor: "#151565"
              }}
            >
              <Left>
                <Thumbnail
                  source={require("../assets/logo.png")}
                  style={{ height: 60 / 2, width: 80 / 2, margin: 0 }}
                />
                <Body>
                  <Text
                    style={{
                      color: "white",
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                      fontWeight: 'bold',
                      fontSize: 20
                    }}
                  >
                    C. F. W. M
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("../assets/display.png")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
          </Card>
          <View>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Left>
                <Button disabled style={{ backgroundColor: "#B22222" }}>
                  <FontAwesome
                    size={25}
                    style={{ color: "white" }}
                    active
                    name="home"
                  />
                </Button>
              </Left>
              <Body>
                <Text>Home</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" style={{ color: "#151565" }} />
              </Right>
            </ListItem>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Shop")}
            >
              <Left>
                <Button disabled style={{ backgroundColor: "#B22222" }}>
                  <Ionicons
                    size={25}
                    style={{ color: "white" }}
                    active
                    name="ios-bookmarks"
                  />
                </Button>
              </Left>
              <Body>
                <Text>Library</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" style={{ color: "#151565" }} />
              </Right>
            </ListItem>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("About")}
            >
              <Left>
                <Button disabled style={{ backgroundColor: "#B22222" }}>
                  <Ionicons
                    size={25}
                    style={{ color: "white" }}
                    active
                    name="ios-ribbon"
                  />
                </Button>
              </Left>
              <Body>
                <Text>About Us</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" style={{ color: "#151565" }} />
              </Right>
            </ListItem>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Blog")}
            >
              <Left>
                <Button disabled style={{ backgroundColor: "#B22222" }}>
                  <Ionicons
                    size={25}
                    style={{ color: "white" }}
                    active
                    name="ios-browsers"
                  />
                </Button>
              </Left>
              <Body>
                <Text>Blog</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" style={{ color: "#151565" }} />
              </Right>
            </ListItem>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Contact")}
            >
              <Left>
                <Button disabled style={{ backgroundColor: "#B22222" }}>
                  <Ionicons
                    size={25}
                    style={{ color: "white" }}
                    active
                    name="ios-chatboxes"
                  />
                </Button>
              </Left>
              <Body>
                <Text>Contact</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" style={{ color: "#151565" }} />
              </Right>
            </ListItem>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Live")}
            >
              <Left>
                <Button disabled style={{ backgroundColor: "#B22222" }}>
                  <Ionicons
                    size={25}
                    style={{ color: "white" }}
                    active
                    name="ios-tv"
                  />
                </Button>
              </Left>
              <Body>
                <Text>Go Live!</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" style={{ color: "#151565" }} />
              </Right>
            </ListItem>
          </View>
        </Content>
        <Footer style={{ backgroundColor: "#D3D3D3" }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 11 }}>FOR THE KINGDOM OF GOD IS NOT IN WORD, BUT IN POWER.</Text>
        </Footer>
      </Container>
    );
  }
}
