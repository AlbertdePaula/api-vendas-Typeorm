const commands = [
  {
    tsconfig: [
      'yarn tsc --init --rootDir src --outDir build  --esModuleInterop --resolveJsonModule --lib es6  --module commonjs --allowJs true --noImplicitAny true',
    ],

    dev_dependencies: [
      'yarn add @types/node@14.14.10 -D',
      'yarn add ts-node-dev@1.0.0 -D',
      'yarn add typescript@4.1.2 -D  ',
      'yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin',
      'yarn add eslint-config-prettier eslint-plugin-prettier -D',
      'yarn add @types/express @types/cors-D',
      'yarn add --dev prettier',
    ],

    dependencies: ['yarn add express cors express-async-errors'],
  },
];
