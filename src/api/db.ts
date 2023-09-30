import Database from "bun:sqlite";

const db = new Database("todos.sqlite", { create: true });
createTodosTable()

function createTodosTable() {
  const query = db.query(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY ASC,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      completed_at TEXT
    )
  `);

  query.run();
}

export default db;
