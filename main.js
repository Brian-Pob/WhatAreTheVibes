import './style.css';

function getData() {
  const vibes = [
    'Blissful',
    'Bold',
    'Bussing',
    'Capping',
    'Captivating',
    'Carefree',
    'Courageous',
    'Cozy',
    'Curious',
    'Dreamy',
    'Dynamic',
    'Effervescent',
    'Empathetic',
    'Empowered',
    'Enchanting',
    'Enigmatic',
    'Ethereal',
    'Euphoric',
    'Exciting',
    'Fire',
    'Graceful',
    'Grounded',
    'Harmonious',
    'Inspiring',
    'Intimate',
    'Intriguing',
    'Jubilant',
    'Lively',
    'Magical',
    'Majestic',
    'Melancholic',
    'Mystical',
    'Nostalgic',
    'Nurturing',
    'Optimistic',
    'Peaceful',
    'Playful',
    'Quirky',
    'Radiant',
    'Reflective',
    'Refreshing',
    'Resilient',
    'Rustic',
    'Sentimental',
    'Serendipitous',
    'Sultry',
    'Tranquil',
    'Vibrant',
    'Whimsical',
    'Wistful',
  ];
  return vibes[Math.floor(Math.random() * vibes.length)];
}

function getVibe() {
  document.getElementById('vibe').innerHTML = `${getData()}`;
  document.querySelector('#vibe').style.animation =
    'var(--animation-shake-x) forwards';

  document.querySelector('#getVibe').disabled = true;

  setTimeout(() => {
    document.querySelector('#vibe').style.animation = '';
    document.querySelector('#getVibe').disabled = false;
  }, 1000);
}

window.onload = function () {
  getVibe();
};

document.querySelector('#getVibe').addEventListener('click', getVibe);
