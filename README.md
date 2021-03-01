# DevOps-starter

![api](https://github.com/JRaams/devops-workshops/workflows/api/badge.svg)
![frontend](https://github.com/JRaams/devops-workshops/workflows/frontend/badge.svg)

### Running the project (With live reload)

1. Setup env variables

Setup env (globally)
`$ cp .env.example .env`

Setup env (api project)
`$ cd api`
`$ cp .env.example .env`

2. Start containers
`$ podman-compose up -d`

- Frontend available on https://0.0.0.0
- API available on https://0.0.0.0/api

### Testing the project

API

`$ cd api`
`$ npm run test`

Frontend

`$ cd frontend`
`$ export CHROME_BIN=/usr/bin/chromium-browser`
`$ npm run test`
