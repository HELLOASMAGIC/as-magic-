/* =========================
   SEO — BRAND + PRODUCT SCHEMA
========================= */

function setMetaDescription(description) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description);
    }
  }
  
  function updateSEOSchema(product = null) {
    const existing = document.getElementById("seoSchema");
  
    if (existing) {
      existing.remove();
    }
  
    const schema = product
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": product.image,
          "category": product.category,
          "brand": {
            "@type": "Brand",
            "name": CONFIG.brand.name
          },
          "url": `https://asmagic.in/#product/${product.id}`,
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": Math.min(
              ...product.packs.map(pack => Number(pack.sellingPrice))
            ),
            "highPrice": Math.max(
              ...product.packs.map(pack => Number(pack.sellingPrice))
            ),
            "offerCount": product.packs.length
          }
        }
      : {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": CONFIG.brand.name,
          "url": "https://asmagic.in/",
          "logo": CONFIG.brand.logo,
          "sameAs": [
            CONFIG.brand.instagram
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": CONFIG.brand.phone,
            "email": CONFIG.brand.email,
            "contactType": "customer service"
          }
        };
  
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "seoSchema";
    script.textContent = JSON.stringify(schema);
  
    document.head.appendChild(script);
  }
  
  
  /* =========================
     DYNAMIC SEO
  ========================= */
  
  function updateProductSEO(product) {
    document.title = `${product.name} — Premium Room Fragrance | AS MAGIC`;
  
    setMetaDescription(
      `${product.name} by AS MAGIC — premium room fragrance with elegant, long-lasting fragrance. Explore available packs and prices.`
    );
  
    updateSEOSchema(product);
  }
  
  function updateHomeSEO() {
    document.title = "AS MAGIC — Premium Room Fragrance";
  
    setMetaDescription(
      "AS MAGIC offers premium room fragrances designed to bring long-lasting, elegant fragrance to your home. Explore our premium room fragrance collection and available packs."
    );
  
    updateSEOSchema();
  }

/* =====================================================
   GLOBAL HELPERS
===================================================== */


