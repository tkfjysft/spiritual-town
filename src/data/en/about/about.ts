// src/data/about/about.ts

export interface AboutFeature {
  title: string;
  description: string;
  icon?: string;
  url?: string;
  qr?: string;
}

export interface AboutSection {
  id: string;
  title: string;
  content?: string;
  subTitle?: string;
  list?: { text: string }[];
  content2?: string;
  content3?: string;
  features?: AboutFeature[];
}

export interface AboutData {
  pageTitle: string;
  hero: {
    title: string;
    description: string;
  };
  sections: AboutSection[];
  image: string;
}

export const aboutData: AboutData = {
  "pageTitle": "About Spiritual Town",
  "hero": {
    "title": "Spiritual Town: A Place to Light a Lamp in Your Heart",
    "description": "At life's crossroads, or when you want to pause and reflect on yourself. We were born as a 'map' to help you find trusted places that resonate with your inner voice. May your small journey of exploration from here become an important guide for living a life true to yourself."
  },
  "sections": [
    {
      "id": "concept",
      "title": "Why a 'Town'?",
      "content": "We believe that spirituality is not something extraordinary, but rather an extension of daily life—'aligning oneself.' Just like enjoying a warm drink at a small shop found during a stroll, we wanted this portal to be a place where you can encounter comforting healing effortlessly and naturally. With this vision, we shaped this website into a 'Town'."
    },
    {
      "id": "features",
      "title": "What You Can Do on This Site",
      "features": [
        { "title": "Intuitive Exploration", "description": "By clicking on the 'districts' on the map, you can discover places that deliver the messages you need right now." },
        { "title": "Curated Spaces", "description": "We feature only trusted sites specializing in healing and guidance." },
        { "title": "Daily Inspiration", "description": "Receive positive hints for your daily life through fortune-telling, meditation, and more." }
      ]
    },
    {
      "id": "sns",
      "title": "Spiritual Town's Social Media",
      "features": [
        { "title": "Introduction on Instagram", "icon": "fa-brands fa-instagram", "url": "https://www.instagram.com/spi_town?utm_source=qr", "qr": "qr_insta.avif", "description": "Once you register your site on Spiritual Town, we will introduce it in a post on the official Spiritual Town Instagram." },
        { "title": "Updates via LINE", "icon": "fa-brands fa-line", "url": "https://lin.ee/wsdI1Xn", "qr": "qr_line.avif", "description": "We regularly send out updates, useful information, and more." }
      ]
    },
    {
      "id": "freeReason",
      "title": "Why Listing is Free",
      "content": "We currently offer our basic services completely free of charge, and they will remain free to use forever.",
      "subTitle": "Spiritual Town is evolving more and more!",
      "list": [
        {"text": "New services"},
        {"text": "Services more helpful for customer attraction"},
        {"text": "Services leading to increased website traffic"}
      ],
      "content2": " will be added in the future.",
      "content3": "These newly added services are planned to be paid. Of course, you can continue to use Spiritual Town on the free plan just as before."
    }
  ],
  "image": "/town.avif"
}