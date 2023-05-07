## Integrantes
• Carlos Livius da Silva
• Fabio Romero de Souza Junior
• Guilherme Rimoldi Kameoka
• Paulo Eduardo Ferreira da Silva

## API do Google Cloud Vision
Este é um código em JavaScript que utiliza a API do Google Cloud Vision para fazer a detecção de rótulos (categorias) e de texto em uma imagem. Ele é executado em um servidor NodeJS, utilizando o framework Express.

## Instalação
Para utilizar este código, é necessário instalar o Node.js e os seguintes pacotes:

• express: npm install express
• multer: npm install multer
• @google-cloud/vision: npm install @google-cloud/vision
Também é necessário criar um arquivo credential.json com as suas credenciais do Google Cloud Vision. Para mais informações sobre como criar este arquivo, consulte a documentação da API do Google Cloud Vision.

## Utilização
Para utilizar o código, basta executá-lo em um servidor Node.js com o comando "node index.js".
O código será executado na porta 3000, ou na porta definida pela variável de ambiente PORT.
Para fazer uma requisição para a API, envie uma imagem via POST para a URL /vision, com o campo image contendo a imagem. O servidor irá retornar um objeto JSON contendo o texto encontrado na imagem.

## Funcionamento
O código utiliza o pacote Multer para fazer o upload da imagem. Em seguida, ele utiliza a API do Google Cloud Vision para fazer a detecção de rótulos e de texto na imagem. O texto encontrado é retornado como resposta para a requisição.
O código utiliza a função ExecutaAPIgoogleVision para fazer a chamada para a API do Google Cloud Vision. Esta função recebe o Buffer da imagem como parâmetro e retorna uma Promise que resolve com o texto encontrado na imagem.

## Dificuldades encontradas
Durante a execução do projeto, enfrentamos algumas dificuldades em relação ao tempo disponível, especialmente em relação ao desenvolvimento do código para consumir a API e em fazer a conexão entre o backend e o frontend da aplicação. Essas dificuldades acabaram impactando o progresso do projeto e exigiram mais esforços para serem superadas.
