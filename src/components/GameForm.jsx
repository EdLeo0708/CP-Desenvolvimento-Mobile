import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import api from "../services/api";
import { salvarJogo } from "../storage/storage";

export default function GameForm() {

  const [modalidade, setModalidade] = useState("Futsal");
  const [timeA, setTimeA] = useState("");
  const [timeB, setTimeB] = useState("");
  const [local, setLocal] = useState("");
  const [horario, setHorario] = useState("");

  const [placarA, setPlacarA] = useState("");
  const [placarB, setPlacarB] = useState("");

  const cadastrarJogo = async () => {

    const jogo = {
      modalidade,
      timeA,
      timeB,
      local,
      horario
    };

    await api.post("/jogos", jogo);

    await salvarJogo(jogo);

    alert("Jogo cadastrado!");

  };

  const enviarResultado = async () => {

    const resultado = {
      timeA,
      timeB,
      placarA,
      placarB
    };

    await api.post("/resultado", resultado);

    alert("Resultado enviado!");

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Modalidade</Text>

      <Picker
        selectedValue={modalidade}
        onValueChange={(itemValue) => setModalidade(itemValue)}
      >
        <Picker.Item label="⚽ Futsal" value="Futsal"/>
        <Picker.Item label="🏐 Vôlei" value="Volei"/>
        <Picker.Item label="🏀 Basquete" value="Basquete"/>
        <Picker.Item label="🎮 E-sports" value="Esports"/>
      </Picker>

      <TextInput
        placeholder="Time A"
        value={timeA}
        onChangeText={setTimeA}
        style={styles.input}
      />

      <TextInput
        placeholder="Time B"
        value={timeB}
        onChangeText={setTimeB}
        style={styles.input}
      />

      <TextInput
        placeholder="Local"
        value={local}
        onChangeText={setLocal}
        style={styles.input}
      />

      <TextInput
        placeholder="Horário"
        value={horario}
        onChangeText={setHorario}
        style={styles.input}
      />

      <Button
        title="Cadastrar Jogo"
        onPress={cadastrarJogo}
      />

      <Text style={styles.title}>Resultado</Text>

      <TextInput
        placeholder="Placar Time A"
        value={placarA}
        onChangeText={setPlacarA}
        style={styles.input}
      />

      <TextInput
        placeholder="Placar Time B"
        value={placarB}
        onChangeText={setPlacarB}
        style={styles.input}
      />

      <Button
        title="Enviar Resultado"
        onPress={enviarResultado}
      />

    </View>

  );

}

const styles = StyleSheet.create({

  container:{
    padding:20
  },

  input:{
    borderWidth:1,
    marginBottom:10,
    padding:10
  },

  title:{
    fontSize:18,
    marginTop:10
  }

});