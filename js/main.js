localStorage.clear();
/* ---- Dom Strings ---- */

const DOMStrings = {
  body: document.querySelector("body"),
  logo_nav: document.querySelector(`nav img`),
  nav_list_items: Array.from(document.querySelectorAll(".nav_list")), // Though forEach converts this nodelist automatically, i wanted to be little clearer
  nav: document.querySelector(`nav`),
  nav_ul: document.querySelector("nav ul"),
  slide_container: document.querySelector(".section-testimonials"),
  slides: Array.from(document.querySelectorAll(".slides")),
  prev_btn: document.querySelector(".prev"),
  next_btn: document.querySelector(".next"),
  modal: document.querySelector("#myModal"),
  btn_full: document.querySelector(".btn-full"),
  close_btn: document.querySelector(".close-container"),
  modal_form: document.querySelector(".modal-form"),
  modal_user_name: document.querySelector(`.modal-form input[type = "text"]`),
  modal_form_label: document.querySelector(`.modal-form label`),
  nav_lines: document.querySelector(".nav-lines"),
  sideNav: document.querySelector(".sideNav"),
  close_nav: document.querySelector(".close_nav"),
};
/* ------------------------------------- */

/* ------ Navigation Sticky ------- */

let sticky = 80;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= sticky) {
    DOMStrings.nav.classList.add("sticky");
    DOMStrings.logo_nav.src = "img/logo_nav.png";
    DOMStrings.logo_nav.classList.add("sticky_logo");
    DOMStrings.nav_list_items.forEach((cur) => {
      cur.classList.add("sticky_text");
    });
    DOMStrings.nav_ul.classList.add("sticky_ul");
  } else {
    DOMStrings.nav.classList.remove("sticky");
    DOMStrings.logo_nav.src = "img/logo.png";
    DOMStrings.logo_nav.classList.remove("sticky_logo");
    DOMStrings.nav_list_items.forEach((cur) => {
      cur.classList.remove("sticky_text");
    });
    DOMStrings.nav_ul.classList.remove("sticky_ul");
  }
});

/* ----- Sliding Testimonials ----- */
const showSlide = (n) => {
  DOMStrings.slides.forEach((cur) => {
    cur.style.display = "none";
  });
  if (n > DOMStrings.slides.length) {
    slideNo = 1;
  } else if (n < 1) {
    slideNo = DOMStrings.slides.length;
  } else {
    slideNo = n;
  }
  DOMStrings.slides[slideNo - 1].style.display = "block";
};

let slideNo = 1;
showSlide(slideNo);

const changeSlide = (n) => {
  showSlide(slideNo + n);
};

DOMStrings.prev_btn.addEventListener("click", () => changeSlide(-1));
DOMStrings.next_btn.addEventListener("click", () => changeSlide(1));

let slide_timer = setInterval(() => {
  changeSlide(1);
}, 5000);

DOMStrings.slide_container.addEventListener("mouseover", () =>
  clearInterval(slide_timer)
);
DOMStrings.slide_container.addEventListener("mouseout", () => {
  slide_timer = setInterval(() => {
    changeSlide(1);
  }, 5000);
});

/* ------- Modal ------  */

const handleModal = () => {
  DOMStrings.modal.style.display = "block";
};

DOMStrings.btn_full.addEventListener("click", handleModal);
DOMStrings.close_btn.addEventListener("click", () => {
  DOMStrings.modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === DOMStrings.modal) {
    DOMStrings.modal.style.display = "none";
  }
});

/* ----------------------------------- */

/* --------- Label Animation -------------- */

DOMStrings.modal_user_name.addEventListener("focus", () => {
  DOMStrings.modal_form_label.classList.add("focused");
  DOMStrings.modal_user_name.classList.add("focused_modal_input");
});

DOMStrings.modal_user_name.addEventListener("blur", () => {
  if (DOMStrings.modal_user_name.value === "") {
    DOMStrings.modal_form_label.classList.remove("focused");
    DOMStrings.modal_user_name.classList.remove("focused_modal_input");
  }
});

/* ------------------------------------------ */

/* ---- Getting Name from Input and Storing it in localStorage ---- */

DOMStrings.modal_form.addEventListener("submit", (e) => {
  if (
    DOMStrings.modal_user_name.value != "" &&
    isNaN(DOMStrings.modal_user_name.value)
  ) {
    localStorage.setItem("username", DOMStrings.modal_user_name.value);
  } else {
    alert("Please Enter your Name");
    e.preventDefault();
  }
});

/* ------------------------------------------ */

/* ------ Side Navigation ------ */

DOMStrings.nav_lines.addEventListener("click", () => {
  DOMStrings.sideNav.style.width = "300px";
});

DOMStrings.close_nav.addEventListener("click", () => {
  DOMStrings.sideNav.style.width = "0px";
});
