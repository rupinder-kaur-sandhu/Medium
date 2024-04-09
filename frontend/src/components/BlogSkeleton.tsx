import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div role="status" class="animate-pulse">
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div class="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>

          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div className="flex justify-center flex-col pl-2">
            <Circle></Circle>
          </div>
          <div className="pl-2 font-thin text-slate-400 text-sm flex justify-center flex-col">
            <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">
          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
        <div className="text-md font-thin">
          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-2">
          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
      </div>

      <span class="sr-only">Loading...</span>
    </div>
  );
};
