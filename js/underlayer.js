// ========================================
// コンテンツ内に入ったらハンバーガーメニューの色変更
// ========================================
window.addEventListener('scroll', function () {
  const contents = document.querySelector("#contnets");
  // console.log(contents);
  const hamburgerMenu = document.querySelector(".hamburger_menu_wrap");
  // console.log(hamburgerMenu);
  const bounding = contents.getBoundingClientRect();
  console.log(bounding.top);
  console.log('innerHeght' + window.innerHeight);

  if (bounding.top <= 0) {
    hamburgerMenu.classList.add('color_change');
  } else {
    hamburgerMenu.classList.remove('color_change');
  }
});