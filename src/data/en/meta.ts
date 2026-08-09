// src/data/en/meta.ts

export interface PageMeta {
  title: string;
  description: string;
}

export interface MetaData {
  defaultTitle: string;
  defaultDescription: string;
  pages: Record<string, PageMeta>;
}

export const metaData: MetaData = {
  "defaultTitle": "Spiritual Town | Fortune Telling, Healing, Counseling & Relaxation Portal",
  "defaultDescription": "Spiritual Town is a portal site dedicated to healing relationship fatigue and mental fuzziness through fortune telling, healing, counseling, and meditation. Discover free daily oracle cards and carefully selected lightworkers and salon information.",
  "pages": {
    "/": {
      "title": "Spiritual Town | Fortune Telling, Healing, Counseling & Relaxation Portal",
      "description": "Spiritual Town is a portal site dedicated to healing relationship fatigue and mental fuzziness through fortune telling, healing, counseling, and meditation. Discover free daily oracle cards and carefully selected lightworkers and salon information."
    },
    "/about/": {
      "title": "About Spiritual Town | A Comprehensive Portal for Fortune Telling & Healing",
      "description": "Discover the concept behind Spiritual Town and the heartfelt vision we cherish. Learn how this portal was created as a place to reconnect with yourself and light a gentle spark in your heart amidst daily life."
    },
    "/category/fortune/": {
      "title": "Fortune District: Recommended Readings & Salons | Spiritual Town",
      "description": "Explore fortune-telling insights and popular salons to guide your path forward. Find the perfect reading method—such as tarot, astrology, or online sessions—to lighten your heart in the Fortune District of Spiritual Town."
    },
    "/category/healing/": {
      "title": "Healing District: Healing & Relaxation Salons | Spiritual Town",
      "description": "Discover salons and treatments that release deep body tension, promote deep healing, and recharge your energy. Ease daily stress and rediscover your natural comfort in the Healing District of Spiritual Town."
    },
    "/category/shop/": {
      "title": "Shop District: Spiritual Goods & Online Stores | Spiritual Town",
      "description": "Find amulets and spiritual goods that transform your everyday life into something special. Explore power stones, oracle card specialty shops, and heartwarming items in the Shop District of Spiritual Town."
    },
    "/category/counseling/": {
      "title": "Counseling District: Emotional Support & Counseling Salons | Spiritual Town",
      "description": "A welcoming district of experts who walk beside you and support you through deep concerns you cannot carry alone. Find helpful counseling services and salons for relationships, parenting, and life turning points."
    },
    "/category/meditation/": {
      "title": "Meditation District: Meditation & Mindfulness Info | Spiritual Town",
      "description": "A tranquil space to step away from the noise and deeply connect with your inner voice in silence. Discover practical methods and recommended resources to quiet your mind and bring mindfulness into your daily routine."
    },
    "/oraclecards/draw/": {
      "title": "Draw Your Daily Oracle Card (Free Reading) | Spiritual Town",
      "description": "Quiet your mind and receive the message you need right now. Simply click to draw a card for daily insights and guidance with our free daily oracle card reading on Spiritual Town."
    },
    "/oraclecards/": {
      "title": "Oracle Card List: Meanings & Messages | Spiritual Town",
      "description": "Browse all the oracle cards available on Spiritual Town. Explore the deep meanings and messages infused into each card. Find your emotional amulet and new insights tailored to you today."
    }
  }
};