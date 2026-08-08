// src/data/en/townCategoryInfo.ts

export interface SubCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface TownCategory {
  id: string;
  name: string;
  TranslationOfWelcome: string;
  linkName: string;
  icon: string;
  categoriesRead: string;
  description: string;
  detailDescription: string;
  subCategories: SubCategory[];
}

export interface TownCategoryInfoData {
  title: string;
  subTitle: string;
  categories: TownCategory[];
}

const A_ID = "fortune";
const B_ID = "healing";
const C_ID = "shop";
const D_ID = "counseling";
const E_ID = "meditation";

export const townCategoryInfo: TownCategoryInfoData = {
  "title": "Town Information Center (Spiritual & Healing Category List)",
  "subTitle": "Find genres and shops that match your purpose, such as fortune-telling, healing, shops, counseling, and meditation.",
  "categories": [
    {
      "id": A_ID,
      "name": A_ID.charAt(0).toUpperCase() + A_ID.slice(1) + " District",
      "TranslationOfWelcome": `Welcome the ${A_ID.charAt(0).toUpperCase() + A_ID.slice(1)} District`,	  
      "linkName": `Explore the ${A_ID.charAt(0).toUpperCase() + A_ID.slice(1)} District`,
      "icon": "🔮",
      "categoriesRead": "Recommended Online Fortune-Telling & Free Fortune-Telling Sites",
      "description": "An area featuring places that unravel the threads of fate and gently illuminate your future through love readings, tarot, and divination.",
      "detailDescription": "We deliver messages for your present self through various divination methods such as stars and cards. An area where halls gather to gently read your future and destiny through tarot, astrology, and palmistry.",
      "subCategories": [
        {
          "title": "Meijutsu (Divination by Birth Date, etc.)",
          "icon": "⭐",
          "items": ["Western Astrology", "Four Pillars of Destiny", "Nine Star Ki", "Numerology", "Animal Astrology", "Zi Wei Dou Shu", "Indian Astrology", "Mayan Calendar Astrology", "Sanmeigaku", "Sukuyou Astrology"]
        },
        {
          "title": "Sojutsu (Divination by Appearance, Shape, & Layout)",
          "icon": "🏡",
          "items": ["Palmistry", "Feng Shui", "Name Analysis", "Physiognomy (Face Reading)", "House Feng Shui", "Mole Divination", "Dream Interpretation"]
        },
        {
          "title": "Bokujutsu (Divination by Random Results)",
          "icon": "🎲",
          "items": ["Tarot Cards", "Omikuji (Fortune Slips)", "Oracle Cards", "I Ching (Book of Changes)", "Runes", "Dice Divination", "Pendulum (Dowsing)", "Geomancy"]
        },
        {
          "title": "Spiritual & Others",
          "icon": "✨",
          "items": ["Psychic / Clairvoyance", "Aura Reading", "Channelling"]
        }
      ]
    },
    {
      "id": B_ID,
      "name": B_ID.charAt(0).toUpperCase() + B_ID.slice(1) + " District",
      "TranslationOfWelcome": `Welcome the ${B_ID.charAt(0).toUpperCase() + B_ID.slice(1)} District`,	  
      "linkName": `Explore the ${B_ID.charAt(0).toUpperCase() + B_ID.slice(1)} District`,
      "icon": "🌿",
      "categoriesRead": "Healing Salons, Relaxation, and More",
      "description": "Filled with therapies to ease daily fatigue and soothe your mind, including BTS (Body Trunk Switch), healing salons, aura readings, and mind-body harmony.",
      "detailDescription": "A spot to gently heal your mind and body while balancing your energy. Healing salons, aura readings, and soothing therapies are gathered here to melt away daily fatigue.",
      "subCategories": [
        {
          "title": "Healing List",
          "icon": "🍃",
          "items": ["Reiki Healer / Reiki Master", "Access Bars Practitioner", "Crystal Healer", "Sound Therapist / Sound Healer / Crystal Bowl Player", "Spiritual Aroma Therapist", "Body Lightworker / Body Healer", "Ayurvedic Therapist", "Thai Traditional Massage Therapist", "Qigong Master / Qi Seitai Therapist", "Meridian Energy Therapist", "Chakra Therapist / Chakra Healer", "Theta Healing Practitioner", "Hands of Light Healer", "Lomi Lomi Therapist", "Spiritual Body Counselor", "Energy Seitai Therapist"]
        }
      ]
    },
    {
      "id": C_ID,
      "name": C_ID.charAt(0).toUpperCase() + C_ID.slice(1) + " District",
      "TranslationOfWelcome": `Welcome the ${C_ID.charAt(0).toUpperCase() + C_ID.slice(1)} District`,	  
      "linkName": `Explore the ${C_ID.charAt(0).toUpperCase() + C_ID.slice(1)} District`,
      "icon": "🛍️",
      "categoriesRead": "Natural Stone Mail-Order, Oracle Card Retailers, Spiritual Goods, etc.",
      "description": "A collection of special spiritual goods and online shops to color your everyday life, including power stones, oracle cards, and aromatic items.",
      "detailDescription": "A shopping area where you can find lucky items and favorite amulets to brighten your daily life, such as power stones, oracle cards, and scented goods.",
      "subCategories": [
        {
          "title": "Shop List",
          "icon": "💎",
          "items": ["Power Stone / Natural Stone Shop", "Spiritual Goods & Occult Shop", "Tarot & Oracle Card Specialty Store", "Aroma & Healing Herb Shop", "Medical Herb / Remedy Shop (Bach Flower Remedies, etc.)", "Incense & Sage Specialty Store", "Crystal Bowl / Singing Bowl Specialty Store", "Magical Tools / Witchcraft Goods Store (Wicca & Magical Shop)", "Healing Music / Sound Tool Specialty Store", "Aura-Soma & Color Therapy Goods Store", "Good Luck & Feng Shui Goods Store", "Spiritual Jewelry / Energy Accessory Shop"]
        }
      ]
    },
    {
      "id": D_ID,
      "name": D_ID.charAt(0).toUpperCase() + D_ID.slice(1) + " District",
      "TranslationOfWelcome": `Welcome the ${D_ID.charAt(0).toUpperCase() + D_ID.slice(1)} District`,	  
      "linkName": `Explore the ${D_ID.charAt(0).toUpperCase() + D_ID.slice(1)} District`,
      "icon": "☕",
      "categoriesRead": "Counseling, Emotional Worries & Consultations, Spiritual Counselors, etc.",
      "description": "Experts who stand close to worries you cannot carry alone and carefully listen to the voice of your heart are waiting for you.",
      "detailDescription": "A place to gently accept and organize worries you cannot share with anyone else. Experts are waiting here to softly embrace your anxieties and inner voice and guide you with care.",
      "subCategories": [
        {
          "title": "Counseling List",
          "icon": "💬",
          "items": ["Hypnotherapist", "Past Life Therapist", "Inner Child Therapist", "Channeler / Channeling Counselor", "Spiritual Counselor", "Soul Navigator", "Akashic Records Reader", "Angel Therapist", "Past Life Reading Therapist", "Subconscious Rewiring Therapist", "Aura Counselor / Color Therapist", "Energy Counselor"]
        }
      ]
    },
    {
      "id": E_ID,
      "name": E_ID.charAt(0).toUpperCase() + E_ID.slice(1) + " District",
      "TranslationOfWelcome": `Welcome the ${E_ID.charAt(0).toUpperCase() + E_ID.slice(1)} District`,	  
      "linkName": `Explore the ${E_ID.charAt(0).toUpperCase() + E_ID.slice(1)} District`,
      "icon": "🧘",
      "categoriesRead": "Mindfulness, Meditation Workshops, Meditation Methods, etc.",
      "description": "A place gathering hints to connect with inner stillness through mindfulness and meditation workshops.",
      "detailDescription": "A space to look inward amidst silence and regain your true self. Hints to connect with inner stillness, such as mindfulness and meditation classes and sessions, are gathered here.",
      "subCategories": [
        {
          "title": "Meditation List",
          "icon": "🌙",
          "items": ["Yoga Instructor (Hatha Yoga, Kundalini Yoga, etc.)", "Meditation Guide / Meditation Coach", "Mindfulness Instructor", "Breathwork Trainer / Breathwork Guide", "Dance Therapist", "Voice Healer / Voice Work Instructor", "Tai Chi & Qigong Instructor", "Kido Instructor", "Spiritual Walking Guide", "Soul Dance Instructor"]
        }
      ]
    }
  ]
};