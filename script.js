$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
});

let accordion = document.querySelector(".accordion");
let items = accordion.querySelectorAll(".accordion__item");
let title = accordion.querySelectorAll(".accordion__title");

function toggleAccordion() {
  let thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      // if this item is equal to the clicked item, open it.
      thisItem.classList.toggle("active");
      return;
    }
    // otherwise, remove the open class
    item.classList.remove("active");
  });
}

title.forEach((question) =>
  question.addEventListener("click", toggleAccordion)
);
