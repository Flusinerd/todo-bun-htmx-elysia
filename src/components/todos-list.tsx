import { getTodos } from "../api/todos";
import Todo from "./todo";

export default function TodosList() {
  const todos = getTodos();

  return(
    <ul id="todos-list">
      { todos.map(todo => 
        <li><Todo todo={todo}></Todo></li>
      )}
    </ul>
  )
}
