// http(s) のリンクだけ新しいタブで開く(mailto: などはそのまま)
export function externalLinkProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};
}
