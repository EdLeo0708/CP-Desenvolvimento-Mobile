import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { listarJogos } from "../storage/storage";
import Header from "../components/Header";

export default function CalendarScreen() {
  const [jogos, setJogos] = useState([]);

  const carregarJogos = async () => {
    const dados = await listarJogos();
    setJogos(dados);
  };

  useEffect(() => {
    carregarJogos();
  }, []);

  return (
    <View>
      <Header />

      <Text style={styles.title}>📅 Calendário de Jogos</Text>

      <FlatList
        data={jogos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.timeA} vs {item.timeB} - {item.local} ({item.horario})
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