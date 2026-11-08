FROM node:22-alpine

WORKDIR /app

COPY package*.jason ./

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "node", "src/server.js"]