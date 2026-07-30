// src/lib/microcms.ts
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  date?: string; // ご自身で作られた公開日用フィールド
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  publishedAt: string; // システム標準の公開日時
  updatedAt: string;
};

export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};