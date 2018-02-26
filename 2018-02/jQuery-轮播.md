#### 实现原理

##### CSS部分
1. 图片容器宽度设置为`图片宽度*图片数量`，并将所有图片使用浮动进行水平排列，形成一个滑动轨道；
2. 对图片容器设置`overflow:hidden`将超出容器的内容进行隐藏；
3. 添加需要的控制播放按钮，放置在合适位置，并进行样式设置。


##### JavaScript部分
1. 为了实现边界滑动，需要在第一张图片前面放置最后一张图片的克隆，在最后一张图片后面放置第一张图片的克隆；
2. 重新设置图片容器的宽度，并将需要展示的照片挪到合适位置；
3. 为按钮定义函数；
4. 在animate切换到克隆图片上时，需要使用CSS设置直接切换到对应图片；
5. 为防止重复点击，添加状态锁；
6. 设置自动轮播。

在实现渐变轮播时，所有图片都需要全部定位，进行叠加，最后才能实现淡入淡出效果。

#### 抽象出来的接口：
1. `playNext()` --> 切换到下一张
2. `playPre()` --> 切换到上一张
3. `setBullet()` -->  设置状态指示符号
4. `autoPlay()` -->  自动轮播
5. `stopAuto()` --> 停止自动轮播

#### 滚动轮播

查看源码：[点击查看](https://github.com/z2x/code-learning/blob/master/web/roll-carousel.html)
效果预览：[点击查看](https://z2x.github.io/code-learning/web/roll-carousel.html)

#### 渐变轮播

查看源码：[点击查看](https://github.com/z2x/code-learning/blob/master/web/gradient-carousel.html)
效果预览：[点击查看](https://z2x.github.io/code-learning/web/gradient-carousel.html)


