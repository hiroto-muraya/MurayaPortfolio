@AGENTS.md

# MurayaPortfolio

Murayaの個人サイト(ポートフォリオ)。自己紹介・スキル、経歴、制作物、連絡先の1ページ構成。

## 技術スタック

- Next.js (App Router) + TypeScript
- Tailwind CSS v4(テーマ色は `app/globals.css` の CSS 変数で定義)
- Biome(lint / format)、pnpm
- フォントは `geist` パッケージ(ローカル同梱。`next/font/google` は使わない)
- 公開先は Vercel を想定。完全静的ページで、API・DB は持たない

## 構成

- `lib/profile.ts` — サイトに表示する内容はすべてここ。文章や経歴の変更はこのファイルだけで済むようにする
  - `// TODO` が付いている箇所は仮の内容。本人に確認してから差し替える
- `components/` — セクションごとのコンポーネント(header, hero, about, career, works, contact, section)
- `app/page.tsx` — セクションを並べるだけ

## デザイン方針

- グレー基調のテック系(ダークグレー背景、等幅フォントのアクセント、`$ whoami` などターミナル風の装飾)
- 色は `background / surface / border / foreground / muted / accent` のテーマ色だけを使う

## 開発ルール

- ブランチは Git-flow(`develop` がデフォルト。作業は `feature-*` ブランチで行い、`develop` へ PR)
- コミット前に `pnpm lint` と `pnpm build` が通ること
- 確定していない情報(経歴・社名など)を推測で書き込まない
