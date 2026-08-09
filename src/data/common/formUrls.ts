// src/data/common/formUrls.ts

export const getFormUrls = (langPrefix: string = "") => {
  // 英語圏 (/en) かどうかでURLを切り替える
  const isEn = langPrefix === "/en";

  return {
    // 申込フォームのURL
    application: isEn
      ? "https://forms.gle/2tJn7ViX9ZRG4QSc7"
      : "https://forms.gle/1Q5Mq1qipnwdaUas6", // 日本語版

    // お問い合わせフォームのURL
    contact: isEn
      ? "https://forms.gle/7fRcLFKdJohqKh6T6"
      : "https://forms.gle/dtMHv1mHwetdmajq7", // 日本語版
  };
};