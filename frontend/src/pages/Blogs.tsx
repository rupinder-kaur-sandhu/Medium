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
          <BlogCard
            authorName={"Rupinder"}
            title={
              "how can a ugly looking site can make a thousands dollars without affliate marketting"
            }
            content={
              "Well, foryou its just matter to learn new and new concepts. You focus on what you want to learn. you have made a huge list on what things you have to learn. Lets start with namaste react, AI/ML video by harkirat, Android course. System design bith LLD and HLD, then you wanted to learn Linux as well then cybersecurity. Also you wanted to do web3 cohort by harkirat, naah lets park that for a while. GCP/AWS is also on the list"
            }
            publishedDate={"2nd feb 2024"}
          ></BlogCard>
          <BlogCard
            authorName={"Harkirat"}
            title={"CyberSecurity is the new cool"}
            content={
              "Due to emerge of AI and ML, cybersecurity is going to play a crucial role. Since Data is the new oil, it will be necessary going forward to take extreme care of data maufunctioning"
            }
            publishedDate={"2nd feb 2024"}
          ></BlogCard>
        </div>
      </div>
    </div>
  );
};
