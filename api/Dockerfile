FROM node:14

WORKDIR /app
RUN chown -R node:node /app
USER node

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000

CMD ["node", "server.js"]