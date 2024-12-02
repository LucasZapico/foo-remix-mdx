import { CodeBlockMdx } from "./MDXCodeBlock";
import {

  HeadingOneMDX,
  HeadingTwoMDX,
  HeadingThreeMDX,
  HeadingFourMDX,
  HeadingFiveMDX,
  HeadingSixMDX,
  BlockQuoteMDX,
  LinkMDX,
  ListItemMdx,
  // ResponsiveImageMDX,
  TextMDX,
  // Image,
  UnorderedListMdx,
} from "./MDXComponents";




export const MdxComponents = {
  h1: (props: any) => <HeadingOneMDX {...props} />,
  h2: (props: any) => <HeadingTwoMDX {...props} />,
  h3: (props: any) => <HeadingThreeMDX {...props} />,
  h4: (props: any) => <HeadingFourMDX {...props} />,
  h5: (props: any) => <HeadingFiveMDX {...props} />,
  h6: (props: any) => <HeadingSixMDX {...props} />,
  p: (props: any) => <TextMDX {...props} />,
  ul: (props: any) => <UnorderedListMdx {...props} />,
  li: (props: any) => <ListItemMdx {...props} />,
  // ol: (props: any) => <OrderedList {...props} />,
  strong: (props: any) => <strong className="font-bold text-gray-600 dark:text-gray-200" {...props} />,
  em: (props: any) => <em className="italic text-gray-600 dark:text-gray-200" {...props} />,
  blockquote: (props: any) => <BlockQuoteMDX {...props} />,
  a: (props: any) => <LinkMDX {...props} />,
  code: (props: any) => <code  class="text-sm sm:text-base inline-flex text-left items-center space-x-2 bg-gray-800 text-white rounded-lg p-2 pl-2" {...props} />,
  pre: (props: any) => <CodeBlockMdx {...props} />,
};

