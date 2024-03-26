import Link from "next/link";
import { getBlogs } from "@/lib/blog";
import SectionHeading from "@/components/section-heading";
import { IoChevronBackOutline } from "react-icons/io5";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

export default async function page() {
  const blogs = await getBlogs();

  return (
    <section>
      <Link href="/">
        <div className="absolute top-16 gap-2 flex items-center left-10">
          <IoChevronBackOutline />
          Go back to Harry's portfolio
        </div>
      </Link>
      <SectionHeading textSize="text-6xl">My Blogs</SectionHeading>
      <p className="text-gray-700 text-center animate-pulse text-lg mb-10 -mt-5">
        Thoughts, experiences, and interests
      </p>
      <div className="grid 2xl:grid-cols-2 lg:grid-cols-1 gap-5 px-2 lg:px-20">
        {blogs.results.map((blog) => (
          <div
            key={blog.id}
            className="flex gap-3 p-8 items-center justify-between bg-white bg-opacity-60 rounded-3xl "
          >
            <p className="lg:text-3xl font-medium capitalize flex gap-3 items-center text-xl">
              <HiOutlineChevronDoubleRight className="opacity-50" />
              {/* {blog.paragraph?.rich_text[0]?.plain_text ||
              blog.child_page?.title ||
              ""} */}
              {blog.child_page?.title || ""}
            </p>
            {blog.child_page?.title && (
              <div className="flex gap-2">
                <p className="">
                  Posted on {new Date(blog.created_time).toLocaleDateString()}
                </p>
                <Link
                  className="flex items-center space-x-2 font-medium hover:underline"
                  href={`https://plausible-firefly-af5.notion.site/${blog.child_page?.title.replace(
                    /\s+/g,
                    "-"
                  )}-${blog.id}`}
                >
                  Read more
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    // <div className="py-6 lg:py-12">
    //   <div className="container px-4 md:px-6">
    //     <div className="grid gap-6 lg:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr]">
    //       <div className="space-y-4 lg:col-start-2 lg:col-span-1 xl:col-span-2">
    //         <header className="space-y-2">
    //           <div className="space-y-2">
    //             <h1 className="text-5xl font-bold tracking-tight">My Blog</h1>
    //             <p className="text-gray-500 dark:text-gray-400">
    //               Thoughts, experiences, and interests
    //             </p>
    //           </div>
    //         </header>
    //         {/* <div className="">
    //           {blogs.results.map((blog) => (
    //             <div key={blog.id} className="space-y-2">
    //               <h2 className="text-3xl font-bold tracking-tight">
    //                 {blog.paragraph?.rich_text[0]?.plain_text ||
    //                   blog.child_page?.title ||
    //                   ""}
    //               </h2>
    //               {blog.child_page?.title && (
    //                 <div>
    //                   <p className="text-gray-500 dark:text-gray-400">
    //                     Posted on{" "}
    //                     {new Date(blog.created_time).toLocaleDateString()}
    //                   </p>
    //                   <Link
    //                     className="flex items-center space-x-2 font-medium hover:underline"
    //                     href={`https://plausible-firefly-af5.notion.site/${blog.child_page?.title.replace(
    //                       /\s+/g,
    //                       "-"
    //                     )}-${blog.id}`}
    //                   >
    //                     <div>Read more</div>
    //                   </Link>
    //                 </div>
    //               )}
    //             </div>
    //           ))}
    //         </div> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
