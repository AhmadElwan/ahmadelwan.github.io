export type Post = {
  title: string;

  date: string;
  summary: string;

  image?: string;

  url: string;
  tags?: string[];
};

export const posts: Post[] = [];
