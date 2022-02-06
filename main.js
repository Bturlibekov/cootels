// ================ Fixed Header =======================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    checkScrollPos()
})
window.addEventListener('DOMContentLoaded', () => {
    checkScrollPos()
})

const checkScrollPos = () => {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        header.classList.add('fixed');
        document.body.classList.add('header__padding')
    } else {
        header.classList.remove('fixed');
        document.body.classList.remove('header__padding')
    }
}
// ================ /Fixed Header =======================

// ================ Toggle => 768px =======================
const toggle = document.querySelector('.toggle');
const menuList = document.querySelector('.menu-list');

toggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
    toggle.classList.toggle('active');
})
// ================ /Toggle => 768px =======================

// ================ Smooth Scroll =======================
const menuLinks = document.querySelectorAll('.menu-link[data-scroll]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', (e) => {
            const menuLink = e.target;
            if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
                const gotoScroll = document.querySelector(menuLink.dataset.scroll);
                const gotoScrollValue = gotoScroll.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight
                window.scrollTo({
                    top: gotoScrollValue,
                    behavior: "smooth"
                })
                e.preventDefault();
            }
        })
    })
}
// ================ /Smooth Scroll =======================

// ================ Accordion =======================
const questionBtn = document.querySelectorAll('.question-header')
const questionBody = document.querySelectorAll('.question-body')

questionBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        questionBody.forEach(body => {
            if (e.target.nextElementSibling !== body && body.classList.contains('active')) {
                body.classList.remove('active')
            }
        })
        const panel = btn.nextElementSibling
        panel.classList.toggle('active');
        btn.classList.toggle('active');
    })
})

window.onclick = (e) => {
    if (!e.target.matches('.question-header')) {
        questionBtn.forEach((btn) => btn.classList.remove('active'));
        questionBody.forEach((body) => body.classList.remove('active'))
    }
}
// ================ /Accordion =======================

// ======================== Slider =========================
const rewiewSlider = new Swiper('.rewiews-list', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        stopLastSlide: true,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    adaptiveHeight: true
})
// ======================== /Slider =========================