import { Todo } from "../api/todos";

export default function TodoComponent({todo}: {todo: Todo}) {
  return (
    <div class="flex gap-4">
      <h1 class="font-bold">{todo.title}</h1>
      <span>{todo.description}</span>
    </div>
  )
}
