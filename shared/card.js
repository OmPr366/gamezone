import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.card} >
            <view style={styles.cardContent}>
                {props.children}
            </view>
            
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#fff',
        shadowOffset:{width:1, height:1 },
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6,
        padding:13,
        paddingHorizontal:20,
        width:"95%",

    
    }
})

export default Card;
