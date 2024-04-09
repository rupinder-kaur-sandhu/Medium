import { useBlog } from "../hooks/Index";
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {
  const { id } = useParams();

  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading || !blog) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <FullBlog blog={blog}></FullBlog>
    </div>
  );
};
