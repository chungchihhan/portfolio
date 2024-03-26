import { getBlog } from "@/lib/blog";

export default async function page({ params }: { params: { id: string } }) {
  const blog = await getBlog(params.id);

  return (
    <div>
      {params.id}
      {/* {blog.results.map((part) => (
        <div key={part.id}>{part. || ""}</div>
      ))} */}
      <div>-----------</div>
      <div>
        {blog.results.map((part) => (
          <div key={part.id}>
            {part.quote?.rich_text[0].plain_text ||
              part.heading_1?.rich_text[0].plain_text ||
              " "}
          </div>
        ))}
      </div>
    </div>
  );
}
