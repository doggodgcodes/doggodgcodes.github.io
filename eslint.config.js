export default [
 {
  ignores: [
   "**/*.min.js",
   "min/**",
   "node_modules/**",
  ],
 },
 {
  files: ["**/*.js"],
  languageOptions: {
   ecmaVersion: "latest",
   sourceType: "module",
   globals: {
    window: "readonly",
    document: "readonly",
    localStorage: "readonly",
    sessionStorage: "readonly",
    fetch: "readonly",
    console: "readonly",
    setTimeout: "readonly",
    setInterval: "readonly",
    clearTimeout: "readonly",
    clearInterval: "readonly",
    Doge: "readonly",
    Dogebork: "readonly",
   },
  },
  rules: {
   "no-unused-vars": "warn",
   "no-undef": "warn",
   "no-unreachable": "error",
   "semi": ["warn", "always"],
   "quotes": ["warn", "double"],
   "indent": ["warn", 2],
   "comma-dangle": ["warn", "always-multiline"],
  },
 },
];
