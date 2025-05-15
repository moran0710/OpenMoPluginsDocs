# 命令用法

## 指令前缀

支持的指令前缀：`/momoderatorplus` `mmp`, `mm+`

你也可以使用`/ban` `/banip` `/ban-ip` `/mute` `/kick` `/unban`快速操作

## 格式化时间

MoModPlus使用以下方法表示封禁时间

`<时长>[单位]`

支持以下单位：
- `s`: 秒
- `m`: 分钟
- `h`: 小时
- `d`: 天

示例：
- `1d`: 1天
- `1h30m`: 1.5小时
- `2m30s`: 2分钟三十秒

## 命令列表

以下命令使用`完整命令`表示，当然，你也可以用`/ban`这样的简略写法

### Ban/封禁某人
 - 简写：`/ban`
 - `/mmp ban <玩家名> [时间] [原因]....`
 - 权限节点：`moModPlus.admin.ban`
 - 示例：`/mmp ban Tenshin 30d20h10m1s 使用作弊软件`

### Unban/解封玩家
 - 简写：`/unban`
 - Unban命令可以解除所有封禁类型
 - `/mmp unban <玩家名/BanID/UUID>`
 - 权限节点：`moModPlus.admin.unban`
 - 示例：`/mmp unban ZhiYuMoKe`
 
 ~~摩柯被封似乎并不意外~~

### Kick/踢出玩家
 - 简写：`/kick`
 - `/mmp kick <玩家名> [原因]....`
 - 权限节点：`moModPlus.admin.kick`
 - 示例：`/mmp kick LuoTianYi 吃太多小笼包`

### Mute/禁言某人
 - 简写：`/mute`
 - `/mmp mute <玩家名> [时间] [原因]....`
 - 权限节点：`moModPlus.admin.mute`
 - 示例：`/mmp mute Tenshin 12h 言语攻击其他玩家`

### BanIP/IP封禁
 - 简写：`/banip` `/ban-ip`
 - `/mmp banip <玩家名字> [时间] [原因]....`
 - 权限节点：`moModPlus.admin.banip`
 - 示例：`/mmp banip Tenshin 20d 试图爆破服务器`
