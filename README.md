
# Jshort Backend

API criada utilizando express que recebe url, gera uma url menor, registra em banco e retorna a url menor.


## API Reference

#### Retornar todos os links encurtados

```http
  GET /all
```

#### Criar link encurtado

```http
  POST /create
```

| Parametro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `longUrl`      | `json` | **Obrigatorio**. URL a ser encurtada |

#### Redirecionar link encurtado

```http
  GET /:id
```

| Parametro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obrigatorio**. id da url encurtada a ser redirecionada |

#### Retornar contagem de clicks de um link
```http
  GET /:id/clicks
```

| Parametro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obrigatorio**. id da url encurtada a ter os clicks retornados |


## Variaveis de ambiente
Para executar este projeto localmente, você precisa adicionar as seguintes variaveis de ambiente ao ser arquivo .env.

`DEV_USERNAME`: Usuario do banco de dados

`DEV_PASSWORD`: Senha do banco de dados

`DEV_DATABASE`: Nome do banco de dados

`DEV_HOST`: Host do banco de dados

`PORT`: Porta em que o servidor node ira ser executado.

## Execute localmente

Clone o projeto

```bash
  git clone git@github.com:jhonsstn/jshort-backend.git
```

Va para o diretorio do projeto

```bash
  cd jshort-backend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

