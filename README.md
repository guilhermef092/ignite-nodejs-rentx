# Projeto - Rentalx

## Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro.

**RN**
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro cadastrado, deve vim com padrão a disponibilidade.
- O usuário responsável pelo cadastrado deve ser um usuário administrador.

## Listagem de Carros

**RF**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros pelo nome da categoria.
- Deve ser possível listar todos os carros pelo nome da marca.
- Deve ser possível listar todos os carros pelo nome do carro.

**RN**
- O usuário não precisa estar logado no sistema.

## Cadastrado de Especificação no Carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro.


**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastrado deve ser um usuário administrador.

## Cadastro de Imagem do Carro

**RF**
- Deve ser possível cadastrar a imagem do carro.


**RNF**
- Utilizar o multer upload dos arquivos.

**RN**
- O usuário pode cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastrado deve ser um usuário administrador.

## Aluguel de Carro

**RF**
- Deve ser possível cadastrar um aluguel.

**RN**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
- O usuário deve estar logado na aplicação


