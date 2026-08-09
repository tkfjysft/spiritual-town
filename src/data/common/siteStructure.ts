export interface NavChildStructure {
  url: string;
  icon: string;
  target?: string;
  rel?: string;
}

export interface NavItemStructure {
  url: string;
  icon: string;
  target?: string;
  rel?: string;
  children?: NavChildStructure[];
}

export interface SiteStructure {
  titleEn: string;
  titleImage: string;
  navigation: {
    siteNameImage: string;
    links: NavItemStructure[];
  };
  contact: {
    googleMapUrl: string;
  };
  copyrightYear: string;
}


import { getFormUrls } from "@/data/common/formUrls.ts";


export const getSiteStructure = (langPrefix: string = "") => {
 
  // ★フォームURLを取得
  const formUrls = getFormUrls(langPrefix);


  return {
  titleEn: "Spiritual Town",
  titleImage: "/logo_ci.avif",
  contact: {
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.76493611234!3d35.6812361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x44c8309623e03!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp",
  },
  navigation: {
    siteNameImage: "/logo_ci_header.avif",
    links: [
      { url: `/`, icon: "Home" },
      { 
        url: `/#map`, 
        icon: "Map",
        children: [
          { url: `/#categories`, icon: "LayoutGrid" },
          { url: `/about`, icon: "Info" }
        ]
      },
      { 
        url: `/oraclecards/draw`, 
        icon: "Sparkles",
        children: [
          { url: `/oraclecards`, icon: "BookOpen" }
        ]
      },
      { url: `/blog`, icon: "PenTool" },
      {
		// ★申込フォームURL
        url: formUrls.application,
        icon: "Send",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          { 
			// ★お問い合わせフォームURL
            url: formUrls.contact, 
            icon: "Mail",
            target: "_blank",
            rel: "noopener noreferrer"
          }
        ]
      }
    ]
  },
  copyrightYear: "Spiritual Town. All rights reserved."
};
};