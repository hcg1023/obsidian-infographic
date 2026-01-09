# obsidian-infographic

> 使用 [@antv/infographic](https://github.com/antvis/Infographic) 渲染信息图表的 Obsidian 插件

[**English**](README.md)

## 安装

> **注意**: 该插件目前尚未被 Obsidian 官方插件商店收录，无法直接从插件商店安装。请使用以下方式之一手动安装：

### 方式一: 从源码构建（推荐用于开发）

1. 将项目克隆到 Obsidian 插件目录：
   ```bash
   cd ~/.obsidian/plugins
   git clone https://github.com/hcg1023/obsidian-infographic.git
   cd obsidian-infographic
   ```

2. 安装依赖并构建：
   ```bash
   npm install
   npm run build
   ```

3. 在 Obsidian 设置中启用该插件

### 方式二: 下载源码 + 预编译文件

1. 下载项目源码到 `.obsidian/plugins` 目录下
2. 从[最新版本发布页面](https://github.com/hcg1023/obsidian-infographic/releases/latest)下载 `main.js` 文件
3. 将 `main.js` 放到 `.obsidian/plugins/obsidian-infographic/` 目录下
4. 在 Obsidian 设置中启用该插件

### 方式三: 仅使用预编译文件（最简单）

1. 从[最新版本发布页面](https://github.com/hcg1023/obsidian-infographic/releases/latest)下载以下文件：
   - `main.js`
   - `manifest.json`
   - `styles.css`

2. 在 `.obsidian/plugins/` 目录下创建 `obsidian-infographic` 文件夹（如果不存在）

3. 将下载的文件放到 `.obsidian/plugins/obsidian-infographic/` 目录下

4. 在 Obsidian 设置中启用该插件

## 使用方法

### 基础示例

在 Obsidian 笔记中，使用 `infographic` 代码块：

````markdown
```infographic
infographic list-row-simple-horizontal-arrow
data
  items
    - label 步骤 1
      desc 开始
    - label 步骤 2
      desc 进行中
    - label 步骤 3
      desc 完成
```
````

### 高级示例（带主题配置）

````markdown
```infographic
infographic chart-bar-plain-text
data
  title 年度营收增长
  desc 展示近三年及本年目标营收对比（单位：亿元）
  items
    - label 2021年
      value 120
      desc 转型初期，稳步试水
      icon lucide/sprout
    - label 2022年
      value 150
      desc 平台优化，效率显著提升
      icon lucide/zap
    - label 2023年
      value 190
      desc 深化数智融合，全面增长
      icon lucide/brain-circuit
    - label 2024年
      value 240
      desc 拓展生态协同，冲击新高
      icon lucide/trophy
theme light
  palette antv
```
````

## 导出功能

在渲染的信息图表上点击右键可以访问以下选项：

1. **复制** - 将信息图表（PNG 格式）复制到剪贴板，以便粘贴到其他应用程序中
2. **导出为 PNG** - 将信息图表下载为 PNG 图片文件
3. **导出为 SVG** - 将信息图表下载为 SVG 矢量文件

## 开发

### 前置要求

- Node.js >= 16
- npm 或 yarn

### 构建

```bash
# 安装依赖
npm install

# 开发模式（支持热重载）
npm run dev

# 生产构建
npm run build

# 运行代码检查
npm run lint
```

### 项目结构

```
obsidian-infographic/
├── src/
│   ├── main.ts       # 主要插件代码
│   └── settings.ts   # 插件设置
├── main.js           # 编译后的插件
├── manifest.json     # 插件清单
├── styles.css        # 插件样式
└── package.json      # 依赖项
```

## 配置选项

本插件使用 [@antv/infographic](https://github.com/antvis/Infographic) 进行渲染。信息图表内容会直接传递给 Infographic 实例。

有关信息图表语法和功能的更多信息，请参阅 [Infographic 文档](https://github.com/antvis/Infographic)。

## 特性

- 使用 `infographic` 代码块在 Obsidian 中渲染信息图表
- 支持多种图表类型（思维导图、时间线、流程图等）
- 导出为 PNG 或 SVG 格式
- 复制到剪贴板功能
- 友好的错误处理和错误提示

## 许可证

MIT License

## 致谢

- 使用 [@antv/infographic](https://github.com/antvis/Infographic) 构建
- 基于 [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin)
