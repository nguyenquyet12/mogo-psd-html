// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

//jQuery
// $(document).ready(function() {
//     $('.header-toggle').click(function(e) {
//         e.preventDefault();
//         $('.header-menu').addClass('is-expand');
//     });
// });
const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function() {
    menuHeader.classList.add(expandClass);
})
window.addEventListener("click", function(e) {
    if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
        menuHeader.classList.remove(expandClass);
    }
})

// --- JQUERY ACCORDION ---
$(document).ready(function() {
    $('.wedo-item-content').slideUp();
    $('.wedo-item-header').click(function(e) {
        // e.preventDefault();
        $('.wedo-item-content').slideUp();
        $(this).next().slideToggle();
        $('.wedo-item-header').removeClass('bg-secondary');
        $(this).toggleClass('bg-secondary');
    });
});

//-- SLICK SLIDER --
$(document).ready(function() {
    $('.quote-container').slick({
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
            }
        }]
    });
});