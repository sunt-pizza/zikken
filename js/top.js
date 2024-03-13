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



// ========================================
// 背景の星屑とカメラの回転
// ========================================
// サイズを指定
// const width = 960;
const width = window.innerWidth;
console.log(width);
// const height = 540;
const height = window.innerHeight;
let rot = 0;

// レンダラーを作成
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#myCanvas"),
});
renderer.setPixelRatio(window.devicePixelRatio); // デバイスに応じて解像度を変える
renderer.setSize(width, height);

// 画面サイズを変えたらカメラとレンダラーのサイズを更新
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

// シーンを作成
const scene = new THREE.Scene();

// カメラを作成
const camera = new THREE.PerspectiveCamera(45, width / height);

// カメラの方向を指定する
camera.lookAt(new THREE.Vector3(0, 0, 0));

// 平行光源を作成
const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
// シーンに追加
scene.add(directionalLight);

// マテリアルを作成
// const material = new THREE.MeshStandardMaterial({
//   map: new THREE.TextureLoader().load("assets/img/line.png"),
//   side: THREE.DoubleSide,
// });

// 球体を作成する
// const geometry = new THREE.SphereGeometry(300, 30, 30);
// const earthMesh = new THREE.Mesh(geometry, material);
// scene.add(earthMesh);


// 星屑を作成します (カメラの動きをわかりやすくするため)
createStarField();

function createStarField() {
  // 頂点情報を作成
  const vertices = [];
  for (let i = 0; i < 1000; i++) {
    const x = 3000 * (Math.random() - 0.5);
    const y = 3000 * (Math.random() - 0.5);
    const z = 3000 * (Math.random() - 0.5);

    vertices.push(x, y, z);
  }

  // 形状データを作成
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

  // マテリアルを作成
  const material = new THREE.PointsMaterial({
    size: 10,
    color: 0xffffff,
  });

  // 物体を作成
  const mesh = new THREE.Points(geometry, material);
  scene.add(mesh);
}

// 4秒ごとにカメラが120度回転するアニメーション
// 現在時刻の取得
let startTime = performance.now();

function tick() {
  // 現在時刻を取得し、開始時刻からの経過時間(秒)を計算
  const elapsedTime = (performance.now() - startTime) / 1000;

  // ４秒ごとに120度回転する計算
  // 2π/3 * (経過時間 / 4秒)で周期的に120度回転させる。
  const angle = ((2 * Math.PI) / 3) * (elapsedTime % 4) / 4;

  // 角度に応じてカメラの位置を設定
  camera.position.x = 1000 * Math.sin(angle);
  camera.position.z = 1000 * Math.cos(angle);

  // 原点方向を向く
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // レンダリング
  renderer.render(scene, camera);

  requestAnimationFrame(tick);
}

tick();