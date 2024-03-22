import Link from "next/link";
import { getBlogs } from "@/lib/blog";

export default async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-6 lg:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr]">
          <div className="space-y-4 lg:col-start-2 lg:col-span-1 xl:col-span-2">
            <header className="space-y-2">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  My Blog
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Thoughts, experiences, and interests
                </p>
              </div>
            </header>
            <div className="space-y-6">
              {blogs.results.map((blog) => (
                <div key={blog.id} className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight">
                    {blog.paragraph?.rich_text[0]?.plain_text ||
                      blog.child_page?.title ||
                      ""}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Posted on {new Date(blog.created_time).toLocaleDateString()}
                  </p>
                  <Link
                    className="flex items-center space-x-2 font-medium hover:underline"
                    href="#"
                  >
                    <div>Read more</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
