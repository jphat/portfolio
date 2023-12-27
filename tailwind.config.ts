import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      aspectRatio: {
        "golden": "1.618 / 1",
        "reverse-golden": "1 / 1.618",
        "video": "16 / 9",
      },
    },

    fontFamily: {
      title: ["'Space Grotesk'", "'sans-serif'"],
      sans: ["'Work Sans'", "sans-serif"],
      mono: ["'Space Mono'", "monospace"],
    },

  },

  plugins: [
    aspectRatio,
    typography,
  ],

} satisfies Config

