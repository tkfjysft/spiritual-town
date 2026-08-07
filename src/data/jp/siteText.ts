export interface NavChildText {
  label: string;
}

export interface NavItemText {
  label: string;
  children?: NavChildText[];
}

export interface SiteText {
  langPrefix: string;
  titleJp: string;
  subtitle: string;
  description: string;
  contact: {
    tel: string;
    address: string;
  };
  navigation: {
    links: NavItemText[];
  };
  copyright: string;
}

export const siteText: SiteText = {
  langPrefix: "/jp",
  titleJp: "スピリチュアルタウン",
  subtitle: "あなたの心に寄り添う、小さなお店が集まる街",
  description: `
    人間関係の悩みや、日々のメンテナンスに疲れた心の癒やしを求めていませんか？<br class="block sm:hidden">
    「スピリチュアルタウン」は、厳選された占い・ヒーリング・カウンセリングの小さなお店やサロンが集まるポータルサイトです。
  `,
  contact: {
    tel: "0000000000",
    address: "東京都千代田区丸の内1丁目9-1",
  },
  navigation: {
    links: [
      { label: "" },
      { 
        label: "街のマップ", 
        children: [
          { label: "街の案内所" },
          { label: "街について" }
        ]
      },
      { 
        label: "オラクルカードを引く", 
        children: [
          { label: "オラクルカード一覧" }
        ]
      },
      { label: "ブログ" },
      {
        label: "掲載を申し込む",
        children: [
          { label: "お問い合わせ" }
        ]
      }
    ]
  },
  copyright: "Spiritual Town. All rights reserved."
}; 