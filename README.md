# Exame - Bexs Front-end

## Aplicação

Aplicação feita em react cobrindo os 2 cenários solicitados
- Desktop Large
- Smartphone (360 x 640)

## Tecnologia

Foi utilizado React juntamente com algumas bibliotecas, tais como :
- Typescript
- Material UI
- Axios
- Cypress
...etc ( mais informaçoões no package.json)

### Rodando a aplicação 

Para rodar a aplicação, é necessario que rode o comando de instalação dos pacotes 

`npm install`

E posteriormente, rode o comando

`npm install`

E a aplicação irá ser iniciada em seu navegador no caminho

http://localhost:3001

### Requisições REST

Todas as requisições rest usariam o objeto exportado da pasta api.
Assim, seria de fácil accesso os erros para inválidar o usuário caso fosse necessário.

Pensando nessa arquitetura, o mais correto seria utilizar a biblioteca Redux ou Context API para que facilmente conseguissimos
disparar mensagens na tela e ter acesso ao estado do usuário.

Porém, como trata-se de uma aplicação teste, nao vi necessidade de implementar os mesmos.

## Requisitos

Node e npm

## Rodando os testes.

Para testes, utilizei o framework cypress.

https://www.cypress.io/

para utilizá-lo, basta executar o comando abaixo e rodar o arquivo de teste que deseja.

`npx cypress open`

## Contato

https://github.com/guizox

https://www.linkedin.com/in/vitorgvieira/

Espero que gostem!

Obrigado!