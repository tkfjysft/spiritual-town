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
  "title": "Town News & Recommended Spots",
  "subtitle": "Latest updates and featured listings",
  "items": []
};