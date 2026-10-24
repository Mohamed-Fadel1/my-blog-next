import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-6 mt-16">
      <p className="bg-gray-400 w-125 h-7.5 animate-pulse"></p>
      <p className="bg-gray-400 w-125 h-7.5 animate-pulse"></p>
    </div>
  );
};

export default loading;
