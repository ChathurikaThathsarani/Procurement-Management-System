import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

//this is the success screen
const SuccesScreen = ({ btname, text, nextScreen, navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#307ecc",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../Image/success.png")}
        style={{ height: 150, resizeMode: "contain", alignSelf: "center" }}
      />
      <Text style={styles.successTextStyle}>{text}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate(nextScreen)}
      >
        <Text style={styles.buttonTextStyle}>{btname}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccesScreen;

//added styles
const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
});
