const commands = [
  {
    tsconfig: [
      //Configura o tsconfig do projeto;
      'yarn tsc --init --rootDir src --outDir build  --esModuleInterop --resolveJsonModule --lib es6  --module commonjs --allowJs true --noImplicitAny true',
    ],

    dev_dependencies: [
      'yarn add typescript@4.1.2 -D ',
      'yarn add @types/node@14.14.10 -D',
      'yarn add ts-node-dev@1.0.0 -D',
      'yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin',
      'yarn add eslint-config-prettier eslint-plugin-prettier -D',
      'yarn add @types/express @types/cors -D',
      'yarn add --dev prettier',
      'yarn add tsconfig-paths',
      'yarn add pg',
      'yarn add -D @types/bcryptjs',
      'yarn add -D jsonwebtoken',
      'yarn add -D @types/jsonwebtoken',
    ],

    dependencies: [
      'yarn add express cors express-async-errors',
      'yarn add typeorm@0.2.29',
      'yarn add reflect-metadata',
      'yarn add bcryptjs',
    ],

    docker: [
      'docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d  postgres', //Cria o container no docker;
    ],

    typeorm_cli: [
      'yarn typeorm migration:create -n createProducts', //Cria uma migration;
      'yarn typeorm migration:run', //Roda uma migration;
    ],
  },
];
