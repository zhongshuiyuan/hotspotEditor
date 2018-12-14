# hotspoteditor_Electron

## 安装
```
npm install electron -g
npm install
```

### 启动开发环境
```
npm run serve
```

### 运行Electron
```
elctron .
```
## 更新日志     
#### 2018-9-28       

1. 新增热点拖拽编辑功能；
2. 新增刷新当前场景功能，修改文件后可刷新预览，免去重新加载文件；
3. 修复属性修改结果复制格式，符合krpano规范；       

#### 2018-10-10      

　新增--添加自定义热点功能。可自定义样式和自定义动作(onclick)代码。     

#### 2018-10-18      

1. 修复添加热点样式style出现的bug;     
2. 新增--创建热点时，增加自定属性字段；
3. 新增--扩展热点事件类型；         

#### 2018-10-24      

1. 新增--视野坐标拾取；
2. 新增--移动端设备模拟（iphone6尺寸）；
3. 修复若干bug；       

#### 2018-11-28      

1. 添加热点时，修改style键入方式为列表搜索，style列表会列出所有可用样式名称，可本地搜索选择；
2. 添加热点时，修改属性功能，自定义属性可以实时渲染；
3. 新增-热点属性编辑，对已经添加的热点进行自定义属性编辑并实时渲染；    

#### 2018-12-14    
1. 修复热点属性(添加热点时和编辑已有热点时)的实时渲染逻辑；
2. 修复结果保存时多余空格bug；


## 说明      

1. 选择全景文件夹的路径；
2. 全景主文件必须是tour.xml、tour.swf;
3. 编辑器仅保存修改内容到剪贴板，可根据需求进行操作，操作灵活。
4. 持续更新。
5. 安装包下载地址：[https://pan.baidu.com/s/1WTT8l7XnaD6Atq5djXY2Og](https://pan.baidu.com/s/1WTT8l7XnaD6Atq5djXY2Og)   提取码：f43m
