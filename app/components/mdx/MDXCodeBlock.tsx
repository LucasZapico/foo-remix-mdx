import React, { Children, ReactElement } from "react";

import { FaRegCopy as CopyIcon } from "react-icons/fa";
// import { LightenDarkenColor } from "lighten-darken-color"
import { Highlight, themes } from "prism-react-renderer";

// Todo fix tiypes

const FileName = ({ theme, fileName }: { theme: any; fileName: any }) => {
  // const bg = LightenDarkenColor(theme.plain.backgroundColor, -10)

  return (
    <div 
      className="p-2 rounded-md"
      // bg={bg}
    >
      {fileName}
    </div>
  );
};

type CodeProps = {
  code: string;
};

// const CopyCode = ({ code, ...rest }: CodeProps) => {
//   // const { onCopy, value, setValue, hasCopied } = useClipboard("");
//   // const toast = useToast();

//   return (
//     <div {{...rest}>
//       <Tooltip
//         label={hasCopied ? "Copied" : "copy to clipboard"}
//         aria-label="copy to clipboard"
//         placement="right"
//       >
//         <IconButton
//           variant="none"
//           aria-label="copy to clipboard"
//           icon={<CopyIcon opacity="0.5" />}
//           m={0}
//           onClick={() => {
//             setValue(code);
//             return toast({
//               title: "Copied to Clipboard",
//               description: `snipped copied to clipboard`,
//               position: "bottom-left",
//               status: "info",
//               variant: "top-accent",
//               duration: 1000,
//               isClosable: true,
//             });
//           }}
//         />
//       </Tooltip>
//     </div>
//   );
// };

export const CodeBlockMdx = ({ children }: { children: ReactElement }) => {

  const className = children.props.className || "";

  const [language = "", fileName = ""] = className.split(/[ :]/);
  // console.log("Children")
  // console.log(children)
  // console.log(className)

  const matches = language.match(/language-(?<lang>.*)/);
  const lang = language?.replace("language-", "");
  const file = fileName?.replace("title=", "");
  /**
   * handle if the code block is empty
   */
  if (!children.props.children) return <></>;

  const rawCode = children.props.children.trim();
  const theme = "dark" === "dark" ? themes.dracula : themes.duotoneLight;
  return (
    <div className="mb-2">
      {fileName.length > 0 ? <FileName theme={theme} fileName={file} /> : <></>}
      <Highlight code={rawCode} language={lang || ""} theme={theme}>
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }: {
          className: string;
          style: any;
          tokens: any;
          getLineProps: any;
          getTokenProps: any;
        }) => {
          // console.log(style)
          // console.log(children)
          const Code = () =>
            tokens.map((line: any, i: number) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token: any, key: number) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ));
          return (
            <pre
              className={`rounded-md px-2 py-2 position-relative overflow-auto`}
              style={style}
              // mt={fileName.length > 0 ? 0 : 2}
            >
              {/* <CopyCode position="absolute" top={1} right={1} code={rawCode} /> */}
              <Code />
            </pre>
          );
        }}
      </Highlight>
    </div>
  );
};
