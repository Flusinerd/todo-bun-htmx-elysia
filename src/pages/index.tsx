import { Html } from "@elysiajs/html";
import { Page } from "../layout/page";
import TodosList from "../components/todos-list";
import TodosCreate from "../components/todos-create";

export default function Index() {
  return (
    <Page>
      <h1 class="text-xl">Todo app</h1>
      <TodosCreate></TodosCreate>
      <TodosList></TodosList>
    </Page>
  )
}
