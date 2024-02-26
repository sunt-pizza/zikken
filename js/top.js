// ========================================
// カルーセルの回転
// ========================================
let windowWidth = window.innerWidth;
let windowSm = 768;
let carousel_all = document.getElementById("carousel");
if (windowWidth <= windowSm) {
  let rotate_count = -120; // 1回転目から動かすために初期指定に「-120」を指定
  window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
      // carousel_all.style.transform = `rotate3d(0, 0, 0, 0deg) rotateY(${rotate_count}deg)`;
      // bが表の場合：rotate3d(0, 1, 0, -125deg) rotateY(5deg) rotateX(15deg) rotatez(8deg)
      // .container {left:4%}
      rotate_count -= 120;
    }, 4000);
  });
} else {
  let rotate_count = -120; // 1回転目から動かすために初期指定に「-120」を指定
  window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
      carousel_all.style.transform = `rotate3d(-1, 0, 0, 5deg) rotateY(${rotate_count}deg)`;
      rotate_count -= 120;
    }, 4000);
  });
}


// ========================================
// 数字のカウント
// ========================================
// スライド数の総数の取得
function getTotalSlide() {
  return document.querySelectorAll('.item').length;
}

// スライド数の整形
function getSlideAllNumber(number) {
  return number < 10 ? "0" + number : number.toString();
}

// スライド数の表示
const totalSlideNumber = getTotalSlide();

// フォーマットされた数値を特定の要素に追加
document.getElementById('count_num_all').innerText = getSlideAllNumber(totalSlideNumber);

// 現在のスライド番号の表示
let i = 1;
setInterval(countup, 4000);

function countup() {
i++;
  if (i > 3) { i = 1; }
  let num_text = "0" + i;
  document.getElementById('count_num_now').innerText = num_text;
}


// ========================================
// 4秒ごとにスライドにクラスを付与
// ========================================
document.addEventListener('DOMContentLoaded', function () {
  
  let s = document.querySelectorAll('#carousel .item');
  let n = s.length;

  function replaceAddClass(i) {
    s.forEach((item, index) => {
      if (index !== i) {
        item.classList.remove('front_slide');
      }
    });
    s[i].classList.add('front_slide');
  }

  let i = 0; replaceAddClass(i);
  setInterval(function(){
    i++;
    if ( !(i < n) ) { i = 0; }
    replaceAddClass(i);
  }, 4000);

});