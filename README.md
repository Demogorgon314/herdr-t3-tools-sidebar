# Herdr T3 Tools Sidebar

**English** · [简体中文](README.zh-CN.md)

Add a collapsible right sidebar to [Herdr T3](https://github.com/JinJieBeWater/herdr-t3). Click the sidebar icon at the top right of the tab bar to switch between Files, Changes, and Insights without opening a work tab. When the tab bar fills up, use the arrows to reach neighboring tabs. The icon animates; the panel opens immediately.

## Installation

1. Install Herdr T3 and [Herdr Insights](https://github.com/GaganSD/coding-agent-toolkit/tree/main/herdr-insights) first. This layout uses the existing Insights mod; its data collector is not bundled. Files and Changes come with Herdr.
2. Copy `layouts/t3-tools.*` into `~/.config/herdr-app/layouts/` and both directories under `mods/` into `~/.config/herdr-app/mods/`. If any files already exist, compare them first to preserve local changes.
3. Merge the layout section from this repository’s `keys.json` into Herdr’s `keys.json`, keeping your existing bindings.
4. Check both mods and switch to the layout:

   ```sh
   herdr-app check ~/.config/herdr-app/mods/t3-tools-nav
   herdr-app check ~/.config/herdr-app/mods/t3-tools-tabs
   herdr-app do layout.switch --name t3-tools
   ```

To return to the original T3 layout, run `herdr-app do layout.switch --name herdr-t3`.

## Add a tool

In `layouts/t3-tools.json`, add a block for the mod under `tools-body.children`. Then add the same block ID, a display name, and an icon path to the `tools` array in `mods/t3-tools-nav/main.js`. The sidebar handles switching and highlights the selected tool.

## Credits

The layout, preview, and tab bar are based on Herdr T3 at commit `4a12f1b` (Apache-2.0). This version changes how overflowing tabs are displayed and adds the tools sidebar and its animated toggle. See [LICENSE](LICENSE).