const $ = selector =>
    document.querySelector(selector);
  
  
  const $$ = selector =>
    document.querySelectorAll(selector);
  
  
  function money(value) {
  
    return (
      "₹" +
      Number(value)
        .toLocaleString("en-IN")
    );
  
  }
  
  
  function whatsappURL(message) {
  
    const number =
      String(
        CONFIG.brand.whatsapp
      )
        .replace(/\D/g, "");
  
  
    return (
      "https://wa.me/" +
      number +
      "?text=" +
      encodeURIComponent(message)
    );
  
  }
  
  
  /* =====================================================
     AUTOMATIC DISCOUNT
  ===================================================== */
  
  
  function calculateDiscount(
    mrp,
    sellingPrice
  ) {
  
    if (
      !mrp ||
      !sellingPrice ||
      sellingPrice >= mrp
    ) {
  
      return 0;
  
    }
  
  
    return Math.round(
      (
        (mrp - sellingPrice) /
        mrp
      ) * 100
    );
  
  }
  
  
  function calculateSaving(
    mrp,
    sellingPrice
  ) {
  
    if (
      !mrp ||
      !sellingPrice ||
      sellingPrice >= mrp
    ) {
  
      return 0;
  
    }
  
  
    return (
      Number(mrp) -
      Number(sellingPrice)
    );
  
  }
  
  
  /* =====================================================
     BRAND
  ===================================================== */
  
  
  function renderBrand() {
  
    const logo =
      $("#brandLogo");
  
  
    if (
      CONFIG.brand.logo &&
      !CONFIG.brand.logo.startsWith("YOUR_")
    ) {
  
      logo.src =
        CONFIG.brand.logo;
  
      logo.style.display =
        "block";
  
    } else {
  
      logo.style.display =
        "none";
  
    }
  
  
    $("#brandName").textContent =
      CONFIG.brand.name;
  
  
    $("#brandTagline").textContent =
      CONFIG.brand.tagline;
  
  }
  
  
  /* =====================================================
     HERO
  ===================================================== */
  
  
  function renderHero() {
  
    const hero =
      CONFIG.hero;
  
  
    if (!hero.enabled) {
  
      $("#hero").style.display =
        "none";
  
      return;
  
    }
  
  
    $("#heroImage").src =
      hero.desktopImage;
  
  
    $("#heroMobile").srcset =
      hero.mobileImage;
  
  
    $("#heroEyebrow").textContent =
      hero.eyebrow;
  
  
    $("#heroTitle").textContent =
      hero.title;
  
  
    $("#heroDescription").textContent =
      hero.description;
  
  
    $("#heroButton").textContent =
      hero.buttonText;
  
  }
  
  
  /* =====================================================
     HOME PRODUCT CARDS
  ===================================================== */
  
  
  function renderProducts() {
  
    const grid =
      $("#productGrid");
  
  
    grid.innerHTML = "";
  
  
    const products =
      CONFIG.products.filter(
        product =>
          product.enabled
      );
  
  
    products.forEach(product => {
  
      const card =
        document.createElement(
          "article"
        );
  
  
      card.className =
        "product-card";
  
  
      card.innerHTML = `
  
        <div class="product-card-image">
  
          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >
  
        </div>
  
  
        <div class="product-card-content">
  
          <div class="product-category">
            ${product.category}
          </div>
  
  
          <h3>
            ${product.name}
          </h3>
  
  
          <p>
            ${product.description}
          </p>
  
  
          <div class="product-size">
            ${product.size}
          </div>
  
  
          <button
            class="view-more"
            data-product="${product.id}"
          >
            VIEW MORE
          </button>
  
        </div>
  
      `;
  
  
      grid.appendChild(card);
  
    });
  
  
    $$(".view-more")
      .forEach(button => {
  
        button.addEventListener(
          "click",
          () => {
  
            openProduct(
              button.dataset.product
            );
  
          }
        );
  
      });
  
  }
  
  
  /* =====================================================
     PRODUCT DETAIL
  ===================================================== */
  
  
  function openProduct(
    productId,
    updateHash = true
  ) {
  
    const product =
      CONFIG.products.find(
        item =>
          item.id === productId
      );
  
  
    if (!product) return;
  
  
    $("#homeView").hidden =
      true;
  
  
    $("#productView").hidden =
      false;
  
  
      renderProductDetail(
        product
      );
      
      updateProductSEO(product);
      
      if (updateHash) {
  
      history.pushState(
        {
          product:
            productId
        },
        "",
        "#product/" +
        productId
      );
  
    }
  
  
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  
  }
  
  
  function renderProductDetail(
    product
  ) {
  
    const details =
      product.details || [];
  
  
    $("#productIntro").innerHTML = `
  
      <div class="product-detail-image">
  
        <img
          src="${product.image}"
          alt="${product.name}"
        >
  
      </div>
  
  
      <div class="product-detail-info">
  
        <div class="detail-category">
          ${product.category}
        </div>
  
  
        <h1>
          ${product.name}
        </h1>
  
  
        <div class="detail-subtitle">
          ${product.subtitle}
        </div>
  
  
        <p class="detail-description">
          ${product.description}
        </p>
  
  
        ${
          details.length
            ? `
              <ul class="detail-list">
  
                ${details.map(
                  item =>
                    `<li>${item}</li>`
                ).join("")}
  
              </ul>
            `
            : ""
        }
  
      </div>
  
    `;
  
  
    renderPacks(
      product
    );
  
  
    renderFAQ(
      product.faq || [],
      "#productFAQ"
    );
  
  }
  
  
  function renderPacks(
    product
  ) {
  
    const grid =
      $("#packGrid");
  
  
    grid.innerHTML = "";
  
  
    product.packs.forEach(
      pack => {
  
  
        const discount =
          calculateDiscount(
            pack.mrp,
            pack.sellingPrice
          );
  
  
        const saving =
          calculateSaving(
            pack.mrp,
            pack.sellingPrice
          );
  
  
        const card =
          document.createElement(
            "article"
          );
  
  
        card.className =
          "pack-card";
  
  
        card.innerHTML = `
  
          ${
            discount > 0
              ? `
                <div class="discount-badge">
  
                  ${discount}%
  
                  <small>
                    OFF
                  </small>
  
                </div>
              `
              : ""
          }
  
  
          <h3>
            ${pack.name}
          </h3>
  
  
          <div class="pack-quantity">
            ${pack.quantity}
          </div>
  
  
          <img
            class="pack-image"
            src="${pack.image}"
            alt="${product.name} ${pack.name}"
            loading="lazy"
          >
  
  
          <div class="pack-price-row">
  
            <span class="pack-selling-price">
              ${money(pack.sellingPrice)}
            </span>
  
            <span class="pack-mrp">
              ${money(pack.mrp)}
            </span>
  
          </div>
  
  
          ${
            saving > 0
              ? `
                <div class="pack-saving">
                  Save ${money(saving)} on this
                </div>
              `
              : ""
          }
  
  
          <button
            class="pack-buy"
            data-message="${encodeURIComponent(
              pack.whatsappMessage
            )}"
          >
            BUY
          </button>
  
        `;
  
  
        grid.appendChild(card);
  
      }
    );
  
  
    $$(".pack-buy")
      .forEach(button => {
  
        button.addEventListener(
          "click",
          () => {
  
            const message =
              decodeURIComponent(
                button.dataset.message
              );
  
  
            window.open(
              whatsappURL(message),
              "_blank"
            );
  
          }
        );
  
      });
  
  }
  
  
  /* =====================================================
     FAQ
  ===================================================== */
  
  
  function renderFAQ(
    faq,
    selector
  ) {
  
    const container =
      $(selector);
  
  
    container.innerHTML = "";
  
  
    faq.forEach(
      (item, index) => {
  
  
        const faqItem =
          document.createElement(
            "div"
          );
  
  
        faqItem.className =
          "faq-item";
  
  
        /*
          First FAQ stays open automatically.
        */
  
        if (index === 0) {
  
          faqItem.classList.add(
            "open"
          );
  
        }
  
  
        faqItem.innerHTML = `
  
          <button
            class="faq-question"
            type="button"
          >
  
            <span>
              ${item.question}
            </span>
  
            <span class="faq-plus">
              +
            </span>
  
          </button>
  
  
          <div class="faq-answer">
            ${item.answer}
          </div>
  
        `;
  
  
        container.appendChild(
          faqItem
        );
  
      }
    );
  
  
    container
      .querySelectorAll(
        ".faq-question"
      )
      .forEach(button => {
  
        button.addEventListener(
          "click",
          () => {
  
            const item =
              button.parentElement;
  
  
            item.classList.toggle(
              "open"
            );
  
          }
        );
  
      });
  
  }
  
  
  /* =====================================================
     HOME FAQ
  ===================================================== */
  
  
  function renderHomeFAQ() {
  
    renderFAQ(
      CONFIG.homeFAQ,
      "#homeFAQ"
    );
  
  }
  
  
  /* =====================================================
     CONTACT
  ===================================================== */
  
  
  function renderContact() {
  
    $("#contactHeading")
      .textContent =
      CONFIG.contact.heading;
  
  
    $("#contactDescription")
      .textContent =
      CONFIG.contact.description;
  
  
    const actions =
      $("#contactActions");
  
  
      actions.innerHTML = `

      <!-- WHATSAPP -->
    
      <a
        class="contact-action"
        href="${whatsappURL(
          "Hi AS MAGIC, I would like to know more about your products."
        )}"
        target="_blank"
        rel="noopener"
      >
    
                <span class="contact-icon">

          <!-- WHATSAPP -->
          <svg
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path
    d="M12 2.2a9.8 9.8 0 0 0-8.48 14.7L2.2 21.8l5.05-1.32A9.8 9.8 0 1 0 12 2.2Z"
    fill="none"
  />

  <path
    d="M8.35 7.55c.18-.38.38-.39.7-.4h.52c.18 0 .39.07.5.38l.73 1.78c.1.25.07.45-.08.65l-.57.74c-.14.17-.2.31-.08.54.25.48.66 1.16 1.3 1.78.64.63 1.32 1.05 1.81 1.3.23.12.37.07.54-.08l.75-.57c.19-.15.4-.18.65-.08l1.77.73c.31.12.38.32.38.5v.52c0 .32-.02.52-.4.7-.37.18-1.16.48-1.72.4-.56-.08-1.97-.58-3.4-1.88-1.2-1.1-2.02-2.43-2.37-3.02-.35-.59-.77-1.59-.77-2.4 0-.81.4-1.52.74-1.84Z"
    fill="currentColor"
    stroke="none"
  />
</svg>

        </span>

        ${CONFIG.contact.whatsappText}

      </a>


      <!-- CALL -->

      <a
        class="contact-action"
        href="tel:${CONFIG.brand.phone.replace(/\s/g, "")}"
      >

        <span class="contact-icon">

          <!-- PHONE -->
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2
              19.79 19.79 0 0 1-8.63-3.07
              19.5 19.5 0 0 1-6-6
              A19.79 19.79 0 0 1 2.12 4.18
              2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
              12.84 12.84 0 0 0 .7 2.81
              2 2 0 0 1-.45 2.11L8.09 9.91
              a16 16 0 0 0 6 6l1.27-1.27
              a2 2 0 0 1 2.11-.45
              12.84 12.84 0 0 0 2.81.7
              A2 2 0 0 1 22 16.92Z"
            />
          </svg>

        </span>

        ${CONFIG.contact.callText}

      </a>


      <!-- EMAIL -->

      <a
        class="contact-action"
        href="mailto:${CONFIG.brand.email}"
      >

        <span class="contact-icon">

          <!-- EMAIL -->
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
            />

            <path
              d="m3 7 9 6 9-6"
            />
          </svg>

        </span>

        ${CONFIG.contact.emailText}

      </a>


      <!-- INSTAGRAM -->

      <a
        class="contact-action"
        href="${CONFIG.brand.instagram}"
        target="_blank"
        rel="noopener"
      >

        <span class="contact-icon">

          <!-- INSTAGRAM -->
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
            />

            <circle
              cx="12"
              cy="12"
              r="4"
            />

            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>

        </span>

        ${CONFIG.contact.instagramText}

      </a>

    `;
  
  }
  
  
  /* =====================================================
     FOOTER
  ===================================================== */
  
  
  function renderFooter() {
  
    $("#footerTagline")
      .textContent =
      CONFIG.footer.tagline;
  
  
    $("#footerDescription")
      .textContent =
      CONFIG.footer.description;
  
  
    $("#footerWhatsApp").href =
      whatsappURL(
        "Hi AS MAGIC, I would like to know more about your products."
      );
  
  
    $("#footerPhone").href =
      "tel:" +
      CONFIG.brand.phone
        .replace(/\s/g, "");
  
  
    $("#footerPhone").textContent =
      CONFIG.brand.phone;
  
  
    $("#footerEmail").href =
      "mailto:" +
      CONFIG.brand.email;
  
  
    $("#footerEmail").textContent =
      CONFIG.brand.email;
  
  
    $("#footerInstagram").href =
      CONFIG.brand.instagram;
  
  
  
    $("#copyright").textContent =
      CONFIG.footer.copyright;
  
  }
  
  
  /* =====================================================
   POLICY MODAL
===================================================== */

