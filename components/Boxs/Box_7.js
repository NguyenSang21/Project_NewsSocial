import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import { Card } from "react-native-material-cards";
import { url } from "../../Variables/General";

export default class Box_7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    };
  }

  componentDidMount() {
    fetch(`${url}news/chinh-sach-quy-hoach/3`)
      .then(resp => resp.json())
      .then(data => this.setState({ data: data, isLoading: true }));
  }

  render() {
    const { data, isLoading } = this.state;
    if (!isLoading) {
      return <Text>Loading</Text>;
    } else {
      return (
        <View>
          <View style={styles.Container}>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate("Detail", {
                  _id: data[0].metaKey
                })
              }
            >
              <View style={{ width: 180 }}>
                <Image
                  style={{ width: 180, height: 170, borderRadius: 5 }}
                  source={{ uri: `${url}` + data[0].images[0].image || "" }}
                />
                <Text
                  style={{ fontWeight: "300", margin: 3 }}
                  numberOfLines={3}
                  ellipsizeMode={"tail"}
                >
                  {data[0].title}
                </Text>
              </View>
            </TouchableHighlight>
            <View style={{ width: 170, marginLeft: 5 }}>
              <TouchableHighlight
                onPress={() =>
                  this.props.navigation.navigate("Detail", {
                    _id: data[1].metaKey
                  })
                }
              >
                <View>
                  <Image
                    style={{ width: 170, height: 110, borderRadius: 5 }}
                    source={{ uri: `${url}` + data[1].images[0].image || "" }}
                  />
                  <Text
                    numberOfLines={2}
                    ellipsizeMode={"tail"}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      color: "white",
                      backgroundColor: "#000",
                      opacity: 0.6
                    }}
                  >
                    {data[1].title}
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() =>
                  this.props.navigation.navigate("Detail", {
                    _id: data[2].metaKey
                  })
                }
              >
                <View style={{ marginTop: 5, overflow: "hidden" }}>
                  <Image
                    style={{ width: 170, height: 110, borderRadius: 5 }}
                    source={{ uri: `${url}` + data[2].images[0].image || "" }}
                  />
                  <Text
                    numberOfLines={2}
                    ellipsizeMode={"tail"}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      color: "white",
                      backgroundColor: "#000",
                      opacity: 0.6
                    }}
                  >
                    {data[2].title}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 15
            }}
          >
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Category', { _id: "chinh-sach-quy-hoach" })}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/images/button_more_2.png")}
            />
            </TouchableHighlight>
            <Text style={{ fontSize: 10 }}>Xem thêm</Text>
          </View>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: "row"
  }
});
