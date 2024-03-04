import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import TransBtn from "../buttons/transBtn";
import SigninBtn from "../buttons/signinBtn";
import SignupBtn from "../buttons/signupButton";
import Icon from "react-native-vector-icons/FontAwesome";

type HomeProps = {
  navigation: StackNavigationProp<any>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#B11938", "#22092C"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.iconHeader}>
            <Ionicons
              name="ellipsis-horizontal"
              size={22}
              color="#fff"
            ></Ionicons>
          </View>

          <View style={styles.header}>
            <Ionicons name="barbell" size={45} color="#fff"></Ionicons>
            <Text style={styles.headerText}>FITNESS CLUB</Text>
          </View>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome Back</Text>
          </View>

          <View style={styles.btnCon}>
            <TransBtn
              title="SIGN IN"
              onPress={() => navigation.navigate("Login")}
            />
            <SignupBtn
              title="SIGN UP"
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Login with social media</Text>
          <View style={styles.logos}>
            <Icon style={styles.logo}  name="instagram" size={20} />
            <Icon style={styles.logo} name="twitter" size={20} />
            <Icon style={styles.logo} name="facebook" size={20} />
          </View>
          <View style={styles.horizontalLine} />
          
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: 50,
    marginBottom: 50, 
  },
  iconHeader: {
    alignItems: "flex-end",
    marginRight: 20,
  },
  header: {
    alignItems: "center",
    marginVertical: 80,
  },
  headerText: {
    color: "white",
    fontSize: 17,
  },
  welcomeContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "500",
  },
  btnCon: {
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  // Footer Styles
  footer: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 120,
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  horizontalLine: {
    width: "20%",
    height: 2,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  logos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  logo: {
    backgroundColor: 'white',
    height: 30,
    width: 30,
    alignItems: "center",
    textAlignVertical: "center",
    textAlign: "center",
    borderRadius: 50,
    padding: 5,
  },
});

export default Home;
