/** @type {import('prettier').Config} */
export default {
  trailingComma: "all",
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  printWidth: 80,
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.mdx",
      options: {
        useTabs: false,
        tabWidth: 2,
        printWidth: 70,
      },
    },
  ],
};
