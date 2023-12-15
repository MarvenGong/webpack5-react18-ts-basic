# webpack5-react18-ts-basic

## 开发工具

本项目无依赖，基于 webpack5 + react 搭建

## 开发

使用 npm run dev 或 npm run serve 命令启动本地开发服务器：

```
npm run dev
```

```
npm run serve
```

## 构建

```
npm run build
```

## 目录规范

- `src/app.tsx` 入口文件
- `src/souter.tsx` 路由配置文件
- `src/routes` 存放业务路由实现
- `src/configs` 存放 CSS 和菜单配置
- `src/components` 存放公共业务组件
- `src/utils` 存放公共工具方法
- `webpack-configs` webpack 配置文件，要配置 dev 环境，请在下面的`config.js` 中配置

## 部分代码说明

### 路由相关

- 路由跳转

```ts
const navigate = useNavigate();
navigate('/login'); // 跳转到登录
navigate(-1); // 返回上一个页面
```

- 路由参数获取

```ts
const navigation = useNavigation();
new URLSearchParams(navigation.location.search).has('q');
```

或

```ts
import { useSearchParams } from "react-router-dom";
let [searchParams, setSearchParams] = useSearchParams();
// 读取参数
console.log(searchParams?.id);
// 更新参数
setSearchParams({...searchParams, { pageNo: 10 }})
```
