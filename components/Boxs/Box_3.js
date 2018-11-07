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

export default class Box_3 extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            data:[],
        }
    }

    componentDidMount() {
        fetch(`${url}news/ha-tang/4`)
        .then(resp => resp.json())
        .then(data=> this.setState({data : data}))
    }

    render() {
        return (
            <View style={{flex: 1, marginLeft:5, marginRight:5,}}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.Container}
                    style={{flex:1}}
                    data={this.state.data}
                    renderItem={this.renderItem}/>
                <View style={{width:'100%',alignItems: 'center', justifyContent: 'center',marginTop:10}}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Category', { _id: "ha-tang" })}>
                        <Image
                            style={{width:30,height:30 }}
                            source={require('../../assets/images/button_more_2.png')}
                        />
                    </TouchableHighlight>
                    <Text style={{fontSize:10}}>Xem thêm</Text>
                
                </View>
            </View>
        )
    }

    renderItem = ({item, index}) => {
        let key = item.metaKey
        return (
            <View style={styles.Item} key = {index}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail', { _id: key })} >
                    <View>
                        <Image 
                            style={{width:"100%", height:200}}
                            source={{uri: `${url}` + item.images[0].image}}/>
                        <Text
                            style={{color:'#252931',fontSize:20,fontWeight:'400', marginLeft:5, marginRight:5, marginTop:10}}
                            numberOfLines={2} 
                            ellipsizeMode ={'tail'}>{item.title}</Text>
                        <Text
                            style={{marginTop:10,marginLeft:5,marginRight:5}}
                            numberOfLines={3}
                            ellipsizeMode= {'tail'}
                        >
                        {item.description}
                        </Text>
                        {
                            index < 2 ? 
                                <View
                                    style={{
                                        marginTop:20,
                                        marginLeft:10,
                                        marginRight:10,
                                        borderBottomColor: '#E4E6F1',
                                        borderBottomWidth: 1,
                                    }}
                                />
                                :<Text/>
                        }
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
        
    },
    Item: {
        borderRadius: 3,
        overflow:'hidden',
        flex: 1,
        margin: 5,
        minWidth: "100%",
        maxWidth: "100%",
        height: 350,    
        maxHeight:350,
        
    }
})
