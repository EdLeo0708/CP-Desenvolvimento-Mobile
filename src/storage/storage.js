import AsyncStorage from "@react-native-async-storage/async-storage";

export const salvarJogo = async (jogo) => {
  const jogos = await listarJogos();

  jogos.push(jogo);

  await AsyncStorage.setItem("jogos", JSON.stringify(jogos));
};

export const listarJogos = async () => {
  const dados = await AsyncStorage.getItem("jogos");

  return dados ? JSON.parse(dados) : [];
};