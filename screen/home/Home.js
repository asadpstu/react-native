import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is home page </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.loginView}>
          <Text style={styles.loginButton}>
            Login
          </Text>
        </View>

      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loginView: {
    height: 40,
    width: 100,
    backgroundColor: "blue",
    borderRadius: 30,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton: {
    color: "#FFF"
  }
})



export default Home;
