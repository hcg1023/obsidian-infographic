# obsidian-infographic

> Obsidian plugin for rendering infographic diagrams using [@antv/infographic](https://github.com/antvis/Infographic)

## Usage

### Basic Example

In your Obsidian notes, use the `infographic` code block:

````markdown
```infographic
infographic list-row-simple-horizontal-arrow
data
  items
    - label Step 1
      desc Start
    - label Step 2
      desc In Progress
    - label Step 3
      desc Complete
```
````

### Advanced Example with Template

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

## Export

Right-click on the rendered infographic to access the following options:

1. **Copy** - Copy the infographic (PNG format) to clipboard for pasting into other applications
2. **Export as PNG** - Download the infographic as a PNG image file
3. **Export as SVG** - Download the infographic as an SVG vector file

### Export Options

- **Copy**: Best for quick sharing or pasting into documents
- **PNG**: Best for saving as files or sharing in bitmap format
- **SVG**: Best for further editing or large-scale printing

## Development

### Prerequisites

- Node.js >= 16
- npm or yarn

### Build

```bash
# Install dependencies
npm install

# Development mode with hot reload
npm run dev

# Production build
npm run build

# Run linter
npm run lint
```

### Project Structure

```
obsidian-infographic/
├── src/
│   ├── main.ts       # Main plugin code
│   └── settings.ts   # Plugin settings
├── main.js           # Compiled plugin
├── manifest.json     # Plugin manifest
├── styles.css        # Plugin styles
└── package.json      # Dependencies
```

## Options

This plugin uses [@antv/infographic](https://github.com/antvis/Infographic) for rendering. The infographic content is passed directly to the Infographic instance.

For more information on infographic syntax and features, see the [Infographic documentation](https://github.com/antvis/Infographic).

## Features

- Render infographic diagrams in Obsidian using `infographic` code blocks
- Support for various diagram types (mind maps, timelines, flowcharts, etc.)
- Export to PNG or SVG formats
- Copy to clipboard functionality
- Error handling with friendly error messages

## License

MIT License

## Credits

- Built with [@antv/infographic](https://github.com/antvis/Infographic)
- Based on [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin)
