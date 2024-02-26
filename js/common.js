// ========================================
// ハンバーガーメニューの表示
// ========================================
const navBtn = document.querySelector(".nav_open_btn");
const navBtnWrap = document.querySelector(".hamburger_menu_wrap");
if (navBtn) {
  navBtn.addEventListener("click", function () {
    navBtnWrap.classList.toggle("active");

    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
  })
}