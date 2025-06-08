# 使用例

以下是MoChainMining搭配其他插件的使用例

## 使用例：用luckperms添加临时权限的方法

`lp user %player_name% permission settemp <权限节点> true <事件>`

## 使用例：ItemCommand制作1.5x经验倍增卷

1. 下载[ItemCommand插件](https://www.minebbs.com/resources/itemcommand.11329/)
2. 在MoExpCtrl新建一个组

```yaml
groups:
    multiplier-1.5x:
        # 是否需要权限
        need-permission: true
        # 经验倍率
        exp: 1.5
        # 优先级
        priority: 20
```

2. 新建一个物品，配置样例如下

```yaml {15-20}
plugin-chain-mining-10m:
  name: §21.5x经验倍增器§7（30天）
  lore:
  - ''
  - §2§o由CraftMeta研发的实体插件
  - §2§o安装后，获取经验的倍数将增加1.5倍
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
    - 'console: lp user %player_name% permission settemp MoExpCtrl.multiplier-1.5x true 30'
    - 'tell: §b经验倍增器已经安装完成！'
    - 'tell: §b有效时长：30天'
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

