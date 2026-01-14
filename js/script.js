document.getElementById("features").addEventListener("click", function (event) {
  event.preventDefault();

  const target = document.getElementById("feature-section");

  const middle = window.innerHeight / 2 - target.offsetHeight / 2;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - middle;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

document.getElementById("testimonial").addEventListener("click", function (event) {
    event.preventDefault();

    const target = document.getElementById("testimonial-section");

    const middle = window.innerHeight / 2 - target.offsetHeight / 2;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - middle;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });

document.getElementById("price").addEventListener("click", function (event) {
  event.preventDefault();

  const target = document.getElementById("price-section");

  const middle = window.innerHeight / 2 - target.offsetHeight / 2;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - middle;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});
