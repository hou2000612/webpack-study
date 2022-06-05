// 默认情况下，直接使用  webpack .\src\main.js .\dist\bundle.js   就能实现项目的构建了
// 但是，如果只运行  webpack 命令的话，需要在项目中，创建 'webpack.config.js'文件
// 而且，在这个配置文件中，必须显示声明  要处理文件的路径和输出的文件的路径


const path = require('path')
// 导入把HTML 页面生成到内存中的插件
const htmlWebpackPulgin = require('html-webpack-plugin');//导入的是一个构造函数
// 导入指定浏览器的插件
const openBrowser = require('open-browser-webpack-plugin')
// 导入webpack
const webpack =require('webpack')
// 注意：这里使用Node中的语法，向外暴露了一个配置对象
// 因为webpack  这个构建工具，底层就是使用Node.js开发出来的
module.exports={
entry:path.join(__dirname,'./src/main.js'),//指定要处理的JS文件路径
output:{//指定输出文件的配置
path:path.join(__dirname,'./dist'),//指定输出文件的存放路径
filename:'bundle.js'//指定输出文件的名称
},
plugins:[//插件的数组
new htmlWebpackPulgin({//创建一个把HTML首页托管到内存中的插件
template:path.join(__dirname,'./src/index.html'),//要把哪个HTML页面，作为模板，复制一根托管到内存中
filename:'index.html'//指定将来在内存中复制出来的页面，名称叫做 index.html
}),
/* new openBrowser({//指定打开浏览器
    browser:'firebox',
    url:'http://127.0.0.1:3000'
}) ,*/
new webpack.HotModuleReplacementPlugin()
],
devServer:{//webpack-dev-server 运行时候的指令   这种配置方式和  -- 指令，只能 二选一 
    // --open --port 3000 --host 127.0.0.1 --hot
    open:true,//自动打开浏览器
    port:3000,//指定端口号
    host:'127.0.0.1',//指定ip地址
    hot:true//启用热更新，这里的hot指令，需要配合一个 热更新的 webpack 插件才能 正常使用
}
}