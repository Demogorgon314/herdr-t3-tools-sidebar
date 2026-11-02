# Herdr T3 Tools Sidebar

为 [Herdr T3](https://github.com/JinJieBeWater/herdr-t3) 增加一个可收起的右侧工具栏。点击标签栏右上角的侧栏图标，在 Files、Changes 和 Insights 之间切换，不占用工作标签。标签过多时，左右箭头可以浏览相邻标签。开关图标有动画，面板本身即时展开。

## 安装

1. 先安装 Herdr T3 和 [Herdr Insights](https://github.com/GaganSD/coding-agent-toolkit/tree/main/herdr-insights)。此仓库复用它们，不包含 Insights 的采集代码；Files 和 Changes 由 Herdr 自带。
2. 从仓库根目录把 `layouts/t3-tools.*` 复制到 `~/.config/herdr-app/layouts/`，把 `mods/` 中的两个目录复制到 `~/.config/herdr-app/mods/`。如有同名文件，请先比较，保留自己的修改。
3. 将本仓库 `keys.json` 中的布局段合并到 Herdr 的 `keys.json`，不要替换整个文件。
4. 验证并切换布局：

   ```sh
   herdr-app check ~/.config/herdr-app/mods/t3-tools-nav
   herdr-app check ~/.config/herdr-app/mods/t3-tools-tabs
   herdr-app do layout.switch --name t3-tools
   ```

原 T3 布局仍可通过 `herdr-app do layout.switch --name herdr-t3` 切回。

## 添加工具

在 `layouts/t3-tools.json` 的 `tools-body.children` 中添加一个引用目标 mod 的 block，并在 `mods/t3-tools-nav/main.js` 的 `tools` 数组添加对应的 block ID、名称和图标路径。导航会复用已有的切换与选中样式。

## 来源

布局、预览图和标签栏基于 Herdr T3（版本 `4a12f1b`，Apache-2.0）。本版本修改了标签溢出行为，并新增工具侧栏、入口和开关动效。许可见 [LICENSE](LICENSE)。
