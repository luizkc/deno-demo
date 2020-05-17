import { Application } from "https://deno.land/x/abc/mod.ts";
const app = new Application();
app.static("/static", "./static");
app
  .file("/", "./static/index.html")
  .file("/about", "./static/about.html")
  .start({ port: 8080 });
