const hoverVideo = document.querySelector('.hover-container');

if (hoverVideo) {
  const video = hoverVideo.querySelector('.hover-video');
  const image = hoverVideo.querySelector('.hover-img');

  // ホバー時の挙動
  hoverVideo.addEventListener('mouseenter', () => {
    // 画像を消して、動画を表示
    image.style.display = 'none';
    video.style.display = 'block';

    // 動画を先頭から再生
    video.currentTime = 0;
    video.play();
  });

  // マウスカーソルが外れた時の挙動
  hoverVideo.addEventListener('mouseleave', () => {
    // 再生を止める
    video.pause();

    // 再び画像を表示して、動画を非表示
    video.style.display = 'none';
    image.style.display = 'block';
  });
}