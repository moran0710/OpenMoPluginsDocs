import{_ as i,c as a,o as n,ag as l}from"./chunks/framework.KLbWPeN7.js";const g=JSON.parse('{"title":"配置文件示例","description":"","frontmatter":{},"headers":[],"relativePath":"bukkit/momoderatorplus/config-examples.md","filePath":"bukkit/momoderatorplus/config-examples.md","lastUpdated":null}'),p={name:"bukkit/momoderatorplus/config-examples.md"};function k(h,s,t,e,E,r){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="配置文件示例" tabindex="-1">配置文件示例 <a class="header-anchor" href="#配置文件示例" aria-label="Permalink to &quot;配置文件示例&quot;">​</a></h1><p>这里是插件默认配置文件</p><ul><li>RGB彩色支持：需要使用&amp;(#RGB颜色代码)的格式，例子：<code>&amp;(#66ccff)</code></li><li>可用的内置占位符：请参照对应信息的注释</li></ul><p><code>config.yml</code></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###########################################################                                                        #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 墨云协管+ | MoModeratorPlus Configuration                #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://github.com/MoModeratorPlus/MoModeratorPlus     #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># OpenMoPlugins Project                                  #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##########################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这是墨云协管的配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局设置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">global</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 格式化时间字符串</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # yyyy：年 MM：月 dd：日 HH：时 mm：分 ss：秒</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  time-format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yyyy-MM-dd HH:mm:ss&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  time-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在显示剩余时间（\${Duration}）的时候，你希望使用的时间单位字符串？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    day</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">日</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    hour</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">小时</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    minute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">分钟</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    second</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">秒</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 默认封禁提示</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  default-kick-message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;违反Example服务器玩家守则&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 数据库设置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 所有的存储配置，只能启用一个！</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 默认使用yaml</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 如果全部不启用，则启用yaml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # YAML文件存储</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    yaml</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 是否启用YAML文件存储</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # MYSQL数据库存储</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 是否启用MYSQL数据库存储</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 数据库链接设置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 数据库地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 数据库端口</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3306</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 数据库名称</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 用户名</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 密码</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;passwd&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Kick配置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 是否启用MoModPlus Kick命令？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 启用后，允许使用/mm kick &lt;玩家名&gt; &lt;理由&gt;，和后续的kick配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 默认为true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 是否强制输入Kick理由？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 启用后，玩家必须输入理由才能kick</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 默认为false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  force-reason</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Kick的 BanID的前缀是什么？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 前缀最多支持8个字符</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ban-id-prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#K-&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 设置被kick时的信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 格式化信息：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Player} 玩家名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${BanID} BanID</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Reason} 踢出理由</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Operator} 操作人ID</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你已经被Example服务器踢出！！&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BANID：\${BanID} 玩家名：\${Player}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;封禁理由：\${Reason}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;操作人：\${Operator}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你现在可以重新连接&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 全服公告，向全服通报封禁信息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  announce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 是否启用？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 全服广播消息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;=========================================&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;玩家\${Player}被Example服务器踢出！&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;踢出理由：\${Reason}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;操作人：\${Operator}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;=========================================&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      -</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ban</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 是否启用MoModPlus Ban命令？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 启用后，允许使用/mm ban &lt;玩家名&gt; &lt;理由&gt;，和后续的Ban配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 默认为true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 是否强制输入Ban理由？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 启用后，玩家必须输入理由才能Ban</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 默认为false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  force-reason</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Ban的 BanID的前缀是什么？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 前缀最多支持8个字符</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ban-id-prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#B-&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 设置被ban连接时的信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 允许的格式化信息：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Player} 玩家名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${BanID} BanID</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${EffectiveTime} 封禁开始时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${ExpireTime} 解封时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Reason} 封禁理由</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Operator} 操作人ID</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Duration} 处罚总时长</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;c你已经被Example服务器封禁！！&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;cBANID：&amp;6\${BanID} &amp;c玩家名：&amp;6\${Player}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;c封禁时间：&amp;6\${EffectiveTime} &amp;c解封时间：&amp;6\${ExpireTime}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;c封禁理由：&amp;6\${Reason}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;c操作人：&amp;6\${Operator}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;(#66ccff)请访问https://example.com自助申诉！&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 全服公告，向全服通报封禁信息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  announce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 是否启用？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 全服广播消息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;(#66ccff)=========================================&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;(#66ccff)玩家&amp;c\${Player}&amp;(#66ccff)被Example服务器封禁！&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;(#66ccff)封禁理由：&amp;c\${Reason}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;(#66ccff)封禁时间：&amp;c\${EffectiveTime} &amp;(#66ccff)封禁时长：&amp;c\${Duration} &amp;(#66ccff)解封时间：&amp;c\${ExpireTime}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;(#66ccff)操作人：&amp;c\${Operator}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;=========================================&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">banip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 是否启用MoModPlus BanIP命令？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 启用后，允许使用/mm banip &lt;玩家名&gt; &lt;理由&gt;，和后续的Ban配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 默认为true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 是否强制输入Ban理由？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 启用后，玩家必须输入理由才能Ban</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 默认为false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  force-reason</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Ban的 BanID的前缀是什么？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 前缀最多支持8个字符</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ban-id-prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#BI-&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 设置被ban连接时的信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 允许的格式化信息：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Player} 玩家名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${BanID} BanID</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${EffectiveTime} 封禁开始时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${ExpireTime} 解封时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Reason} 封禁理由</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Operator} 操作人ID</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Duration} 处罚总时长</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你已经被Example服务器封禁IP！！&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BANID：\${BanID} 玩家名：\${Player}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;封禁时间：\${EffectiveTime} 封禁时长：\${Duration} 解封时间：\${ExpireTime}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;封禁理由：\${Reason}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;操作人：\${Operator}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请访问https://example.com自助申诉！&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 全服公告，向全服通报封禁信息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  announce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 是否启用？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 全服广播消息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;=========================================&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;玩家\${Player}被Example服务器封禁IP！&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;封禁理由：\${Reason}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;封禁时间：\${EffectiveTime} 解封时间：\${ExpireTime}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;操作人：\${Operator}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;=========================================&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 禁言配置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 是否启用MoModPlus Mute命令？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 启用后，允许使用/mm mute &lt;玩家名&gt; &lt;理由&gt;，和后续的mute配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 默认为true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 是否强制输入禁言理由？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 启用后，玩家必须输入理由才能禁言</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 默认为false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  force-reason</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Ban的 BanID的前缀是什么？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 前缀最多支持8个字符</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ban-id-prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#B-&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 设置被禁言时，服务器发送给被禁言玩家的信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 格式化信息：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Player} 玩家名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${BanID} BanID</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${EffectiveTime} 禁言开始时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${ExpireTime} 禁言结束时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Reason} 踢出理由</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Operator} 操作人ID</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \${Duration} 处罚总时长</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你已经被Example服务器禁言！！&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BANID：\${BanID} 玩家名：\${Player}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;封禁时间：\${EffectiveTime} 封禁时长：\${Duration} 解封时间：\${ExpireTime}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;封禁理由：\${Reason}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;操作人：\${Operator}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 全服公告，向全服通报封禁信息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  announce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 是否启用？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 全服广播消息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;=========================================&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;玩家\${Player}被Example服务器禁言\${Duration}！&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;禁言理由：\${Reason}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;开始时间：\${EffectiveTime} 解封时间：\${ExpireTime}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;操作人：\${Operator}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;=========================================&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">unban</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 是否启用MoModPlus UnBan命令？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置文件版本，请勿修改</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span></span></code></pre></div>`,5)]))}const y=i(p,[["render",k]]);export{g as __pageData,y as default};
