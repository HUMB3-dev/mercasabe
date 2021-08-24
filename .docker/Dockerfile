FROM merkaly/base:latest

WORKDIR /usr/src

ENV HOST 0.0.0.0
ENV PORT 80

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm i -g http-server

EXPOSE ${PORT}

CMD http-server ./public
