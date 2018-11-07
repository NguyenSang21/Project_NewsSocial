import React, { Component } from "react";
import {
  TouchableHighlight,
  Image,
  View,
  Text,
  FlatList,
  StyleSheet
} from "react-native";
import { Card } from "react-native-material-cards";
import { url } from "../../Variables/General";

export default class Box_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(`${url}news/hoat-dong-doanh-nghiep/4`)
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
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  renderItem = ({ item, index }) => {
    let key = item.metaKey;
    return (
      <View style={styles.Item} key={index}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate("Detail", { _id: key })}
        >
          <View>
            <Image
              style={{ width: "100%", height: 150 }}
              source={{ uri: `${url}` + item.images[0].image }}
            />
            <View style={{ marginTop: 10, marginLeft: 1, marginRight: 1 }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                  color: "#252931"
                }}
                numberOfLines={2}
                ellipsizeMode={"tail"}
              >
                {item.title}
              </Text>
            </View>
            <View style={{ marginTop: 5, marginLeft: 2, marginRight: 2 }}>
              <Text
                style={{ color: "#6B6F73", fontWeight: "400" }}
                numberOfLines={2}
                ellipsizeMode={"tail"}
              >
                {item.description}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 510
  },
  Item: {
    overflow: "hidden",
    flex: 1,
    margin: 5,
    minWidth: 170,
    maxWidth: 170,
    height: 250,
    maxHeight: 250,
    borderRadius: 3
  }
});
