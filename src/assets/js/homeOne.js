/**
 * ======================================
 * 01. Home One Menu
 * ======================================
 */

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav.desktop-navbar-container");
  const navbarInner = navbar && navbar.querySelector(".navbar-inner");
  const navbarScrollContainer = navbar && navbar.querySelector(".scroll-container");

  // Scrolling behavior
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar && navbar.classList.remove("xl:-mb-10", "container");
      navbarScrollContainer && navbarScrollContainer.classList.add("fixed", "top-0", "z-20", "w-full", "bg-[#3C22C5]");
      navbarInner && navbarInner.classList.add("container", "rounded-none");
    } else {
      navbar && navbar.classList.add("xl:-mb-10", "container");
      navbarInner && navbarInner.classList.remove("container", "rounded-none");
      navbarScrollContainer && navbarScrollContainer.classList.remove("fixed", "top-0", "z-20", "w-full", "bg-[#3C25C5]");
    }
  });

  // Dropdown functionality
  const dropdownTriggers = document.querySelectorAll(".group");
  dropdownTriggers.forEach((trigger) => {
    const submenu = trigger.querySelector("ul");
    if (submenu) {
      trigger.addEventListener("mouseenter", () => {
        submenu.classList.remove("invisible", "opacity-0", "pointer-events-none");
        submenu.classList.add("visible", "opacity-100");
      });
      trigger.addEventListener("mouseleave", () => {
        submenu.classList.add("invisible", "opacity-0", "pointer-events-none");
        submenu.classList.remove("visible", "opacity-100");
      });
    }
  });

  

  /**
   * ======================================
   * 02. Swiper Js Sliders
   * ======================================
   */
  const customerSwiper = document.querySelector(".customer-swiper");
  if (customerSwiper) {
    var swiper = new Swiper(customerSwiper, {
      slidesPerView: "auto",
      loop: true,
      autoplay: true,
      spaceBetween: 8,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
      },
    });
  }

  /**
   * ======================================
   * 03. Lightbox
   * ======================================
   */
  if (document.querySelector(".glightbox-banner-video")) {
    var lightboxVideo = GLightbox({
      selector: ".glightbox-banner-video",
    });
  }

  if (document.querySelector(".glightbox-service-video")) {
    var lightboxServiceVideo = GLightbox({
      selector: ".glightbox-service-video",
    });
  }



  /**
   * ======================================
   * 04. Pricing Tabs
   * ======================================
   */
  const pricingToggle = document.getElementById("pricing-toggle");
  const pricingAmounts = document.querySelectorAll(".pricing-amount");

  if (pricingToggle && pricingAmounts.length > 0) {
    pricingToggle.addEventListener("change", function () {
      pricingAmounts.forEach((element) => {
        const monthlyPrice = "$30";
        const yearlyPrice = "$300";
        element.textContent = this.checked ? yearlyPrice : monthlyPrice;
      });
    });
  }
});
