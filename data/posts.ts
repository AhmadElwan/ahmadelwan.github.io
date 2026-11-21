/**
 * LinkedIn posts shown on the site (newest first).
 * Add one entry per post. Drop its image into /public/posts and reference it as "/posts/<file>.png".
 * Never name the US publishing client in a post, title, summary or image.
 */
export type Post = {
  title: string;
  /** ISO date, e.g. "2026-12-02" */
  date: string;
  summary: string;
  /** Path under /public, e.g. "/posts/2026-12-02-web-performance.png" */
  image?: string;
  /** Link to the post on LinkedIn */
  url: string;
  tags?: string[];
};

export const posts: Post[] = [];
