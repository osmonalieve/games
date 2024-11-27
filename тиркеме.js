const gameArea = document.getElementById('game-area');
const message = document.getElementById('message');

// Жүрөктү кокустук жерге коюу функциясы
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  const x = Math.random() * 250;
  const y = Math.random() * 250;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  heart.addEventListener('click', () => {
    message.textContent = 'Билесинби?: Сен мен үчүн эң өзгөчө инсансың! ❤️';
    heart.remove();
    setTimeout(() => {
      message.textContent = '';
      createHeart(); // Жаңы жүрөктү чыгарат
    }, 2000);
  });

  gameArea.appendChild(heart);
}

// Оюнду баштоо
createHeart();