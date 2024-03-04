import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface SigninBtnProps {
  title: string; 
  onPress: () => void; 
}

const SigninBtn: React.FC<SigninBtnProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SigninBtn;
