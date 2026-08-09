import type { SiteText } from '@/data/jp/siteText';

export const siteText: SiteText = {
  langPrefix: "/en",
  titleJp: "Spiritual Town",
  subtitle: "A town of small shops, close to your heart",
  description: `
    Are you looking for healing from the fatigue of human relationships and daily stress?<br class="block sm:hidden">
    "Spiritual Town" is a portal site gathering carefully selected small shops and salons for fortune-telling, healing, and counseling.
  `,
  contact: {
    tel: "0000000000",
    address: "1-9-1 Marunouchi, Chiyoda-ku, Tokyo",
  },
  navigation: {
    links: [
      { label: "" },
      { 
        label: "Town Map", 
        children: [
          { label: "Information Center" },
          { label: "About Town" }
        ]
      },
      { 
        label: "Draw Oracle Card", 
        children: [
          { label: "Oracle Cards List" }
        ]
      },
      { label: "Blog" },
      {
        label: "Apply for Listing",
        children: [
          { label: "Contact Us" }
        ]
      }
    ]
  },
  subNavigation: {
    links: [
      { label: "Privacy Policy" },
      { label: "Disclaimer" }
    ]
  },
  copyright: "Spiritual Town. All rights reserved."
};