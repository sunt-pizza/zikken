// カルーセルの回転
let windowWidth = $(window).width();
let windowSm = 768;
let carousel_all = document.getElementById("carousel");
if (windowWidth <= windowSm) {
  let rotate_count = -120; // 1回転目から動かすために初期指定に「-120」を指定
  window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
      // carousel_all.style.transform = `rotate3d(-1, 0, 0, 5deg) rotateY(${rotate_count}deg)`;
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


// スライドの全体数を取得
// let slide_count_all = element.childElementCount;
let slide_count_all = document.querySelector('#carousel').childElementCount;
document.getElementById('count_num_all').innerText = "0" + slide_count_all;
// スライドの全体数を取得 END


// 数字のカウント
let i = 1;
setInterval(countup, 4000);

function countup() {
i++;
  if (i > 3) { i = 1; }
  let num_text = "0" + i;
  document.getElementById('count_num_now').innerText = num_text;
}
// 数字のカウント END

// 4秒ごとにスライドにクラスを付与
$(function(){

  let s = $('#carousel .item');
  let n = s.length;

  function replaceAddClass(i) {
    s.eq(i).siblings().removeClass('front_slide');
    s.eq(i).addClass('front_slide');
  }

  let i = 0; replaceAddClass(i);
  setInterval(function(){
    i++;
    if ( !(i < n) ) { i = 0; }
    replaceAddClass(i);
  }, 4000);

});