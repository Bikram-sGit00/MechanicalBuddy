import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({

    fallbackLng: "en",

    interpolation: {

      escapeValue: false,

    },

    resources: {

      en: {

        translation: {

          heroTitle1:
            "Modern Roadside",

          heroTitle2:
            "Assistance Platform",

          heroDescription:
            "Connect with nearby mechanics instantly, track live assistance, and get back on the road with confidence.",

          findCustomers:
            "Find Customers",

          goOffline:
            "Go Offline",

          findMechanic:
            "Find Mechanic",

          emergencySOS:
            "Emergency SOS",

        },

      },

      hi: {

        translation: {

          heroTitle1:
            "आधुनिक रोडसाइड",

          heroTitle2:
            "सहायता प्लेटफॉर्म",

          heroDescription:
            "पास के मैकेनिक से तुरंत जुड़ें, लाइव सहायता ट्रैक करें और आत्मविश्वास के साथ सड़क पर वापस आएं।",

          findCustomers:
            "ग्राहक खोजें",

          goOffline:
            "ऑफलाइन जाएं",

          findMechanic:
            "मैकेनिक खोजें",

          emergencySOS:
            "आपातकालीन सहायता",

        },

      },

      bn: {

        translation: {

          heroTitle1:
            "আধুনিক রোডসাইড",

          heroTitle2:
            "সহায়তা প্ল্যাটফর্ম",

          heroDescription:
            "কাছাকাছি মেকানিকের সাথে দ্রুত যোগাযোগ করুন, লাইভ সহায়তা ট্র্যাক করুন এবং আত্মবিশ্বাসের সাথে রাস্তায় ফিরুন।",

          findCustomers:
            "কাস্টমার খুঁজুন",

          goOffline:
            "অফলাইনে যান",

          findMechanic:
            "মেকানিক খুঁজুন",

          emergencySOS:
            "জরুরি সহায়তা",

        },

      },

    },

  });

export default i18n;