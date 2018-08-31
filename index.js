const kleur = require('kleur');

const methods = {
  GET: kleur.green('GET'),
  POST: kleur.yellow('POST'),
  PUT: kleur.blue('PUT'),
  DELETE: kleur.red('DELETE'),
};

module.exports = async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${methods[ctx.method]} ${ctx.url} - ${kleur.cyan(`${ms}ms`)}`);
}
