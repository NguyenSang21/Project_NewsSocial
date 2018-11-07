import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, TouchableHighlight } from "react-native"
import Box_Select from '../components/Categories/Box_Select'
import Box_Content from '../components/Categories/Box_Content'

export default class CategoryScreen extends Component {
  render() {
    const _id = this.props.navigation.state.params._id
    console.log(_id)
    return (
      <View style={{flex:1, backgroundColor:"#FFFFFF"}}>
        <Box_Content navigation={this.props.navigation} id={_id}/>
      </View>
    )
  }
}
