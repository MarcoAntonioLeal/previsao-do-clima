# Projeto Previsao do Clima

# 🌦️ Ideas Weather

Aplicação front-end desenvolvida para consulta de previsão do tempo de cidades brasileiras utilizando a API OpenWeather.

## 📌 Objetivo

O projeto tem como objetivo, fornecer informações climáticas em tempo real de cidades do Brasil, exibindo dados como:

* Temperatura máxima e mínima
* Sensação térmica
* Umidade do ar
* Precipitação de chuva
* Pressão atmosférica
* Visibilidade
* Velocidade e direção do vento
* Latitude e longitude
* Localização da cidade integrada ao Google Maps

---

## 🚀 Funcionalidades

### 🔍 Pesquisa de cidades

O usuário pode pesquisar cidades brasileiras e visualizar instantaneamente os dados climáticos atualizados.

### 🗺️ Integração com Google Maps

A aplicação exibe automaticamente a localização pesquisada através de um mapa integrado do Google Maps.

### 🤖 Pesquisa automática

Sistema de automação que permite:

* Definir múltiplas cidades
* Escolher quantas vezes a pesquisa será repetida
* Configurar intervalos de tempo entre as consultas
* Acompanhar o progresso da automação por uma barra de progresso

### 📜 Histórico de pesquisas

Os dados pesquisados podem ser armazenados e enviados para o console do navegador, funcionando como um histórico de consultas.

### 📱 Responsividade

Interface adaptada para diferentes tamanhos de tela, oferecendo boa experiência tanto em desktop quanto em dispositivos móveis.

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6 Modules)
* API OpenWeather
* Google Maps Embed

---

## 📂 Estrutura do projeto

```bash
📁 projeto
 ├── 📁 css
 │    ├── index.css
 │    └── btnSearchAutomatic.css
 │
 ├── 📁 js
 │    ├── index.js
 │    ├── btnHistory.js
 │    └── btnAutomatic.js
 │
 ├── 📁 img
 │
 └── index.html
```

---

## ⚙️ Principais conceitos aplicados

* Manipulação de DOM
* Programação assíncrona com `fetch`
* Consumo de API REST
* Modularização com JavaScript Modules
* Uso de classes no JavaScript
* Eventos e interatividade
* Responsividade com Media Queries
* Automação utilizando `setInterval`
* Barra de progresso dinâmica

---

## 🌐 API utilizada

OpenWeather API:

[OpenWeather](https://openweathermap.org/?utm_source=chatgpt.com)

⚠️ Este projeto utiliza a API pública da OpenWeather em seu plano gratuito.

---

## 🎨 Ícones utilizados

SVG Repo:

[SVG Repo](https://www.svgrepo.com/?utm_source=chatgpt.com)

---

## 📷 Screenshots

<img width="1919" height="878" alt="image" src="https://github.com/user-attachments/assets/9e44c86e-be56-42b4-a7e2-8e5be6d36031" />


Exemplo:

```md
![Tela principal](./img/readme/home.png)
```

Você também pode adicionar gifs mostrando:

* Pesquisa de cidades
* Automação funcionando
* Responsividade mobile

---

## ▶️ Como executar o projeto

1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

2. Abra o projeto no VSCode

3. Execute utilizando uma extensão como:

* Live Server

---

## 📌 Melhorias futuras

* Armazenamento do histórico em LocalStorage
* Tema dark/light
* Pesquisa internacional
* Integração com backend

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e prática de desenvolvimento front-end com consumo de API.
