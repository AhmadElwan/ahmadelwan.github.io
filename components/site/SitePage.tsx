import { profile, contactLinks } from "@/data/profile";
import { posts } from "@/data/posts";
import { formConfig } from "@/lib/config";
import { Accent } from "@/components/Accent";
import { PostsBlock } from "@/components/PostsBlock";
import { Logo } from "./Logo";
import { Branch } from "./Branch";
import { HeroArt } from "./HeroArt";
import { Clock } from "./Clock";
import { Cover } from "./covers";
import { ContactForm } from "./ContactForm";
import { SiteBehavior } from "./SiteBehavior";

const pad = (n: number) => String(n).padStart(2, "0");
const STACK = [
  "Next.js",
  "React",
  "Python",
  "FastAPI",
  ".NET",
  "PostgreSQL",
  "Docker",
  "Google Cloud",
  "SEO",
  "HubSpot",
  "WordPress",
];

export function SitePage() {
  const links = contactLinks();
  const exp = profile.experience;
  const hasPosts = posts.length > 0;
  const n = { services: "01", work: "02", exp: "03", about: "04", skills: "05", posts: "06" };

  return (
    <>
      <header className="s-top">
        <div className="s-wrap s-top-in">
          <a href="#top" className="s-mark">
            <Logo className="s-mark-sym" />
            {profile.name}
          </a>
          <nav aria-label="Primary">
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              {hasPosts && (
                <li>
                  <a href="#posts">Posts</a>
                </li>
              )}
            </ul>
          </nav>
          <div className="s-top-r">
            <p className="s-time">
              Amman <Clock />
            </p>
            <details className="s-menu">
              <summary aria-label="Menu">
                <span>Menu</span>
              </summary>
              <ul>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                {hasPosts && (
                  <li>
                    <a href="#posts">Posts</a>
                  </li>
                )}
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </details>
            <a className="s-pill" href="#contact">
              Hire me
            </a>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="s-hero s-wrap" id="top" aria-labelledby="hero-title">
          <div className="s-hero-l">
            {profile.availability && (
              <p className="s-avail">
                <i aria-hidden="true" />
                {profile.availability}
              </p>
            )}
            <p className="s-eyebrow">
              {profile.title} · {profile.location}
            </p>
            <h1 id="hero-title">
              <Accent text={profile.headline} />
            </h1>
            <p className="s-intro">{profile.intro}</p>
            <p className="s-btns">
              <a className="s-btn s-btn-red" href="#contact">
                Start a project
              </a>
              <a className="s-btn" href="#work">
                See the work
              </a>
              {profile.contact.cv && (
                <a className="s-btn s-btn-ghost" href={profile.contact.cv}>
                  Download CV
                </a>
              )}
            </p>
          </div>
          <HeroArt />
        </section>

        <div className="s-wrap">
          <dl className="s-facts" aria-label="At a glance">
            {profile.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="s-marq" aria-label="Technologies I work with">
          <div className="s-marq-track">
            {[0, 1].map((k) => (
              <ul key={k} aria-hidden={k === 1 ? "true" : undefined}>
                {STACK.map((t) => (
                  <li key={t + k}>{t}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <section className="s-dark" id="services" aria-labelledby="services-title">
          <div className="s-wrap s-sec">
            <h2 id="services-title" className="s-label">
              <span>({n.services})</span> Services
            </h2>
            <p className="s-h2" data-rv>
              What I can do <em>for you.</em>
            </p>
            <ol className="s-svc">
              {profile.services.map((s, i) => (
                <li key={s.title} className="s-svc-c" data-rv>
                  <span className="s-mono">{pad(i + 1)}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <ul className="s-chips">
                    {s.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <p className="s-svc-cta" data-rv>
              <a className="s-btn s-btn-light" href="#contact">
                Tell me about your project
              </a>
            </p>
          </div>
        </section>

        <section className="s-wrap s-sec" id="work" aria-labelledby="work-title">
          <h2 id="work-title" className="s-label">
            <span>({n.work})</span> Selected work
          </h2>
          <p className="s-h2" data-rv>
            Things I&apos;ve <em>built and run.</em>
          </p>
          <p className="s-note">{profile.projectsNote}</p>
          <ul className="s-grid">
            {profile.projects.map((p, i) => (
              <li key={p.title} className="s-card" data-rv>
                <Cover index={i} />
                <div className="s-card-b">
                  <p className="s-kicker">
                    <span>{pad(i + 1)}</span> {p.kind}
                  </p>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <ul className="s-chips s-chips-sm">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="s-wrap s-sec" id="experience" aria-labelledby="exp-title">
          <h2 id="exp-title" className="s-label">
            <span>({n.exp})</span> Experience
          </h2>
          <div className="s-emp" data-rv>
            <p className="s-h2">{exp.org}</p>
            <p className="s-emp-meta">
              <strong>{exp.role}</strong>
              <span>{exp.place}</span>
              <span className="s-tag-red">{exp.period}</span>
            </p>
          </div>
          <ol className="s-areas">
            {exp.areas.map((a, i) => (
              <li key={a.label} className="s-area" data-rv>
                <span className="s-bignum">{pad(i + 1)}</span>
                <h3>{a.label}</h3>
                <p className="s-mono">{a.meta}</p>
                <p>{a.summary}</p>
                <ul>
                  {a.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="s-wrap s-sec" id="about" aria-labelledby="about-title">
          <h2 id="about-title" className="s-label">
            <span>({n.about})</span> About
          </h2>
          <div className="s-about">
            <p className="s-lead" data-rv>
              {profile.about[0]}
            </p>
            <div data-rv>
              {profile.about.slice(1).map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="s-wrap s-sec" id="skills" aria-labelledby="skills-title">
          <h2 id="skills-title" className="s-label">
            <span>({n.skills})</span> Skills
          </h2>
          <div className="s-skills">
            {profile.skills.map((g) => (
              <div key={g.group} className="s-skill" data-rv>
                <h3>{g.group}</h3>
                <ul className="s-chips s-chips-sm">
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {hasPosts && (
          <section className="s-wrap s-sec" id="posts" aria-labelledby="posts-title">
            <h2 id="posts-title" className="s-label">
              <span>({n.posts})</span> Posts
            </h2>
            <p className="s-h2" data-rv>
              Notes from <em>building.</em>
            </p>
            <PostsBlock limit={3} />
          </section>
        )}

        <section className="s-contact" id="contact" aria-labelledby="contact-title">
          <Branch className="s-contact-branch" />
          <div className="s-wrap">
            <p className="s-label s-label-ink">
              <span>({hasPosts ? "07" : "06"})</span> Contact
            </p>
            <h2 id="contact-title" className="s-big">
              Let&apos;s work <span>together.</span>
            </h2>
            <div className="s-contact-grid">
              <ul className="s-links">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.href.startsWith("http") ? { rel: "noopener noreferrer", target: "_blank" } : {})}
                    >
                      <small>{l.label}</small>
                      <span>{l.display}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ContactForm endpoint={formConfig.endpoint} accessKey={formConfig.key} to={formConfig.to} />
            </div>
          </div>
        </section>
      </main>

      <footer className="s-foot">
        <div className="s-wrap s-foot-in">
          <span className="s-foot-id">
            <Logo className="s-foot-sym" />© <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            {profile.name} · {profile.location}
          </span>
          <a href="#top">Back to top</a>
        </div>
      </footer>

      <SiteBehavior />
    </>
  );
}
