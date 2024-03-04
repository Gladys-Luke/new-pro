import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface upColorBtnProps {
  title: string; 
  onPress: () => void; 
}

function upColorBtn({ title, onPress }: upColorBtnProps) {
  return (
    <LinearGradient
      colors={["#B11938", "#22092C"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.button}
    >
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});


export default upColorBtn;