import type { MetaFunction } from "@remix-run/node"
import { Button } from "@/components/ui/button"
import { Link } from "@remix-run/react"
import { glob } from "glob"
import fs from "node:fs"
import matter from "gray-matter"
import { nanoid } from "nanoid"
import { useLoaderData } from "@remix-run/react"

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Foo - Mdx" },
    {
      name: "description",
      content:
        "A public Remixjs site working through the expected behavior",
    },
  ]
}

export async function loader() {
  const articlesFiles = await glob(
    "./app/routes/_articles.articles.*.mdx"
  )

  const articles = articlesFiles.map((filename: string) => {
    const contents = fs.readFileSync(filename, "utf-8")
    const { data: frontMatter, content } = matter(contents)
    return {
      slug: filename
        .replace("app/routes/_articles.articles.", "")
        .replace(".mdx", ""),
      frontMatter,
      content,
    }
  })

  return await articles
}

export default function Index() {
  const articles = useLoaderData<typeof loader>()
  return (
    <div className="py-10 px-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Remixjs - Mdx
      </h1>
      <div className="mt-10">
        {articles.map((article: any) => {
          const { frontMatter } = article
          return (
            <Link key={nanoid()} to={`/articles/${article.slug}`}>
              <div className="mb-10">
                <div className="py-6">
                <h2 className="text-2xl font-bold">
                  {frontMatter.title}
                </h2>
                <p className="text-gray-500">
                  {frontMatter.description}
                </p>
                </div>
                <Button variant="outline">Read More</Button>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
