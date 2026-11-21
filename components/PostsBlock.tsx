import Image from "next/image";
import { posts as allPosts } from "@/data/posts";
import { profile } from "@/data/profile";

const fmt = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export function PostsBlock({ limit }: { limit?: number }) {
  const list = [...allPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);

  if (list.length === 0) {
    return (
      <div className="s-empty" data-rv>
        <p className="s-empty-h">First posts are on the way.</p>
        <p>
          I&apos;m starting to post regularly on LinkedIn about engineering and what makes products grow. Each
          post, with its image, will also show up here.
        </p>
        <a className="s-btn" href={profile.contact.linkedin} rel="noopener noreferrer" target="_blank">
          Follow on LinkedIn
        </a>
      </div>
    );
  }
  return (
    <ul className="s-posts">
      {list.map((post) => (
        <li key={post.url} className="s-post" data-rv>
          {post.image ? <Image src={post.image} alt={post.title} width={1080} height={1350} /> : null}
          <div className="s-post-b">
            <p className="s-mono">{fmt(post.date)}</p>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <a href={post.url} rel="noopener noreferrer" target="_blank" className="s-link">
              Read on LinkedIn
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
