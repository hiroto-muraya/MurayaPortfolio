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

// 検索にヒットさせたくない文字列。scripts/encode-text.mjs で変換した値を入れる
export type Hidden = { hidden: string };
export const hidden = (encoded: string): Hidden => ({ hidden: encoded });

export type CareerItem = {
  period: string;
  title: string | Hidden;
  projects?: string[];
};

export type Project = {
  name: string;
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  // 公開状況の案内(例: 正式リリース前であること)
  status?: string;
  links: { label: string; href: string; note?: string }[];
};

export type Certification = {
  date: string;
  name: string;
  issuer: string;
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
      { name: "GitHub", icons: ["github"] },
      { name: "Jenkins", icons: ["jenkins"] },
      { name: "JP1", icons: ["jp1"] },
      { name: "PostgreSQL", icons: ["postgresql"] },
      { name: "Netlify", icons: ["netlify"] },
      { name: "Claude Code", icons: ["claudecode"] },
    ],
  },
];

// 新しいものを上に書く。社名は hidden() で指定(検索エンジンに拾わせないため)
export const career: CareerItem[] = [
  {
    period: "2023年11月 – 現在",
    title: hidden("KT8zPTU2NTQyOT8OejY/KTQb5P69wOa+1ea/8Pq8"),
    projects: [
      "PC・スマートフォン・タブレットのキッティング",
      "某メーカー系IT企業の新入社員教育（サブ講師）",
      "航空関連システムの開発・改修・テスト",
      "大手金融業向けバッチシステム開発",
    ],
  },
  {
    period: "2023年4月 – 2023年9月",
    title: hidden("aPrZufLYufnYudzZueT+vcDmvtXmv/D6vA=="),
    projects: ["基地局管理システムの運用保守"],
  },
  {
    period: "2023年3月",
    title: "青森大学 ソフトウェア情報学部 卒業",
  },
  {
    period: "2019年3月",
    title: "青森山田高等学校 情報処理科 卒業",
  },
];

export const projects: Project[] = [
  {
    name: "MauFin",
    summary:
      "山の検索から、登山候補の登録、登山計画の作成、計画書のPDF出力、写真付きの登山記録まで行える登山計画・記録Webアプリケーション。",
    role: "バックエンド担当（2人チーム）",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "7テーブル構成のDB設計と、全テーブルへのRLS適用",
      "マイページ・山検索・登山計画などのAPI実装",
    ],
    status: "Coming Soon",
    links: [
      {
        label: "開発環境を見る",
        href: "https://roaring-queijadas-0d0d68.netlify.app/",
        note: "現在は開発中の環境です。正式リリースは Coming Soon。",
      },
    ],
  },
];

// 新しいものを上に書く
export const certifications: Certification[] = [
  {
    date: "2026年9月",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    date: "2026年9月",
    name: "JP1認定エンジニア",
    issuer: "日立製作所",
  },
  {
    date: "2025年4月",
    name: "Oracle Certified Java Programmer, Silver SE 11",
    issuer: "Oracle",
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
