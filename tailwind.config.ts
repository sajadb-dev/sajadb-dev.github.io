import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'nunito' : ['"Nunito"', 'sans-serif'],
        'dancin' : ['"Dancing Script"', 'cursive'],
        'hurricane' : ['Hurricane', 'cursive']
      },
      colors: {
        'itch' : '#fa5c5c',
        'steam' : '#2a475e',
        'doge' : '#e1B303',
        'ronin' : '#2662d9',
        'bitcoin' : '#f7931a',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
          }
        }
      }
    }
  },
  variants: {
    fill: ['hover', 'focus']
  },
  plugins: [typography, forms, containerQueries]
} satisfies Config;
