"use client";

import { useActionState } from "react";
import { addPostsAction } from "../actions";

const AddPostForm = () => {
  const [state, formAction, isPending] = useActionState(addPostsAction, {
    success: false,
    errors: {},
  });
  return (
    <div className="max-w-5xl  mx-auto p-4 flex items-center justify-center flex-col">
      <h2 className="text-3xl font-bold my-5">Write a post</h2>

      <form action={formAction} className="flex flex-col gap-6 w-125">
        <div>
          <input
            className="border border-gray-500 outline-none px-3 py-1 rounded-md w-full focus:border-sky-600 duration-200 transition-all "
            type="text"
            name="title"
            placeholder="post title"
          />

          {state.errors.title && (
            <p className="bg-red-200 text-red-600 p-1 rounded-md my-2">
              {state.errors.title}
            </p>
          )}
        </div>

        <div>
          <textarea
            className="border border-gray-500 resize-none outline-none px-3 py-1 rounded-md w-full focus:border-sky-600 duration-200 transition-all "
            name="content"
            rows={4}
            placeholder="post content"
          />
          {state.errors.content && (
            <p className="bg-red-200 text-red-600 p-1 rounded-md my-2">
              {state.errors.content}
            </p>
          )}
        </div>

        {/* <div>
          <input type="file" name="image" accept="image/*" required />
          {state?.errors && <p className="text-red-500">{state.errors}</p>}
        </div> */}
        <button
          className="bg-sky-600 text-gray-200 px-5 py-2 rounded-md cursor-pointer hover:bg-sky-700 transition-all duration-200"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Adding..." : " Add post"}
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
