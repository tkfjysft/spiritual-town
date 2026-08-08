// src/data/about/about.ts

export interface AboutFeature {
  title: string;
  description: string;
  icon?: string;
  url?: string;
  qr?: string;
}

export interface AboutSection {
  id: string;
  title: string;
  content?: string;
  subTitle?: string;
  list?: { text: string }[];
  content2?: string;
  content3?: string;
  features?: AboutFeature[];
}

export interface AboutData {
  pageTitle: string;
  hero: {
    title: string;
    description: string;
  };
  sections: AboutSection[];
  image: string;
}

export const aboutData: AboutData = {
  "pageTitle": "Spiritual Town について",
  "hero": {
    "title": "スピリチュアルタウン：心に灯りをともす場所",
    "description": "人生の分岐点や、少しだけ立ち止まって自分を見つめ直したいとき。私たちは、あなたの内なる声に寄り添う、信頼できる場所と出会える「地図」として生まれました。ここから始まる小さな探求が、あなたらしい毎日を送るための大切な道しるべとなりますように。"
  },
  "sections": [
    {
      "id": "concept",
      "title": "なぜ「街」なのか",
      "content": "スピリチュアルとは、特別なことではなく、日常の延長線上にある「自分自身を整えること」だと私たちは考えます。まるで散歩中に見つけた小さなお店で温かい飲み物を楽しむように、気負わず、飾らず、自分にとって心地よい癒しに出会える場所でありたい。そんな想いから、このポータルサイトは「街」という形をとりました。"
    },
    {
      "id": "features",
      "title": "このサイトでできること",
      "features": [
        { "title": "直感的な探索", "description": "マップ上の「番地」をクリックすることで、あなたに必要なメッセージを届けてくれる場所と出会えます。" },
        { "title": "厳選された空間", "description": "癒しや導きを専門とする、信頼できるサイトのみを掲載しています。" },
        { "title": "日々のヒント", "description": "占いや瞑想を通じて、今のあなたに必要な前向きなヒントを受け取ってください。" }
      ]
    },
	{
      "id": "sns",
      "title": "スピリチュアルタウンのSNSについて",
      "features": [
        { "title": "Instagramでのご紹介", "icon": "fa-brands fa-instagram", "url": "https://www.instagram.com/spi_town?utm_source=qr", "qr": "qr_insta.avif", "description": "スピリチュアルタウンへサイト登録をしていただきましたら、スピリチュアルタウンのインスタグラムの投稿で紹介させていただきます" },
        { "title": "LINEでのお知らせ", "icon": "fa-brands fa-line", "url": "https://lin.ee/wsdI1Xn", "qr": "qr_line.avif", "description": "定期的にお知らせやお得な情報などを発信します。" }
      ]
    },
	{
      "id": "freeReason",
      "title": "なぜ無料で掲載できるのか",
      "content": "現在は基本的なサービスを提供させていただいており、それらはこの先ずっと完全無料で使っていただけます。",
	  "subTitle":  "スピリチュアルタウンはこれからますます進化していきます！",
	"list": [
		{"text": "新たなサービス"},
	  	{"text": "より集客に役立つサービス"},
		{"text": "アクセスアップにつながるサービス"}
	  ],
	  "content2": "を追加予定です。",
	  "content3": "新たな追加サービスは有料とさせて頂く予定です。もちろん、無料利用のままでも引き続き「スピリチュアルタウン」をご利用いただけます。"
    }
  ],
  "image": "/town.avif"
}