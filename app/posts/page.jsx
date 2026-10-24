import Link from "next/link";
import { getAllPosts } from "../lib/posts";
import DeletePostButton from "./DeletePostButton ";

const Posts = async () => {
  const allPosts = await getAllPosts();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold mb-8">All Posts</h1>
        <Link
          className="bg-green-700 text-gray-100 px-6 py-2 rounded-md cursor-pointer hover:bg-green-800 transition-all duration-200"
          href={`/`}
        >
          Home
        </Link>
      </div>

      {allPosts.length === 0 ? (
        <p className="text-gray-500 text-center py-10">No posts found.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => (
            <article
              key={post.id}
              className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>

              <p className="text-gray-600 mb-5 line-clamp-3">{post.content}</p>

              <div className="flex items-center justify-between gap-8">
                <Link
                  href={`/posts/${post.id}`}
                  className="inline-block bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition-colors"
                >
                  Read More
                </Link>

                <DeletePostButton id={post.id} />

                <Link
                  href={`/posts/${post.id}/edit`}
                  className="inline-block rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
                >
                  Edit
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
