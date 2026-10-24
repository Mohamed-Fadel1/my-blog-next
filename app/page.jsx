import AddPostForm from "./posts/AddPostForm";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">My First Deployed Blog</h1>

      <AddPostForm />
    </div>
  );
}
