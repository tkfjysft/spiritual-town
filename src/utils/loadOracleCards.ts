// src/utils/loadOracleCards.ts
import Papa from 'papaparse';

// スプレッドシートのカラム構成に合わせたTypeScriptの型定義
export interface OracleCard {
  id: string;
  title: string;
  title_en: string;
  image: string;
  messageTitle: string;
  message: string;
  explanationTitle: string;
  explanation: string;
  actionTitle: string;
  action: string;
  categoryName: string;
  recommendedItem: string;
  slug: string;
}

export async function fetchOracleCards(lang: 'jp' | 'en' = 'jp'): Promise<OracleCard[]> {
  // 日本語版のURL (gid=0) と 英語版のURL (gid=1756528425)
  const jpCsvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTATFlbABsJFNJI_sniiEE2jTPf1lg60SCYVrCCJBsjvc9DjRodGznsWMYCpJv8Up5LVqCMtJrP_D7/pub?gid=0&single=true&output=csv';
  const enCsvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTATFlbABsJFNJI_sniiEE2jTPf1lg60SCYVrCCJBsjvc9DjRodGznsWMYCpJv8Up5LVqCMtJrP_D7/pub?gid=1756528425&single=true&output=csv';

  const csvUrl = lang === 'en' ? enCsvUrl : jpCsvUrl;

  try {
    const response = await fetch(csvUrl);
    const csvText = await response.text();

    const parsed = Papa.parse<OracleCard>(csvText, {
      header: true,          // 1行目のカラム名をキーにする
      skipEmptyLines: true,  // 空行をスキップ
    });

    return parsed.data;
  } catch (error) {
    console.error(`オラクルカードデータ(${lang})の取得に失敗しました:`, error);
    return [];
  }
}