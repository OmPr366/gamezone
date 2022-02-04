import React from 'react';
import {View, StyleSheet,Text , Button} from 'react-native';

const ReviewDetails = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Review Details Screen</Text>
            <Button title='Setting' onPress={()=>{ navigation.goBack()}}  >Setting</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:24
    }
})

export default ReviewDetails;
