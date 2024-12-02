import { Outlet } from "@remix-run/react"
import { MDXProvider } from "@mdx-js/react"
import { MdxComponents } from "@/components/mdx/MDXReducer"

export default function Articles() {
  return (
    <MDXProvider components={MdxComponents}>
      <div className="py-10 px-10 prose lg:prose-xl">
        <Outlet />
      </div>
    </MDXProvider>
  )
}
