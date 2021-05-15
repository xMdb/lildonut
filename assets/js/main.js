// Smooth Scrolling
$('nav, header, nav ul li a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 0
      },
      800
    );
  }
});

// Modal
var modal = document.getElementById("modal");
var modalButton = document.getElementById("modalButton");
var span = document.getElementsByClassName("close")[0];

modalButton.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}