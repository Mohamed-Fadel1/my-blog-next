"use client";

import { updatePostAction } from "@/app/actions";
import { useActionState } from "react";

export default function EditPostForm({ post }) {
  const [state, formAction, isPending] = useActionState(
    updatePostAction.bind(null, post.id),
    { success: false, errors: {} },
  );

  return (
    <form
      action={formAction}
      className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="space-y-2">
        <label
          htmlFor="title"
          className="block text-sm font-semibold text-gray-800 dark:text-gray-200"
        >
          Post Title
        </label>

        <input
          type="text"
          id="title"
          name="title"
          defaultValue={post.title}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
        />

        {state.errors?.title && (
          <p className="text-sm text-red-600">{state.errors.title}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="content"
          className="block text-sm font-semibold text-gray-800 dark:text-gray-200"
        >
          Post Content
        </label>

        <textarea
          id="content"
          name="content"
          defaultValue={post.content}
          rows={8}
          className="w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 leading-7 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
        />

        {state.errors?.content && (
          <p className="text-sm text-red-600">{state.errors.content}</p>
        )}
      </div>

      <div className="flex justify-end border-t border-gray-100 pt-5 dark:border-gray-800">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Updating..." : "Update Post"}
        </button>
      </div>
    </form>
  );
}
