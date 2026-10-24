"use server";
import { revalidatePath } from "next/cache";
import { addPost, deletePost, updatePost } from "./lib/posts";
import { redirect } from "next/navigation";
// import { writeFile } from "node:fs/promises";
// import { randomUUID } from "node:crypto";
// import path from "node:path";

export async function addPostsAction(prevState, formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const image = formData.get("image");
  let errors = {};

  if (title.trim() === "" || typeof title !== "string") {
    errors.title = "title is required";
  } else if (title.trim().length < 3) {
    errors.title = "title must be at least 3 characters";
  }

  if (content.trim() === "" || typeof content !== "string") {
    errors.content = "content is required";
  }

  // if (!(image instanceof File) || image.size === 0) {
  //   return {
  //     error: "Please select an image",
  //   };
  // }

  // if (!image.type.startsWith("image/")) {
  //   return {
  //     error: "File must be an image",
  //   };
  // }

  // if (image.size > 5 * 1024 * 1024) {
  //   return {
  //     error: "Image must be smaller than 5 MB",
  //   };
  // }

  // const bytes = await image.arrayBuffer();
  // const buffer = Buffer.from(bytes);
  // const imageName = `${randomUUID}.jpg`;
  // const imagePath = path.join(process.cwd(), "public", "uploads", imageName);
  // await writeFile(imagePath, buffer);

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  addPost({ title: title.trim(), content: content.trim() });
  revalidatePath("/posts");
  redirect("/posts");
}

export async function deletePostAction(id) {
  deletePost(id);

  revalidatePath("/posts");
  redirect("/posts");
}

export async function updatePostAction(id, prevState, formData) {
  const title = formData.get("title");
  const content = formData.get("content");

  let errors = {};

  if (typeof title !== "string" || title.trim() === "") {
    errors.title = "title is required";
  } else if (title.trim().length < 3) {
    errors.title = "title must be at least 3 characters";
  }

  if (typeof content !== "string" || content.trim() === "") {
    errors.content = "content is required";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  await updatePost(id, {
    title: title.trim(),
    content: content.trim(),
  });

  revalidatePath("/posts");
  redirect("/posts");
}
