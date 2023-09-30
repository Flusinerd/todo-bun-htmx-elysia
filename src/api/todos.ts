import db from "./db"
import Todo from "../components/todo";

export type Todo = {
  id: number;
  title: string;
  description: string;
  completed_at: Date;
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

export const createTodo = (todo: CreateTodo) => {
  const query = db.query("INSERT INTO todos(title, description) VALUES($title, $description)");
  query.run({ $title: todo.title, $description: todo.description});
  const rowId = db.query("SELECT last_insert_rowid()").get() as {"last_insert_rowid()": number};
  const insertedTodo = db.query("SELECT * FROM todos WHERE id = $rowId").get({$rowId: rowId["last_insert_rowid()"]});
  return Todo({todo: insertedTodo as Todo});
}
