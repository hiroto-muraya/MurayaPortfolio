// サイトに表示する内容はすべてこのファイルに集約している。
// 「TODO」と書かれた箇所は仮の内容なので、本人の情報に差し替えること。

export type Skill = {
  name: string;
  // public/icons/<名前>.svg のファイル名(拡張子なし)。複数指定で並べて表示
  icons: string[];
};

export type SkillGroup = {
  category: string;
  items: Skill[];
};

export type CareerItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export type Project = {
  name: string;
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  links: { label: string; href: string }[];
};

export type Link = {
  label: string;
  href: string;
  handle: string;
};

export const profile = {
  name: "Hiroto Muraya",
  nameJa: "", // TODO: 漢字表記を載せる場合は入力（空なら非表示）
  role: "Backend Engineer",
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "Java", icons: ["java"] },
      { name: "C#", icons: ["csharp"] },
      { name: "SQL", icons: ["sql"] },
      { name: "Bash", icons: ["bash"] },
    ],
  },
  {
    category: "Frameworks",
    items: [{ name: "Spring Boot", icons: ["spring"] }],
  },
  {
    category: "Infra / Tools",
    items: [
      { name: "Linux", icons: ["linux"] },
      { name: "Git / GitLab", icons: ["git", "gitlab"] },
      { name: "Jenkins", icons: ["jenkins"] },
      { name: "JP1", icons: ["jp1"] },
      { name: "PostgreSQL", icons: ["postgresql"] },
    ],
  },
];

// 新しいものを上に書く
export const career: CareerItem[] = [
  {
    period: "2025 – 現在", // TODO
    title: "個人開発：MauFin",
    organization: "2人チーム",
    description:
      "登山計画・記録Webアプリを共同開発。バックエンドAPIの設計・実装、DB設計、計画書のPDF出力を担当。",
  },
  {
    period: "20XX – 現在", // TODO
    title: "システムエンジニア",
    organization: "株式会社〇〇", // TODO: 社名を出さない場合は「SIer」などに
    description: "Java・C#を用いた業務システムの開発・保守に従事。", // TODO
  },
  {
    period: "20XX", // TODO
    title: "〇〇大学 〇〇学部 卒業", // TODO
    organization: "",
    description: "",
  },
];

export const projects: Project[] = [
  {
    name: "MauFin",
    summary:
      "山の検索から、登山候補の登録、登山計画の作成、計画書のPDF出力、写真付きの登山記録まで行える登山計画・記録Webアプリ。",
    role: "バックエンド担当（2人チーム）",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "7テーブル構成のDB設計と、全テーブルへのRLS適用",
      "マイページ・山検索・登山計画などのAPI実装",
      "登山計画書のPDF生成機能",
    ],
    links: [], // TODO: 公開リポジトリやデモURLがあれば { label: "GitHub", href: "..." } を追加
  },
];

export const links: Link[] = [
  {
    label: "GitHub",
    href: "https://github.com/hiroto-muraya",
    handle: "@hiroto-muraya",
  },
  {
    label: "Mail",
    href: "mailto:muraya.hiroto619@gmail.com",
    handle: "muraya.hiroto619@gmail.com",
  },
];
