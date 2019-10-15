## 注意事项

#### 路由路径匹配问题

```
教程[1] 中的 4 个路径, /listUsers、/:id、/addUser、/deleteUser(替换为 /deleteUser/:id),
其中位于 /:id 之后的路由会先匹配 /:id, 导致 /addUser 总是会匹配为 /:id 的路径, 但是 /deleteUser/:id 就不会, 但是如果改成 /deleteUser 就会匹配为 /:id 的路径, 暂时认为是优先匹配之前的路由, 而 /deleteUser/:id 路由有两层(暂认为是这个原因), 与 /:id 的规则不同
现将 /:id 修改为 /user/:id 并放置在最后, 则所有路由正常
```

###### [教程[1]](https://www.runoob.com/nodejs/nodejs-restful-api.html)

