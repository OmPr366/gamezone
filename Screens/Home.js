// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Card from "../shared/card";

const Home = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button onPress={()=> navigation.navigate('About') }  title="Go to About Screen" />
      <Card>
          <Text>
              Hello This is one
          </Text>
      </Card>
      <Card>
          <Text>
              Hello This is one
          </Text>
      </Card>
      <Card>
          <Text>
              Hello This is one
          </Text>
      </Card>
      <Card>
          <Text>
              Hello This is one
          </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;