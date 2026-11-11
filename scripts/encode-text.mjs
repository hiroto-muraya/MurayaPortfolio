// 検索にヒットさせたくない文字列(社名など)を lib/profile.ts 用に変換する。
// 使い方: pnpm encode "変換したい文字列"
// 出力された文字列を profile.ts の hidden("...") に貼り付ける。
const KEY = 0x5a;
const text = process.argv[2];
if (!text) {
  console.error('使い方: pnpm encode "変換したい文字列"');
  process.exit(1);
}
const bytes = [...new TextEncoder().encode(text)].reverse().map((b) => b ^ KEY);
console.log(Buffer.from(bytes).toString("base64"));
