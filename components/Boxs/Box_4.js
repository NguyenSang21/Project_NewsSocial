import React, { Component } from 'react'
import {
    TouchableHighlight,
    Image,
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import { Card } from 'react-native-material-cards'
import { url } from '../../Variables/General'

export default class Box_4 extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            data:[],
        }
    }

    componentDidMount() {
        fetch(`${url}news/hoat-dong-doanh-nghiep/4`)
        .then(resp => resp.json())
        .then(data=> this.setState({data : data}))
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.Container}
                    style={{flex:1}}
                    horizontal={true}
                    data={this.state.data}
                    renderItem={this.renderItem}/>
            </View>
        )
    }

    renderItem = ({item, index}) => {
        let key = item.metaKey
        return (
            <View style={styles.Item} key={index}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail', { _id: key })} >
                    <View>
                        <Image
                            style={{width:"100%", height:100, borderRadius:5}}
                            source={{uri: `${url}` + item.images[0].image}}/>
                        <Text numberOfLines={2} ellipsizeMode ={'tail'}>{item.title}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Item: {
        flex: 1,
        margin: 5,
        minWidth: 130,
        maxWidth: 130,
        height: 150,
        maxHeight:150,
        backgroundColor: '#FFFFFF'
    }
})
