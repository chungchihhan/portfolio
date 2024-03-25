export type NotionResponse = {
  object: string;
  results: NotionBlock[];
  next_cursor: null | string;
  has_more: boolean;
  type: string;
  block: {};
  developer_survey: string;
  request_id: string;
};

export type NotionBlock = {
  object: string;
  id: string;
  parent: {
    type: string;
    page_id: string;
  };
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  has_children: boolean;
  archived: boolean;
  type: string;
  paragraph?: {
    rich_text: NotionRichText[];
    color: string;
  };
  child_page?: {
    title: string;
  };
};

export type NotionRichText = {
  type: string;
  text: {
    content: string;
    link: null | {
      url: string;
    };
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string | null;
  href: null | string;
};
