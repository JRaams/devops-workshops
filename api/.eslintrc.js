module.exports = {
    env: {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'jest/globals': true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        'no-underscore-dangle': [0],
        'quotes': ['error', 'single'],
        'quote-props': ['error', 'consistent'],
        'indent': ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],
    },
    plugins: ['jest'],
};
