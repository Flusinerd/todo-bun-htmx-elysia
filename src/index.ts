import { Elysia, t } from "elysia";
import { html } from '@elysiajs/html'
import Index from "./pages";
import { createTodo, getTodos, toggleTodoCompletedStatus } from "./api/todos";

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) => html(Index()))
  .get("/styles.css", ({ }) => new Response(Bun.file("styles/output.css"), {
    headers: {
      "Content-Type": "text/css"
    }
  }))
  .get("/todos", () => getTodos())
  .post("/todos", ({ body }) => createTodo(body), {
    body: t.Object({
      title: t.String(),
      description: t.String()
    })
  })
  .put("/todos/:id/completed", ({ params }) => toggleTodoCompletedStatus(params.id), {
    params: t.Object({
      id: t.Numeric()
    })
  })
  .listen(3000);

console.log(
  `🦊 HTML Todo is running at ${app.server?.hostname}:${app.server?.port}`
);

