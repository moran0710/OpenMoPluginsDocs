# 日志

## 2025/05/18

决定全面转向Paper API，旧有对Spigot的声明作废，当然有时候也会开发兼容Spigot的插件

## 2025/05/17

目前只有Moran0710在开发本项目

Moran0710: 以后插件都会基于[Paper API](https://jd.papermc.io/paper/1.21.5/)进行开发，因为Papaer会在1.21.4后进行**硬分叉**（请参阅[MineBBS新闻](https://www.minebbs.com/threads/paper.32419/)）

使用Spigot以及Spigot分叉的腐竹请注意

另外，除了一些基于新版本特性的功能（比如1.21.6的[数据包UI](https://www.bilibili.com/video/BV1NUEcz5E4b)和[定位条](https://www.bilibili.com/video/BV1gwLtzSEAb)），大部分与版本无关的功能将基于1.20.1时的[Spigot API](https://bukkit.windit.net/javadoc/)开发，最大程度保证跨版本兼容性

当然，不排除在很久以后彻底放弃对高于1.21.4版本的[Spigot](https://www.spigotmc.org/wiki/spigot/)支持的可能

推荐各位腐竹转向[Paper](https://papermc.io/)以及Papar分叉，Paper的性能和社区活跃度优于Spigot

如果插件有跨服端支持，我将优先支持[Velocity](https://papermc.io/software/velocity)，略微延后支持[BungeeCord](https://www.spigotmc.org/wiki/bungeecord/)，因为Velocity的性能会更好（主要是我计划使用Velocity），但是正式版发布会等到Velocity和BungeeCord跨服支持都完善的时候，未来可能放弃[BungeeCord](https://www.spigotmc.org/wiki/bungeecord/)

但是，如果我等不及要发的话，你可能只能看到[Velocity](https://papermc.io/software/velocity)跨服支持
## 2025/05/15

Moran0710：新的项目基本是**我需要**但是**我找不到我喜欢的插件，不得不自己写**的插件，或者issue或者其他人和我说我觉得有意思的插件

目前计划中：
 - MoWarps - 更简单好用的玩家地标
 - 某个没确定名字的基于[dominion](https://dominion.lunadeer.cn/)的领地方块附属（类方块帝国的领地核心）
 - 一个没确定名字的类似方块帝国的商业街插件
 - 箱子商店的增强