function setupPolicies() {

    const modal = $("#policyModal");
  
    $$(".footer-policy").forEach(button => {
  
      button.addEventListener("click", () => {
  
        const key = button.dataset.policy;
        const policy = CONFIG.policies[key];
  
        if (!policy) return;
  
        /* -----------------------------------------
           POLICY TITLE
        ----------------------------------------- */
  
        $("#policyTitle").textContent = policy.title;
  
  
        /* -----------------------------------------
           POLICY CONTENT
        ----------------------------------------- */
  
        const content = $("#policyContent");
  
        content.innerHTML = `
  
          ${
            policy.subtitle
              ? `
                <div class="policy-subtitle">
                  ${policy.subtitle}
                </div>
              `
              : ""
          }
  
  
          <div class="policy-sections">
  
            ${(policy.sections || []).map(section => `
  
              <section class="policy-section">
  
                ${
                  section.number
                    ? `
                      <div class="policy-number">
                        ${section.number}
                      </div>
                    `
                    : ""
                }
  
                <h3>
                  ${section.heading}
                </h3>
  
                <div class="policy-text">
  
                  ${section.text
                    .trim()
                    .split("\n\n")
                    .map(paragraph => `
                      <p>${paragraph.trim()}</p>
                    `)
                    .join("")
                  }
  
                </div>
  
              </section>
  
            `).join("")}
  
          </div>
  
  
          ${
            policy.closing
              ? `
                <div class="policy-closing">
                  ${policy.closing
                    .split("\n")
                    .map(line => `<div>${line}</div>`)
                    .join("")
                  }
                </div>
              `
              : ""
          }
  
        `;
  
  
        /* -----------------------------------------
           OPEN MODAL
        ----------------------------------------- */
  
        modal.classList.add("open");
  
        document.body.classList.add("no-scroll");
  
      });
  
    });
  
  
    /* -----------------------------------------
       CLOSE POLICY
    ----------------------------------------- */
  
    function closePolicy() {
  
      modal.classList.remove("open");
  
      document.body.classList.remove("no-scroll");
  
    }
  
  
    /* -----------------------------------------
       CLOSE BUTTON
    ----------------------------------------- */
  
    $("#policyClose").addEventListener(
      "click",
      closePolicy
    );
  
  
    /* -----------------------------------------
       CLICK BACKDROP TO CLOSE
    ----------------------------------------- */
  
    $("#policyBackdrop").addEventListener(
      "click",
      closePolicy
    );
  
  
    /* -----------------------------------------
       ESC KEY TO CLOSE
    ----------------------------------------- */
  
    document.addEventListener(
      "keydown",
      event => {
  
        if (event.key === "Escape") {
  
          closePolicy();
  
        }
  
      }
    );
  
  }
  
  /* =====================================================
     BACK BUTTON
  ===================================================== */
  
  
  function goHome() {
  
    $("#productView").hidden =
      true;
  
  
    $("#homeView").hidden =
      false;
  
  
      history.pushState(
        {},
        "",
        "#home"
      );
      
      updateHomeSEO();
      
      window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  
  }
  
  
  function setupBackButton() {
  
    $("#backButton")
      .addEventListener(
        "click",
        goHome
      );
  
  }
  
  
  /* =====================================================
   HASH ROUTING
===================================================== */

