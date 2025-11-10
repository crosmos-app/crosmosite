"use client";

import "../page.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="page-container about-page">
        {/* Header */}
        <header className="header">
          <div className="logo flex items-center gap-3">
            <Image
              src="/crosmosnobg.png"
              alt="Crosmos Logo"
              width={90}
              height={90}
              className="object-contain"
              priority
            />
          </div>
          <nav className="nav">
            <a href="/" className="nav-link">home</a>
            <a href="/why" className="nav-link">why?</a>
          </nav>
        </header>

        {/* About Content */}
        <main className="about-main">
          <div className="about-content">
            <p className="about-intro">
              you’ve got 1000s of notes sitting somewhere, but when you really need that one thing you wrote…poof, can’t find it?
            </p>
            <p className="about-paragraph">
              yeah, that’s the story of every note app. they store your notes, but they don’t really remember them.
            </p>
            <p className="about-paragraph">
              search is dumb. context is lost. and switching between 5 apps just kills your flow.
            </p>
            <p className="about-paragraph">
              so we built crosmos… not another note app, but a local-first, agentic knowledge base that actually knows your notes.
            </p>
            <h1 className="about-intro">the problem</h1>
            <p className="about-paragraph">
              most note apps are just buckets.
              you pour ideas in, but when it’s time to use them again… good luck finding what matters.
              they don’t understand how you think, why you wrote something, or what connects to what.
            </p>
            <p className="about-paragraph">
              and on top of that, you don’t even fully own your data. it’s all sitting on some cloud server, waiting for syncs and subscriptions.
            </p>
            <h2 className="about-intro">the solution</h2>
            <p className="about-paragraph">
              instead of you remembering your notes, what if your notes remembered you?
            </p>
            <p className="about-paragraph">
              crosmos learns how you write, what you care about, and helps you pull up things instantly…with context.
              you can chat with your notes, explore ideas, and connect old thoughts to new ones
            </p>
            <h1 className="about-intro">what makes crosmos different</h1>
            <h2 className="about-subheading">it's actually fast</h2>
            <p className="about-paragraph">
              most note apps take 5-6 seconds just to load. you click, wait, wonder if it froze.
            </p>
            <p className="about-paragraph">
              crosmos? <strong>300ms</strong>. you click, it's there.
            </p>
            <p className="about-paragraph">
              no bloat. no heavy frameworks eating 500mb of ram. just a lightweight app built on <strong>tauri + rust</strong> that starts instantly and stays snappy.
            </p>
            <p className="about-paragraph">
              we're talking <strong>10-20mb total</strong> vs the usual 200-500mb installs.
            </p>
            <p className="about-paragraph">
              which means it doesn't just feel fast… it runs smooth even on older laptops.
            </p>
            <h2 className="about-intro">your notes live on your machine</h2>
            <p className="about-paragraph">
              most apps say "local-first" but still need the cloud to work.
            </p>
            <p className="about-paragraph">
              crosmos? truly local. your notes are <strong>json files on your disk</strong>.
            </p>
            <ul className="about-list">
              <li>wanna back them up? copy the folder.</li>
              <li>wanna version control? throw it in git.</li>
              <li>wanna delete everything? just delete the folder.</li>
            </ul>
            <p className="about-paragraph">
              no syncing. no servers holding your data hostage. no "oops, we're shutting down."
            </p>
            <p className="about-paragraph">
              you own it. period.
            </p>
            <h2 className="about-subheading">built for speed and ideas, not just storage</h2>
            <p className="about-paragraph">
              crosmos isn't trying to be another "second brain" app with 47 database views and a learning curve.
            </p>
            <p className="about-paragraph">
              it's a <strong>block-based editor</strong> (so you don't fight markdown), with:
            </p>
            <ul className="about-list">
              <li>slash commands that just work</li>
              <li>AI blocks that help you write</li>
              <li>chat to ask questions about your notes</li>
              <li>semantic search that understands <em>how you write</em>, not just keywords</li>
            </ul>
            <p className="about-paragraph">
              and soon: <strong>MCP integration</strong> so you don't even need to leave the app to get things done.
            </p>
            <p className="about-paragraph">
              it's not about remembering everything. it's about <strong>thinking faster and creating better</strong>.
            </p>
            <h1 className="about-intro">the vision</h1>
            <p className="about-paragraph">
              we don’t need another “second brain.”
              we just need a way to make our own brain faster… to think, iterate, and create better.
            </p>
            <p className="about-paragraph">
              that’s why we built crosmos
            </p>
            <p className="about-paragraph">
              a home where your ideas don’t just live... they grow with you.
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-subtext">
            <div className="sub-item">
              <div className="icons">
                <a
                  href="https://github.com/Ethics03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <svg
                    className="sub-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12..." />
                  </svg>
                </a>
              </div>
              <span>
                crafted by{" "}
                <a
                  href="https://x.com/rachitcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-sub-link"
                >
                  @rachit
                </a>
              </span>
            </div>

            <div className="sub-item">
              <span>
                designed by{" "}
                <a
                  href="https://x.com/sa1shankar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-sub-link"
                >
                  @sai
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}