// src/utils/pageData.ts
import { getSiteStructure } from '@/data/common/siteStructure';

export async function getPageData(url: URL) {
  const segments = url.pathname.split("/").filter(Boolean);
  const isEn = segments[0] === 'en';
  const lang = isEn ? 'en' : 'jp';
  const prefix = isEn ? '/en' : (import.meta.env.DEV ? '/jp' : '');

  const siteText = isEn
    ? (await import('@/data/en/siteText')).siteText
    : (await import('@/data/jp/siteText')).siteText;

  const townCategoryInfo = isEn
    ? (await import('@/data/en/townCategoryInfo.json')).default
    : (await import('@/data/jp/townCategoryInfo.json')).default;

  const newsDate = isEn
    ? (await import('@/data/en/index/townNews.json')).default
    : (await import('@/data/jp/index/townNews.json')).default;

  const applicationData = isEn
    ? (await import('@/data/en/index/application.json')).default
    : (await import('@/data/jp/index/application.json')).default;

  const siteStructure = getSiteStructure(siteText.langPrefix);

  return { lang, prefix, siteText, townCategoryInfo, newsDate, applicationData, siteStructure };
}

export function getLangStaticPaths() {
  return [
    { params: { lang: 'jp' } },
    { params: { lang: 'en' } },
  ];
}