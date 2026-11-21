import { posts as allPosts } from "@/data/posts";
import { profile } from "@/data/profile";

const fmt = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

/** Generic posts list. `p` is the CSS class prefix of the design (e.g. "bp"), which styles `${p}-posts`, `${p}-post`, `${p}-empty`. */
export function PostsBlock({ p, limit }: { p: string; limit?: number }) {
  const list = [...allPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);

  if (list.length === 0) {
    return (
      <div className={`${p}-empty`} data-rv>
        <p className={`${p}-empty-h`}>First posts are on the way.</p>
        <p>
          I&apos;m starting to post regularly on LinkedIn about engineering and what makes products grow. Each post, with its
          image, will also show up here.
        </p>
        <a className={`${p}-btn`} href={profile.contact.linkedin} rel="noopener noreferrer" target="_blank">
          Follow on LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </div>
    );
  }
  return (
    <ul className={`${p}-posts`}>
      {list.map((post) => (
        <li key={post.url} className={`${p}-post`} data-rv>
          {post.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.image} alt={post.title} width={1080} height={1350} loading="lazy" />
          ) : null}
          <div className={`${p}-post-b`}>
            <p className={`${p}-mono`}>{fmt(post.date)}</p>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <a href={post.url} rel="noopener noreferrer" target="_blank" className={`${p}-link`}>
              Read on LinkedIn ↗
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
