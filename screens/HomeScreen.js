import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from "react-native";
import Box_1 from "../components/Boxs/Box_1";
import Box_2 from "../components/Boxs/Box_2";
import Box_3 from "../components/Boxs/Box_3";
import Box_4 from "../components/Boxs/Box_4";
import Box_5 from "../components/Boxs/Box_5";
import Box_6 from "../components/Boxs/Box_6";
import Box_7 from "../components/Boxs/Box_7";
import Box_Categories from "../components/Boxs/Box_Categories";

import Carousel_Auto_Scroll from "../components/Carousels/Carousel_Auto_Scroll";
import Carousel_Home from "../components/Carousels/Carousel_Home";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.Container}>
        <Text
          style={{
            marginLeft: 10,
            marginBottom: 10,
            marginTop: 10,
            fontSize: 20,
            fontWeight: "700",
            color: "black"
          }}
        >
          Trang Chủ{" "}
        </Text>
        <Carousel_Auto_Scroll />
        <Box_Categories navigation={this.props.navigation} />

        <View
          style={{
            marginTop: 20,
            marginLeft: 5,
            marginRight: 5,
            borderBottomColor: "#E4E6F1",
            borderBottomWidth: 1
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 310 }}>
            <Text style={styles.TitleStyle}>Tin Mới</Text>
          </View>
          <View style={{ justifyContent: "flex-end" }}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Category', { _id: "ha-tang" })}>
              <Image
                style={{ width: 32, height: 32 }}
                source={require("../assets/images/button_more.png")}
              />
            </TouchableHighlight>
          </View>
        </View>
        <Box_1 navigation={this.props.navigation} />

        <View
          style={{
            marginTop: 20,
            marginLeft: 5,
            marginRight: 5,
            borderBottomColor: "#E4E6F1",
            borderBottomWidth: 1
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 310 }}>
            <Text style={styles.TitleStyle}>Thị trường</Text>
          </View>
          <View style={{ justifyContent: "flex-end" }}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Category', { _id: "su-kien" })}>
              <Image
                style={{ width: 32, height: 32 }}
                source={require("../assets/images/button_more.png")}
              />
            </TouchableHighlight>
          </View>
        </View>
        <Box_4 navigation={this.props.navigation} />

        <View
          style={{
            marginTop: 20,
            marginLeft: 5,
            marginRight: 5,
            borderBottomColor: "#E4E6F1",
            borderBottomWidth: 1
          }}
        />

        <Text style={styles.TitleStyle}>Chính sách quy hoạch</Text>
        <Box_7 navigation={this.props.navigation} />

        <View
          style={{
            marginTop: 20,
            marginLeft: 5,
            marginRight: 5,
            borderBottomColor: "#E4E6F1",
            borderBottomWidth: 1
          }}
        />

        <Text style={styles.TitleStyle}>Cơ sở hạ tầng</Text>
        <Box_3 navigation={this.props.navigation} />

        <View
          style={{
            marginTop: 20,
            marginLeft: 5,
            marginRight: 5,
            borderBottomColor: "#E4E6F1",
            borderBottomWidth: 1
          }}
        />

        <Text style={styles.TitleStyle}>Hoạt động - Doanh nghiệp</Text>
        <Box_2 navigation={this.props.navigation} />

        <View
          style={{
            marginTop: 20,
            marginLeft: 5,
            marginRight: 5,
            borderBottomColor: "#E4E6F1",
            borderBottomWidth: 1
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 310 }}>
            <Text style={styles.TitleStyle}>Nhìn ra thế giới</Text>
          </View>
          <View style={{ justifyContent: "flex-end" }}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Category', { _id: "nhin-ra-the-gioi" })}>
              <Image
                style={{ width: 32, height: 32 }}
                source={require("../assets/images/button_more.png")}
              />
            </TouchableHighlight>
          </View>
        </View>
        <Box_6 navigation={this.props.navigation} />

        <View
          style={{
            marginTop: 20,
            marginLeft: 5,
            marginRight: 5,
            borderBottomColor: "#E4E6F1",
            borderBottomWidth: 1
          }}
        />

        <Text style={styles.TitleStyle}>Tin dự án</Text>
        <Box_5 navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  TitleStyle: {
    color: "black",
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "700"
  }
});
