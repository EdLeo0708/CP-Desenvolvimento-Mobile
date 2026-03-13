import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import GameForm from "../components/GameForm";

export default function HomeScreen() {
  return (
    <View>
      <Header />

      <Text style={styles.subtitle}>Modalidades</Text>

      <Text style={styles.item}>⚽ Futsal</Text>
      <Text style={styles.item}>🏐 Vôlei</Text>
      <Text style={styles.item}>🏀 Basquete</Text>
      <Text style={styles.item}>🎮 E-sports</Text>

      <Text style={styles.subtitle}>Cadastrar Jogo</Text>

      <GameForm />
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20
  },
  item: {
    marginLeft: 20,
    fontSize: 16,
    marginTop: 5
  }
});