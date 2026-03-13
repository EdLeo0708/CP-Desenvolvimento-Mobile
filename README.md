# CP-Desenvolvimento-Mobile

# Interclasse Digital

O projeto Interclasse Digital é um aplicativo com o objetivo de organizar competições esportivas entre turmas da instituição.

O aplicativo permite cadastrar partidas entre equipes, registrar resultados e visualizar a classificação das salas participantes.

## Funcionalidades

O aplicativo possui três funcionalidades principais !!!!

### 1- Modalidades esportivas

O usuário pode selecionar a modalidade esportiva da partida através de um seletor. As modalidades disponíveis são:

* Futsal
* Vôlei
* Basquete
* E-sports

### 2- Cadastro de jogos

O usuário pode cadastrar partidas informando:

* Time A
* Time B
* Local da partida
* Horário da partida
* Modalidade esportiva

Após preencher os dados, o jogo é enviado para a API utilizando uma requisição POST através da biblioteca Axios.

Endpoint utilizado:

POST /jogos

Além disso, os jogos cadastrados também são armazenados localmente no dispositivo utilizando AsyncStorage, garantindo persistência de dados.

### Registro de resultados

Após a realização de uma partida, o usuário pode registrar o resultado informando o placar de cada equipe.

Os dados enviados incluem:

* Nome do Time A
* Nome do Time B
* Placar do Time A
* Placar do Time B

Essas informações são enviadas para a API através do endpoint:

POST /resultado

### 3- Tabela de classificação

A tabela de classificação é obtida através de uma requisição GET para a API.

Endpoint utilizado:

GET /ranking

Essa funcionalidade permite visualizar a pontuação das salas participantes em tempo real.

## Tecnologias utilizadas

* React Native
* Axios
* AsyncStorage
* JSON Server

## Funcionamento da API

A API foi simulada utilizando JSON Server, que permite criar endpoints REST a partir de um arquivo db.json {}

Os principais endpoints utilizados são:

GET /ranking
POST /jogos
POST /resultado

Esses endpoints permitem integrar o aplicativo com um sistema de armazenamento de dados para jogos e resultados.

## Conclusão

O aplicativo Interclasse Digital demonstra a integração entre React Native, APIs REST e armazenamento local com AsyncStorage, permitindo a criação de um sistema simples de gerenciamento de competições esportivas.


### Integrante:

* Edson Leonardo Pacheco Navia; 
* RM 553737;
* 3ESPR;
* FIAP - Uni: Av.Paulista;


VIDEO: 
https://youtu.be/qqBjo1s5g7c


IMG:
<p align="center">
  <img src="CP-Desenvolvimento-Mobile/IMG/nome-da-sua-imagem.png">
</p>

