// src/data/jp/townRegisteredSites.ts

export interface TownSpot {
  isNew: "new" | "old";
  name: string;
  url: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
}

export interface TownCategorySpots {
  title: string;
  description: string;
  bgGradient: string;
  spots: TownSpot[];
}

export interface TownRegisteredSitesData {
  fortune: TownCategorySpots;
  healing: TownCategorySpots;
  shop: TownCategorySpots;
  counseling: TownCategorySpots;
  meditation: TownCategorySpots;
}

export const spotsData: TownRegisteredSitesData = {
  "fortune": {
    "title": "占い番地",
    "description": "運命の糸を解き明かし、進むべき未来を優しく照らす館が集まるエリアです。",
    "bgGradient": "from-purple-500 to-indigo-600",
    "spots": []
  },
  "healing": {
    "title": "癒やし番地",
    "description": "日々のストレスや疲れを解きほぐし、心と体のバランスを整えるセラピーエリアです。",
    "bgGradient": "from-emerald-500 to-teal-600",
    "spots": []
  },
  "shop": {
    "title": "ショップ番地",
    "description": "日常を特別に変える、特別なお守りやスピリチュアルグッズが見つかるお店です。",
    "bgGradient": "from-amber-500 to-orange-600",
    "spots": []
  },
  "counseling": {
    "title": "カウンセリング番地",
    "description": "一人で抱えきれない深い悩みに寄り添い、解決への一歩を共に歩む専門家たちの街です。",
    "bgGradient": "from-rose-500 to-pink-600",
    "spots": []
  },
  "meditation": {
    "title": "瞑想番地",
    "description": "喧騒から離れ、静寂の中で自分自身の内なる声と深く繋がるためのスペースです。",
    "bgGradient": "from-sky-500 to-blue-600",
    "spots": []
  }
};