const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = {
    message: "Hello World!",
  };
});

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));
