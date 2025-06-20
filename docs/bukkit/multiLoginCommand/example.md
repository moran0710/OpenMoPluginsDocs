# 使用例

## 再次复习：命令格式

命令遵从`<动作>: <内容>`的格式，支持以下动作

| 动作 | 描述                                                              |
|:--:|:----------------------------------------------------------------|
| player | 以登录玩家的身份执行某个命令                                                  |
| console | 在控制台执行某个命令                                                      |
| op | 将玩家提权为OP，再执行命令，再取消玩家的OP身份。<br>注意：容易引发安全问题，如果能用console请使用console |
| tell | 向玩家发送消息                                                         |
| broadcast | 向全服玩家发送消息                                                       |

## 使用例：正版登录送正版称号

本案例需要用到deluxeTags插件和luckPerms插件，papi则需要安装Player拓展

假设我们有三个子服都安装了MultiLoginCommand:

### Velocity示例配置

```yaml{9}
delay: 30
groups:
- commands:
  - 'player: help'
  firstJoinCommands:
  - 'player: help'
  groupName: Offical
  serviceID: 1
serverCount: 3 # 除了这个，都不用动
```

1. 先用deluxeTags创建新的称号，我们以这个id：`player-official`为例
2. 假设MultiLogin的正版serviceID为1
3. Bukkit配置如下：

```yaml{5,9,10}
delay: 30 # 如果命令不能正常执行，把此项调高点
groups:
  - # 列表下的这一项为Official组配置
    groupName: Official
    serviceID: 1 # 和MultiLogin保持一致
    commands:
      - 'tell: &7&l你使用正版登录'
    firstJoinCommands:
      - 'console: lp user %player_name% permission set deluxetags.tag.player-official'
      - 'tell: &7&l检测到你使用正版登录！已经发放正版称号，请到称号箱查看'
    
serverCount: 1 # 这项无用
```