# vite^5-vue^3.3-TypeScript-Pinia-sass-eslint-prettier-template

This is a template project with vite4.0+vue3.2. I hope it can be enlightening to you. Don't forget to enable prettier to standardize your code in your editor (eslint+prettier+husky has been enabled and configured to automatically standardize project code, 6 is very good 🤣）

In addition, API automatic import has been added, so there is no need to write a lot of imports when writing code. API methods are directly used, and the development speed and code elegance are amazing! 🤓 Furthermore, the Vueuse library has been introduced, with a plethora of cool methods waiting for you to explore!

Docker support.

## Project structure

.
├── .commitlintrc
├── .dockerignore
├── .env.development
├── .env.docker
├── .env.production
├── .env.test
├── .eslintignore
├── .eslintrc
├── .eslintrc-auto-import.json
├── .gitignore
├── .husky
│ ├── _
│ │ ├── .gitignore
│ │ └── husky.sh
│ ├── commit-msg
│ └── pre-commit
├── .prettierignore
├── .prettierrc
├── .stylelintrc
├── Dockerfile
├── README.md
├── docs
│ ├── assets
│ │ ├── _...all\_-lXteJMPx.js
│ │ ├── index-CELIJxRU.css
│ │ └── index-vI5x7G_Y.js
│ ├── index.html
│ └── vite.svg
├── index.html
├── nginx.conf
├── package.json
├── pnpm-lock.yaml
├── public
│ └── vite.svg
├── src
│ ├── App.vue
│ ├── assets
│ │ ├── style
│ │ │ ├── \_my.scss
│ │ │ ├── \_reset.scss
│ │ │ └── global.scss
│ │ └── vue.svg
│ ├── auto-imports.d.ts
│ ├── components
│ │ └── HelloWorld.vue
│ ├── hooks
│ │ ├── useMode.ts
│ │ └── useVconsole.ts
│ ├── main.ts
│ ├── network
│ │ ├── api
│ │ │ ├── api-params-moudle.ts
│ │ │ ├── api-res-model.ts
│ │ │ └── api.ts
│ │ └── axios
│ │ ├── axios-setup.ts
│ │ ├── index.ts
│ │ └── type.ts
│ ├── pages
│ │ ├── [...all].vue
│ │ ├── index.vue
│ ├── router
│ │ └── index.ts
│ ├── store
│ │ └── user.ts
│ └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

## Step-by-step instructions：

> The quickest way to do this is to download the zip of the project or fork it into your personal repository.

1. Clone the code：Execute the command---git clone https://github.com/laoer536/vite3.0-vue3.2-TypeScript-Pinia-sass-eslint-prettier-template.git

2. The editor opens and downloads the dependencies：Execute the command--- `pnpm i`

3. Run the project：pnpm dev

4. Package the project

   > Test Package：pnpm build:test
   >
   > Production Package：pnpm build
   >
   > (You can add packaging commands as well as environment files based on your project.）`.env` file

## How to use docker?

1. Ensure that Docker is installed on your computer.

2. Just run `pnpm release:local`

3. Then you can view your project on `<your IP>:8081`

## Note

> Vite5 requires your node version to be 18+ or 20+.

<div align="left">
<img alt="Liu Jie" src="https://s2.loli.net/2021/12/16/rxjhMFtGElVIuyz.png" width=50 />

_I'm LiuJie, a Front-end technical lunatics._

[Github](https://github.com/laoer536)
