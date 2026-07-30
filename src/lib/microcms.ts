// src/lib/microcms.ts
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ブログの型定義
export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export type Blog = {
  id: string;
  title: string;
  slug: string;
  content: string;
  date?: string; // ご自身で作られた公開日用フィールド
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  publishedAt: string; // システム標準の公開日時
  updatedAt: string;
  category?: Category;
};

export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};
