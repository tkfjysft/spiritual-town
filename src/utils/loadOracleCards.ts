// src/utils/loadOracleCards.ts
import Papa from 'papaparse';

// スプレッドシートのカラム構成に合わせたTypeScriptの型定義
export interface OracleCard {
  id: string;
  title_en: string;
  title_jp: string;
  image: string;
  messageTitle_en: string;
  messageTitle_jp: string;
  message_en: string;
  message_jp: string;
  explanationTitle_en: string;
  explanationTitle_jp: string;
  explanation_en: string;
  explanation_jp: string;
  actionTitle_en: string;
  actionTitle_jp: string;
  action_en: string;
  action_jp: string;
  categoryName: string;
  recommendedItem: string; // ← スプレッドシートの列名に合わせています
  slug: string;
}

export async function fetchOracleCards(): Promise<OracleCard[]> {
  // 先ほどGoogleスプレッドシートの「ウェブに公開」で取得したCSVのURLをここに貼り付けます
  const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTATFlbABsJFNJI_sniiEE2jTPf1lg60SCYVrCCJBsjvc9DjRodGznsWMYCpJv8Up5LVqCMtJrP_D7/pub?gid=0&single=true&output=csv';

  try {
    const response = await fetch(csvUrl);
    const csvText = await response.text();

    const parsed = Papa.parse<OracleCard>(csvText, {
      header: true,          // 1行目のカラム名をキーにする
      skipEmptyLines: true,  // 空行をスキップ
    });

    return parsed.data;
  } catch (error) {
    console.error('オラクルカードデータの取得に失敗しました:', error);
    return [];
  }
}