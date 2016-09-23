import React from 'react';
import {View,Text,Image,Linking} from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './Button';

const AlbumDetial =({album}) =>{
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{uri:album.thumbnail_image}}/>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{uri:album.image}} style={styles.imageStyle}/>
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(album.url)}>Buy Now</Button>
            </CardSection>
        </Card>
    )
}

const styles = {
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
    }
}

export default AlbumDetial;