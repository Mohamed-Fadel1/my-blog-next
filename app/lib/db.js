import Database from "better-sqlite3";

const dbPath = process.env.VERCEL
  ? "/tmp/blog.db"
  : path.join(process.cwd(), "blog.db");

export const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  create_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
  `);

// db.exec("ALTER TABLE posts ADD COLUMN image TEXT");

const { n } = db.prepare("SELECT COUNT(*) AS n FROM posts").get();

if (n === 0) {
  const insert = db.prepare("INSERT INTO posts (title,content) VALUES (? , ?)");
  insert.run("first title", "First post content");
  insert.run("second title", "Second post content");
}
