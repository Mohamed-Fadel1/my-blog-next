import { db } from "./db";

export async function getAllPosts() {
  return db.prepare("SELECT * FROM posts ORDER BY id ASC").all();
}

export async function getPostById(id) {
  const post = db.prepare("SELECT * FROM posts WHERE id = ?").get(Number(id));
  return post ?? null;
}

export async function addPost({ title, content }) {
  const result = db
    .prepare("INSERT INTO posts (title , content) VALUES (? , ?)")
    .run(title, content);
  return getPostById(result.lastInsertRowid);
}

export async function deletePost(id) {
  return db.prepare("DELETE FROM posts WHERE id = ?").run(Number(id));
}

export async function updatePost(id, { title, content }) {
  return db
    .prepare("UPDATE posts SET title = ?, content = ? WHERE id = ?")
    .run(title, content, Number(id));
}
