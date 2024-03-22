// "use server";

// export async function getBlogs() {
//   //   const response = await fetch(
//   //     "https://api.notion.com/v1/blocks/d9f0e14c1e0d41c69141fbb5380b04e7/children?page_size=100"
//   //   );
//   const NOTION_API_KEY = process.env.NOTION_API_KEY; // Store your Notion API key in an environment variable
//   const NOTION_DATABASE_ID = "d9f0e14c1e0d41c69141fbb5380b04e7";
//   const response = await fetch(
//     `https://api.notion.com/v1/blocks/${NOTION_DATABASE_ID}/children?page_size=100`,
//     {
//       headers: {
//         Authorization: `${NOTION_API_KEY}`,
//         "Notion-Version": "2022-06-28",
//       },
//     }
//   );

//   const data = await response.json();
//   console.log(data);
//   return data;
// }
