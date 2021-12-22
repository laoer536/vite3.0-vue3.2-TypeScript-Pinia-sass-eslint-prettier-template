//.eslintrc.js里的配置
module.exports = {
  /* 指定如何解析语法。可以为空，但若不为空，只能配该值，原因见下文。*/
  parser: "vue-eslint-parser",
  globals: {
    defineEmits: "readonly",
    defineProps: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  /* 扩展配置，加一些插件 */
  extends: [
    "plugin:vue/vue3-recommended" /* eslint应用在vue3的必须配置 */,
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended" /* 使用Prettier */,
  ],
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: "@typescript-eslint/parser" /* 解析ts语法 */,
    ecmaVersion: 2020,
    sourceType: "module",
  },
};
