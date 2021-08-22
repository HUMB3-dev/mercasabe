FROM merkaly/base:latest

WORKDIR /usr/src

ENV HOST 0.0.0.0
ENV PORT 80

ARG STORYBOOK_BASE_URL
ENV STORYBOOK_BASE_URL $STORYBOOK_BASE_URL

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build:storybook
RUN npm i -g http-server

EXPOSE ${PORT}

CMD http-server ./public
