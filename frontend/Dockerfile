FROM node:14.16.0

WORKDIR /home/node/app
RUN chown -R node:node /home/node/app
USER node

ENV NG_CLI_ANALYTICS=ci

COPY package*.json ./
RUN npm ci --quiet
COPY . .

EXPOSE 4200
CMD ["npm", "start"]