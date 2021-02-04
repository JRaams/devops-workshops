# DevOps-starter

![api](https://github.com/JRaams/devops-workshops/workflows/api/badge.svg)
![frontend](https://github.com/JRaams/devops-workshops/workflows/frontend/badge.svg)

### Running the project

1. Setting up the mongo database

Setup env (globally)
`$ cp .env.example .env`

Setup env (api project)
`$ cd api`
`$ cp .env.example .env`

Start mongodb container
`$ podman-compose up -d`

2. Starting the API

ENV variables:

- MONGO_URL
- JWT_SECRET
- EXPRESS_PORT (Default: 3000)

`$ cd api`
`$ yarn start:dev`

Starting the Frontend

ENV variables:

- PORT (Default 4000)

`$ cd frontend`
`$ yarn start`

Visit https://0.0.0.0:4200

### Testing the project

API

`$ cd api`
`$ npm run test`

Frontend

`$ cd frontend`
`$ export CHROME_BIN=/usr/bin/chromium-browser`
`$ npm run test`