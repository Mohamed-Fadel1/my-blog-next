import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-3">Post Not Found</h1>
      <p className="text-gray-500 mb-5">
        The post youre looking for doesnt exist.
      </p>
      <Link href="/posts" className="text-sky-600 hover:underline">
        Back to Posts
      </Link>
    </div>
  );
};

export default NotFound;
