import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
    "http://www.pci.com.vn/vnt_upload/project/07_2017/DAQ12.jpg",
    "http://chungcuvip.biz/chungcuvip/upload/images/chung-cu-lancaster-nui-truc.jpg",
    "https://images.vov.vn/w600/uploaded/g3zdcpr1cvuly8uzveukg/2018_01_18/can_ho_de_ban_sdif.jpg"
];

export default class Carousel_Auto_Scroll extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});