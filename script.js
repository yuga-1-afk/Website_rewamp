const menuButton = document.querySelector(".menu_button");
const closeButton = document.querySelector(".close_button");
const sideBar = document.querySelector(".navbar_mobile_links");

closeButton.addEventListener("click", () => {
    sideBar.style.display = "none";
});

menuButton.addEventListener("click", () => {
    sideBar.style.display = "flex";
});

const slider = document.querySelector(".testimonials_slider");
const slides = slider.querySelectorAll(".testimonial_slide");

let currentIndex = 0;

function autoSlide() {
    currentIndex++;

    // Restart if reaching last slide
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    const slideWidth = slides[0].offsetWidth + 20; // 20 = your gap
    const scrollPosition = currentIndex * slideWidth;

    slider.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
    });
}

setInterval(autoSlide, 2000);

/* --------------------- GSAP Animation ----------------------------- */

gsap.from(".hero_banner", {
    top: "-400px",
    opacity: 0,
    duration: 2,
});

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".shop_by_category",
        start: "10% 90%",
        end: "105% 50%",
        markers: false,
    },
});

timeline
    .from(".shop_by_category", {
        x: -100,
        opacity: 0,
        duration: 1,
    })
    .from(
        ".shop_by_category_card_1, .shop_by_category_card_2, .shop_by_category_card_3",
        {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
        },
        "<"
    )
    .from(".featured_products", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
    })
    .from(
        ".featured_products_card",
        {
            scale: 0,
            opacity: 0,
            duration: 1,
            stagger: 0.4,
        },
        "<"
    )
    .from(".our_exclusives", {
        top: 200,
        opacity: 0,
        duration: 2,
    })
    .from(
        ".why_choose_us_section_sub1,.why_choose_us_section_sub2,.why_choose_us_section_sub3,.why_choose_us_section_sub4",
        { scale: 0, duration: 1, stagger: 0.2, ease: "bounce" }
    )
    .from(".cta_banner", {
        x: "100%",
        duration: 1,
        opacity: 0,
    })
    .from(".testimonials", { y: 200, duration: 1, opacity: 0 })
    .from(".testimonial_background", {
        y: 200,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
    })
    .from(".footer", { width: 0, opacity: 0 })
    .from(".footer_links", { opacity: 0, stagger: 0.2 });

/* --------------------- GSAP Animation for mobile ----------------------------- */

let mm = gsap.matchMedia();

mm.add("(max-width:480px)", () => {
    gsap.from(".banner_deco1", {
        repeat: -1,
        rotation: 160,
        left: "100px",
        duration: 2,
        yoyo: true,
        ease: "bounce",
    });
});

mm.add("(min-width:601px)", () => {
    gsap.from(".banner_deco1", {
        repeat: -1,
        rotation: 160,
        left: "600px",
        duration: 2,
        yoyo: true,
        ease: "bounce",
    });
});
