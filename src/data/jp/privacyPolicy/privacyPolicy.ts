// src/data/jp/privacyPolicy/privacyPolicy.ts

export interface PrivacySection {
  title: string;
  content: string;
}

export interface PrivacyData {
  pageTitle: string;
  heading: string;
  sections: PrivacySection[];
  effectiveDate: string;
}

export const privacyPolicyData: PrivacyData = {
  pageTitle: "プライバシーポリシー",
  heading: "プライバシーポリシー",
  effectiveDate: "制定日：2026年5月1日",
  sections: [
    {
      title: "1. 個人情報の利用目的",
      content: "当サイトでは、お問い合わせや記事へのコメント送信等の際にお名前、メールアドレス等の個人情報をご登録いただく場合があります。<br>取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。"
    },
    {
      title: "2. 個人情報の第三者提供",
      content: "お預かりした個人情報は適切に管理し、個人情報保護法その他の法令に基づき開示が認められる場合を除き、ご本人の同意を得ることなく第三者に提供することはありません。"
    },
    {
      title: "3. アクセス解析ツールについて",
      content: "当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。"
    },
    {
      title: "4. 免責事項",
      content: "当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。<br>当サイトのコンテンツ・情報について、できる限り正確な情報を提供するよう努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。"
    },
    {
      title: "5. プライバシーポリシーの変更について",
      content: "当サイトは、日本の法令の制定・改正やその他規範の変動に伴い、本ポリシーの内容を適宜見直し、その改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。"
    }
  ]
};