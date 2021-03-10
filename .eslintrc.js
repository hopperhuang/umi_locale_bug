module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    MYENV: true,
  },
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'no-undef': 'error',
  },
};
