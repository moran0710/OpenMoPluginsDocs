# 配置文件

以下是MoSimpleTitle的配置文件示例

`config.yml`
```yaml
# MoTitleBar
# 一个轻量的title公告插件

actionbar:
  # 动作栏消息
  # 是否启用
  enable: false
  # 文本内容
  # 一行一个
  texts:
    - "&6&l颜色代码支持"
    - "&(#66ccff)但是不支持RGB代码"
    - "&1&l但是命令支持RGB代码"
    - "%player_name%PAPI支持"

  # 是否随机
  random: true

  # 间隔多少时间，切换一次文本消息？
  # 单位：秒
  switchTime: 2
```