FROM node:14.16.0

WORKDIR /app
RUN chown -R node:node /app
USER node

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 5000

CMD ["node", "server.js"]