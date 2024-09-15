# Task App

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

O Task App é um aplicativo móvel desenvolvido em React Native para gerenciamento de tarefas. Com uma interface intuitiva e recursos básicos, o aplicativo permite que você adicione, edite e visualize suas tarefas de forma eficiente.

## Funcionalidades

- **Adicionar Tarefas**:Insira novas tarefas com uma descrição.
- **Editar Tarefas**: Atualize a descrição de tarefas existentes.
- **Visualizar Tarefas**: Acesse uma lista de todas as suas tarefas.
- **Interface Amigável**: Navegação simples e direta..

## Instalação

Certifique-se de ter Node.js e Expo CLI instalados.

1. **Clone o Repositório**:
   ```bash
  git clone https://github.com/seu-usuario/task-app.git
  
2. **Navegue para o Diretório do Projeto**:
cd task-app

3. **Instale as Dependências**:
npm install

## Configurar o Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Configure o Firestore e copie as credenciais do projeto.
3. Atualize o arquivo `src/config/firebaseconfig.js` com suas credenciais do Firebase:

   ```javascript
   // src/config/firebaseconfig.js
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";

   const firebaseConfig = {
     apiKey: "SUA_API_KEY",
     authDomain: "SEU_AUTH_DOMAIN",
     projectId: "SEU_PROJECT_ID",
     storageBucket: "SEU_STORAGE_BUCKET",
     messagingSenderId: "SEU_MESSAGING_SENDER_ID",
     appId: "SEU_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   const database = getFirestore(app);

   export default database;

5. **Executar o projeto**:
npm start

## Estrutura do Projeto

src/config/firebaseconfig.js: Configuração do Firebase.
src/pages/NewTask/index.js: Tela para adicionar novas tarefas.
src/pages/Details/index.js: Tela para editar tarefas existentes.
src/pages/Task/index.js: Tela principal para visualizar a lista de tarefas.
src/pages/NewTask/style.js: Estilos para a tela de nova tarefa.
src/pages/Details/style.js: Estilos para a tela de detalhes da tarefa.
src/pages/Task/style.js: Estilos para a tela principal de tarefas.
App.js: Configuração das rotas e navegação.

## Tecnologias Utilizadas

- React Native: Framework para o desenvolvimento de aplicativos móveis.
- Firebase: Plataforma para backend, incluindo Firestore para armazenamento de dados.

## Contribuição

Contribuições são bem-vindas! Para contribuir com o projeto:
1. Faça um fork do repositório.
2. Crie uma nova branch (git checkout -b feature/nova-funcionalidade).
3. Faça as alterações desejadas e comite (git commit -am 'Adiciona nova funcionalidade').
4. Envie sua branch para o repositório remoto (git push origin feature/nova-funcionalidade).
5. Abra um pull request no GitHub.

## Licença
Este projeto está licenciado sob a MIT License.



