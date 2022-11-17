// window.addEventListener('load', () => {
//     var
//         carousels = document.querySelectorAll('.carousel');

//     for (var i = 0; i < carousels.length; i++) {
//         carousel(carousels[i]);
//     }
// });

// function carousel(root) {
//     var
//         figure = root.querySelector('figure'),
//         nav = root.querySelector('nav'),
//         images = figure.children,
//         n = images.length,
//         gap = root.dataset.gap || 0,
//         bfc = 'bfc' in root.dataset,

//         theta = 2 * Math.PI / n,
//         currImage = 0;

//     setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
//     window.addEventListener('resize', () => {
//         setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
//     });

//     setupNavigation();

//     function setupCarousel(n, s) {
//         var
//             apothem = s / (2 * Math.tan(Math.PI / n));

//         figure.style.transformOrigin = `50% 50% ${- apothem}px`;

//         for (var i = 0; i < n; i++)
//             images[i].style.padding = `${gap}px`;
//         for (i = 1; i < n; i++) {
//             images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
//             images[i].style.transform = `rotateY(${i * theta}rad)`;
//         }
//         if (bfc)
//             for (i = 0; i < n; i++)
//                 images[i].style.backfaceVisibility = 'hidden';

//         rotateCarousel(currImage);
//     }

//     function setupNavigation() {
//         nav.addEventListener('click', onClick, true);

//         function onClick(e) {
//             e.stopPropagation();

//             var t = e.target;
//             if (t.tagName.toUpperCase() != 'BUTTON')
//                 return;

//             if (t.classList.contains('next')) {
//                 currImage++;
//             } else {
//                 currImage--;
//             }

//             rotateCarousel(currImage);
//         }

//     }

//     function rotateCarousel(imageIndex) {
//         figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
//     }

// }

// スライドショーのアニメーション
function classToggle() {
    var el = document.querySelector('.icon-cards__content');
    el.classList.toggle('step-animation');
}

// document.querySelector('#toggle-animation').addEventListener('click', classToggle);

// スライド数のカウント
const txts = document.getElementsByClassName('icon-cards__item');
// console.log(txts);
let txtIndex = -1;

function changeTxt() {
    txtIndex++;
    // console.log(txtIndex);
    // console.log(txts.length);
    let currentNum = txtIndex % txts.length;
    // console.log(currentNum);
    let nextNum = (txtIndex + 1) % txts.length;
    // console.log(nextNum);
    let current = txts[currentNum];
    // console.log(current);
    let next = txts[nextNum];

    // setTimeout(function () {
    //     current.classList.remove('is-active');
    // }, 100);
    // setTimeout(function () {
    //     current.style.display = 'none';
    //     next.style.display = 'block';
    // }, 100);
    // setTimeout(function () {
    //     next.classList.add('is-active');
    // }, 100);
}

function showNextTxt() {
    setInterval(changeTxt, 3000);
}

changeTxt();
document.addEventListener('DOMContentLoaded', showNextTxt, false);

// 220829追記
// window.onload = function () {
//     let classCount = document.getElementsByClassName("slide-count").length;
//     console.log(classCount);
//     let num_all = document.getElementById("count_num_all");
//     num_all.textContent = "<p>新しい要素</p>";
// }

window.onload = function test() {
    let num_all = document.getElementsByClassName("slide-count").length;
    console.log(num_all);
    let num_all_text = document.getElementsByClassName("slide-count").length;
    document.getElementsByClassName('count_num_all').innerText = num_all;
}