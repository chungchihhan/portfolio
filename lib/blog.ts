export const dynamic = "force-dynamic";

import { NotionResponse } from "./definitions";

export async function getBlogs() {
  const NOTION_API_KEY = process.env.NOTION_API_KEY; // Store your Notion API key in an environment variable
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
  try {
    const response = await fetch(
      `https://api.notion.com/v1/blocks/${NOTION_DATABASE_ID}/children?page_size=100`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
        },
        next: { revalidate: 10 },
      }
    );

    const data: NotionResponse = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching blogs");
  }
}

export async function getBlog(blogId: string) {
  const NOTION_API_KEY = process.env.NOTION_API_KEY; // Store your Notion API key in an environment variable
  try {
    const response = await fetch(
      `https://api.notion.com/v1/blocks/${blogId}/children?page_size=100`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
        },
        next: { revalidate: 10 },
      }
    );

    const data: NotionResponse = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching blogs");
  }
}
