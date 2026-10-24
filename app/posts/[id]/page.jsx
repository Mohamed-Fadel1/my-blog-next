import Link from "next/link";
import { getPostById } from "@/app/lib/posts";
import { notFound } from "next/navigation";

const PostsDetails = async ({ params }) => {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-3xl font-bold dark:text-white">
          {post.title}
        </h1>

        <p className="mb-8 leading-7 text-gray-700 dark:text-gray-300">
          {post.content}
        </p>

        <Link
          href={`/posts/${post.id}/edit`}
          className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Edit Post
        </Link>
      </div>
    </div>
  );
};

export default PostsDetails;
