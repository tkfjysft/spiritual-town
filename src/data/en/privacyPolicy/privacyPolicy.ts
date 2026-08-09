// src/data/privacy/privacy.ts

export interface PrivacySection {
  title: string;
  content: string;
}

export interface PrivacyData {
  pageTitle: string;
  heading: string;
  sections: PrivacySection[];
  effectiveDate: string;
}

export const privacyPolicyData: PrivacyData = {
  pageTitle: "Privacy Policy",
  heading: "Privacy Policy",
  effectiveDate: "Effective Date: May 1, 2026",
  sections: [
    {
      title: "1. Purpose of Using Personal Information",
      content: "On this site, users may be asked to register personal information such as their name and email address when making inquiries or sending comments.<br>The acquired personal information will be used solely to respond to inquiries and to send necessary information via email, and will not be used for any other purposes."
    },
    {
      title: "2. Provision of Personal Information to Third Parties",
      content: "Personal information entrusted to us will be managed appropriately and will not be disclosed to third parties without the user's consent, except when disclosure is permitted under the Personal Information Protection Act or other laws."
    },
    {
      title: "3. Access Analytics Tools",
      content: "This site uses Google Analytics, an access analysis tool provided by Google. Google Analytics uses cookies to collect traffic data. This traffic data is collected anonymously and does not personally identify individuals."
    },
    {
      title: "4. Disclaimer",
      content: "We assume no responsibility for the information, services, etc., provided on sites moved to from this site via links or banners.<br>While we strive to provide as accurate information as possible regarding the content and information on this site, we do not guarantee its accuracy or safety. Please note that we accept no responsibility for any damages caused by the content posted on this site."
    },
    {
      title: "5. Changes to the Privacy Policy",
      content: "This site will appropriately review and strive to improve the contents of this policy in accordance with the enactment and amendment of Japanese laws and other norms. The revised latest privacy policy will always be disclosed on this page."
    }
  ]
};