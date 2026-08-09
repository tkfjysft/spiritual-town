// src/data/jp/terms/terms.ts

export interface TermsSection {
  title: string;
  content: string;
}

export interface TermsData {
  pageTitle: string;
  heading: string;
  sections: TermsSection[];
}

export const termsData: TermsData = {
  pageTitle: "免責事項 | Spiritual Town",
  heading: "免責事項",
  sections: [
    {
      title: "情報の正確性について",
      content: "当サイト「Spiritual Town」に掲載されている情報の正確性については万全を期しておりますが、提供する情報の完全性や有用性を保証するものではありません。サイト内の情報を利用したことにより生じたいかなる損害についても、当サイトは一切の責任を負いかねます。"
    },
    {
      title: "サービスのご利用について",
      content: "当サイトで紹介するサービス（占い、セッション、ワークショップ等）の内容や効果については、各店舗または提供者に帰属します。トラブルが発生した場合、当サイトは関与いたしませんので、ご利用者様ご自身の判断と責任においてご利用ください。"
    },
    {
      title: "外部サイトへのリンクについて",
      content: "当サイトからリンクされている外部サイトの内容については、その運営者の責任において管理されており、当サイトの管理下にはありません。リンク先のサイトをご利用になったことで生じた損害についても、一切の責任を負いません。"
    },
    {
      title: "著作権について",
      content: "当サイトに掲載されているコンテンツの著作権は、Spiritual Townまたは各権利者に帰属します。無断転載・複製を禁じます。"
    }
  ]
};