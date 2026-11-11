@AGENTS.md

# MurayaPortfolio

Murayaの個人サイト(ポートフォリオ)。スキル、経歴、個人開発、資格の1ページ構成(連絡先はページ上部のボタン)。

## 技術スタック

- Next.js (App Router) + TypeScript
- Tailwind CSS v4(テーマ色は `app/globals.css` の CSS 変数で定義)
- Biome(lint / format)、pnpm
- フォントは `geist` パッケージ(ローカル同梱。`next/font/google` は使わない)
- 公開先は Vercel を想定。完全静的ページで、API・DB は持たない

## 構成

- `lib/profile.ts` — サイトに表示する内容はすべてここ。文章や経歴の変更はこのファイルだけで済むようにする
  - `// TODO` が付いている箇所は仮の内容。本人に確認してから差し替える
- `components/` — セクションごとのコンポーネント(header, hero, skills, career, projects, certifications, section)
- `public/icons/` — スキル欄のアイコン(SVG)。言語・ツールは devicon(MIT)から取得、SQL・JP1 は汎用アイコンを自作
- `app/page.tsx` — セクションを並べるだけ

## デザイン方針

- ホワイトスモーク(#f5f5f5)背景のテック系(濃いグレーの文字、等幅フォントのアクセント、`$ whoami` などターミナル風の装飾)
- 色は `background / surface / border / foreground / muted / accent` のテーマ色だけを使う

## 社名を検索エンジンに拾わせない仕組み

- 経歴の社名は画面には表示するが、検索でヒットさせたくない(本人の希望)
- `lib/profile.ts` には社名を平文で書かず、`hidden("...")` に `pnpm encode "社名"` で変換した文字列を入れる
- `components/hidden-text.tsx` がブラウザで復号し、テキストではなく `<canvas>` に描画する(HTML・DOM に社名が残らない)
- 社名はソースコード・コミットメッセージ・PR本文・README などリポジトリのどこにも平文で書かないこと(リポジトリは Public)

## 開発ルール

- ブランチは Git-flow(`develop` がデフォルト。作業は `feature-*` ブランチで行い、`develop` へ PR)
- コミット前に `pnpm lint` と `pnpm build` が通ること
- 確定していない情報(経歴・社名など)を推測で書き込まない
