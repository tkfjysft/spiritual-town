export interface ApplicationButton {
  text: string;
  link: string;
}

export interface ApplicationData {
  badge: {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  };
  heading: string;
  subHeading: string;
  benefits: string[];
  freeReasonLinkText: string;
  title: string;
  description: string;
  text: string;
  steps: string[];
  button: ApplicationButton;
}

export const applicationData: ApplicationData = {
   badge: {
    line1: "Attention",
    line2: "Lightworkers!",
    line3: "Register your",
    line4: "site",
    line5: "today!"
  },
  heading: "For Fortune & Healing Promotion!<br>Listing & Registration<br class=\"block sm:hidden\">100% Free",
  subHeading: "Benefits of listing on<br class=\"block sm:hidden\">Spiritual Town",
  benefits: [
    "Promote your activities and site for free!",
    "Backlink effects boost your website's SEO ranking!",
    "Connect with fellow lightworkers and grow your network!"
  ],
  freeReasonLinkText: "Why is listing free?",
  button: {
    text: "Apply Now",
    link: "https://forms.gle/1Q5Mq1qipnwdaUas6"
  },
  "title": "List Your Site",
  "description": "We are looking for lightworkers to join us.",
  "text": "Listing & Registration 100% Free",
  "steps": [
    "Check details",
    "Apply via form",
    "Publication"
  ],
  "button": {
    "text": "Apply Now",
    "link": "https://forms.gle/1Q5Mq1qipnwdaUas6"
  }
}