# node-express
# url模块,  parse函数用法
# QA
- node与express第五章
# url.parse(地址,true)
- 解析出来的内容
- Url {
- protocol: null,
- slashes: null,
- auth: null,
- host: null,
- port: null,
- hostname: null,
- hash: null,
- search: '?as=66&bs=77',
- query: { as: '66', bs: '77' },
- pathname: '/',
- path: '/?as=66&bs=77',
- href: '/?as=66&bs=77' }
# 6.8 - 请求对象
- request对象内容集合
- .params(命名过的路由参数 :id?)
# 6.11.1 - 内容渲染
- 6-3 render中传入的数据,模板可以用{{}}取值
- 数据中节点解析 需要{{{}}} 三个花括号
- body也是
# 7 - 模板引擎
- {{> }} handlebars会去view/partials寻找
# 8 - 处理请求 post/get
- 之前的内容巩固

