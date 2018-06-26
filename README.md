## 说明
    1、公共样式进行了重置，无需再重置
    2、stroe分离，自行创建文件夹，自己名字首字母大写里面写数据
    3、图片等导入时候放在public的imges里面，名字已自己名字首字母开头，防止冲突
    4、共同配置 已经完成 config/index.js
    5、服务器代理的设置使用自己的名字首字母进行配置，防止冲突(本项目无需再次设置)
    6、package.json已经配置好常用的插件以及对应多的版本，不要自己再安装，直接npm-install即可，明确里面没有的再安装
    7、src里面已经配置好index手机的rem配置，直接按Galaxy S5进行尺寸量取（显示的像素尺寸除以100即为rem值）
    8、酷狗音乐接口地址 https://segmentfault.com/a/1190000010222913
    有什么问题及时联系

## git操作
    组员：在自己的分支下进行push，不要在master上进行push(自己的分支名分别为首字母，wzl，lsa)，操作步骤如下
        1.通过git checkout master进入master分支，输入 git pull  获取最新的master数据
        2.通过git checkout [自己的分支名字]进入到自己的分支，例如（git checkout gjh）
        3.通过git merge master将master上最新的数据与自己的分支内容合并
        4.开始自己分支的开发
        5.开发结束后，git add .  和  git commit -a -m '记录日志'  更新本地存储
        6.输入git push将自己今日的代码发送到服务器
        （每日按以上步骤操作即可）
    
    组长：在master主分支上进行其他分支的合并，操作如下
        1.在master分支上获取全部分支信息，   git fetch --all  
        2.通过 git checkout [子分支] 切换到各个子分支
        3.通过 git pull获取子分支最新内容，查验代码
        4.查验ok后切换回主分支   git checkout master
        5.在主分支合并代码   git merge [子分支]  （有几个子分支就重复操作步骤2、3、4、5几次）
        6.此时主分支的本地存储为最新的代码，直接git push将主分支代码更新（这样确保每日组员git pull下来的为最新的）

    注意点：
        1.组员在master上不可进行git push操作以及git merge 操作，只可进行git pull获取最新代码的操作；
        2.组长在master上可进行合并上传，在组员分支下不可进行git push和git merge操作
        3.合并过程中会出现小黑框内有merging的情况，此时为文件冲突，通过git status确认哪些文件冲突，一一手动修改冲突位置步骤如下
            1.修改冲突部分保存，进行 git commit -a -m '修改记录' 进行本地存储
            2.再通过  git merge [分支名]进行合并（直到不出现merging时才为合并成功）
            
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
