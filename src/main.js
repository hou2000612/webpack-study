// 项目js的入口文件
// 问题：浏览器中，在一个js文件中，能否导入另外一个JS脚本文件？？？默认是不行的

// 为了解决浏览器中天生没有模块化的问题，ES6中提出了 import 和 export 的概念
// 注意： ES6中 使用 import 导入其他js模块的语法，chrome浏览器尚未支持
import $ from 'jquery'
// 注意：在webpack中，把所有的静态资源，都可以看成一个个的模块！
// 导入css样式表
// import myStyle from './css/index.css'
// 今后在导入css样式表的时候，推荐下面的写法
import './css/index.css'
// 引入less样式表
import './css/index.less'
// 导入scss样式表
import './css/index.scss'
// node写法
// const $ = require('jquery');

// 这个是jquery 的入口函数
$(function(){
    $('li:odd').css('backgroundColor','yellow');
    $('li:even').css('backgroundColor',function(){
        return 'pink'
    });


})


// 导出语法
/* export default {
    name:'zs',
    age:22
}; */


// 1.使用全局的webpack 来构建列表隔行变色案例：
// 运行 webpack .\src\main.js .\dist\bundle.js   其中第一个路径是要处理的文件 第二个路径是处理完毕后，要输出的文件，在网页中，只能使用处理好的文件


// node -> nodemon
// webpack -> webpack-dev-server

// 使用 webpack-dev-server这个工具，能够提供类似于  nodemon 的功能，实时监听项目的改变，并自动编译项目代码
// webpack-dev-server 这个工具，要求你在项目本地要安装了  webpack

// 注意：使用 webpack-dev-server 这个工具，自动打包的 bundle.js文件，并没有存放到实际的物理磁盘；但是这个bundle.js，被托管到内存中，大家可以认为：在项目的根目录中，有一个 虚拟的、看不见的 bundl.js


// 默认情况下：webpack 只能默认打包处理后缀名是  .js 的文件，无法处理其他后缀名的文件
// 如果想要  使用webpack打包处理  非 JS 类型的文件，那么，需要在项目中配置合适的loader【You may need an appropriate loader to handle this file type.】


// 1.如果想要处理 .css 后缀名的文件，需要安装并配置两个合适的loader【style-loader和css-loader】
// 2.如果要处理  .less 后缀名的文件，需要安装并配置less-loader less[less是 less-loader的内置依赖性，不需要把less显示的配置到loader规制中]
// 3.如果要处理 .scss 后缀名的文件，需要安装并配置sass-loader node-sass 【其中，node-cass是sass-loader的内置依赖项】
// 4.如果要处理 样式表中的图片路径，则需要安装并配置 url-loader file-loader[file-loader是url-loader的内置依赖项]
