## Integrantes
• Carlos Livius da Silva
• Fabio Romero de Souza Junior
• Guilherme Rimoldi Kameoka
• Paulo Eduardo Ferreira da Silva

## API do Google Cloud Vision
Este é um código em JavaScript que utiliza a API Cloud Vision da Google para fazer a detecção de texto em uma imagem. Ele é executado em um servidor NodeJS, utilizando o framework Express.

## Instalação
Para utilizar este código, é necessário instalar o Node.js (https://nodejs.org) e os seguintes pacotes:

• express: npm install express
• multer: npm install multer
• @google-cloud/vision: npm install @google-cloud/vision
Também é necessário criar um arquivo credential.json com as suas credenciais do Google Cloud Vision. Para mais informações sobre como criar este arquivo, consulte a documentação da API do Google Cloud Vision (https://cloud.google.com/vision/docs/before-you-begin?hl=pt-br)

## Utilização
Cloque as credenciais da chave JSON gerada pelo Google Cloud no arquivo credential.json do projeto e executar o código em um servidor Node.js com o comando "node server.js".
O código será executado na porta 3000 e, para fazer uma requisição para a API, basta enviar uma imagem através do index.html pelo campo indicado para selecionar a imagem. O servidor irá retornar o texto encontrado na imagem.

## Funcionamento
O código utiliza o pacote Multer para fazer o upload da imagem. Em seguida, ele faz a chamada da API Cloud Vision através da função ExecutaAPIgoogleVision para fazer a detecção do texto na imagem que será retornado como resposta para a requisição.

## Dificuldades encontradas
Durante a execução do projeto, enfrentamos algumas dificuldades em relação ao tempo disponível, especialmente em relação ao desenvolvimento do código para consumir a API e em fazer a conexão entre o backend e o frontend da aplicação. Essas dificuldades acabaram impactando o progresso do projeto e exigiram mais esforços para serem superadas.
