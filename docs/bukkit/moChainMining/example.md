# 使用例

以下是MoChainMining搭配其他插件的使用例

## 使用例：用luckperms添加临时权限的方法

`lp user %player_name% permission settemp <权限节点> true <事件>`

## 使用例：ItemCommand制作连锁挖矿卷

1. 下载[ItemCommand插件](https://www.minebbs.com/resources/itemcommand.11329/)
2. 新建一个物品，配置样例如下

```yaml {15-20}
plugin-chain-mining-10m:
  name: §2矿物连锁插件§7（10分钟）
  lore:
  - ''
  - §2§o由CraftMeta研发的实体插件
  - §2§o安装后，获得一定时间的连锁挖矿能力
  - §7§o右键安装
  - §7§oPowered By CraftMeta
  lore-exact: true
  type: NETHER_STAR
  condition:
  - 'true'
  trigger:
  - right
  action:
    - 'sound: entity.ender_dragon.shoot'
    - 'console: lp user %player_name% permission settemp MoChainMining.command true 10m'
    - 'tell: §b连锁挖矿插件已经安装完成！'
    - 'tell: §b有效时长：10分钟'
    - 'tell: §b使用/cm命令以开启/关闭连锁挖矿！'
  price: 0
  points: 0
  levels: 0
  food-level: 0
  permission: ''
  required-amount: 1
  cooldown: 0
  cooldown-group: ''
  cooldown-message: ''
```

