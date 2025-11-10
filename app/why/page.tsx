"use client";

import "../page.css";
import Image from "next/image";

export default function Why() {
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
            <a href="/about" className="nav-link">about</a>
          </nav>
        </header>

        {/* Why Content */}
        <main className="about-main">
          <div className="about-content">
            <p className="about-intro">
              So, why did i really think of making Crosmos?
            </p>
            <p className="about-paragraph">
              Tbh I love note-taking apps and apps that help me be productive and help me writing me blogs with no friction and that are fast.
            </p>
            <p className="about-paragraph">
              But there was always that one thing missing, and migrating between apps was a pain always.
            </p>
            <p className="about-paragraph">
              The thing that was missing is -&gt; if my app is filled with 1000s of notes over the years. and suddenly I really need stuff that i wrote before but yea...my brain's capacity is not capable of remembering all of them. skill issue maybe?
            </p>
            <p className="about-paragraph">
              So yea I thought instead of me remembering the notes, why note let the notes remember? how I wrote, where I wrote, what I wrote, why I wrote and give me instant results.
            </p>
            <p className="about-paragraph">
              Not because i'm lazy, but because i wanna think <em>faster</em> iterate faster, make new ideas.
            </p>
            <p className="about-paragraph">
              That's when I knew i want agentic capabilities to my app with valuable context that remembers what I wrote, making it easy to search it up and even search things related.
            </p>
            <p className="about-paragraph">
              Also. I think notes should always be with you. On your machine. Whenever you wanna delete it? Just delete the file.
            </p>
            <p className="about-paragraph">
              Yep, that's why Crosmos is local-first. You own all your notes.
            </p>
            <p className="about-paragraph">
              Now let's come to the agentic part. Crosmos is an agentic knowledge-base that will not just remember your notes. but also help you with your writing. With the help of AI blocks, a chat to ask about your notes and with semantic search know how you write. Not just that, we plan to add MCP integration so that you don't even need to shift to apps and make Crosmos your home of ideas and execution. Going to add a lot more <strong>block</strong> types , yes blocks, It's a beautiful block-based editor as I don't want users to remember markdown syntax, though you can export in markdown for power users.
            </p>
            <p className="about-paragraph">
              So yes. I wanna build a home for your ideas to bloom and to not just to ideate but to ideate <strong>faster</strong>
            </p>
            <p className="about-conclusion">
              So yes, why need a second brain? when you can make yours better?
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