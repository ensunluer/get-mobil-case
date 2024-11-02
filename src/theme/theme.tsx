import { DefaultTheme } from 'styled-components';

/**
 * Breakpoints used for responsive design.
 *
 * This object defines various screen sizes to be used with media queries.
 *
 * @constant
 * @type {Object}
 * @property {number} xsm - Tiny devices (phones, 380px and up).
 * @property {number} sm - Small devices (tablets, 576px and up).
 * @property {number} md - Medium devices (desktops, 768px and up).
 * @property {number} lg - Large devices (large desktops, 992px and up).
 * @property {number} xl - Extra large devices (large screens, 1200px and up).
 * @property {number} xxl - Extra, extra large devices (very large screens, 1400px and up).
 */
const breakpoints: object = {
  xsm: '380px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
} as const;

const colors = {
  primary: '#fff',
  secondary: '#000'
} as const;
/**
 * Theme configuration for styled-components.
 *
 * This object defines colors, breakpoints and other theme-related properties
 * that can be used throughout the application.
 *
 * @constant
 * @type {DefaultTheme}
 * @property {Object} colors - The colors of the theme.
 * @property {Object} breakpoints - The breakpoints for responsive design.
 */
export const theme: DefaultTheme = {
  colors,
  breakpoints,
} as const;
