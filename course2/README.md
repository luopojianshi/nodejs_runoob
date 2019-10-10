## Node.js 安装配置

* Node.js 安装包及源码下载地址为：[https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Node.js 历史版本下载地址：[https://nodejs.org/dist/](https://nodejs.org/en/download/)
##### 注意：Linux 上安装 Node.js 需要安装 Python 2.6 或 2.7 ，不建议安装 Python 3.0 以上版本。



## Windows 上安装 Node.js

### 1、Windows 安装包(.msi)
* 32 位安装包下载地址 : https://nodejs.org/dist/v4.4.3/node-v4.4.3-x86.msi
* 64 位安装包下载地址 : https://nodejs.org/dist/v4.4.3/node-v4.4.3-x64.msi

### 2、Windows 二进制文件(.ext)安装
* 32 位安装包下载地址 : http://nodejs.org/dist/v0.10.26/node.exe
* 64 位安装包下载地址 : http://nodejs.org/dist/v0.10.26/x64/node.exe



## Mac OS 上安装 Node.js
* 1、在[官方下载网站](https://nodejs.org/en/download/)下载 pkg 安装包，直接点击安装即可。
* 2、使用 brew 命令来安装。
```
brew install node
```



## Linux 上安装 Node.js

### 直接使用已编译好的包

Node 官网已经把 linux 下载版本更改为已编译好的版本了，我们可以直接下载解压后使用：
```
# wget https://nodejs.org/dist/v10.9.0/node-v10.9.0-linux-x64.tar.xz    // 下载
# tar xf  node-v10.9.0-linux-x64.tar.xz       // 解压
# cd node-v10.9.0-linux-x64/                  // 进入解压目录
# ./bin/node -v                               // 执行node命令 查看版本
```
解压文件的 bin 目录底下包含了 node、npm 等命令，我们可以使用 ln 命令来设置软连接：
```
ln -s /usr/software/nodejs/bin/npm   /usr/local/bin/ 
ln -s /usr/software/nodejs/bin/node   /usr/local/bin/
```

### Ubuntu 源码安装 Node.js

以下部分我们将介绍在 Ubuntu Linux 下使用源码安装 Node.js 。 其他的 Linux 系统，如 Centos 等类似如下安装步骤。

在 Github 上获取 Node.js 源码：
```
$ sudo git clone https://github.com/nodejs/node.git
Cloning into 'node'...
```
修改目录权限：
```
$ sudo chmod -R 755 node
```
使用 ./configure 创建编译文件，并按照：
```
$ cd node
$ sudo ./configure
$ sudo make
$ sudo make install
```

### Ubuntu apt-get命令安装

命令格式如下：
```
sudo apt-get install nodejs
sudo apt-get install npm
```

### CentOS 下源码安装 Node.js

1、下载源码，你需要在https://nodejs.org/en/download/下载最新的Nodejs版本，本文以v0.10.24为例:
```
cd /usr/local/src/
wget http://nodejs.org/dist/v0.10.24/node-v0.10.24.tar.gz
```
2、解压源码
```
tar zxvf node-v0.10.24.tar.gz
```
3、 编译安装
```
cd node-v0.10.24
./configure --prefix=/usr/local/node/0.10.24
make
make install
```
4、 配置NODE_HOME，进入profile编辑环境变量
```
vim /etc/profile
```
设置 nodejs 环境变量，在 export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL 一行的上面添加如下内容:
```
#set for nodejs
export NODE_HOME=/usr/local/node/0.10.24
export PATH=$NODE_HOME/bin:$PATH
```
:wq保存并退出，编译/etc/profile 使配置生效
```
source /etc/profile
```
验证是否安装配置成功
```
node -v
```

