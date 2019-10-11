## 注意事项

#### server.ad直接输出会产生保存路径中文部分乱码的问题

```
Begin accepting connections on the specified port and hostname. If the hostname is omitted, the server will accept connections on any IPv6 address (::) when IPv6 is available, or any IPv4 address (0.0.0.0) otherwise. A port value of zero will assign a random port.
```

######  所以 app.listen(port[, host]) 中 host 最好声明为 127.0.0.1



#### #直接从服务端向前端返回 json 数据, 如果包含中文的话, 会显示乱码, web 端显示的 HTML 页面不包含编码信息

###### 应该添加

```
res.write('<head><meta charset="utf-8" /></head>') 或
res.write('<head><meta charset="Unicode" /></head>')
```



#### 上传文件时, 如果保存路径存在中文字符, 直接输出会产生保存路径中文部分乱码的问题

###### 需要在之前添加声明头部信息

```
res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
```

