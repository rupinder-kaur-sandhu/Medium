import { Blog } from "../hooks/Index";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full pt-200 px-10 max-w-screen-xl pt-10">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">
              Posted On 2nd December 2023
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar
                  size="big"
                  name={blog.author.name || "Rupinder"}
                ></Avatar>
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Rupinder"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability to grab user's
                  attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
