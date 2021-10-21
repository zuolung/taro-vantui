module.exports = {
  'src/*.{js,jsx,ts,tsx}': ['npx eslint -c eslint.config.js --fix'],
  'src/*.ts?(x)': () => 'npx tsc -p tsconfig.json --skipLibCheck',
  'src/*.{css,less}': [
    'npx stylelint --aei --config stylelint.config.js --fix',
  ],
  '**/*.{js,jsx,ts,tsx,md,html,css,less}': 'npx prettier --write',
}
