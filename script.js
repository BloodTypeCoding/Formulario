(function() {
  emailjs.init("BgANPuAh2ehWDxksT");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_klduwfh",
    "template_6n2pizg",
    this
  ).then(() => {
    document.getElementById("status").innerText =
      "Información enviada correctamente ✅";
    this.reset();
  }).catch(() => {
    document.getElementById("status").innerText =
      "Error al enviar la información ❌";
  });
});
