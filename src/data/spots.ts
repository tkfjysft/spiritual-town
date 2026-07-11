// src/data/spots.ts

// スポット1つあたりのデータの形（型）を定義
interface SpotInfo {
  title: string;
  url: string;
  name: string;
}

// 全体のデータの型（キーが文字列で、値がSpotInfoのオブジェクト）
interface SpotsDataType {
  [key: string]: SpotInfo;
}

export const spotsData: SpotsDataType = {
  '占い': { title: '占い番地', url: 'https://fortune-site.com', name: 'タロットの館' },
  '癒やし': { title: '癒やしの番地', url: 'https://healing.com', name: 'ヒーリングサロン' },
  // ...他の番地もここに追加
};