import React, { Component } from "react";
import {
  Text,
  ScrollView,
  Dimensions,
  WebView,
  View,
  StyleSheet
} from "react-native";
import { url } from "../Variables/General";
import Box_Similar from "../components/Details/Box_Similar";
import MyWebView from "react-native-webview-autoheight";
import AutoResizeHeightWebView from "../components/AutoResize/AutoResizeHeightWebView";
export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{}],
      loaded: false,
      _id: ""
    };
  }

  componentDidMount() {
    const _id = this.props.navigation.state.params._id;
    this.setState({ _id: _id });
    fetch(`${url}newsKey/key/` + _id)
      .then(resp => resp.json())
      .then(data => this.setState({ data: data }));
  }
  render() {
    const { loaded, data, _id } = this.state;
    return (
      <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
        <AutoResizeHeightWebView
          source={{ html: data[0].detail }}
          onAutoHeight={() => this.setState({ loaded: true })}
        />
        {this.state.loaded ? <Box_Similar metaKey={_id} /> : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  }
});
