
import { Outlet } from "@remix-run/react"
import { MDXProvider } from "@mdx-js/react"

export default function Articles() {

  return (
      <MDXProvider>
          <Outlet />
      </MDXProvider>
  )
}
