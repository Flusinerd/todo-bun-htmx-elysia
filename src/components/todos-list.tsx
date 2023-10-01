import { Todo, getTodos } from "../api/todos";

export function TodoListItem({ todo }: { todo: Todo }) {
  return (
    <li class={`flex gap-x-8 px-4 ${todo.completed_at ? 'line-through' : ''}`} hx-target="this" hx-swap="outerHTML">
      <input type="checkbox" hx-put={`/todos/${todo.id}/completed`} checked={!!todo.completed_at}/>
      <span class={`w-32 text-ellipsis `}>{todo.title}</span>
      <span>{todo.description}</span>
    </li>
  )
}

export default function TodosList() {
  const todos = getTodos();

  return (
    <ul id="todos-list" class="flex flex-col border-spacing-x-4 border-separate">
      {todos.map(todo =>
        <TodoListItem todo={todo} />
      )}
    </ul>
  )
}
