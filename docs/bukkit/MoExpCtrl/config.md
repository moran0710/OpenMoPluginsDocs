# 配置文件

以下是本插件的配置文件示例

```yaml
##########################
# MoExpCtrl | 经验控制    #
##########################

# 经验倍率组列表，请参考这些组，加入其他的组
groups:
  # 默认组
  default:
    # 是否需要权限
    # 一旦开启，玩家就需要有MoExpCtrl.<组名>权限
    # 如：MoExpCtrl.default
    need-permission: false
    # 默认经验倍率
    exp: 1.0
    # 优先级
    # 应当是个正数
    # 优先级越接近0，插件越优先使用此组设置控制经验倍率
    # 例如：玩家同时拥有multiplier-2x和multiplier-4x的权限
    # 但是multiplier-2x的优先级是10，multiplier-4x的优先级是3
    # 插件则会为玩家应用multiplier-4x的倍率
    priority: 999

  # 二倍组
  multiplier-2x:
    # 是否需要权限
    need-permission: true
    # 经验倍率
    exp: 2.0
    # 优先级
    priority: 20

  # 四倍组
  multiplier-4x:
    # 是否需要权限
    need-permission: true
    # 经验倍率
    exp: 4.0
    # 优先级
    priority: 10


```