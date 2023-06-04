import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is login page </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={styles.homeView}>
          <Text style={styles.homeButton}>
            Home
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeView: {
    height: 40,
    width: 100,
    backgroundColor: "blue",
    borderRadius: 30,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  homeButton: {
    color: "#FFF"
  }

})



export default Login;
