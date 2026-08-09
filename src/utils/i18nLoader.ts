// src/utils/pageData.ts
import { getSiteStructure } from '@/data/common/siteStructure';

export async function getPageData(url: URL) {
  const segments = url.pathname.split("/").filter(Boolean);
  const isEn = segments[0] === 'en';
  const lang = isEn ? 'en' : 'jp';
const prefix = isEn 
  ? '/en' 
  : (import.meta.env.DEV ? '/jp' : '');

  const metaData = isEn
  ? (await import('@/data/en/meta')).metaData
  : (await import('@/data/jp/meta')).metaData;

  const siteText = isEn
    ? (await import('@/data/en/siteText')).siteText
    : (await import('@/data/jp/siteText')).siteText;

  const townCategoryInfo = isEn
    ? (await import('@/data/en/townCategoryInfo')).townCategoryInfo
    : (await import('@/data/jp/townCategoryInfo')).townCategoryInfo;

  const newsDate = isEn
    ? (await import('@/data/en/index/townNews')).townNewsData
    : (await import('@/data/jp/index/townNews')).townNewsData;

  const applicationData = isEn
    ? (await import('@/data/en/index/application')).applicationData
    : (await import('@/data/jp/index/application')).applicationData;

	const spotsData = isEn
	? (await import('@/data/en/townRegisteredSites')).spotsData
	: (await import('@/data/jp/townRegisteredSites')).spotsData

	const aboutData = isEn
	? (await import('@/data/en/about/about')).aboutData
	: (await import('@/data/jp/about/about')).aboutData

	const privacyPolicyData = isEn
    ? (await import('@/data/en/privacyPolicy/privacyPolicy')).privacyPolicyData
    : (await import('@/data/jp/privacyPolicy/privacyPolicy')).privacyPolicyData;

	const termsData = isEn
	? (await import('@/data/en/terms/terms')).termsData
	: (await import('@/data/jp/terms/terms')).termsData;

	const drawData = isEn
	? (await import('@/data/en/oraclecards/draw')).drawData
	: (await import('@/data/jp/oraclecards/draw')).drawData;

	const oraclecardsData = isEn
	? (await import('@/data/en/oraclecards/index')).oraclecardsData
	: (await import('@/data/jp/oraclecards/index')).oraclecardsData;

    const siteStructure = getSiteStructure(siteText.langPrefix);

	return { 
	lang, 
	prefix, 
	metaData, 
	siteText, 
	townCategoryInfo, 
	newsDate, 
	applicationData, 
	spotsData, 
	siteStructure, 
	aboutData, 
	privacyPolicyData,
	termsData,
  	drawData,
	oraclecardsData,
	};
}


export function getLangStaticPaths() {
  return [
    { params: { lang: 'jp' } },
    { params: { lang: 'en' } },
  ];
}



// src/utils/i18nLoader.ts に追加するイメージ
import { client, type BlogResponse } from '@/lib/microcms';


// ★ ブログ用の staticPaths を生成するヘルパー関数
export async function getBlogStaticPaths() {
  const response = await client.get<BlogResponse>({
    endpoint: 'spitown-blog',
    queries: { limit: 100 },
  });

  const languages = ['jp', 'en'];

  return languages.flatMap((lang) =>
    response.contents.map((blog) => ({
      params: { 
        lang, 
        slug: blog.slug || blog.id 
      },
      props: { blog },
    }))
  );
}