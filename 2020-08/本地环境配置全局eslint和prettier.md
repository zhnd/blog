要写一份漂亮的代码，除了逻辑优美，还要具有一定的平整性，方便让看代码的人快速了解内容。然而在平时的工作当中，难以避免会接触到一些代码格式混乱的项目，同时也会在本地写一些学习类的代码。然而如果为了个人的格式习惯，去每个项目都配置一份规则难免太过于麻烦，不如我们来在本地环境配置一份全局的eslint和prettier来提效和规整代码吧。

1. 全局安装`eslint`包：

```bash
npm --version
npm install -g eslint
```

2. 在用户home目录下生成eslint配置文件：

```bash
cd ~
npm init -y
eslint --init
```

执行以后会开始进入配置引导：

```
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser, node
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
```

我的个人习惯是默认使用airbnb的lint规则，之后也可以根据实际情况自己开关部分规则。

随后会进行`npm install` 等待安装完成以后，开始检测在编辑器中是否有效：

* 在webstorm中打开项目，打开设置选项卡，搜索eslint配置项，选择`Manual ESLint configuration` 
* 选择ESLint package的全局安装路径，我是使用nvm安装的，那么路径即为`~/.nvm/versions/node/v14.0.0/lib/node_modules/eslint  ` 
* 保存即可检查是否生效。

需要注意的是在webstorm中，要在项目中才能使检测生效，如果你在webstorm中单独打开当前项目外的文件，检测不会生效。

3. 配置prettier

```bash
cd ~
npm install --save-dev --save-exact prettier
echo {}> .prettierrc.json
```

接下来在webstorm中进行配置：

* 在webstorm中打开项目，打开设置选项卡，搜索prettier配置项，配置`Prettier package`，因为直接我们将package安装在了当前用户的home目录下，因此将其设置为：`~/node_modules/prettier` ，并勾选 `fun for files On save` 。

由于prettier默认带了一些规则，为了避免eslint和prettier规则的重复和冲突，我们需要进行一些额外的操作：

* 安装配置package：

  ```bash
  cd ~
  npm install --save-dev eslint-config-prettier
  ```

* 在之前生成的.eslintrc.js文件中的“extends”数组中添加eslint-config-prettier，请确保把它放在最后，这样它才能覆盖其他配置。

```js
"extends": [
   "plugin:react/recommended",
 	 "airbnb",
   "prettier"
 ]
```

* 添加一些自定义配置，比如我的prettier通用配置文件为：

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 80,
  "proseWrap": "never",
  "arrowParens": "always",
  "overrides": [
    {
      "files": ".prettierrc.json",
      "options": {
        "parser": "json"
      }
    }
  ]
}
```

