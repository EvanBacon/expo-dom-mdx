// Create types for mdx modules

declare module "*.mdx" {
  function Component(props: any): JSX.Element;
  export default Component;
}
