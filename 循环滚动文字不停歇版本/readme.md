使用animate设置动画，通过mouseenter使用stop，mouseleave再起animate时出现卡顿
通过setInterval和clearInterval解决。

![解决思路](https://app.yinxiang.com/shard/s42/res/011b6cfe-60b6-4431-ab32-e095c938dcd6/%E6%97%A0%E6%A0%87%E9%A2%98.png)

循环播放思路：把最初出现在方框的内容一模一样放在结尾，当放到结尾时将top值设为初始值继续递增，做出循环的效果。