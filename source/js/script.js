  var button = document.querySelector(".popular-product__button");

  var modal = document.querySelector(".modal-order");

  var overlay = document.querySelector(".overlay");

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-order-active");
    overlay.classList.add("overlay-active");
  });

  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-order-active");
    overlay.classList.remove("overlay-active");
  });
