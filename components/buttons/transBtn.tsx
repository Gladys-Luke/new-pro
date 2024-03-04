import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface TransBtnProps {
  title: string; 
  onPress: () => void; 
}

const TransBtn: React.FC<TransBtnProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
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

export default TransBtn;
