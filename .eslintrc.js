module.exports = {
    root: true,
    extends: '@react-native',
    parser: '@typescript-eslint/parser',
    parserOptions: { project: ['./tsconfig.json'] },
    plugins: ['@typescript-eslint', 'react', 'react-native'],
    ignorePatterns: ['.eslintrc.js', '*config.js', '.gradle', 'android', 'ios', 'assets', 'node_modules'],
    rules: {
        indent: ['warn', 4],
        'linebreak-style': ['warn', 'unix'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        'comma-dangle': ['warn', 'never'],
        'react/react-in-jsx-scope': 'off'
    }
};
