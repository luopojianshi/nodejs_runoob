## 注意事项

#### 手机端 termux 中 mysql 重置密码

[安装步骤](https://hackermindsite.wordpress.com/2017/09/26/first-blog-post/)
```
1、pkg install mariadb
2、mysql -u root
```
###### ps: 执行 命令2 会报一下的错误
ERROR 2002 (HY000)：Can't connect to local MySQL through socket '/data/data/com.termux/files/usr/tmp/mysqld.sock' (111)
###### 打开新会话并运行下面的 命令3, 完成后执行 命令4 无密码进入数据库
```
3、mysqld_safe -u root &
4、mysql
```
###### 选择数据库 mysql 并更新数据表 user 中的用户密码
```
5、use mysql;
6、set password for 'root'@'localhost' = password('xxx');
7、exit;
```
###### 其他的修改命令 update user set password='xxx' where user='xxx'; 不起作用, 暂未找到原因
##### 这里特别感谢 NO0b 的 [MySQL----初次修改密码详细教程](https://blog.csdn.net/q5706503/article/details/83059457) 提供的可用方法 命令6

###### 继续上面的内容, 修改用户密码时不应该直接使用 password='xxx', 因为用户表 user 中保存的用户密码都是经过 password('xxx') 进行过加密的, 而且修改应该使用 update 指令, 如下面的指令

```
mysql 5.7 及以上版本
更新密码：UPDATE mysql.user SET authentication_string=PASSWORD('新密码') WHERE User='root';
刷新权限表：FLUSH PRIVILEGES;

mysql 5.6 及以下版本
更新密码：UPDATE mysql.user SET Password=PASSWORD('新密码') WHERE User='root';
刷新权限表：FLUSH PRIVILEGES;
```



## 手机端 mysql 出现中文乱码问题

##### 手机端安装的 mysql 中默认编码不是 utf8

###### /etc/my.cnf 文件中加入以下内容

```
[client]
default-character-set=utf8

[mysql]
default-character-set=utf8

[mysqld]
collation-server = utf8_unicode_ci
init-connect='SET NAMES utf8'
character-set-server = utf8
```

