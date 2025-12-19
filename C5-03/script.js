// 現在時刻の取得
const currentHour = new Date().getHours();

const target = document.querySelector('.bg-time');

if (currentHour >= 5 && currentHour < 11) {
  // 朝：5時〜11時
  target.classList.add('morning');
} else if (currentHour >= 11 && currentHour < 17) {
  // 昼：11時〜17時
  target.classList.add('daytime');
} else {
  // 夜：17時〜5時
  target.classList.add('night');
}