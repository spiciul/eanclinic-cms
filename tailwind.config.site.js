//--------------------------------------------------------------------------
// Tailwind site configuration
//--------------------------------------------------------------------------
//
// Use this file to completely define the current sites design system by
// adding and extending to Tailwinds default utility classes.
//

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        // Here we define the default colors available. If you want to include
        // all default Tailwind colors you should extend the colors instead.
        extend: {
            colors: {
                transparent: 'transparent',
                black: '#000',
                white: '#fff',
                // Neutrals: neutral colors, with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
                neutral: {
                    DEFAULT: colors.blueGray['800'],
                    ...colors.blueGray
                },
                // Primary: primary brand color with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
                primary: {
                    DEFAULT: '#242155'
                },
                indigo: {
                    200: '#DEDDEE',
                    400: '#8B8AA8',
                    900: '#242155'
                },
                orange: {
                    300: '#F3AE6B'
                },
                'yellow-gold': {
                    400: '#F5AF6D',
                    900: '#7F4D19'
                },
            },
            transitionDuration: {
                DEFAULT: '300ms',
            },
            transitionTimingFunction: {
                DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
            },

            spacing: (theme, {breakpoints}) => ({
                '100': '25rem',
                '104': '26rem',
                '108': '27rem',
                '112': '28rem',
                '116': '29rem',
                '120': '30rem',
                '124': '31rem',
                '128': '32rem',
                '132': '33rem',
                '152': '38rem',
                '156': '39rem',
                '160': '40rem',
                '164': '41rem',
                '168': '42rem',
                '184': '46rem',
                '188': '47rem',
                '192': '48rem',
                '196': '49rem',
                '200': '50rem',
                ...breakpoints(theme('screens')),
            }),
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem',
            },
            maxWidth: (theme, {breakpoints}) => ({
                ...theme('spacing'),
                ...breakpoints(theme('screens')),
            }),
        },
        // Remove the font families you don't want to use.
        fontFamily: {
            sans: ['OpenSauceSans', ...defaultTheme.fontFamily.sans],
            serif: ['Yeseva One', ...defaultTheme.fontFamily.serif],
        },
        // The font weights available for this site.
        fontWeight: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
    },
    plugins: [
        plugin(function ({addBase, theme}) {
            addBase({
                // Default color transition on links unless user prefers reduced motion.
                '@media (prefers-reduced-motion: no-preference)': {
                    'a': {
                        transition: 'color .3s ease-in-out',
                    },
                },
                'html': {
                    color: theme('colors.neutral.DEFAULT'),
                    //--------------------------------------------------------------------------
                    // Set sans, serif or mono stack with optional custom font as default.
                    //--------------------------------------------------------------------------
                    // fontFamily: theme('fontFamily.mono'),
                    fontFamily: theme('fontFamily.sans'),
                    // fontFamily: theme('fontFamily.serif'),
                },
                // Style fyle upload form elements.
                'input[type="file"]::file-selector-button, input[type="file"]::-webkit-file-upload-button': {
                    paddingTop: theme('spacing.2'),
                    paddingBottom: theme('spacing.2'),
                    paddingRight: theme('spacing.4'),
                    paddingLeft: theme('spacing.4'),
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: theme('colors.primary.DEFAULT'),
                    backgroundColor: theme('colors.white'),
                    color: theme('colors.primary.DEFAULT'),
                    fontSize: theme('fontSize.xs'),
                    textTransform: 'uppercase',
                    letterSpacing: theme('letterSpacing.widest'),
                    fontWeight: theme('fontWeight.bold'),
                }
            })
        }),

        // Custom components for this particular site.
        plugin(function ({addComponents, theme}) {
            const components = {}
            addComponents(components)
        }),

        // Custom utilities for this particular site.
        plugin(function ({addUtilities, theme, variants}) {
            const newUtilities = {}
            addUtilities(newUtilities)
        }),
    ]
}
