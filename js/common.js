// カルーセルの回転
let carousel_all = document.getElementById("carousel");
let rotate_count = -120; // 1回転目から動かすために初期指定に「-120」を指定
window.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    carousel_all.style.transform = `rotate3d(-90, 0, 0, 5deg) rotateY(${rotate_count}deg)`;
    rotate_count -= 120;
  }, 4000);
});



// let carousel = $(".carousel"),
//       currdeg  = 0;

// $(".next").on("click", { d: "n" }, rotate);
// $(".prev").on("click", { d: "p" }, rotate);

// function rotate(e){
//   if(e.data.d=="n"){
//     currdeg = currdeg - 120;
//   }
//   if(e.data.d=="p"){
//     currdeg = currdeg + 120;
//   }
//   carousel.css({
//     "-webkit-transform": "rotateY("+currdeg+"deg)",
//     "-moz-transform": "rotateY("+currdeg+"deg)",
//     "-o-transform": "rotateY("+currdeg+"deg)",
//     "transform": "rotateY("+currdeg+"deg)"
//   });
// }

// 4秒ごとに「next」のボタンを押す
// autoFlipster = function(){
//   $('.next').click();
// };
// const timerID = setInterval(autoFlipster, 4000);
// 4秒ごとに「next」のボタンを押す END


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