// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['plugin:vue/essential'],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        
        // 禁止在条件中使用常量表达式  if (false) {}
        "no-constant-condition": 2,

        // 禁止对象字面量中出现重复的 key
        "no-dupe-keys": 2,

        // 禁止重复的 case 标签
        "no-duplicate-case": 2,

        // 禁止在return、throw、continue 和 break语句之后出现不可达代码
        "no-unreachable": 2,

        // 禁止使用 var 多次声明同一变量
        "no-redeclare": 2,

        // 禁止变量定义后未使用
        'no-unused-vars': 2,

        // 禁止 var 声明 与外层作用域的变量同名  最好不要同名
        "no-shadow": 0,

        // 指定数组的元素之间要以空格隔开  [1, 2, 3]  逗号 跟 下一个元素之间 要有一个空格
        "array-bracket-spacing": [2, "never"],

        // 强制在对象字面量的属性中key和value之间 必须有一个空格, 逗号后面有一个空格    {name: 'js', age: 18}
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true
        }],

        // 禁止定义数组或对象最后多余的逗号
        'comma-dangle': 2

        // 不允许空格和 tab 混合缩进    统一使用tab  4个空格
        "no-mixed-spaces-and-tabs": 2

        // 强制 语句结束 加分号     
        // "semi": [2, "always"],
    }
}
