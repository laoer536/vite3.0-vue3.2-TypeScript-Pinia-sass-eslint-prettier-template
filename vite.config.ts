import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import type { ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import Pages from 'vite-plugin-pages'

export default ({ command, mode }: ConfigEnv) => {
  const currentEnv = loadEnv(mode, process.cwd())
  console.log('当前模式', command)
  console.log('当前环境配置', currentEnv) //loadEnv即加载根目录下.env.[mode]环境配置文件
  return defineConfig({
    plugins: [
      vue(),
      Pages({
        extensions: ['vue', 'md'],
        dirs: 'src/views',
        exclude: ['**/components/*'],
      }),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
        dts: './src/auto-imports.d.ts',
        dirs: ['src/store'],
        // vueTemplate: true,
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        },
      }),
    ],
    //项目部署的基础路径,
    base: currentEnv.VITE_PUBLIC_PATH,
    mode: mode,
    resolve: {
      //别名
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@store': resolve(__dirname, './src/store'),
        '@views': resolve(__dirname, './src/views'),
        '@assets': resolve(__dirname, './src/assets'),
        '@hooks': resolve(__dirname, './src/hooks'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://xxxxxx.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        sass: {
          javascriptEnabled: true,
        },
      },
    },
    //构建
    build: {
      outDir: mode === 'docker' ? 'dist' : 'docs',
      // assetsDir: 'assets', //指定生成静态资源的存放路径（相对于 build.outDir）。
      sourcemap: mode != 'production',
    },
  })
}
