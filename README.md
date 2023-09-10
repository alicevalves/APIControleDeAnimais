# APIControleDeAnimais
API desenvolvida em NodeJS para Controle de Animais

## Preparando o ambiente
1. Antes de executar o projeto, verifique se o Node.Js está instalado e configurado
2. Clone o repositório, para isso acesse o caminho da pasta que deseja realizar o clone no terminar e execute o comando abaixo:
git clone https://github.com/alicevalves/APIControleDeAnimais

3. Acesse o diretório do projeto pelo CMD e execute o comando abaixo:
npm install

## Executando
Após preparar o ambiente, ainda na pasta do projeto execute com o comando:
npm start

A API será iniciada na porta 3000. Após isso você pode utilizar os exemplos abaixo para testes nas ferramentas insomnia ou postman.

## Adicionar um animal: 
- Método: POST 
- URL: http://localhost:3000/animais
- Corpo da requisição (JSON):
{
    "nome": "Nome do animal",
    "especie": "Espécie do animal",
    "idade": 3,
    "cor": "Cor do animal"
}

## Listar animais: 
- Método: GET 
- URL: http://localhost:3000/animais

## Excluir um animal: 
- Método: DELETE 
- URL: http://localhost:3000/animais/{id}
- Troque o id pelo código do animal que deseja excluir. 

## Atualizar um animal: 
- Método: PUT 
- URL: http://localhost:3000/animais/{id}
- Troque o id pelo código do animal que deseja atualizar. 
- Corpo da requisição (JSON):
{
    "nome": "Novo nome do animal",
    "especie": "Nova espécie do animal",
    "idade": 4,
    "cor": "Nova cor do animal"
}
  
## Adicionar uma ONG: 
- Método: POST 
- URL: http://localhost:3000/ongs
- Corpo da requisição (JSON):
{
    "nome": "Nome da ONG",
    "endereco": "Endereço da ONG",
    "telefone": "Telefone da ONG"
}
## Listar ONGs: 
- Método: GET 
- URL: http://localhost:3000/ongs
## Excluir uma ONG: 
- Método: DELETE 
- URL: http://localhost:3000/ongs/{id}
- Troque o id pelo código da ONG que deseja excluir. 

## Atualizar uma ONG: 
- Método: PUT 
- URL: http://localhost:3000/ongs/{id}
- Troque o id pelo código da ONG que deseja atualizar.  
- Corpo da requisição (JSON):
{
    "nome": "Novo nome da ONG",
    "endereco": "Novo endereço da ONG",
    "telefone": "Novo telefone da ONG"
}