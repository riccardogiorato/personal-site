import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight text-foreground">Hassan El Mghari</h1>

        <div className="space-y-6 text-base leading-relaxed text-foreground">
          <p>
            I'm a developer and creator. I work at{" "}
            <Link
              href="https://vercel.com"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              Vercel
            </Link>{" "}
            building tools that help developers ship faster. Previously, I've worked on various projects in the AI and
            web development space.
          </p>

          <p>
            My work focuses on making technology more accessible and easier to use. I'm passionate about developer
            experience, design systems, and creating products that people love. I enjoy writing about what I learn and
            sharing knowledge with the community.
          </p>

          <p>
            You can find me on{" "}
            <Link
              href="https://twitter.com/nutlope"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              Twitter
            </Link>
            ,{" "}
            <Link
              href="https://github.com/nutlope"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              GitHub
            </Link>
            , and{" "}
            <Link
              href="https://linkedin.com/in/hassan-el-mghari"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              LinkedIn
            </Link>
            . Feel free to reach out if you'd like to chat.
          </p>
        </div>
      </div>
    </main>
  )
}
