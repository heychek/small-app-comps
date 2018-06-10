## Img组件使用说明

#### 引入之后如下使用即可

```
// json
{
  "component": true,
  "usingComponents": {
    "Img": "../Img/Img"
  }
}

//wxml
<view class='root'>
  <Img src="{{img}}" />
</view>
```

#### 关于 Img 的大小，使用以下方式控制 Img 大小，该样式必须写，否则不显示

```
// wxml
<view class='root'>
  <Img src="{{img}}" img="Img" />
</view>

// wxss
.Img {
  width: 600rpx;
  height: 400rpx;
}
```


#### 当传入的 src 为空或图片不存在时，会显示 404 缺省图，如不需要显示该图片，传入 isDefault(**Boolean类型**) 为 false 即可

```
<view class='root'>
  <Img src="{{img}}" img="Img" isDefault="{{isDefault}}"/>
</view>
```


#### 获取默认404图片路径

```
var plugin = requirePlugin("ImgPlugin")
Page({
  data: {},

  onLoad: function() {
    console.log(plugin.defaultImg)
  },


  methods: {

  }
})
```