import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import Index from "./pages";

const app = new Elysia()
  .use(html())
  .get("/", ({html}) => html(Index()))
  .get("/styles.css", ({}) => new Response(Bun.file("styles/output.css"), {
    headers: {
      "Content-Type": "text/css"
    }
  }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
