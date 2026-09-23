// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  site: isVercel
    ? "https://aelsa-portfolio.vercel.app"
    : "https://ahmedsawwah.github.io",
  base: isVercel ? "/" : "/AELSA-Portfolio",
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
