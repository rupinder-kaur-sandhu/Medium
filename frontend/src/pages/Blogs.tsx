import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks/Index";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar></Appbar>
        <div className="flex justify-center">
          <div>
            <BlogSkeleton></BlogSkeleton>
            <BlogSkeleton></BlogSkeleton>
            <BlogSkeleton></BlogSkeleton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Rupinder"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd feb 2024"}
            ></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};
