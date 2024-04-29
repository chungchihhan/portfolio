"use client";
import React, { useEffect } from "react";
import SectionHeading from "@/components/section-heading";
import { blogsData } from "@/lib/data";
import Blog from "@/components/blog";
import { useSectionInView } from "@/lib/hooks";

export default function Blogs() {
  const { ref } = useSectionInView("Blogs", 0.2);
  return (
    <section ref={ref} id="blogs" className="scroll-mt-28 mb-28">
      <SectionHeading>My Blogs</SectionHeading>
      <div>
        {blogsData.map((blog, index) => (
          <React.Fragment key={index}>
            <Blog {...blog} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
