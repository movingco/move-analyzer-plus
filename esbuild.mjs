import { pnpPlugin } from "@yarnpkg/esbuild-plugin-pnp";
import { build } from "esbuild";

build({
  entryPoints: ["out/src/main.js"],
  bundle: true,
  external: ["vscode"],
  outfile: "dist/main.js",
  plugins: [pnpPlugin()],
  platform: "node",
  minify: true,
  format: "cjs",
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
