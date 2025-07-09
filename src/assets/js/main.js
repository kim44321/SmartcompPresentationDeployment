/*  ========= js documentation ==============

 * theme name: Itsolutio
 * version: 1.0
 * description: Itsolutio - IT Solutions and Services HTML Template
 * author: Pixelaxis
 * author-url: https://themeforest.net/user/pixelaxis
   
    -------------------------------------------------
     01. Scroll top
     -------------------------------------------------
     02. Menu
     -------------------------------------------------
     03. Odometer
     -------------------------------------------------
     04. Progress Bar
     -------------------------------------------------
     05. Select Dropdown
     -------------------------------------------------
     06. Tabs System
     -------------------------------------------------
     07. Navbar Search 
     -------------------------------------------------
     08. Swiper Sliders
     -------------------------------------------------
     09. FAQ accordion
     -------------------------------------------------
     10. Lightbox
     -------------------------------------------------
     11. About us
     -------------------------------------------------
     12. About us Two Leadership
     -------------------------------------------------
     13. ScrollSpy 
     -------------------------------------------------
     14. Radial Chart 
     -------------------------------------------------
     15. Toggle Order Details 
     -------------------------------------------------
     16. Profile Page 
     -------------------------------------------------
    ================================================== */

"use strict";
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1500,
  });

  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
  });

  /**
   * ======================================
   * 01. scroll top
   * ======================================
   */

  let scrollHeight;
  const scrollTopButton = document.querySelector(".scroll-top");

  const handleProgressClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    scrollHeight = window.scrollY;
    if (scrollHeight > 100) {
      scrollTopButton?.classList.add("translate-y-0");
      scrollTopButton?.classList.add("opacity-100");
      scrollTopButton?.classList.remove("translate-y-20");
      scrollTopButton?.classList.remove("opacity-0");
    } else {
      scrollTopButton?.classList.remove("opacity-100");
      scrollTopButton?.classList.remove("translate-y-0");
      scrollTopButton?.classList.add("translate-y-20");
      scrollTopButton?.classList.add("opacity-0");
    }
  });

  scrollTopButton && scrollTopButton.addEventListener("click", handleProgressClick);

  /**
   * ======================================
   * 02. Desktop Menu
   * ======================================
   */

  window.addEventListener("scroll", function () {
    scrollHeight = window.scrollY;
    const desktopNav = document.querySelector(".desktop-nav-container");
    const desktopNavFive = document.querySelector(".desktop-nav-5-container");

    if (scrollHeight > 100) {
      desktopNav?.classList.add("fixed", "left-0", "top-0", "w-full", "bg-n8", "duration-300");
      desktopNav?.querySelector(".desktop-nav-inner")?.classList.add("bg-opacity-100", "shadow-lg");
      // Home five
      desktopNavFive?.classList.add("fixed", "left-0", "top-0", "w-full", "bg-primary", "duration-300");
      desktopNavFive?.querySelector(".desktop-nav-inner")?.classList.add("bg-opacity-100", "shadow-lg");
      desktopNavFive?.querySelector(".desktop-nav-inner")?.classList.remove("bg-opacity-10", "bg-n8");
    } else {
      desktopNav?.classList.remove("fixed", "left-0", "top-0", "w-full", "bg-n8", "duration-300");
      desktopNav?.querySelector(".desktop-nav-inner")?.classList.remove("bg-opacity-50", "shadow-lg");
      desktopNav?.querySelector(".desktop-nav-inner")?.classList.add("bg-opacity-50");
      // Home five
      desktopNavFive?.classList.remove("fixed", "left-0", "top-0", "w-full", "bg-primary", "duration-300");
      desktopNavFive?.querySelector(".desktop-nav-inner")?.classList.remove("bg-opacity-100", "shadow-lg");
      desktopNavFive?.querySelector(".desktop-nav-inner")?.classList.add("bg-opacity-10", "bg-n8");
    }
  });

  // home 4
  window.addEventListener("scroll", function () {
    scrollHeight = window.scrollY;
    const desktopNav = document.querySelector(".desktop-nav-4-container");

    if (scrollHeight > 100) {
      desktopNav?.classList.add("xl:!bg-[#2B1E7A]");
    } else {
      desktopNav?.classList.add("xl:bg-transparent");
      desktopNav?.classList.remove("xl:!bg-[#2B1E7A]");
    }
  });

  // home 6
  window.addEventListener("scroll", function () {
    scrollHeight = window.scrollY;
    const desktopNav = document.querySelector(".home-6-nav");

    if (scrollHeight > 100) {
      desktopNav?.classList.remove("bg-opacity-0");
      desktopNav?.classList.add("shadow-sm");
      desktopNav?.classList.add("bg-opacity-100");
    } else {
      desktopNav?.classList.add("bg-opacity-0");
      desktopNav?.classList.remove("shadow-sm");
      desktopNav?.classList.remove("bg-opacity-100");
    }
  });
  // home 15
  window.addEventListener("scroll", function () {
    scrollHeight = window.scrollY;
    const desktopNav = document.querySelector(".desktop-nav-15-container");

    if (scrollHeight > 100) {
      desktopNav?.classList.add("xl:!bg-[#fff]");
    } else {
      desktopNav?.classList.add("xl:bg-transparent");
      desktopNav?.classList.remove("xl:!bg-[#fff]");
    }
  });

  // home 18
  window.addEventListener("scroll", function () {
    scrollHeight = window.scrollY;
    const desktopNav = document.querySelector(".desktop-nav-18-container");

    if (scrollHeight > 100) {
      desktopNav?.classList.add("xl:!bg-[#fff]");
    } else {
      desktopNav?.classList.add("xl:bg-transparent");
      desktopNav?.classList.remove("xl:!bg-[#fff]");
    }
  });

  // Mobile menu functionality
  const menuToggle = document.getElementById("menuToggle");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  function toggleMenu() {
    mobileMenu.classList.toggle("-translate-x-[120%]");
    overlay.classList.toggle("invisible");
    overlay.classList.toggle("w-0");
    overlay.classList.toggle("w-full");
  }

  menuToggle?.addEventListener("click", toggleMenu);
  closeMenu?.addEventListener("click", toggleMenu);
  overlay?.addEventListener("click", toggleMenu);

  // Mobile submenu functionality
  const mobileSubmenuButtons = document.querySelectorAll("#mobileMenu .w-full > button");
  mobileSubmenuButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const submenu = this.nextElementSibling;
      const icon = this.querySelector("i");
      submenu.style.display = submenu.style.display === "none" ? "block" : "none";
      icon.classList.toggle("ti-plus");
      icon.classList.toggle("ti-minus");
    });
  });

  /**
   * ======================================
   * 03. Odometer
   * ======================================
   */

  const odometerElements = document.querySelectorAll(".odometer");

  /**
   * Initializes odometer elements when they become visible in the viewport.
   *
   * @param {Array} entries - The array of IntersectionObserver entries.
   * @param {IntersectionObserver} observer - The IntersectionObserver instance.
   */
  function initOdometer(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const odometerElement = entry.target.querySelector(".odometer");
        const elementValue = Number(odometerElement.getAttribute("data-counter-value"));

        const od = new Odometer({
          el: odometerElement,
          value: 0,
          format: "",
          theme: "digital",
        });

        od.update(elementValue);
        observer.unobserve(entry.target);
      }
    });
  }

  // Initialize IntersectionObserver for each odometer element
  odometerElements &&
    odometerElements.forEach((item) => {
      const observer = new IntersectionObserver(initOdometer);
      observer.observe(item.parentElement);
    });

  /**
   * ======================================
   * 04. Progress Bar
   * ======================================
   */

  const progressBars = document.querySelectorAll(".bar > div");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("progress-grow");
      }
    });
  });

  progressBars.forEach((bar) => {
    observer.observe(bar);
  });

  /**
   * ======================================
   * 05. Select Dropdown
   * ======================================
   */
  // Function to handle select dropdowns for multiple elements
  function initializeCustomSelects() {
    const selectContainers = document.querySelectorAll("[data-select]");

    selectContainers.forEach((container) => {
      const selectToggle = container.querySelector(".select-toggle");
      const selectOptions = container.querySelector(".select-options");
      const selectText = container.querySelector(".select-text");
      const optionItems = selectOptions.querySelectorAll("li");

      // Toggle dropdown visibility
      selectToggle.addEventListener("click", () => {
        selectOptions.classList.toggle("hidden");
        // Close other open selects
        selectContainers.forEach((otherContainer) => {
          if (otherContainer !== container) {
            const otherOptions = otherContainer.querySelector(".select-options");
            otherOptions.classList.add("hidden");
          }
        });
      });

      // Select option
      optionItems.forEach((option) => {
        option.addEventListener("click", () => {
          selectText.innerText = option.innerText;
          selectOptions.classList.add("hidden");
        });
      });

      // Close dropdown if clicked outside
      document.addEventListener("click", (e) => {
        if (!container.contains(e.target)) {
          selectOptions.classList.add("hidden");
        }
      });
    });
  }

  initializeCustomSelects();

  /**
   * ======================================
   * 06.  Tabs System
   * ======================================
   */
  function createTabSystem(tabListId, tabContentId, activeClasses = ["bg-primary", "text-n8"], inactiveClasses = ["text-title"]) {
    const tabList = document.getElementById(tabListId);
    const tabContent = document.getElementById(tabContentId);

    if (!tabList || !tabContent) return;

    function setActiveTab(tabId) {
      const buttons = tabList.querySelectorAll("button");
      const tabPanes = tabContent.querySelectorAll(".tab-pane");

      buttons.forEach((button) => {
        if (button.getAttribute("data-tab") == tabId) {
          button.classList.add(...activeClasses);
          button.classList.remove(...inactiveClasses);
        } else {
          button.classList.remove(...activeClasses);
          button.classList.add(...inactiveClasses);
        }
      });

      tabPanes.forEach((pane) => {
        if (pane.getAttribute("data-tab") == tabId) {
          pane.classList.remove("hidden");
          pane.classList.add("block");
        } else {
          pane.classList.add("hidden");
          pane.classList.remove("block");
        }
      });
    }

    function init() {
      tabList.addEventListener("click", (e) => {
        const tabId = e.target.closest("button")?.getAttribute("data-tab");
        if (tabId) {
          setActiveTab(tabId);
        }
      });

      // Initialize with the first tab
      const firstButton = tabList.querySelector(".tab-button-container button");
      if (firstButton) {
        const firstTabId = firstButton.getAttribute("data-tab");
        setActiveTab(firstTabId);
      }
    }

    init();
  }

  createTabSystem("tabList", "tabContent");
  createTabSystem("tabList-home11", "tabContent-home11", ["bg-primary", "text-n8"], ["text-title", "bg-white"]);

  createTabSystem("tabList-case-studies2", "tabContent-case-studies2", ["bg-primary", "text-n8"], ["text-title", "bg-[#EEEBFF]"]);

  createTabSystem("tabList-home12", "tabContent-home12", ["bg-primary"], ["bg-[#122C41]"]);

  createTabSystem("tabList-home17", "tabContent-home17", ["bg-primary", "text-n8"], ["text-title", "bg-white"]);

  createTabSystem("tabList-home24", "tabContent-home24", ["border-primary", "text-primary"], ["text-title", "border-white"]);

  createTabSystem("tabList-blog6", "tabContent-blog6", ["text-primary"], ["text-title", "text-title"]);

  /**
   * ======================================
   * 07. Navbar Search
   * ======================================
   */

  function setShowSearch(show) {
    const searchBar = document.getElementById("searchBar");
    searchBar.style.transform = show ? "translateY(0)" : "translateY(-200%)";
  }

  const navBarSearchBtn = document.querySelectorAll(".nav-bar-search-btn");
  navBarSearchBtn &&
    navBarSearchBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        setShowSearch(true);
      });
    });

  const navBarSearchBtnClose = document.querySelectorAll(".nav-bar-search-btn-close");
  navBarSearchBtnClose &&
    navBarSearchBtnClose.forEach((btn) => {
      btn.addEventListener("click", () => {
        setShowSearch(false);
      });
    });

  /**
   * ======================================
   * 08. Swiper Sliders
   * ======================================
   */

  var swiper = new Swiper(".customer-home2-swiper", {
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
        slidesPerView: 2,
        spaceBetween: 12,
      },
    },
  });

  var swiper = new Swiper(".customer-home13-swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 8,
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
  });

  var swiper = new Swiper(".latest-case-studies-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    speed: 1500,
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
  });

  // Client Logo Slider
  const clientLogoSwiper = new Swiper(".company-slider", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  });

  // Hero Slider
  const heroSwiper = new Swiper(".hero-swiper", {
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hero2pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".latest-case-studies-slider-home11", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    speed: 1500,
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
    },
  });

  var swiper = new Swiper(".latest-case-studies-slider-home15", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    speed: 1500,
    pagination: {
      el: ".swiper-pagination-home15",
      type: "bullets",
      bulletClass: "swiper-custom-bullet",
      bulletActiveClass: "swiper-custom-bullet-active",
      clickable: true,
    },
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
  });

  var swiper = new Swiper(".home-21-use-case-slider", {
    loop: true,
    spaceBetween: 20,
    speed: 1500,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination-home15",
      type: "bullets",
      bulletClass: "swiper-custom-bullet",
      bulletActiveClass: "swiper-custom-bullet-active",
      clickable: true,
    },
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      776: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
    },
  });

  var swiper = new Swiper(".home-6-banner-slider", {
    loop: false,
    slidesPerView: 1,
    slidesToShow: 1,
    spaceBetween: 0,
    // direction: "vertical",
    navigation: {
      nextEl: ".customerSliderNext-banner-6",
      prevEl: ".customerSliderPrev-banner-6",
    },
    autoHeight: true,
    mousewheel: true,
    speed: 1000,
    pagination: {
      clickable: true,
      type: "fraction",
    },
    on: {
      init: function () {
        updatePagination(this);
      },
      slideChange: function () {
        updatePagination(this);
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar-vertical",
      draggable: true,
      dragSize: "auto",
    },
  });

  function updatePagination(swiper) {
    const currentElement = document.querySelector(".test-swiper-pagination-current");
    const currentElementCenter = document.querySelector(".test-swiper-pagination-current-center");
    const totalElement = document.querySelector(".test-swiper-pagination-total");

    if (currentElement) {
      const currentSlide = swiper.realIndex + 1;
      currentElement.textContent = ` ${currentSlide < 10 ? "0" + currentSlide : currentSlide}`;
    }
    if (currentElementCenter) {
      const currentSlide = swiper.realIndex + 1;
      currentElementCenter.textContent = ` ${currentSlide < 10 ? "0" + currentSlide : currentSlide}`;
    }

    if (totalElement) {
      const totalSlides = swiper.slides.length;
      totalElement.textContent = `${totalSlides < 10 ? "0" + totalSlides : totalSlides}`;
    }
  }

  var swiper = new Swiper(".industry-expert-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    speed: 1500,
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
  });

  // case study 04 slider
  var swiper = new Swiper(".case-study-04-slider", {
    loop: true,
    spaceBetween: 20,
    speed: 1500,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination-home15",
      type: "bullets",
      bulletClass: "swiper-custom-bullet",
      bulletActiveClass: "swiper-custom-bullet-active",
      clickable: true,
    },
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
  });

  var swiper = new Swiper(".case-details-07-slider", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 8,
    slidesPerView: 1,

    navigation: {
      nextEl: ".case-details-07-sliderNext1",
      prevEl: ".case-details-07-sliderPrev1",
    },
  });

  var swiper = new Swiper(".service-4-product-design-slider-1", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    speed: 1500,
    navigation: {
      nextEl: ".customerSliderNext1",
      prevEl: ".customerSliderPrev1",
    },
  });

  var swiper = new Swiper(".service-4-product-design-slider-2", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    speed: 1500,
    navigation: {
      nextEl: ".customerSliderNext2",
      prevEl: ".customerSliderPrev2",
    },
  });

  var swiper = new Swiper(".service-4-product-design-slider-3", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    speed: 1500,
    navigation: {
      nextEl: ".customerSliderNext3",
      prevEl: ".customerSliderPrev3",
    },
  });

  var swiper = new Swiper(".customer-home3-swiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 8,
    centeredSlides: true,
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

  var swiper = new Swiper(".customer-home24-swiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 8,
    centeredSlides: true,
    navigation: {
      nextEl: ".home24SuccessSliderNext",
      prevEl: ".home24SuccessSliderPrev",
    },
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

  var swiper = new Swiper(".feature-home26-swiper", {
    spaceBetween: 8,
    navigation: {
      nextEl: ".home26SliderNext",
      prevEl: ".home26SliderPrev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
    },
  });

  var swiper = new Swiper(".home26-brands", {
    slidesPerView: "auto",
    spaceBetween: 24,
  });

  var swiper = new Swiper(".new-arrivals-home26-swiper", {
    spaceBetween: 8,
    navigation: {
      nextEl: ".home26NewArrivalsSliderNext",
      prevEl: ".home26NewArrivalsSliderPrev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
    },
  });

  var swiper = new Swiper(".about-page-gallery", {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 5000,
    centeredSlides: true,
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 1.4, spaceBetween: 20 },
      992: { slidesPerView: 2, spaceBetween: 24 },
      1200: { slidesPerView: 2.5, spaceBetween: 24 },
      1400: { slidesPerView: 3.5, spaceBetween: 24 },
    },
  });

  var swiper = new Swiper(".about-us-two-slider", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 8,
    centeredSlides: true,
    navigation: {
      nextEl: ".aboutUsTwoSliderNext",
      prevEl: ".aboutUsTwoSliderPrev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 3.5,
        spaceBetween: 12,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
      1600: {
        slidesPerView: 5.5,
        spaceBetween: 12,
      },
    },
  });

  var swiper = new Swiper(".about-3-slider", {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 5000,

    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 5 },
      1700: { slidesPerView: 6 },
    },
  });

  var swiper = new Swiper(".case-studies-screenshot", {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 5000,
    centeredSlides: true,
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 16 },
      576: { slidesPerView: 3, spaceBetween: 16 },
      992: { slidesPerView: 4, spaceBetween: 20 },
      1400: { slidesPerView: 5, spaceBetween: 24 },
      1600: { slidesPerView: 6, spaceBetween: 24 },
    },
  });

  var swiper = new Swiper(".case-studies-screenshot2", {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 5000,
    centeredSlides: true,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 16 },
      450: { slidesPerView: 2, spaceBetween: 16 },
      768: { slidesPerView: 3, spaceBetween: 16 },
    },
  });

  var swiper = new Swiper(".case-studies-details-4-chat", {
    slidesPerView: "auto",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
      nextEl: ".caseDetailsSliderNext",
      prevEl: ".caseDetailsSliderPrev",
    },

    speed: 5000,
    centeredSlides: true,
  });

  var swiper = new Swiper(".case-studies-details-6-banner", {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".caseDetails6SliderNext",
      prevEl: ".caseDetails6SliderPrev",
    },
    speed: 2000,
    centeredSlides: true,
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      992: { slidesPerView: 3, spaceBetween: 20 },
    },
  });

  var swiper = new Swiper(".service-details-process-slider", {
    slidesPerView: "auto",
    loop: true,
    speed: 5000,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      576: { slidesPerView: 2, spaceBetween: 10 },
      992: { slidesPerView: 3, spaceBetween: 10 },
      1400: { slidesPerView: 5, spaceBetween: 10 },
      1600: { slidesPerView: 6, spaceBetween: 10 },
    },
  });

  const panoramaSlider = document.querySelector(".panorama-slider");

  panoramaSlider &&
    new Swiper(".panorama-slider .swiper", {
      modules: [EffectPanorama],
      effect: "panorama",
      slidesPerView: 1.5,
      spaceBetween: 1,
      loop: true,
      loopAdditionalSlides: 1,
      centeredSlides: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },
      // panorama effect parameters
      panoramaEffect: {
        depth: 150,
        rotate: 45,
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
          panoramaEffect: {
            rotate: 35,
            depth: 150,
          },
        },
        640: {
          slidesPerView: 3,
          panoramaEffect: {
            rotate: 30,
            depth: 150,
          },
        },
        1024: {
          slidesPerView: 4,
          panoramaEffect: {
            rotate: 30,
            depth: 200,
          },
        },
        1200: {
          slidesPerView: 4,
          panoramaEffect: {
            rotate: 25,
            depth: 250,
          },
        },
      },
    });

  const valueSliderStep = [
    '<span class="inline-flex gap-1 text-primary me-2">01</span> People <span class="value-slider__circle value-slider__circle-1"></span>',
    '<span class="inline-flex gap-1 text-primary me-2">02</span> Growth <span class="value-slider__circle value-slider__circle-2"></span>',
    '<span class="inline-flex gap-1 text-primary me-2">03</span> Responsibility <span class="value-slider__circle value-slider__circle-3"></span>',
    '<span class="inline-flex gap-1 text-primary me-2">04</span> Fullfilment <span class="value-slider__circle value-slider__circle-4"></span>',
    '<span class="inline-flex gap-1 text-primary me-2">05</span> Fair Play <span class="value-slider__circle value-slider__circle-5"></span>',
    '<span class="inline-flex gap-1 text-primary me-2">06</span> Opennes <span class="value-slider__circle value-slider__circle-6"></span>',
  ];

  var swiper = new Swiper(".values-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + valueSliderStep[index] + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function (swiper) {
        updateFraction(this);
      },
      slideChange: function () {
        updateFraction(this);
      },
    },
  });

  function updateFraction(swiper) {
    const valueFraction = document.querySelector(".value-slider__fraction");
    if (valueFraction) {
      valueFraction.innerHTML = `${swiper.realIndex + 1} / ${valueSliderStep.length}`;
    }
  }

  /**
   * ======================================
   * 09. FAQ accordion
   * ======================================
   */
  let accordion = document.querySelectorAll(".faq-accordion");

  accordion.forEach((item, index) => {
    accordion[index].addEventListener("click", function () {
      let faqAnswer = this.nextElementSibling;
      let parent = accordion[index].parentElement;

      // Close all other accordions
      accordion.forEach((otherAccordion, otherIndex) => {
        if (otherIndex !== index) {
          let otherFaqAnswer = otherAccordion.nextElementSibling;
          otherFaqAnswer.style.height = null;
          otherAccordion.classList.remove("text-primary");
          otherAccordion.classList.remove("pb-6");
          otherAccordion.querySelector("i").classList.remove("rotate-90");
          otherAccordion.querySelector("div").classList.remove("border-primary");
          otherAccordion.querySelector("div").classList.add("border-black-4");
        }
      });

      // Toggle open/close for the clicked accordion
      if (faqAnswer.style.height) {
        faqAnswer.style.height = null;
      } else {
        faqAnswer.style.height = faqAnswer.scrollHeight + "px";
      }

      // Toggle classes for the clicked accordion
      accordion[index].querySelector("i").classList.toggle("rotate-90");
    });
  });

  let careerAccordion = document.querySelectorAll(".career-accordion");

  careerAccordion.forEach((item, index) => {
    careerAccordion[index].addEventListener("click", function () {
      let faqAnswer = item.closest(".career-appear-down").querySelector(".accordion-content");
      console.log({ faqAnswer });

      // Close all other careerAccordions
      careerAccordion.forEach((otherAccordion, otherIndex) => {
        if (otherIndex !== index) {
          let otherFaqAnswer = otherAccordion.closest(".career-appear-down").querySelector(".accordion-content");
          otherFaqAnswer.style.height = null;
          otherAccordion.classList.remove("text-primary");
          otherAccordion.classList.remove("pb-6");
          otherAccordion.querySelector(".accordion-icon").classList.remove("rotate-90");
        }
      });

      // Toggle open/close for the clicked accordion
      if (faqAnswer.style.height) {
        faqAnswer.style.height = null;
      } else {
        faqAnswer.style.height = faqAnswer.scrollHeight + "px";
      }

      // Toggle classes for the clicked accordion
      careerAccordion[index].querySelector(".accordion-icon").classList.toggle("rotate-90");
    });
  });

  /**
   * ======================================
   * 10. Lightbox
   * ======================================
   */
  if (document.querySelector(".glightbox-banner-video")) {
    var lightboxVideo = GLightbox({
      selector: ".glightbox-banner-video",
    });
  }

  /**
   * ======================================
   * 11. About us
   * ======================================
   */

  const yearContainer = document.querySelector(".year-container");
  const yearAllCard = document.querySelectorAll(".year-card");

  const toggleActiveState = (el, isActive) => {
    el.classList.toggle("!px-4", isActive);
    el.classList.toggle("xl:max-w-[400px]", isActive);
    el.classList.toggle("xl:grow", isActive);
    el.classList.toggle("xl:bg-primary", isActive);

    el.querySelector(".heading").classList.toggle("h2", isActive);
    el.querySelector(".heading").classList.toggle("xl:text-lg", !isActive);
    el.querySelector(".heading").classList.toggle("xl:font-normal", !isActive);

    el.querySelector("ul").classList.toggle("block", isActive);
    el.querySelector("ul").classList.toggle("xl:hidden", !isActive);

    el.querySelector(".other-content").classList.toggle("flex", isActive);
    el.querySelector(".other-content").classList.toggle("xl:hidden", !isActive);
  };

  yearContainer &&
    yearAllCard.forEach((item) =>
      item.addEventListener("mouseover", () => {
        yearAllCard.forEach((singleItem) => toggleActiveState(singleItem, false));
        toggleActiveState(item, true);
      }),
    );

  /**
   * ======================================
   * 12. About us Two Leadership
   * ======================================
   */
  const allLeadershipCard = document.querySelectorAll(".leader-card");
  const allCardContentArea = document.querySelectorAll(".card-content-area");

  const toggleActiveStateLeadership = (el, isActive) => {
    if (el === null || el === undefined) {
      throw new Error("Element is null or undefined");
    }

    console.log({ el });
    el.classList.toggle("visible", isActive);
    el.classList.toggle("opacity-100", isActive);
    el.classList.toggle("invisible", !isActive);
    el.classList.toggle("opacity-0", !isActive);
  };

  allLeadershipCard &&
    allLeadershipCard.forEach((item) => {
      const plusButton = item.querySelector(".plus-button");
      const cardContentArea = item.querySelector(".card-content-area");
      plusButton.addEventListener("mouseover", () => {
        allCardContentArea.forEach((singleItem) => toggleActiveStateLeadership(singleItem, false));
        toggleActiveStateLeadership(cardContentArea, true);
      });

      const closeButton = item.querySelector(".close-button");
      closeButton.addEventListener("click", () => {
        toggleActiveStateLeadership(cardContentArea, false);
      });

      item.addEventListener("mouseleave", () => {
        toggleActiveStateLeadership(cardContentArea, false);
      });
    });

  /**
   * ======================================
   * 13. ScrollSpy
   * ======================================
   */

  const initScrollSpy = (containerSelector, sectionSelector, activeClass, idPrefix = "scrollspy-") => {
    const container = document.querySelector(containerSelector);
    const links = container?.querySelectorAll("a");
    const sections = document.querySelectorAll(sectionSelector);

    if (!container || sections.length === 0) return;

    sections.forEach((section, index) => {
      if (!section.id) {
        section.id = `${idPrefix}${index}`;
      }
    });

    const totalSections = sections.length;
    const divider = totalSections;

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Calculate threshold dynamically based on total sections
        if (window.scrollY >= sectionTop - sectionHeight / divider) {
          current = section.getAttribute("id");
        }
      });

      links.forEach((link) => {
        link.classList.remove(...activeClass);
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add(...activeClass);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  };

  // Terms and Conditions
  initScrollSpy(".terms-container", ".terms-section", ["bg-secondary2"]);

  // Service 8
  const service8ActiveClass = ["bg-primary", "text-white"];
  initScrollSpy(".service-8__sidebar", ".service-8__content", service8ActiveClass);

  // Profile
  const profileActiveClass = ["!bg-primary", "text-white"];
  initScrollSpy(".profile__sidebar", ".profile__content", profileActiveClass);

  /**
   * ======================================
   * 14. Radial Chart
   * ======================================
   */
  function createRadialChart(containerId, percentage, progressColor, trackColor, centerColor) {
    var options = {
      series: [percentage],
      chart: {
        height: 200,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
            background: centerColor || "#FFD98B",
            margin: 15,
          },
          track: {
            background: trackColor || "#8976FF",
            strokeWidth: "100%",
          },
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              color: "#211F54",
              fontSize: "32px",
              fontWeight: 600,
              show: true,
              offsetY: 10,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      colors: [progressColor || "#00D998"],
      stroke: {
        lineCap: "round",
      },
    };

    var chart = new ApexCharts(document.querySelector(containerId), options);
    chart.render();
  }

  const chart1 = document.getElementById("chart1");
  const chart2 = document.getElementById("chart2");
  const chart3 = document.getElementById("chart3");
  const chart4 = document.getElementById("chart4");
  chart1 && createRadialChart("#chart1", 80);
  chart2 && createRadialChart("#chart2", 50);
  chart3 && createRadialChart("#chart3", 60);
  chart4 && createRadialChart("#chart4", 70);

  const designCharts = document.querySelectorAll(".design-chart");

  if (designCharts.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const value = el.getAttribute("data-progress-value");
            const chart = new ApexCharts(el, {
              chart: {
                type: "radialBar",
                width: 150,
                height: 150,
                sparkline: {
                  enabled: false,
                },
                animations: {
                  enabled: true,
                  easing: "easeinout",
                  speed: 2000,
                  animateGradually: {
                    enabled: true,
                    delay: 150,
                  },
                  dynamicAnimation: {
                    enabled: true,
                    speed: 350,
                  },
                },
              },
              series: [value || 0],
              legend: {
                show: false,
              },
              stroke: {
                lineCap: "butt",
              },
              colors: ["#563AFF"],
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    value: {
                      show: false,
                    },
                    name: {
                      offsetY: 10,
                      show: true,
                      color: "#575B80",
                      fontSize: "30px",
                    },
                  },
                  hollow: {
                    size: "70%",
                  },
                },
              },
              labels: [`${value}%` || 0],
              grid: {
                padding: {
                  left: -18,
                  right: -18,
                },
              },
            });
            chart.render();
            // Stop observing this element after rendering
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.7,
      },
    );
    designCharts.forEach((el) => {
      observer.observe(el);
    });
  }

  const radialBarOptions = {
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.5,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.7,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: "#111",
            fontSize: "36px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Percent"],
  };

  const thumbSlider = new Swiper(".thumb-image", {
    spaceBetween: 15,
    slidesPerView: 3,
    freeMode: true,
    direction: "vertical",
  });

  const mainSlider = new Swiper(".main-image-slider", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 32,
    mousewheel: true,
    grabCursor: true,
    thumbs: {
      swiper: thumbSlider,
    },
  });

  /**
   * ======================================
   * 15. Toggle Order Details
   * ======================================
   */

  function toggleOrderDetailsContent(clickBtn, contentArea) {
    const profileOrdersDropdown = document.querySelectorAll(`.${clickBtn}`);
    const orderDetailsContent = document.querySelectorAll(`.${contentArea}`);

    profileOrdersDropdown.forEach((button, index) => {
      button.addEventListener("click", () => {
        button.classList.toggle("rotate-180");
        orderDetailsContent[index].classList.toggle("opacity-100");
        orderDetailsContent[index].classList.toggle("opacity-0");
        orderDetailsContent[index].classList.toggle("h-0");
        orderDetailsContent[index].classList.toggle("h-[400px]");
        orderDetailsContent[index].classList.toggle("visible");
        orderDetailsContent[index].classList.toggle("invisible");
        orderDetailsContent[index].classList.toggle("mb-5");
      });
    });
  }

  toggleOrderDetailsContent("profile-orders-dropdown", "order-details-content");

  /**
   * ======================================
   * 16. Profile Page
   * ======================================
   */
  const countries = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/independent?status=true&fields=name`);
      const data = await response.json();
      const sortData = data.sort((a, b) => a.name.common.localeCompare(b.name.common));

      const countryList = document.querySelector(".country-name-container");
      // countryList?.innerHTML = "";

      sortData.forEach((country) => {
        const li = document.createElement("li");
        li.className = "cursor-pointer border-b border-n6 px-4 py-1.5 text-title duration-300 hover:bg-primary hover:text-n8";
        li.textContent = country.name.common;
        countryList && countryList.appendChild(li);
      });

      return sortData;
    } catch (error) {
      console.error("Error fetching countries:", error);
      return [];
    }
  };

  const asyncSelects = async (selectElement) => {
    // Get the dropdown container
    const selectContainer = document.querySelector(`[${selectElement}]`);
    if (!selectContainer) return; // Exit if no dropdown exists

    const selectToggle = selectContainer.querySelector(".select-toggle");
    const selectOptions = selectContainer.querySelector(".select-options");
    const selectText = selectContainer.querySelector(".select-text");
    const optionItems = selectOptions.querySelectorAll("li");

    let selectedValue = null; // Variable to store the selected value

    // Toggle dropdown visibility
    selectToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent document click from immediately closing
      selectOptions.classList.toggle("hidden");
    });

    // Select an option
    optionItems.forEach((option) => {
      option.addEventListener("click", () => {
        selectedValue = option.innerText; // Update the selected value
        selectText.innerText = option.innerText; // Update the displayed text
        selectOptions.classList.add("hidden");
        // console.log("Selected Value:", selectedValue); // Log the value
      });
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", (e) => {
      if (!selectContainer.contains(e.target)) {
        selectOptions.classList.add("hidden");
      }
    });

    return new Promise((resolve) => {
      // Resolve with the selected value when an option is selected
      const observer = new MutationObserver(() => {
        if (selectedValue !== null) {
          resolve(selectedValue);
          observer.disconnect(); // Stop observing after value is selected
        }
      });
      observer.observe(selectText, { characterData: true, subtree: true });
    });
  };

  const cities = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/independent?status=true&fields=capital`);
      const data = await response.json();

      const sortData = data.sort((a, b) => a.capital[0].localeCompare(b.capital[0]));

      const cityList = document.querySelector(".city-name-container");

      sortData.forEach((country) => {
        const li = document.createElement("li");
        li.className = "cursor-pointer border-b border-n6 px-4 py-1.5 text-title duration-300 hover:bg-primary hover:text-n8";
        li.textContent = country.capital;
        cityList && cityList.appendChild(li);
      });

      return sortData;
    } catch (error) {
      console.error("Error fetching cities:", error);
      return [];
    }
  };

  const state = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/independent?status=true&fields=capital`);
      const data = await response.json();

      const sortData = data.sort((a, b) => a.capital[0].localeCompare(b.capital[0]));

      const cityList = document.querySelector(".state-name-container");

      sortData.forEach((country) => {
        const li = document.createElement("li");
        li.className = "cursor-pointer border-b border-n6 px-4 py-1.5 text-title duration-300 hover:bg-primary hover:text-n8";
        li.textContent = country.capital;
        cityList && cityList.appendChild(li);
      });

      return sortData;
    } catch (error) {
      console.error("Error fetching cities:", error);
      return [];
    }
  };

  const selectedCountry = countries().then(() => {
    asyncSelects("data-select-country").then((selectedValue) => {});
  });

  const selectedCities = cities().then(() => {
    asyncSelects("data-select-city").then((selectedValue) => {});
  });
  const selectedState = state().then(() => {
    asyncSelects("data-select-state").then((selectedValue) => {});
  });

  // Profile page modal
  function setupModal({ modalSelector, openButtonSelector, closeButtonSelector, modalOverlaySection }) {
    const modal = document.querySelector(modalSelector);
    const openButton = document.querySelector(openButtonSelector);
    const closeButton = document.querySelector(closeButtonSelector);
    const modalOverlay = document.querySelector(modalOverlaySection);
    const body = document.querySelector("body");

    // Early return if any required elements are missing
    if (!modal || !openButton || !closeButton || !modalOverlay) {
      console.error("One or more modal elements not found.");
      return;
    }

    // Reusable function to toggle modal visibility
    const toggleModal = () => {
      modal.classList.toggle("hidden");
      modal.classList.toggle("block");
      body.classList.toggle("overflow-hidden");
    };

    openButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    modalOverlay.addEventListener("click", toggleModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        toggleModal();
      }
    });
  }

  const addressModal = document.querySelector(".address-modal");
  const editCardModal = document.querySelector(".edit-card-modal");
  const addCardModal = document.querySelector(".add-card-modal");

  addressModal &&
    setupModal({
      modalSelector: ".address-modal",
      openButtonSelector: ".address-modal-btn",
      closeButtonSelector: ".address-modal-close",
      modalOverlaySection: ".address-modal-overlay",
    });

  editCardModal &&
    setupModal({
      modalSelector: ".edit-card-modal",
      openButtonSelector: ".edit-card-modal-btn",
      closeButtonSelector: ".edit-card-modal-close",
      modalOverlaySection: ".edit-card-modal-overlay",
    });

  addCardModal &&
    setupModal({
      modalSelector: ".add-card-modal",
      openButtonSelector: ".add-card-modal-btn",
      closeButtonSelector: ".add-card-modal-close",
      modalOverlaySection: ".add-card-modal-overlay",
    });

  // Image Upload
  document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("openModal");
    const modal = document.getElementById("imageUploadModal");
    const uploadNewPhotoBtn = document.getElementById("uploadNewPhoto");
    const deletePhotoBtn = document.getElementById("deletePhoto");
    const fileInput = document.getElementById("uploadImage");
    const profileImage = document.querySelector(".profile-image");

    modal &&
      openModalBtn &&
      document.addEventListener("click", (e) => {
        if (!modal.contains(e.target) && !openModalBtn.contains(e.target)) {
          modal.classList.add("hidden");
        }
      });

    openModalBtn &&
      openModalBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
      });

    uploadNewPhotoBtn &&
      uploadNewPhotoBtn.addEventListener("click", () => {
        fileInput.click();
      });

    fileInput &&
      fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            profileImage.src = e.target.result;
          };
          reader.readAsDataURL(file);
          modal.classList.add("hidden");
        }
      });

    deletePhotoBtn &&
      deletePhotoBtn.addEventListener("click", () => {
        console.log("Delete photo action triggered.");
        profileImage.src = "./assets/images/profile-user.png";
        modal.classList.add("hidden");
      });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modal.classList.add("hidden");
      }
    });
    modal &&
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.add("hidden");
        }
      });
  });
});
