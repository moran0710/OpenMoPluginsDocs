# 配置文件示例

这里是插件默认配置文件

 - (1.16以上)RGB彩色支持：需要使用&(#RGB颜色代码)的格式，例子：`&(#66ccff)`
 - 可用的内置占位符：请参照对应信息的注释

`config.yml`
```yaml
###########################################################                                                        #
# 墨云协管+ | MoModeratorPlus Configuration                #
# https://github.com/MoModeratorPlus/MoModeratorPlus     #
# OpenMoPlugins Project                                  #
##########################################################

# 这是墨云协管的配置文件

# 全局设置
global:
  # 格式化时间字符串
  # yyyy：年 MM：月 dd：日 HH：时 mm：分 ss：秒
  time-format: "yyyy-MM-dd HH:mm:ss"
  time-left:
    # 在显示剩余时间（${Duration}）的时候，你希望使用的时间单位字符串？
    day: 日
    hour: 小时
    minute: 分钟
    second: 秒

  # 默认封禁提示
  default-kick-message: "违反Example服务器玩家守则"

  # 数据库设置
  # 所有的存储配置，只能启用一个！
  # 默认使用yaml
  # 如果全部不启用，则启用yaml
  database:
    # YAML文件存储
    yaml:
      # 是否启用YAML文件存储
      enable: true

    # MYSQL数据库存储
    mysql:
      # 是否启用MYSQL数据库存储
      enable: false
      # 数据库链接设置
      # 数据库地址
      host: "127.0.0.1"
      # 数据库端口
      port: 3306
      # 数据库名称
      database: "example"
      # 用户名
      username: "example"
      # 密码
      password: "passwd"

# Kick配置
kick:
  # 是否启用MoModPlus Kick命令？
  # 启用后，允许使用/mm kick <玩家名> <理由>，和后续的kick配置
  # 默认为true
  enable: true

  # 是否强制输入Kick理由？
  # 启用后，玩家必须输入理由才能kick
  # 默认为false
  force-reason: false

  # Kick的 BanID的前缀是什么？
  # 前缀最多支持8个字符
  ban-id-prefix: "#K-"

  # 设置被kick时的信息
  # 格式化信息：
  # ${Player} 玩家名
  # ${BanID} BanID
  # ${Reason} 踢出理由
  # ${Operator} 操作人ID
  message:
    - "你已经被Example服务器踢出！！"
    - "BANID：${BanID} 玩家名：${Player}"
    - "封禁理由：${Reason}"
    - "操作人：${Operator}"
    - "你现在可以重新连接"

  # 全服公告，向全服通报封禁信息
  announce:
    # 是否启用？
    enable: true
    # 全服广播消息
    message:
      - "========================================="
      - "玩家${Player}被Example服务器踢出！"
      - "踢出理由：${Reason}"
      - "操作人：${Operator}"
      - "========================================="
      -

ban:
  # 是否启用MoModPlus Ban命令？
  # 启用后，允许使用/mm ban <玩家名> <理由>，和后续的Ban配置
  # 默认为true
  enable: true

  # 是否强制输入Ban理由？
  # 启用后，玩家必须输入理由才能Ban
  # 默认为false
  force-reason: false

  # Ban的 BanID的前缀是什么？
  # 前缀最多支持8个字符
  ban-id-prefix: "#B-"
  # 设置被ban连接时的信息
  # 允许的格式化信息：
  # ${Player} 玩家名
  # ${BanID} BanID
  # ${EffectiveTime} 封禁开始时间
  # ${ExpireTime} 解封时间
  # ${Reason} 封禁理由
  # ${Operator} 操作人ID
  # ${Duration} 处罚总时长
  message:
    - "&c你已经被Example服务器封禁！！"
    - "&cBANID：&6${BanID} &c玩家名：&6${Player}"
    - "&c封禁时间：&6${EffectiveTime} &c解封时间：&6${ExpireTime}"
    - "&c封禁理由：&6${Reason}"
    - "&c操作人：&6${Operator}"
    - "&(#66ccff)请访问https://example.com自助申诉！"

  # 全服公告，向全服通报封禁信息
  announce:
    # 是否启用？
    enable: true
    # 全服广播消息
    message:
      - "&(#66ccff)========================================="
      - "&(#66ccff)玩家&c${Player}&(#66ccff)被Example服务器封禁！"
      - "&(#66ccff)封禁理由：&c${Reason}"
      - "&(#66ccff)封禁时间：&c${EffectiveTime} &(#66ccff)封禁时长：&c${Duration} &(#66ccff)解封时间：&c${ExpireTime}"
      - "&(#66ccff)操作人：&c${Operator}"
      - "========================================="

banip:
  # 是否启用MoModPlus BanIP命令？
  # 启用后，允许使用/mm banip <玩家名> <理由>，和后续的Ban配置
  # 默认为true
  enable: true

  # 是否强制输入Ban理由？
  # 启用后，玩家必须输入理由才能Ban
  # 默认为false
  force-reason: false

  # Ban的 BanID的前缀是什么？
  # 前缀最多支持8个字符
  ban-id-prefix: "#BI-"
  # 设置被ban连接时的信息
  # 允许的格式化信息：
  # ${Player} 玩家名
  # ${BanID} BanID
  # ${EffectiveTime} 封禁开始时间
  # ${ExpireTime} 解封时间
  # ${Reason} 封禁理由
  # ${Operator} 操作人ID
  # ${Duration} 处罚总时长
  message:
    - "你已经被Example服务器封禁IP！！"
    - "BANID：${BanID} 玩家名：${Player}"
    - "封禁时间：${EffectiveTime} 封禁时长：${Duration} 解封时间：${ExpireTime}"
    - "封禁理由：${Reason}"
    - "操作人：${Operator}"
    - "请访问https://example.com自助申诉！"

  # 全服公告，向全服通报封禁信息
  announce:
    # 是否启用？
    enable: true
    # 全服广播消息
    message:
      - "========================================="
      - "玩家${Player}被Example服务器封禁IP！"
      - "封禁理由：${Reason}"
      - "封禁时间：${EffectiveTime} 解封时间：${ExpireTime}"
      - "操作人：${Operator}"
      - "========================================="

# 禁言配置
mute:
  # 是否启用MoModPlus Mute命令？
  # 启用后，允许使用/mm mute <玩家名> <理由>，和后续的mute配置
  # 默认为true
  enable: true

  # 是否强制输入禁言理由？
  # 启用后，玩家必须输入理由才能禁言
  # 默认为false
  force-reason: false

  # Ban的 BanID的前缀是什么？
  # 前缀最多支持8个字符
  ban-id-prefix: "#B-"
  # 设置被禁言时，服务器发送给被禁言玩家的信息
  # 格式化信息：
  # ${Player} 玩家名
  # ${BanID} BanID
  # ${EffectiveTime} 禁言开始时间
  # ${ExpireTime} 禁言结束时间
  # ${Reason} 踢出理由
  # ${Operator} 操作人ID
  # ${Duration} 处罚总时长
  message:
    - "你已经被Example服务器禁言！！"
    - "BANID：${BanID} 玩家名：${Player}"
    - "封禁时间：${EffectiveTime} 封禁时长：${Duration} 解封时间：${ExpireTime}"
    - "封禁理由：${Reason}"
    - "操作人：${Operator}"

  # 全服公告，向全服通报封禁信息
  announce:
    # 是否启用？
    enable: true
    # 全服广播消息
    message:
      - "========================================="
      - "玩家${Player}被Example服务器禁言${Duration}！"
      - "禁言理由：${Reason}"
      - "开始时间：${EffectiveTime} 解封时间：${ExpireTime}"
      - "操作人：${Operator}"
      - "========================================="

unban:
  # 是否启用MoModPlus UnBan命令？
  enable: true

# 配置文件版本，请勿修改
version: 1.0
```
