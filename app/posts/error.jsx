"use client";

import React from "react";

const Error = ({ error, reset }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-3">Something went wrong!</h2>

      <p className="text-gray-500 mb-5">
        {error.message || "Failed to load posts."}
      </p>

      <button
        onClick={() => reset()}
        className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
