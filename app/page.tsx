import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight text-foreground">
          Hassan El Mghari
        </h1>

        <div className="space-y-6 text-base leading-relaxed text-foreground">
          <p>
            I'm a developer living in New York City. I love{" "}
            <Link
              href="https://github.com/nutlope"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              building open source AI apps
            </Link>{" "}
            and teaching developers about AI – and I'm lucky enough that I get
            to do both for work.
          </p>

          <p>
            Currently, I lead Developer Experience at{" "}
            <Link
              href="https://together.ai"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              Together AI
            </Link>{" "}
            where I manage a talented team and work on demos, docs, and content.
            Before that, I worked at a few startups like Vercel and ran my own
            game marketing company for a while too.
          </p>

          <p>
            In my spare time, I enjoy playing ping pong and hanging out with my
            wonderful wife.
          </p>

          <p>
            You can find me online on{" "}
            <Link
              href="https://x.com/nutlope"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              X
            </Link>{" "}
            or{" "}
            <Link
              href="https://linkedin.com/in/hassan-el-mghari"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              LinkedIn
            </Link>{" "}
            where I share my open source apps and tips for building with AI. I
            also{" "}
            <Link
              href="https://nutlope.substack.com/"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              write
            </Link>
            ,{" "}
            <Link
              href="https://github.com/nutlope"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              code
            </Link>
            , and{" "}
            <Link
              href="https://www.youtube.com/@HassanElMghari"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              make videos
            </Link>{" "}
            about building with AI.
          </p>
        </div>
      </div>
    </main>
  )
}
