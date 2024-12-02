import React, { ReactNode } from "react"

/**
 * Headings
 */
export const HeadingOneMDX = ({
  children,
  ...rest
}: {
  children: ReactNode
}) => {
  return (
    <h1
      className="scroll-m-20 text-4xl text-gray-600 dark:text-gray-200 font-extrabold tracking-tight lg:text-5xl"
      {...rest}
    >
      {children}
    </h1>
  )
}

export const HeadingTwoMDX = ({
  children,
  ...rest
}: {
  children: ReactNode
}) => {
  const anchor = getAnchor(children)
  const link = `${anchor}`
  return (
    <h2
      className="text-gray-600 dark:text-gray-200 text-3xl font-extrabold tracking-tight mt-10 mb-6"
      id={link}
      {...rest}
    >
      {children}
    </h2>
  )
}

export const HeadingThreeMDX = ({
  children,
  ...rest
}: {
  children: ReactNode
}) => {
  const anchor = getAnchor(children)
  const link = `${anchor}`
  return (
    <h3
      className="text-2xl text-gray-600 dark:text-gray-200 font-extrabold tracking-tight mt-10 mb-6"
      id={link}
      {...rest}
    >
      {children}
    </h3>
  )
}

export const HeadingFourMDX = ({
  children,
  ...rest
}: {
  children: ReactNode
}) => {
  const anchor = getAnchor(children)
  const link = `${anchor}`
  return (
    <h4
      className="text-xl text-gray-600 dark:text-gray-200 font-extrabold tracking-tight mt-6 mb-4"
      id={link}
      {...rest}
    >
      {children}
    </h4>
  )
}

export const HeadingFiveMDX = ({
  children,
  ...rest
}: {
  children: ReactNode
}) => {
  const anchor = getAnchor(children)
  const link = `${anchor}`
  return (
    <h5
      className="text-lg text-gray-600 dark:text-gray-200 font-extrabold tracking-tight mt-4 mb-2"
      id={link}
      {...rest}
    >
      {children}
    </h5>
  )
}

export const HeadingSixMDX = ({
  children,
  ...rest
}: {
  children: ReactNode
}) => {
  return (
    <h6
      className="text-base text-gray-600 dark:text-gray-200 font-extrabold tracking-tight mt-4 mb-2"
      {...rest}
    >
      {children}
    </h6>
  )
}

/***
 * Content
 */

export const TextMDX = ({
  children,
  ...rest
}: {
  children: ReactNode
}) => {
  return (
    <p
      className="font-medium text-gray-600 dark:text-gray-200"
      {...rest}
    >
      {children}
    </p>
  )
}

export const BlockQuoteMDX = ({
  children,
  ...rest
}: {
  children: ReactNode
}) => {
  return (
    <blockquote
      className="bg-gray-200 dark:bg-gray-800 border-l-2 pl-2 py-1 my-4"
      {...rest}
    >
      {children}
    </blockquote>
  )
}

export const UnorderedListMdx = ({
  children,
  ...rest
}: {
  children: ReactNode
}) => {
  return <ul className="text-gray-600 dark:text-gray-200 mb-4" {...rest}>{children}</ul>
}

export const ListItemMdx = ({
  children,
  ...rest
}: {
  children: ReactNode
}) => {
  return <li className="text-gray-600 dark:text-gray-200 mb-4" {...rest}>{children}</li>
}

/**
 * TODO: handle internal gatsbylinks vs external
 */

export const LinkMDX = ({
  children,
  href,
  isExternal = false,
  ...rest
}: {
  children: ReactNode
  href: string
  isExternal: boolean
}) => {
  return href.includes("http") ? (
    <div className="mb-6">
      <a className="text-blue-600 hover:underline" {...rest} href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <svg className="inline-block ml-2 mb-1" fill="currentColor" viewBox="0 0 20 20" width="16" height="16">
          <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 5.414V13a1 1 0 11-2 0V5.414l-2.293 2.293a1 1 0 01-1.414-1.414l4-4z" />
          <path d="M3 9a1 1 0 011-1h6a1 1 0 110 2H5v6a1 1 0 11-2 0V10a1 1 0 011-1z" />
        </svg>
      </a>
    </div>
  ) : (
    <a className="text-blue-600 hover:underline" {...rest} href={href}>
      {children}
    </a>
  )
}

// export const ResponsiveImageMDX = ({
//   alt,
//   ...rest
// }: {
//   alt: string
// }) => <Image src="" alt={alt} layout="responsive" {...rest} />

function getAnchor(children: ReactNode): string {
  // Implement your logic to generate an anchor from children
  return ""
}