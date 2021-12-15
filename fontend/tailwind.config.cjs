const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
      screens: {
				'xs' : '500px',
				'2lg': '1100px',
				'3xl': '1921px'
			},
			height: {
				'min': 'min-content',
				'max': 'max-content',
				'inherit': 'inherit',
				'initial': 'initial'
			},
			minHeight: {
				'min': 'min-content',
				'max': 'max-content',
        'inherit': 'inherit',
				'initial': 'initial'
			},
			width: {
				'inherit': 'inherit',
				'initial': 'initial'
			},
      maxWidth: {
        'inherit': 'inherit',
				'initial': 'initial'
      },
      minWidth: {
        'inherit': 'inherit',
				'initial': 'initial'
      },
			inset: {
				'inherit': 'inherit',
				'initial': 'initial'
			}
    },
    colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
      white: colors.white,
			slate: colors.slate,
			gray: colors.gray,
			zinc: colors.zinc,
			neutral: colors.neutral,
			stone: colors.stone,
			red: colors.red,
			orange: colors.orange,
			amber: colors.amber,
      yellow: colors.yellow,
			lime: colors.lime,
			green: colors.green,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			fuchsia: colors.fuchsia,
			pink: colors.pink,
			rose: colors.rose,
      // primary: {
      //   '50' : 'var(--color-primary-50)',
      //   '100' : 'var(--color-primary-100)',
      //   '200' : 'var(--color-primary-200)',
      //   '300' : 'var(--color-primary-300)',
      //   '400' : 'var(--color-primary-400)',
      //   '500' : 'var(--color-primary-500)',
      //   '600' : 'var(--color-primary-600)',
      //   '700' : 'var(--color-primary-700)',
      //   '800' : 'var(--color-primary-800)',
      //   '900' : 'var(--color-primary-900)',
      // },
      primary: colors.blue
		},
    border: {
      // primary: {
      //   '50' : 'var(--color-primary-50)',
      //   '100' : 'var(--color-primary-100)',
      //   '200' : 'var(--color-primary-200)',
      //   '300' : 'var(--color-primary-300)',
      //   '400' : 'var(--color-primary-400)',
      //   '500' : 'var(--color-primary-500)',
      //   '600' : 'var(--color-primary-600)',
      //   '700' : 'var(--color-primary-700)',
      //   '800' : 'var(--color-primary-800)',
      //   '900' : 'var(--color-primary-900)',
      // },
      primary: colors.blue
    },
    background: {
      // primary: {
      //   '50' : 'var(--color-primary-50)',
      //   '100' : 'var(--color-primary-100)',
      //   '200' : 'var(--color-primary-200)',
      //   '300' : 'var(--color-primary-300)',
      //   '400' : 'var(--color-primary-400)',
      //   '500' : 'var(--color-primary-500)',
      //   '600' : 'var(--color-primary-600)',
      //   '700' : 'var(--color-primary-700)',
      //   '800' : 'var(--color-primary-800)',
      //   '900' : 'var(--color-primary-900)',
      // },
      primary: colors.blue
    }
	},

	plugins: [
    require('@tailwindcss/line-clamp')
  ]
};

module.exports = config;
