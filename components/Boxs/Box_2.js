import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableHighlight
} from "react-native";
import { url } from "../../Variables/General";
import { Card } from "react-native-material-cards";

export default class Box_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(`${url}news/phan-tich-chuyen-de/4`)
      .then(resp => resp.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.Container}
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={this._renderItem}
        />
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10
          }}
        >
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate("Category", { _id: "ha-tang" })
            }
          >
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

  _renderItem = ({ item, index }) => {
    let key = item.metaKey;
    return (
      <View style={styles.Item}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate("Detail", { _id: key })}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: 175 }}>
              <Text
                style={{ color: "#0B1B20", fontSize: 15, fontWeight: "500" }}
              >
                {item.title}
              </Text>
              <Text
                numberOfLines={3}
                ellipsizeMode={"tail"}
                style={{ padding: 5 }}
              >
                {item.description}
              </Text>
              <Text
                style={{ textAlign: "right", fontSize: 10, fontWeight: "100" }}
              >
                {item.date}
              </Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Image
                style={{ width: 160, height: 140, borderRadius: 5, padding: 5 }}
                source={{ uri: `${url}` + item.images[0].image }}
              />
            </View>
          </View>
        </TouchableHighlight>
        {index < 3 ? (
          <View
            style={{
              marginTop: 20,
              marginLeft: 40,
              marginRight: 40,
              marginBottom: 20,
              borderBottomColor: "#E4E6F1",
              borderBottomWidth: 1
            }}
          />
        ) : (
          <Text />
        )}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center"
  },
  Item: {
    flex: 1,
    maxHeight: 160,
    marginTop: 10,
    marginBottom: 10,
    height: 160
  }
});
