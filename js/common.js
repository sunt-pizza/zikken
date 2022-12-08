let carousel = $(".carousel"),
      currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 120;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 120;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

// 4秒ごとに「next」のボタンを押す
autoFlipster = function(){
  $('.next').click();
};
const timerID = setInterval(autoFlipster, 4000);
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

