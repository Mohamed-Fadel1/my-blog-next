import { getPostById } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import EditPostForm from "./EditPostForm";

export default async function EditPostPage({ params }) {
  const { id } = await params;

  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            YOUR BLOG / POSTS
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Edit Post
          </h1>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Update your post title and content below.
          </p>
        </div>

        <EditPostForm post={post} />
      </div>
    </div>
  );
}