function loadFromHash() {

    const hash =
      location.hash;
  
    if (
      hash.startsWith(
        "#product/"
      )
    ) {
  
      const id =
        hash.replace(
          "#product/",
          ""
        );
  
      openProduct(
        id,
        false
      );
  
      return;
  
    }
  
    $("#productView").hidden =
  true;

    $("#homeView").hidden =
  false;

    updateHomeSEO();

    if (
      hash === "#products" ||
      hash === "#faq" ||
      hash === "#contact"
    ) {
  
      setTimeout(() => {
  
        const target =
          document.querySelector(
            hash
          );
  
        if (target) {
  
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
  
        }
  
      }, 0);
  
      return;
  
    }
  
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  
  }
  
  
  window.addEventListener(
    "popstate",
    loadFromHash
  );
  
  
  window.addEventListener(
    "hashchange",
    loadFromHash
  );
  
  
  /* =====================================================
     MOBILE MENU
  ===================================================== */
  
  
  function setupMobileMenu() {
  
    const button =
      $("#mobileMenu");
  
  
    const nav =
      $("#mobileNav");
  
  
    button.addEventListener(
      "click",
      () => {
  
        nav.classList.toggle(
          "open"
        );
  
      }
    );
  
  
    nav
      .querySelectorAll("a")
      .forEach(link => {
  
        link.addEventListener(
          "click",
          () => {
  
            nav.classList.remove(
              "open"
            );
  
          }
        );
  
      });
  
  }
  
  
  /* =====================================================
     INIT
  ===================================================== */
  
  
  document.addEventListener(
    "DOMContentLoaded",
    () => {
  
      renderBrand();
  
      renderHero();
  
      renderProducts();
  
      renderHomeFAQ();
  
      renderContact();
  
      renderFooter();
  
      setupPolicies();
  
      setupBackButton();
  
      setupMobileMenu();
  
      loadFromHash();
  
    }
  );