// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
    integrations: [icon(), mdx()],
    vite: {
        plugins: [tailwindcss()],
    },
    site: 'https://troy8203.github.io/Portfolio-blog',
    base: 'https://github.com/Troy8203/Portfolio-blog',
});