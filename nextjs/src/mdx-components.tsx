import type { MDXComponents } from 'mdx/types'
import { Code } from 'bright'
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// there are several themes built in
// typescript should autocomplete the options
Code.theme = {
  dark: "github-dark",
  light: "github-light",
  // using a different CSS selector:
  // lightSelector: '[data-theme="light"]',
  lightSelector: 'html.light',
}
 
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
    pre: ({ children }) => <Code>{children}</Code>,
  }
}