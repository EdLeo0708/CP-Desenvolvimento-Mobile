import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import api from "../services/api";
import Header from "../components/Header";

export default function RankingScreen() {
  const [ranking, setRanking] = useState([]);

  const carregarRanking = async () => {
    const response = await api.get("/ranking");
    setRanking(response.data);
  };

  useEffect(() => {
    carregarRanking();
  }, []);

  return (
    <View>
      <Header />

      <Text style={styles.title}>🏆 Ranking</Text>

      <FlatList
        data={ranking}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.sala} - {item.pontos} pontos
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    margin: 20,
    fontWeight: "bold"
  },
  item: {
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 10
  }
});