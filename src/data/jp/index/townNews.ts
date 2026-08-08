// src/data/jp/index/townNews.ts

export interface NewsItem {
  date: string;
  name: string;
  siteName: string;
  description: string;
  image: string;
  url: string;
}

export interface TownNewsData {
  title: string;
  subtitle: string;
  items: NewsItem[];
}

export const townNewsData: TownNewsData = {
  "title": "お知らせ",
  "subtitle": "「スピリチュアルタウン」にご登録いただいた、今話題の素敵なおすすめウェブサイトをご紹介します。",
  "items": [
	{
      "date": "2026/8/6",
      "name": "「THEM 前島気功療法センター」様にご登録いただきました。",
	  "siteName": "THEM 前島気功療法センター",
      "description": "横浜を拠点に、やさしく触れる気功と、頭部への軽いタッチと微細な振動を用いた「脳内トリートメント」を行っています。眠りの浅さ、緊張が抜けない、慢性的な不調などのご相談に、身体と心の両面から丁寧に向き合います。対面施術のほか、遠隔ヒーリング、全国出張、ヒーラー養成講座にも対応。35年以上「気」と身体感覚を探究してきた前島豊が、一人ひとりの状態に合わせて施術します。",
      "image": "/thum/them335.com.avif",
      "url": "https://them335.com/"
    },
	{
      "date": "2026/7/27",
      "name": "「ダンススタジオ ベアーレ」様にご登録いただきました。",
	  "siteName": "ダンススタジオ ベアーレ",
      "description": "神戸市東灘区にある【ダンススタジオ ベアーレ】では、はじめての方、お子様からご高齢の方までダンスを楽しんでいただけます。当スタジオで大好評なのが、「BTS施術（Body Trunk Switch）」です。医療（治療・リハビリ）にも対応できるこのメソッドは、下肢を中心に体全体まで小さな刺激で大きな効果を得ることが特徴です。「接骨院に通っているのに痛みが取れない」「もっと身体を使えるようになりたい」といったお悩みを抱える方から、一般の方、お子様、アスリートまで、年齢性別を問わず多くの方に大好評をいただいております。",
      "image": "/thum/www.dance-bearle.com.avif",
      "url": "https://www.dance-bearle.com/"
    },
	{
      "date": "2026/7/21",
      "name": "「ろぉたすりっぷる」様にご登録いただきました。",
	  "siteName": "ろぉたすりっぷる",
      "description": "意識の覚醒は生まれ変わりよみがえり　うつ　人間関係　恋愛の問題　子育て　仕事　家族の問題　特に悩みは無いけれど調子が悪い方、その他。悩み苦しむことに疲れた方、飽き飽きした方、もう頑張れない方、どうぞお越し下さい。あなたが新しい次元に出会うたび、問題や環境も変化していきます。頑張って行動しない方法で生まれ変わりましょう。本来の自分を発見する旅へ出発です。",
      "image": "/thum/lotusripple.wpx.jp.avif",
      "url": "https://lotusripple.wpx.jp/"
    },
	{
      "date": "2026/7/20",
      "name": "「ミラクルアカデミー」様にご登録いただきました。",
	  "siteName": "ミラクルアカデミー",
      "description": "神戸市板宿にある「ミラクルアカデミー」は、実績あるカウンセラーが運営するサロン兼スクールです。人生相談だけでなく、初心者からプロまで学べる本格的なスピリチュアル講座も開講しており、神戸エリアで信頼できる学びの場を求める方におすすめです。",
      "image": "/thum/www.eonet.ne.jp_~miracles.avif",
      "url": "http://www.eonet.ne.jp/~miracles/"
    },
    {
      "date": "2026/7/14",
      "name": "「一樂 迦哩無 公式サイト」様が参加しました",
	  "siteName": "一樂 迦哩無 公式サイト",
      "description": "高次元のエネルギーと繋がる、ライトワーカー・一樂迦哩無様の公式ポータルサイトです。スピリチュアルセッションや遠隔ヒーリングをはじめ、魂を癒やすオリジナルアートやフィギュアの制作、ライトワーカーのためのサポート情報など、癒やしと創造性に満ちた世界をお届けしています。",
      "image": "/thum/kalina-ichiraku.com.avif",
      "url": "https://kalina-ichiraku.com/"
    },
    {
      "date": "2026/7/14",
      "name": "「Kalinart」様が参加しました",
	  "siteName": "Kalinart",
      "description": "パステルカラーのポップで可愛い世界観が広がる「kalinart」のショップです。お願い事を書いてそばに置いておくだけで、日々の暮らしにそっと癒やしとポジティブなエネルギーを届けてくれます。見ているだけで心がときめく、特別なスピリチュアル・アイテムをお探しの方におすすめです。",
      "image": "/thum/kalinart.base.shop.avif",
      "url": "https://kalinart.base.shop/"
    }
  ]
};