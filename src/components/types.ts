/* eslint-disable camelcase */
export type SubredditType = {
  id: number;
  name: string;
  commentNum: string;
};

export type DataType = {
  data: {
    score: number;
    title: string;
    permalink: string;
    created_utc: number;
    author: string;
    subreddit: string;
    num_comments: number;
    id: string;
    parent_id: string;
    children: string[];
    count: number;
    body_html: string;
    likes: boolean;
    name: string;
    replies: {
      kind: string;
      data: {
        children: DataType[];
      };
    };
  };
  kind: string;
  length: number;
};
