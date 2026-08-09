export interface ApplicationButton {
  text: string;
  link: string;
}

export interface ApplicationData {
  badge: {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  };
  heading: string;
  subHeading: string;
  benefits: string[];
  freeReasonLinkText: string;
  title: string;
  description: string;
  text: string;
  steps: string[];
  button: ApplicationButton;
}

export const applicationData: ApplicationData = {
  "badge": {
    "line1": "ライトワーカーの",
    "line2": "皆様！",
    "line3": "ぜひ、あなたの",
    "line4": "サイトを",
    "line5": "ご登録ください"
  },
  "heading": "占い・ヒーリングなどの<br>集客・宣伝なら！<br>掲載料・登録料<br class=\"block sm:hidden\">完全無料",
  "subHeading": "スピリチュアルタウンに<br class=\"block sm:hidden\">掲載するメリット",
  "benefits": [
    "無料であなたの活動・サイトを宣伝できる！",
    "被リンク効果で、あなたのWEBサイトのSEO評価が上がる！",
    "同じ志を持つライトワーカーと繋がれる・仲間が増える！"
  ],
  "freeReasonLinkText": "なぜ無料で掲載できるの？",

  "title": "スピリチュアルサイト・サロンの掲載を希望されるライトワーカー様・運営者様へ",
  "description": "当ポータルサイト（スピリチュアルタウン）にあなたのウェブサイトやサロンを掲載しませんか？占い、ヒーリング、パワーストーンなど、心に寄り添う素敵なサイトの魅力を、より多くのユーザーへお届けします。",
  "text": "掲載のための登録料・月額費はすべて無料です！",
  "steps": [
    "フォームから申請",
    "運営による内容確認",
    "サイトへ掲載"
  ],
  "button": {
    "text": "掲載を申し込む",
    "link": "https://forms.gle/1Q5Mq1qipnwdaUas6"
  }
}