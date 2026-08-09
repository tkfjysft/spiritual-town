// src/data/jp/oraclecards/draw.ts

export interface DrawPageData {
  pageTitle: string;
  badge: string;
  heading: string;
  subheading: string;
  description: string;
  cardAlt: string;
  triggerButtonText: string;
  drawButtonText: string;
  listButtonText: string;
  section1Title: string;
  section1Content: string;
  section2Title: string;
  section2Content1: string;
  section2Content2: string;
}

export const drawData: DrawPageData = {
  pageTitle: "今日のオラクルカードを引く（無料占い）|スピリチュアルタウン",
  badge: "Daily Oracle",
  heading: "今日のオラクルカード",
  subheading: "今のあなたに必要なメッセージを引く",
  description: "心静かに今のあなたに必要なメッセージを受け取りましょう。無料のオラクルカードいやしと占い、信頼できる癒しのスポットを集めた総合ポータルサイトです。<br>カードをクリック（またはボタンを押して）引いてみてください。",
  cardAlt: "オラクルカード背表紙",
  triggerButtonText: "✨ カードを引く",
  drawButtonText: "✨ カードを引く",
  listButtonText: "📚 カード一覧を見る",
  section1Title: "オラクルカードとは？",
  section1Content: "オラクルカードは、今のあなたに必要なメッセージや、心を整えるためのポジティブなヒントを授けてくれるカードです。タロットカードのような吉凶（良い・悪い）を占うものではなく、いつでも優しく背中を押してくれる言葉や、日常を心地よく過ごすための気づきを与えてくれます。",
  section2Title: "今日のカードを引いたあとの過ごし方",
  section2Content1: "引いたカードに書かれているメッセージやイラストから、直感的に感じたことを大切にしてみてください。「なんだか気になるな」「今の自分にしっくりくるな」と感じたそのインスピレーションこそが、今日一日を前向きに過ごすための大切な羅針盤になります。",
  section2Content2: "当サイトの無料オラクルカード占いは、毎日の運勢チェックや、心をリセットしたいとき、悩みに対して新しい視点を取り入れたいときにいつでも何度でもご利用いただけます。"
};