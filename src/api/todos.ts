import db from "./db"
import { TodoListItem } from "../components/todos-list";

export type Todo = {
  id: number;
  title: string;
  description: string;
  completed_at: string | null;
}

type CreateTodo = {
  title: string;
  description: string;
}

export const getTodos = () => {
  const query = db.query("SELECT * FROM todos;");
  const result = query.all() as Todo[];
  return result;
}

export const getTodoById = (id: number) => {
  const query = db.query("SELECT * FROM todos WHERE id = $id");
  return query.get({$id: id}) as Todo | null;
}

export const createTodo = (todo: CreateTodo) => {
  const query = db.query("INSERT INTO todos(title, description) VALUES($title, $description)");
  query.run({ $title: todo.title, $description: todo.description});
  const rowId = db.query("SELECT last_insert_rowid()").get() as {"last_insert_rowid()": number};
  const insertedTodo = db.query("SELECT * FROM todos WHERE id = $rowId").get({$rowId: rowId["last_insert_rowid()"]}) as Todo;
  return TodoListItem({todo: insertedTodo});
}

export const toggleTodoCompletedStatus = (id: number) => {
  const todo = getTodoById(id);
  if (!todo) {
    return ""
  }
  
  const query = db.query("UPDATE todos SET completed_at = $datetime WHERE id = $id");
  const datetime = todo.completed_at ? null : new Date().toISOString();
  query.run({$datetime: datetime, $id: id});
  todo.completed_at = datetime;
  return TodoListItem({todo});
}
