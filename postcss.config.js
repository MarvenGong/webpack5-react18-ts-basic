const px2rem = require('postcss-plugin-px2rem');

const px2remOpts = {
  remUnit: 41.4, // 注意：这里如果要改的话，全局搜一下41.4，还有其他地方需要改（凡是涉及到动态设置css样式，单位为px的，都需要/41.4）
  rootValue: 41.4, // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样可以从设计稿上量出多少个px直接在代码中写多上px了。
  exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
  // ignoreIdentifier: false,  // boolean/string 忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
  // replace: true, // 布尔值 替换包含REM的规则，而不是添加回退。
  mediaQuery: false, // 布尔值 允许在媒体查询中转换px。
  minPixelValue: 3 // 设置要替换的最小像素值(3px会被转rem)。 默认 0
};
module.exports = (api) => ({
  ident: 'postcss',
  // stringifier: 'ecs',
  plugins: [
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3
      }
    ],
    px2rem(px2remOpts)
  ]
});
