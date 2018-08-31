# TL;DR

Logger for koa

## Installation

### npm

```
$ npm i --save @libshin/koa-logger
```

### yarn

```
$ yarn add @libshin/koa-logger
```

## How to use

```js
const Koa = require("koa");
const logger = require("@libshin/koa-logger");

const app = new Koa();

if (process.env.NODE_ENV !== "production") {
  app.use(logger);
}

app.use(async ctx => {
  ctx.body = "Hello World";
});

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT);
```
