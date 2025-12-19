const target = document.querySelector('.bg-nabe');
const time = document.querySelector('.time');


// ページ読み込み完了時に開始
const startTime = Date.now();

// 経過秒数を取得する関数
function getElapsedSeconds() {
  return Math.floor((Date.now() - startTime) / 1000);
}

// 例：1秒ごとにコンソール表示
setInterval(() => {
  const currentSeconds = getElapsedSeconds();
  
  time.textContent = `${currentSeconds} 秒`;

  if (currentSeconds % 3 === 0) {
    // 3の倍数の秒数の場合
    target.classList.add('aho');
    time.classList.add('aho');
  } else {
    target.classList.remove('aho');
    time.classList.remove('aho');
  }
}, 1000);