# 配置文件

以下是MoChainMining的配置文件示例

```yaml
#############################
# MoChainMining | 墨云连锁   #
# 还没弄好的github链接
# OpenMoPlugins Project
# Documents:没整好
#############################

# 全局设置
global:
  # 连锁挖掘的方块上限
  limit: 30


# 权限设置
permissions:
  # 我们是否应当在玩家失去连锁挖掘相关命令权限时，主动关闭玩家的连锁挖掘能力？
  disable-on-lack-permission: true

# 消息设置
# 支持MiniMessage消息和'&'颜色代码
message:
  # 开启连锁挖掘时的消息
  on-enable: '&a连锁挖掘已开启'
  # 关闭连锁挖掘时的消息
  on-disable: '&c连锁挖掘已关闭'
  # 在挖掘方块超出上限时的提示
  on-limit: '&c本次连锁挖掘的方块数量已超出限制，上限：20'
  # 无权限时显示的提示消息
  on-permission-lack: '&c你没有连锁挖掘权限'
  # 失去连锁挖掘，被插件关闭连锁挖掘能力时显示的提示消息
  on-permission-disable: "&a你的连锁挖掘时间已经结束，连锁挖掘已关闭"
  # 玩家已经开启但是又执行/chainmine on时，显示的提示消息
  on-already-enable: '&c你已经开启了连锁挖掘功能'
  # 玩家已经关闭但是又执行/chainmine off时，显示的提示消息
  on-already-disable: '&c你已经关闭了连锁挖掘功能'
  # 命令错误时的提示
  on-command-error: '&c命令错误：用法：/chainmine <of/off/toggle>'
  # 重载时提示
  on-reload: '&a插件已重载'

# 我们应当对哪些方块进行连锁挖掘检测？
# 在这里填入方块的ID
block:
  # 铁矿
  - iron_ore
  - deepslate_iron_ore
  # 金矿
  - gold_ore
  - deepslate_gold_ore
  # 煤矿
  - coal_ore
  - deepslate_coal_ore
  # 钻石矿
  - diamond_ore
  - deepslate_diamond_ore
  # 青金石矿
  - lapis_ore
  - deepslate_lapis_ore
  # 绿宝石矿
  - emerald_ore
  - deepslate_emerald_ore
  # 红石矿
  - redstone_ore
  - deepslate_redstone_ore
  # 铜矿石
  - copper_ore
  - deepslate_copper_ore
  # 远古残骸
  - ancient_debris
  # 下界金矿
  - nether_gold_ore
  # 下界石英
  - nether_quartz_ore

# 配置文件版本，请勿修改
version: 1.0
```