"use client";

import { deletePostAction } from "../actions";

const DeletePostButton = ({ id }) => {
  const handleDelete = async () => {
    await deletePostAction(id);
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
    >
      Delete
    </button>
  );
};

export default DeletePostButton;
