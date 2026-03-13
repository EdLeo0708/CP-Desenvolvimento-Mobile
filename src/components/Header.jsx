import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Interclasse Digital</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#640414",
    padding: 20,
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  }
});