const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});
module.exports = {
  pageExtensions: ["js", "jsx", "mdx"],
};
