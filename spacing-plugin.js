
const plugin = require("tailwindcss/plugin");

const spacingPlugin = plugin(function ({ addUtilities }) {
  const spaces = {
    120: {
      base: 60,
      md: 80,
      xl: 96,
      xxl: 120,
    },
    100: {
      base: 56,
      md: 64,
      xl: 80,
      xxl: 100,
    },
    80: {
      base: 40,
      md: 48,
      xl: 64,
      xxl: 80,
    },
    60: {
      base: 30,
      md: 40,
      xl: 48,
      xxl: 60,
    },
    48: {
      base: 24,
      md: 32,
      xl: 40,
      xxl: 48,
    },
    40: {
      base: 20,
      md: 24,
      xl: 32,
      xxl: 40,
    },
    32: {
      base: 16,
      md: 20,
      xl: 24,
      xxl: 32,
    },
    30: {
      base: 16,
      md: 20,
      xl: 24,
      xxl: 30,
    },
    24: {
      base: 12,
      md: 16,
      xl: 20,
      xxl: 24,
    },
    20: {
      base: 12,
      md: 16,
      xl: 16,
      xxl: 20,
    },
    12: {
      base: 8,
      md: 10,
      xl: 12,
      xxl: 12,
    },
  };

  const utilities = {};

  // Generate utilities
  Object.entries(spaces).forEach(([size, values]) => {
    // Padding
    utilities[`.sp${size}px`] = {
      padding: `${values.base}px`,
      "@screen md": { padding: `${values.md}px` },
      "@screen xl": { padding: `${values.xl}px` },
      "@screen xxl": { padding: `${values.xxl}px` },
    };

    // Padding X
    utilities[`.spx${size}px`] = {
      paddingLeft: `${values.base}px`,
      paddingRight: `${values.base}px`,
      "@screen md": {
        paddingLeft: `${values.md}px`,
        paddingRight: `${values.md}px`,
      },
      "@screen xl": {
        paddingLeft: `${values.xl}px`,
        paddingRight: `${values.xl}px`,
      },
      "@screen xxl": {
        paddingLeft: `${values.xxl}px`,
        paddingRight: `${values.xxl}px`,
      },
    };

    // Padding Y
    utilities[`.spy${size}px`] = {
      paddingTop: `${values.base}px`,
      paddingBottom: `${values.base}px`,
      "@screen md": {
        paddingTop: `${values.md}px`,
        paddingBottom: `${values.md}px`,
      },
      "@screen xl": {
        paddingTop: `${values.xl}px`,
        paddingBottom: `${values.xl}px`,
      },
      "@screen xxl": {
        paddingTop: `${values.xxl}px`,
        paddingBottom: `${values.xxl}px`,
      },
    };

    // Add top padding
    utilities[`.spt${size}px`] = {
      paddingTop: `${values.base}px`,
      "@screen md": { paddingTop: `${values.md}px` },
      "@screen xl": { paddingTop: `${values.xl}px` },
      "@screen xxl": { paddingTop: `${values.xxl}px` },
    };

    // Add bottom padding
    utilities[`.spb${size}px`] = {
      paddingBottom: `${values.base}px`,
      "@screen md": { paddingBottom: `${values.md}px` },
      "@screen xl": { paddingBottom: `${values.xl}px` },
      "@screen xxl": { paddingBottom: `${values.xxl}px` },
    };

    // Add left padding
    utilities[`.spl${size}px`] = {
      paddingLeft: `${values.base}px`,
      "@screen md": { paddingLeft: `${values.md}px` },
      "@screen xl": { paddingLeft: `${values.xl}px` },
      "@screen xxl": { paddingLeft: `${values.xxl}px` },
    };

    // Add right padding
    utilities[`.spr${size}px`] = {
      paddingRight: `${values.base}px`,
      "@screen md": { paddingRight: `${values.md}px` },
      "@screen xl": { paddingRight: `${values.xl}px` },
      "@screen xxl": { paddingRight: `${values.xxl}px` },
    };

    // Margin
    utilities[`.sm${size}px`] = {
      margin: `${values.base}px`,
      "@screen md": { margin: `${values.md}px` },
      "@screen xl": { margin: `${values.xl}px` },
      "@screen xxl": { margin: `${values.xxl}px` },
    };

    // Margin X
    utilities[`.smx${size}px`] = {
      marginLeft: `${values.base}px`,
      marginRight: `${values.base}px`,
      "@screen md": {
        marginLeft: `${values.md}px`,
        marginRight: `${values.md}px`,
      },
      "@screen xl": {
        marginLeft: `${values.xl}px`,
        marginRight: `${values.xl}px`,
      },
      "@screen xxl": {
        marginLeft: `${values.xxl}px`,
        marginRight: `${values.xxl}px`,
      },
    };

    // Margin Y
    utilities[`.smy${size}px`] = {
      marginTop: `${values.base}px`,
      marginBottom: `${values.base}px`,
      "@screen md": {
        marginTop: `${values.md}px`,
        marginBottom: `${values.md}px`,
      },
      "@screen xl": {
        marginTop: `${values.xl}px`,
        marginBottom: `${values.xl}px`,
      },
      "@screen xxl": {
        marginTop: `${values.xxl}px`,
        marginBottom: `${values.xxl}px`,
      },
    };

    // Add top margin
    utilities[`.smt${size}px`] = {
      marginTop: `${values.base}px`,
      "@screen md": { marginTop: `${values.md}px` },
      "@screen xl": { marginTop: `${values.xl}px` },
      "@screen xxl": { marginTop: `${values.xxl}px` },
    };

    // Add bottom margin
    utilities[`.smb${size}px`] = {
      marginBottom: `${values.base}px`,
      "@screen md": { marginBottom: `${values.md}px` },
      "@screen xl": { marginBottom: `${values.xl}px` },
      "@screen xxl": { marginBottom: `${values.xxl}px` },
    };

    // Add left margin
    utilities[`.sml${size}px`] = {
      marginLeft: `${values.base}px`,
      "@screen md": { marginLeft: `${values.md}px` },
      "@screen xl": { marginLeft: `${values.xl}px` },
      "@screen xxl": { marginLeft: `${values.xxl}px` },
    };

    // Add right margin
    utilities[`.smr${size}px`] = {
      marginRight: `${values.base}px`,
      "@screen md": { marginRight: `${values.md}px` },
      "@screen xl": { marginRight: `${values.xl}px` },
      "@screen xxl": { marginRight: `${values.xxl}px` },
    };
  });

  addUtilities(utilities);
});

module.exports = spacingPlugin;
