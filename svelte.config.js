const sveltePreprocess = require("svelte-preprocess")
const production = process.env.NODE_ENV === "production" // or some other env var like NODE_ENV

module.exports = {
  preprocess: sveltePreprocess({
    defaults: {
      script: "typescript",
    },
    sourceMap: !production,
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require("postcss-nesting"),
      ],
    },
  }),
}
