let menu = document.querySelector(".menu-icon");
menu.onclick = () => {
  menu.classList.toggle("move");
};
// Email
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyError();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();
// Sending Mail
function sendmail(name, email, msg) {
  emailjs.send("service_18dwkbb", "template_gzhx2sq", {
    from_name: email,
    to_name: name,
    email_id: email,
    message: msg,
  });
}
// Field Input Error
function emptyError() {
  swal({
    title: "Oh No...",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
// Field Input Success
function success() {
  swal({
    title: "Email sent successfully",
    text: "We try to reply in 24 hours",
    icon: "success",
  });
}
// Header Background Change on Scroll
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});
// Scroll Top
let scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});
