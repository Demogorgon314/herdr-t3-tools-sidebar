import { View, svg } from "gpui-kit";
import { h_flex } from "gpui-base";
import { layout, run, theme } from "herdr";

const tools = [
  ["files", "Files", "mods/files/file.svg"],
  ["changes", "Changes", "mods/changes/changes.svg"],
];

function activeTool(node) {
  if (node.id === "tools-body") return node.active;
  for (const child of node.children ?? []) {
    const active = activeTool(child);
    if (active) return active;
  }
}

export default class ToolsNav extends View {
  render() {
    const t = theme(), active = activeTool(layout() ?? {});
    return h_flex().size_full().items_center().gap(4).px(6).bg(t.chrome)
      .children(tools.map(([id, label, icon]) => h_flex().id(id).h(26).px(6).gap(4)
        .items_center().rounded(6).text_size(12).text_color(id === active ? t.foreground : t.muted)
        .bg(id === active ? t.selected : t.chrome).hover(s => s.bg(t.hover))
        .role("button").accessibility_label(label)
        .on_click(() => run("layout.select", { stack: "tools-body", child: id }))
        .child(svg(icon).size(14)).child(label)));
  }
}
