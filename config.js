const CONFIG = {

    /* =====================================================
       BRAND
    ===================================================== */
  
    brand: {
      name: "AS MAGIC",
      tagline: "PREMIUM ROOM FRAGRANCE",
  
      logo:
        "https://res.cloudinary.com/osa3o3eb/image/upload/v1790319003/IMG_1005_dqvj5y.png",
  
      whatsapp:
        "916263728428",
  
      phone:
        "+91 6263728428",
  
      email:
        "hello.asmagic@gmail.com",
  
      instagram:
        "https://instagram.com/asmagic.in",
  
    
    },
  
  
    /* =====================================================
       HERO
    ===================================================== */
  
    hero: {
  
      enabled: true,
  
      desktopImage:
        "https://res.cloudinary.com/osa3o3eb/image/upload/v1790239823/85cca7a5-01b2-4c82-980f-3b5057e4999e_tceucx.png",
  
      mobileImage:
        "https://res.cloudinary.com/osa3o3eb/image/upload/v1790240090/ab37df88-08d1-48bb-9e6e-3d8ce81f123f_dszoyy.png",
  
      eyebrow:
        "PREMIUM HOME FRAGRANCE",
  
      title:
        "Refresh Your Space",
  
      description:
        "Premium room fragrances created to make everyday spaces feel fresh, pleasant and inviting.",
  
      buttonText:
        "EXPLORE PRODUCTS"
  
    },
  
  
    /* =====================================================
       HOME PAGE
       
       Add/remove products here.
       
       Current 3 products.
       Desktop automatically handles 5 per row
       if you add 5 products.
    ===================================================== */
  
    products: [
  
      {
        id: "london-love",
  
        enabled: true,
  
        name:
          "London Love",
  
        shortName:
          "LONDON LOVE",
  
        category:
          "ROOM FRESHENER",
  
        subtitle:
          "Elegant Floral Fragrance",
  
        description:
          "A soft and elegant floral fragrance created for everyday spaces. Bring a beautiful and welcoming aroma to your home, bedroom or office.",
  
        image:
          "https://res.cloudinary.com/osa3o3eb/image/upload/v1790236793/243a9573-30cd-4f75-81c1-e45d85800276_mqfdzq.png",
  
        size:
          "100 ML",
  
        details: [
  
          "Elegant floral fragrance",
          "Easy spray format",
          "Suitable for everyday spaces",
          "Ideal for home and office"
        ],
  
  
        /* =========================
           PACKS
        ========================= */
  
        packs: [
  
          {
            name:
              "Pack of 1",
  
            quantity:
              "1 Bottle",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790186521/londonlove1_tbnrzq.jpg",
  
            mrp:
              199,
  
            sellingPrice:
              99,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy London Love Pack of 1 (1 bottle) for ₹99."
          },
  
  
          {
            name:
              "Pack of 2",
  
            quantity:
              "2 Bottles",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790186522/londonlove2_o1lyxx.jpg",
  
            mrp:
              398,
  
            sellingPrice:
              179,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy London Love Pack of 2 (2 bottles) for ₹179."
          },
  
  
          {
            name:
              "Pack of 3",
  
            quantity:
              "3 Bottles",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790186523/londonlove3_pbdkwd.jpg",
  
            mrp:
              597,
  
            sellingPrice:
              249,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy London Love Pack of 3 (3 bottles) for ₹249."
          },
  
  
          {
            name:
              "Pack of 4",
  
            quantity:
              "4 Bottles",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790186527/londonlove4_vaswwc.jpg",
  
            mrp:
              796,
  
            sellingPrice:
              319,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy London Love Pack of 4 (4 bottles) for ₹319."
          },
  
  
          {
            name:
              "Pack of 5",
  
            quantity:
              "5 Bottles",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790186526/londonlove5_lxrzvl.jpg",
  
            mrp:
              995,
  
            sellingPrice:
              369,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy London Love Pack of 5 (5 bottles) for ₹369."
          }
  
        ],
  
  
        /* =========================
           FAQ
           
           Unlimited questions
           can be added.
        ========================= */
  
        faq: [
  
          {
            question:
              "What does London Love smell like?",
  
            answer:
              "London Love is a refined floral fragrance created to give your room an elegant, soft and pleasant floral atmosphere."
          },
  
          {
            question:
              "Where can I use London Love?",
  
            answer:
              "London Love is designed for indoor living spaces such as bedrooms, living rooms, personal spaces, offices and other areas where you want to create a pleasant floral atmosphere."
          },
  
          {
            question:
              "How many sprays should I use?",
  
            answer:
              "Start with 3–5 sprays in your room and adjust according to the room size and the fragrance intensity you prefer."
          },
  
          {
            question:
              "Can I order London Love in bulk?",
  
            answer:
              "Yes. Wholesale and bulk orders for London Love are available subject to quantity and availability. Contact AS MAGIC on WhatsApp for bulk pricing and details."
          }
        ]
  
      },
  
  
      /* =====================================================
         LEMON
      ===================================================== */
  
      {
        id: "lemon",
  
        enabled: true,
  
        name:
          "Lemon",
  
        shortName:
          "LEMON",
  
        category:
          "ROOM FRESHENER",
  
        subtitle:
          "Fresh Citrus Fragrance",
  
        description:
          "A fresh and refreshing citrus fragrance created for everyday spaces. Bring a clean and uplifting aroma to your home, bedroom or office.",
  
        image:
          "https://res.cloudinary.com/osa3o3eb/image/upload/v1790236790/13c98712-ab5d-470a-ba39-8cc06b67dac7_jvmga3.png",
  
        size:
          "100 ML",
  
        details: [
  
          "Fresh citrus fragrance",
          "Easy spray format",
          "Suitable for everyday spaces",
          "Ideal for home and office"
        ],
  
  
        packs: [
  
          {
            name:
              "Pack of 1",
  
            quantity:
              "1 Bottle",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790186512/lemon1_i84wse.jpg",
  
            mrp:
              199,
  
            sellingPrice:
              99,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy Lemon Pack of 1 (1 bottle) for ₹99."
          },
  
  
          {
            name:
              "Pack of 2",
  
            quantity:
              "2 Bottles",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790186513/lemon2_mtqoiw.jpg",
  
            mrp:
              398,
  
            sellingPrice:
              179,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy Lemon Pack of 2 (2 bottles) for ₹179."
          },
  
  
          {
            name:
              "Pack of 3",
  
            quantity:
              "3 Bottles",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790186515/lemon3_hdlrux.jpg",
  
            mrp:
              597,
  
            sellingPrice:
              249,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy Lemon Pack of 3 (3 bottles) for ₹249."
          },
  
  
          {
            name:
              "Pack of 4",
  
            quantity:
              "4 Bottles",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790186516/lemon4_jvhkqn.jpg",
  
            mrp:
              796,
  
            sellingPrice:
              319,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy Lemon Pack of 4 (4 bottles) for ₹319."
          },
  
  
          {
            name:
              "Pack of 5",
  
            quantity:
              "5 Bottles",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790186518/lemon5_kyckfe.jpg",
  
            mrp:
              995,
  
            sellingPrice:
              369,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy Lemon Pack of 5 (5 bottles) for ₹369."
          }
  
        ],
  
  
        faq: [
  
            {
                question:
                  "What does Lemon smell like?",
              
                answer:
                  "Lemon is a fresh and refreshing citrus fragrance created to give your space a bright, clean and pleasant atmosphere."
              },
              
              {
                question:
                  "Where can I use Lemon?",
              
                answer:
                  "Lemon is designed for indoor spaces such as bedrooms, living rooms, bathrooms, kitchens, personal spaces, offices and other areas where you want a fresh and refreshing atmosphere."
              },
              
              {
                question:
                  "How many sprays should I use?",
              
                answer:
                  "Start with 3–5 sprays in your room and adjust according to the room size and the fragrance intensity you prefer."
              },
              
              {
                question:
                  "Can I order Lemon in bulk?",
              
                answer:
                  "Yes. Wholesale and bulk orders for Lemon are available subject to quantity and availability. Contact AS MAGIC on WhatsApp for bulk pricing and details."
              }
  
        ]
  
      },
  
  
      /* =====================================================
         COMBO
      ===================================================== */
  
      {
        id: "combo",
  
        enabled: true,
  
        name:
          "London Love + Lemon",
  
        shortName:
          "LONDON LOVE + LEMON",
  
        category:
          "COMBO PACK",
  
        subtitle:
          "Floral + Citrus",
  
        description:
          "Two fragrances, two moods. Enjoy an elegant floral aroma and a fresh citrus scent to make every space feel more pleasant.",
  
        image:
          "https://res.cloudinary.com/osa3o3eb/image/upload/v1790236798/2a922678-a6b0-43e1-9ebc-04f63eaf2755_qqlfkj.png",
  
        size:
          "COMBO",
  
  
        details: [
  
          "London Love + Lemon",
          "Two fragrance profiles",
          "Perfect for everyday spaces",
          "Great option for gifting"
        ],
  
  
        packs: [
  
          {
            name:
              "Pack of 2",
  
            quantity:
              "1 London Love + 1 Lemon",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790236773/WhatsApp_Image_2026-09-24_at_1.06.44_PM_c8gzqy.jpg",
  
            mrp:
              398,
  
            sellingPrice:
              199,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy London Love + Lemon Combo Pack of 2 for ₹199."
          },
  
  
          {
            name:
              "Pack of 4",
  
            quantity:
              "2 London Love + 2 Lemon",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790236775/WhatsApp_Image_2026-09-24_at_1.06.4_PM_mrrwow.jpg",
  
            mrp:
              796,
  
            sellingPrice:
              329,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy London Love + Lemon Combo Pack of 4 for ₹329."
          },
  
  
          {
            name:
              "Pack of 6",
  
            quantity:
              "3 London Love + 3 Lemon",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790236777/WhatsApp_Image_2026-09-24_at_1.045_PM_uvospa.jpg",
  
            mrp:
              1194,
  
            sellingPrice:
              469,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy London Love + Lemon Combo Pack of 6 for ₹469."
          },
  
  
          {
            name:
              "Pack of 8",
  
            quantity:
              "4 London Love + 4 Lemon",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790236778/WhatsApp_Image_2026-09-24_at6.45_PM_j5gviw.jpg",
  
            mrp:
              1592,
  
            sellingPrice:
              599,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy London Love + Lemon Combo Pack of 8 for ₹599."
          },
  
  
          {
            name:
              "Pack of 10",
  
            quantity:
              "5 London Love + 5 Lemon",
  
            image:
              "https://res.cloudinary.com/osa3o3eb/image/upload/v1790236783/WhatsApp_Image_2026-09-24_at_16_PM_wipluu.jpg",
  
            mrp:
              1990,
  
            sellingPrice:
              699,
  
            whatsappMessage:
              "Hi AS MAGIC, I want to buy London Love + Lemon Combo Pack of 10 for ₹699."
          }
  
        ],
  
  
        faq: [
  
            {
                question:
                  "What is included in the Combo?",
              
                answer:
                  "The AS MAGIC Combo includes London Love and Lemon room sprays, giving you two different fragrance experiences in one pack."
              },
              
              {
                question:
                  "What kind of fragrances are included in the Combo?",
              
                answer:
                  "The Combo includes London Love, a refined floral fragrance, and Lemon, a fresh and refreshing citrus fragrance."
              },
              
              {
                question:
                  "Where can I use the Combo fragrances?",
              
                answer:
                  "The Combo fragrances can be used in indoor spaces such as bedrooms, living rooms, bathrooms, kitchens, personal spaces, offices and other areas where you want a pleasant fragrance."
              },
              
              {
                question:
                  "How many sprays should I use?",
              
                answer:
                  "Start with 3–5 sprays in your room and adjust according to the room size and the fragrance intensity you prefer."
              },
              
              {
                question:
                  "Can I order the Combo in bulk?",
              
                answer:
                  "Yes. Wholesale and bulk orders for the Combo are available subject to quantity and availability. Contact AS MAGIC on WhatsApp for bulk pricing and details."
              }
  
        ]
  
      }
  
    ],
  
  
    /* =====================================================
       FAQ
       
       Home-level FAQ.
       Unlimited questions.
    ===================================================== */
  
    homeFAQ: [
  
      {
        question:
          "What is AS MAGIC?",
  
        answer:
          "AS MAGIC is a premium home-care brand focused on creating thoughtfully designed products that make everyday spaces cleaner, fresher and more enjoyable."
      },
  
      {
        question:
          "How can I place an order?",
  
        answer:
          "Simply select the product and pack you want and click BUY. You will be redirected to WhatsApp with your selected product details, where our team will confirm your order and applicable delivery charges."
      },
  
      {
        question:
          "What are the delivery charges?",
  
        answer:
          "Delivery charges are additional and may vary depending on your location and order. The applicable delivery charge will be confirmed when your order is placed."
      },
  
      {
        question:
          "Is Cash on Delivery available?",
  
        answer:
          "Yes, Cash on Delivery (COD) is available for eligible orders and locations. COD orders include an additional ₹50 charge compared to prepaid orders. The applicable charges will be confirmed at the time of order."
      },

      {
        question:
          "Do you offer wholesale or bulk orders?",
  
        answer:
          "Yes. AS MAGIC accepts wholesale, reseller, retail and bulk enquiries. Bulk pricing may differ from website pricing depending on quantity and requirements. Contact us on WhatsApp for a quotation."
      },
    ],
  
  
    /* =====================================================
       CONTACT
    ===================================================== */
  
    contact: {
  
      heading:
        "GET IN TOUCH",
  
      description:
        "For orders, wholesale enquiries, product information or business requirements, contact AS MAGIC directly.",
  
      whatsappText:
        "Chat on WhatsApp",
  
      callText:
        "Call Us",
  
      emailText:
        "Email Us",
  
      instagramText:
        "Instagram",
  
  
    },
  
  
    /// =====================================
// ABOUT + POLICIES
// =====================================

policies: {

    // =====================================
    // ABOUT AS MAGIC
    // =====================================
  
    about: {
      title: "About AS MAGIC",
      subtitle: "The story behind the brand",
  
      sections: [
  
        {
          heading: "OUR STORY",
          text: `
  AS MAGIC is a premium home fragrance brand created to make everyday spaces feel more refined, welcoming and memorable.
  
  We believe fragrance is more than just a pleasant smell. It can change the atmosphere of a room, create a sense of comfort, and become part of the memories associated with a space.
  
  AS MAGIC began with a simple idea — premium fragrance should feel luxurious without becoming unnecessarily complicated or inaccessible.
  `
        },
  
        {
          heading: "WHAT WE CREATE",
          text: `
  AS MAGIC currently focuses on premium home fragrance products designed for everyday spaces.
  
  Our fragrances and products are developed with an emphasis on pleasant fragrance profiles, everyday usability, thoughtful presentation and a consistent premium experience.
  
  As AS MAGIC grows, our product range is planned to expand into other fragrance and lifestyle categories such as car fragrances, reed diffusers, scented candles, fabric fragrances and other home-care fragrance products.
  `
        },
  
        {
          heading: "OUR APPROACH",
          text: `
  We believe luxury does not always have to mean complicated.
  
  For us, luxury is in the details — the fragrance you notice when you enter a room, the bottle sitting beautifully on a table, the feeling of opening a thoughtfully presented product, and the experience of using something made with care.
  
  That is why we follow a minimal, modern and premium approach across our products and brand.
  `
        },
  
        {
          heading: "OUR VISION",
          text: `
  Our vision is to build AS MAGIC into a recognized Indian premium fragrance and lifestyle brand.
  
  We want to create products that people can confidently bring into their homes and everyday lives while building a brand associated with quality, design, fragrance and a premium everyday experience.
  `
        },
  
        {
          heading: "OUR PROMISE",
          text: `
  At AS MAGIC, we aim to continuously improve our products, packaging and customer experience.
  
  Every product we offer is intended to reflect our commitment to:
  
  Quality.
  Simplicity.
  Fragrance.
  Experience.
  `
        }
  
      ],
  
      closing: "Welcome to AS MAGIC.\nMake every space memorable."
    },
  
  
    // =====================================
    // TERMS & CONDITIONS
    // =====================================
  
    terms: {
      title: "Terms & Conditions",
      subtitle: "Please read these terms before placing an order.",
  
      sections: [
  
        {
          number: "01",
          heading: "ORDERS",
          text: `
  Orders are placed through the ordering methods provided on the AS MAGIC website, including WhatsApp-based ordering where applicable.
  
  When you click the BUY button, you may be redirected to WhatsApp with the selected product or pack details.
  
  An order is considered confirmed only after AS MAGIC confirms the order and applicable details with the customer.
  
  AS MAGIC reserves the right to refuse or cancel an order in circumstances including product unavailability, incorrect customer information, pricing or listing errors, suspected fraudulent activity, delivery limitations or other circumstances that prevent us from fulfilling the order.
  `
        },
  
        {
          number: "02",
          heading: "PRODUCTS & INFORMATION",
          text: `
  We make reasonable efforts to ensure that product descriptions, images, fragrance information, sizes and prices displayed on our website are accurate.
  
  Actual product colours may vary slightly depending on your device display.
  
  Fragrance perception may differ from person to person.
  
  Product images are for representation and may have minor visual differences from the physical product.
  
  Product availability may change without prior notice.
  `
        },
  
        {
          number: "03",
          heading: "PRICING",
          text: `
  All product prices displayed on the website are in Indian Rupees (₹), unless otherwise stated.
  
  Prices may be changed at any time without prior notice.
  
  Any applicable taxes, delivery charges, COD charges or other charges will be communicated before order confirmation where applicable.
  
  Discounts and promotional offers may be subject to specific conditions and availability.
  `
        },
  
        {
          number: "04",
          heading: "DELIVERY",
          text: `
  Delivery timelines may vary depending on the customer's location, courier availability, weather, public holidays and other circumstances beyond our control.
  
  Delivery charges may apply depending on the order and delivery location.
  
  The applicable delivery charge will be communicated or confirmed at the time of order.
  
  AS MAGIC is not responsible for delays caused by courier partners, incorrect addresses, unreachable recipients or circumstances outside our reasonable control.
  `
        },
  
        {
          number: "05",
          heading: "CASH ON DELIVERY",
          text: `
  Cash on Delivery (COD) may be available for eligible orders and locations.
  
  A ₹50 COD handling charge may apply where COD is selected.
  
  COD availability may depend on location, order value and courier service availability.
  `
        },
  
        {
          number: "06",
          heading: "WHOLESALE & BULK ORDERS",
          text: `
  AS MAGIC accepts wholesale, reseller, retail and bulk enquiries subject to availability.
  
  Bulk pricing may differ from website pricing depending on quantity, product, packaging requirements, custom requirements, delivery location and order specifications.
  
  Customers interested in bulk or wholesale orders should contact AS MAGIC directly for a quotation.
  `
        },
  
        {
          number: "07",
          heading: "FRAGRANCE LIQUID BULK ORDERS",
          text: `
  Bulk fragrance liquid requirements may be considered separately depending on product, quantity, availability and requirements.
  
  Interested customers may contact AS MAGIC for further information and quotation.
  `
        },
  
        {
          number: "08",
          heading: "PRODUCT USAGE",
          text: `
  Customers should use AS MAGIC products according to the instructions provided with the product.
  
  Keep products away from children unless specifically intended for their use.
  
  Avoid direct contact with eyes, ingestion or inappropriate use.
  
  Customers should review the product label and safety instructions before use.
  `
        },
  
        {
          number: "09",
          heading: "INTELLECTUAL PROPERTY",
          text: `
  All content available on the AS MAGIC website, including the brand name, logo, product images, product descriptions, graphics, designs, text, website layout and marketing materials, is owned by or licensed to AS MAGIC unless otherwise stated.
  
  No content may be copied, reproduced, modified, distributed or commercially used without prior written permission.
  `
        },
  
        {
          number: "10",
          heading: "WEBSITE AVAILABILITY",
          text: `
  We aim to keep the website available and functional, but we do not guarantee uninterrupted access.
  
  The website may occasionally be unavailable due to maintenance, technical issues, hosting problems or other circumstances.
  `
        },
  
        {
          number: "11",
          heading: "CHANGES TO THESE TERMS",
          text: `
  AS MAGIC may update these Terms & Conditions from time to time.
  
  Any updated version will be published on this page with a revised Last Updated date.
  `
        }
  
      ],
  
      closing: "For questions regarding these Terms & Conditions, please contact AS MAGIC."
    },
  
  
    // =====================================
    // PRIVACY POLICY
    // =====================================
  
    privacy: {
      title: "Privacy Policy",
      subtitle: "How AS MAGIC handles your information.",
  
      sections: [
  
        {
          number: "01",
          heading: "INFORMATION WE COLLECT",
          text: `
  Depending on how you interact with AS MAGIC, we may collect information such as your name, mobile number, WhatsApp number, email address, delivery address, billing information, order details, product preferences and communication history related to your order.
  `
        },
  
        {
          number: "02",
          heading: "HOW WE USE YOUR INFORMATION",
          text: `
  We may use your information to process and confirm orders, communicate with you regarding your order, arrange product delivery, respond to customer enquiries, provide customer support, handle returns or refunds, improve our products and services, prevent fraudulent activity and maintain business records.
  `
        },
  
        {
          number: "03",
          heading: "WHATSAPP COMMUNICATION",
          text: `
  AS MAGIC may use WhatsApp to communicate with customers regarding product enquiries and orders.
  
  When you choose to contact us through WhatsApp, your communication is also subject to WhatsApp's own privacy practices and terms.
  `
        },
  
        {
          number: "04",
          heading: "PAYMENT INFORMATION",
          text: `
  Where online payments are processed through a third-party payment provider, AS MAGIC may not directly store your complete card, UPI or banking credentials.
  
  Payment information may be processed by the relevant payment service provider according to its own privacy policy and security practices.
  `
        },
  
        {
          number: "05",
          heading: "SHARING OF INFORMATION",
          text: `
  We do not sell your personal information.
  
  We may share necessary information with trusted service providers where required to provide our services, including courier and logistics partners, payment service providers, technology or hosting providers, customer support providers and professional service providers where necessary.
  `
        },
  
        {
          number: "06",
          heading: "COOKIES & WEBSITE DATA",
          text: `
  Our website may use cookies or similar technologies to improve website functionality, understand website usage and improve the user experience.
  
  You may be able to control cookies through your browser settings.
  `
        },
  
        {
          number: "07",
          heading: "DATA SECURITY",
          text: `
  We take reasonable measures to protect the personal information we handle from unauthorized access, misuse, alteration or disclosure.
  
  However, no method of electronic transmission or storage can be guaranteed to be completely secure.
  `
        },
  
        {
          number: "08",
          heading: "DATA RETENTION",
          text: `
  We may retain information for as long as reasonably necessary to complete transactions, provide customer support, maintain business records, meet applicable legal requirements and resolve disputes.
  `
        },
  
        {
          number: "09",
          heading: "YOUR RIGHTS",
          text: `
  Subject to applicable law, you may contact us to request information about the personal data we hold about you or to request correction of inaccurate information.
  
  You may also contact us regarding privacy-related concerns.
  `
        },
  
        {
          number: "10",
          heading: "THIRD-PARTY LINKS",
          text: `
  Our website may contain links to third-party platforms such as WhatsApp, Instagram, payment services or delivery services.
  
  AS MAGIC is not responsible for the privacy practices of third-party websites or platforms.
  `
        },
  
        {
          number: "11",
          heading: "CHANGES TO THIS PRIVACY POLICY",
          text: `
  We may update this Privacy Policy from time to time.
  
  Any changes will be published on this page with an updated Last Updated date.
  `
        }
  
      ],
  
      closing: "For privacy-related questions, please contact AS MAGIC."
    },
  
  
    // =====================================
    // RETURN & REFUND POLICY
    // =====================================
  
    returns: {
      title: "Return & Refund Policy",
      subtitle: "Our guidelines for returns, replacements and refunds.",
  
      sections: [
  
        {
          number: "01",
          heading: "RETURN ELIGIBILITY",
          text: `
  Due to the nature of fragrance and home-care products, returns may be limited to cases where the wrong product was delivered, the product arrived damaged, the product was defective or the product is missing from the order.
  
  Requests must be reported within 48 hours of delivery.
  `
        },
  
        {
          number: "02",
          heading: "DAMAGED PRODUCT",
          text: `
  If your package arrives damaged, please contact AS MAGIC as soon as possible.
  
  For damaged or incorrect orders, we may ask you to provide order details, photos of the outer package, photos or videos of the product and photos of the shipping label.
  `
        },
  
        {
          number: "03",
          heading: "WRONG PRODUCT",
          text: `
  If you receive a product or pack different from what you ordered, please contact us within 48 hours of delivery.
  
  After verification, AS MAGIC may arrange a replacement or refund depending on product availability and the circumstances of the case.
  `
        },
  
        {
          number: "04",
          heading: "DEFECTIVE PRODUCT",
          text: `
  If a product appears to have a manufacturing or functional defect, contact us with details and supporting photos or videos.
  
  After verification, AS MAGIC may offer a replacement or refund as applicable.
  `
        },
  
        {
          number: "05",
          heading: "CHANGE OF MIND",
          text: `
  Returns or refunds may not be accepted simply because a customer does not like the fragrance or has changed their mind after receiving the product.
  
  Fragrance preference is subjective, and we recommend reviewing the fragrance description before placing an order.
  `
        },
  
        {
          number: "06",
          heading: "USED PRODUCTS",
          text: `
  Products that have been substantially used, opened, altered or damaged after delivery may not be eligible for return or replacement unless the issue is determined to be a manufacturing defect.
  `
        },
  
        {
          number: "07",
          heading: "REFUNDS",
          text: `
  If a refund is approved, the refund amount and method will depend on the circumstances of the order and the payment method used.
  
  Refund processing time may vary depending on the payment provider or banking institution.
  `
        },
  
        {
          number: "08",
          heading: "DELIVERY CHARGES",
          text: `
  Original delivery charges may not be refundable unless the return or refund is due to an error attributable to AS MAGIC or another circumstance where a refund of such charges is applicable.
  `
        },
  
        {
          number: "09",
          heading: "ORDER CANCELLATION",
          text: `
  Order cancellation may be possible only before the order has been processed or dispatched.
  
  Once an order has been dispatched, cancellation may not be possible.
  
  Customers should contact AS MAGIC as soon as possible if they wish to request cancellation.
  `
        },
  
        {
          number: "10",
          heading: "NON-RETURNABLE SITUATIONS",
          text: `
  A return or replacement may not be accepted where the customer entered an incorrect delivery address, refuses delivery without a valid reason, damages the product through misuse, reports the issue after the applicable reporting period, modifies or tampers with the product, or the request is solely based on personal fragrance preference.
  `
        },
  
        {
          number: "11",
          heading: "HOW TO REQUEST A RETURN",
          text: `
  To report an issue, contact AS MAGIC through WhatsApp or email with your order number, customer name, details of the issue and supporting photos or videos.
  
  Our team will review the request and communicate the next steps.
  `
        }
  
      ],
  
      closing: "For return, replacement or refund enquiries, please contact AS MAGIC."
    }
  
  },
  
  
    /* =====================================================
       FOOTER
    ===================================================== */
  
    footer: {
  
      tagline:
        "Small Scents, Big Happiness",
  
      description:
        "Premium room fragrance for everyday spaces.",
  
      copyright:
        "© 2026 AS MAGIC. All rights reserved."
  
    }
  
  };