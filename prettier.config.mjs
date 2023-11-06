/** @type {import("prettier").Config} */

const config = {
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  printWidth: 80,
  pluginSearchDirs: ['.'],
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}

export default config
